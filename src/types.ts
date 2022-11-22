export declare interface PostFrontMatter {
  layout?: string
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

export type UnionPostFrontMatter = PostFrontMatter & LeetCodePostFrontMatter
