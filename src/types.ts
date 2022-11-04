export declare interface PostFrontMatter {
  layout?: string
  title: string
  slug: string
  author: string
  pubDate: string
  tags?: string[]
}

export enum Difficulty {
  Easy = "Easy",
  Medium = "Medium",
  Hard = "Hard",
}

export declare interface LeetCodePostFrontMatter extends PostFrontMatter {
  difficulty: Difficulty
}

export type UnionPostFrontMatter = PostFrontMatter & LeetCodePostFrontMatter
