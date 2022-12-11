import * as React from 'react';
import { useState } from 'react';
import {MagnifyingGlassIcon} from '@heroicons/react/24/outline';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

const Widgets = () => {
  const [profile, setProfile] = useState<string>('')
  // console.log(profile)

  return (
    <div className='px-2 mt-2 col-span-2 hidden lg:inline'>
      <div className='flex items-center space-x-2 bg-gray-100 p-3 rounded-full my-2'>
            <MagnifyingGlassIcon className='h-6 w-6 text-gray-400'/>
            <input type='text' value={profile} 
                    onChange={(e) =>setProfile(e.target.value)} 
                    className='bg-transparent flex-1 outline-none' 
                    placeholder='Search here...'/>
      </div>
            <TwitterTimelineEmbed
                  sourceType="profile"
                  screenName='elonmusk'
                  options={{height: 1000}}
            />
    </div>
  )
}

export default Widgets