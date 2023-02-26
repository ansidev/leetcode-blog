export declare interface LeetCodeTag {
  id: string
  name: string
  slug: string
}

export declare interface LeetCodeQuestion {
  acRate: number
  difficulty: string
  freqBar: unknown
  frontendQuestionId: string
  isFavor: boolean
  paidOnly: boolean
  status: unknown
  title: string
  titleSlug: string
  topicTags: LeetCodeTag[]
  hasSolution: boolean
  hasVideoSolution: boolean
  similarQuestions: string
}

export declare interface PostFrontMatter {
  title: string
  slug: string
  keywords?: string[]
  author: string
  pubDate: string
  tags?: string[]
}

export enum Difficulty {
  Easy = 'easy',
  Medium = 'medium',
  Hard = 'hard',
}

export declare interface LeetCodePostFrontMatter extends PostFrontMatter {
  difficulty: Difficulty
}
