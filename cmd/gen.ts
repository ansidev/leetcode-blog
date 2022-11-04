import { Buffer } from 'buffer'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { Command, CommanderError, InvalidArgumentError } from 'commander'
import Mustache from 'mustache'
import dayjs from 'dayjs'
import lc from '@site/data/problem_set.json'
import siteConfig from '@/site.config'
import type { Difficulty, LeetCodePostFrontMatter } from '@/types'
import type { LeetCodeQuestion, LeetCodeTag } from '@cmd/types'

const ERR_QUESTION_DOES_NOT_EXIST_OR_NOT_SUPPORTED = 1
const ERR_QUESTION_WAS_NOT_FOUND = 2
const ERR_READ_FROM_FILE_FAILED = 3
const ERR_WRITE_TO_FILE_FAILED = 4

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const program = new Command()

const templateBaseDir = path.join(__dirname, "../.site/templates")
const templateExtension = "mustache"
const questionList = lc.data.problemsetQuestionList

const getQuestionNumber: () => Number = () => {
  program.parse()

  let question: string = program.args[0]
  const regex = new RegExp('\\d+')

  if (!regex.test(question)) {
    throw new InvalidArgumentError(`Input must be number: ${program.args[0]}`)
  }

  const questionNumber: Number = Number(question)

  if (questionNumber < 0) {
    throw new InvalidArgumentError(`Input must be a positive integer: ${program.args[0]}`)
  }

  return questionNumber
}

const getQuestion: (questionNumber: Number) => LeetCodeQuestion = (questionNumber: Number) => {
  const totalQuestions = questionList.total

  if (questionNumber > totalQuestions) {
    throw new CommanderError(
      ERR_QUESTION_DOES_NOT_EXIST_OR_NOT_SUPPORTED,
      ERR_QUESTION_DOES_NOT_EXIST_OR_NOT_SUPPORTED.toString(),
      `Question #${questionNumber} is not exist or not supported`
    )
  }

  const questions = questionList.questions
  const filteredQuestions = questions.filter(q => q.frontendQuestionId === questionNumber.toString())

  if (filteredQuestions.length === 0) {
    throw new CommanderError(
      ERR_QUESTION_WAS_NOT_FOUND,
      ERR_QUESTION_WAS_NOT_FOUND.toString(),
      `Question #${questionNumber} was not found`
    )
  }

  return filteredQuestions[0]
}

const readFromFile: (filePath: string) => string = (filePath: string) => {
  try {
    return fs.readFileSync(filePath, 'utf8')
  } catch (err) {
    throw new CommanderError(
      ERR_READ_FROM_FILE_FAILED,
      ERR_READ_FROM_FILE_FAILED.toString(),
      `Failed to read from ${filePath}`
    )
  }
}

const writeToFile: (filePath: string, content: string) => void = (filePath: string, content: string) => {
  try {
    const data = Buffer.from(content)
    fs.writeFileSync(filePath, data, { flag: 'ax' })
    console.info(`Wrote to file ${filePath} successfully!`)
  } catch (e) {
    throw new CommanderError(
      ERR_WRITE_TO_FILE_FAILED,
      ERR_WRITE_TO_FILE_FAILED.toString(),
      `Failed to write to ${filePath}`
    )
  }
}

const render: (fileName: string, templateData: Object) => string = (fileName: string, templateData: Object) => {
  const content = readFromFile(path.join(templateBaseDir, `./${fileName}.${templateExtension}`))
  return Mustache.render(content, templateData)
}

// Main program
const generateNewPost: () => void = async () => {
  const questionNumber: Number = getQuestionNumber()
  const question: LeetCodeQuestion = getQuestion(questionNumber)

  const layout: string = '../layouts/Post.astro'
  const title: string = `${question.frontendQuestionId}. ${question.title}`
  const slug: string = `${question.frontendQuestionId.padStart(4, '0')}-${question.titleSlug}`
  const author: string = siteConfig.author.nickname
  const tags: LeetCodeTag[] = question.topicTags
  const pubDate: string = dayjs().format()
  const difficulty: Difficulty = question.difficulty as Difficulty

  const templateData: LeetCodePostFrontMatter = { layout, title, slug, author, pubDate, difficulty, tags }

  const output = await render("leetcode.md", templateData)

  writeToFile(path.join(__dirname, "../src/pages", `${slug}.md`), output!)
}

generateNewPost()
