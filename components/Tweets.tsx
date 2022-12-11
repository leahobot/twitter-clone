import * as React from 'react';
import { useState, useEffect } from 'react';
import { Comments, Tweet } from '../typings'
import { imgUrl } from '../sanity'
import TimeAgo from 'react-timeago'
import { ChatBubbleBottomCenterIcon, DocumentDuplicateIcon, HeartIcon, SwatchIcon } from '@heroicons/react/24/outline'
import { fetchComments } from '../utils/fetchComments'

interface Props{
  tweet: Tweet
}

const Tweets = ({tweet}: Props) => {
    const [comments, setComments] = useState<Comments[]>([]);
   
    const profileImage = imgUrl(tweet?.profileImage).url();

    const refreshComments = async () =>{
      const comments: Comments[] = await fetchComments(tweet._id);
      setComments(comments);
    }

    useEffect(() => {
      refreshComments();
    }, []);
 
  return (
    <div className='flex flex-col space-x-3 border-y p-5 border-gray-100'>
      <div className='flex space-x-3'>
        <img src={profileImage} className='h-10 w-10 object-cover rounded-full' alt='profile'/>

        <div>
          <div  className='flex items-center space-x-1'>
            <p className='mr-1 font-bold'>{tweet.username}</p>
            <p className='hidden text-sm text-gray-500 lg:inline'>@{tweet.username.replaceAll(' ', '').toLowerCase()} .</p>
          </div>

          <TimeAgo date={tweet._createdAt} className='text-sm text-gray-500'/>
        </div>

        <p>{tweet.text}</p>

      </div>
      <div className='flex flex-wrap gap-5'>
        {tweet?.image && tweet.image.map((img, index) => (
            <img key={index} src={imgUrl(img).url()} className='object-cover mr-5 ml-0 mb-1 max-h-60 w-[90%] rounded-lg shadow-sm' alt='tweets-images' />
          ))}
      </div>

      <div className='flex mt-5 justify-between'>
        <div className='flex cursor-pointer items-center space-x-3 text-gray-400'>
          <ChatBubbleBottomCenterIcon className='h5 w-5'/>
          <p>{comments.length}</p>
        </div>

        <div className='flex cursor-pointer items-center space-x-3 text-gray-400'>
          <SwatchIcon className='h5 w-5'/>
        </div>

        <div className='flex cursor-pointer items-center space-x-3 text-gray-400'>
          <HeartIcon className='h5 w-5'/>
        </div>

        <div className='flex cursor-pointer items-center space-x-3 text-gray-400'>
          <DocumentDuplicateIcon className='h5 w-5'/>
        </div>
      </div>

      {comments?.length > 0 && (
        <div className='my-2 mt-5 max-h-44 space-y-5 overflow-y-scroll border-t border-gray-100 p-5'>
        {comments.map((comment)=>(
          <div key={comment._id} className='relative flex space-x-2'>
              <hr className='absolute left-5 top-10 h-8 border-x border-twitter/30'/>
              <img
                src={imgUrl(comment.profileImage).url()} alt='prifile-image'
                className='mt-2 h-7 w-7 rounded-full object-cover'/>
              <div>
                <div className='flex items-center space-x-1'>
                  <p className='mr-1 font-bold'>{comment.username}</p>
                  <p className='hidden text-sm text-gray-500 lg:inline'>@{comment.username.replaceAll(' ', '').toLowerCase()}</p>
                  <TimeAgo className='text-sm text-gray-500' date={comment._createdAt}/>
                </div>
                <p>{comment.comments}</p>
              </div>
          </div>
        ))}
        </div>
      )}
    </div>
  )
}

export default Tweets