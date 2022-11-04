export declare interface LeetCodeTag {
  id: string
  name: string
  slug: string
}

export declare interface LeetCodeQuestion {
  acRate: number
  difficulty: string
  freqBar: any
  frontendQuestionId: string
  isFavor: boolean
  paidOnly: boolean
  status: any
  title: string
  titleSlug: string
  topicTags: LeetCodeTag[]
  hasSolution: boolean
  hasVideoSolution: boolean
  similarQuestions: string
}
