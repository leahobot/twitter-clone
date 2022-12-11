import React, { useState } from 'react'
import { Tweet } from '../typings'
import {ChevronDoubleUpIcon} from '@heroicons/react/24/outline'
import TweetBox from './TweetBox'
import Tweets from './Tweets'
import { fetchTweets } from '../utils/fetchTweets'
import { toast } from 'react-hot-toast'

interface Props {
  tweets: Tweet[]
}

const Feed = ({tweets: tweetProps}: Props) => {
      const [tweets, setTweets] = useState<Tweet[]>(tweetProps)


      const handleRefresh = async () => {
            const refreshToast = toast.loading('Refreshing...')

            const tweets = await fetchTweets();
            setTweets(tweets);

            toast.success('Feed Updated', {
                   id: refreshToast,
            })
      }

  return (
      <div className='col-span-7 lg:col-span-5 border-x overflow-y-scroll'>
            <div className='flex col- items-center justify-between'>
                  <h1 className='p-5 pb-0 text-xl font-bold'>Home</h1>
                  <ChevronDoubleUpIcon onClick={handleRefresh} className='w-8 h-8 cursor-pointer text-twitter mt-5 mr-5 transition-all duration-500 ease-out hover:rotate-180 active:scale-125' />
            </div>

            <div>
                  <TweetBox/>
            </div>

            <div>
                 {tweets.map((tweet) => (
                   <Tweets key={tweet._id} tweet={tweet}/>
                 ))}
            </div>
      </div>
  )
}

export default Feed