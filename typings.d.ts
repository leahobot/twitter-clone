import { ImgHTMLAttributes } from "react"

export interface Tweet  extends TweetBody{
      _id: string
      _createdAt: string
      _updatedAt: string
      _type: 'tweet'
      _rev: string
      _banTweet: boolean
}

export type TweetBody = {
      text: string
      username: string
      profileImage: HTMLImageElement
      image?: array
}

export interface Comments extends CommentsBody {
      _id: string
      _createdAt: string
      _updatedAt: string
      _type: 'comments'
      _rev: string
      tweet: {
            _ref: string
            _type: 'reference'
      }
}

export type CommentsBody = {
      comments: string
      tweetId: string
      username: string
      profileImage: HTMLImageElement
}
