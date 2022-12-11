import React from 'react'
import {BellIcon, HashtagIcon, BookmarkIcon, UserIcon, HomeIcon, MapIcon, CircleStackIcon, CalculatorIcon} from "@heroicons/react/24/outline";
import SidebarRow from './SidebarRow';

const Sidebar = () => {
  return (
    <div className='flex flex-col col-span-2 items-center px-4 md:items-start'>
      <img className='h-10 w-10 m-3' src='https://links.papareact.com/drq' alt='twitter'/>
            <SidebarRow title='Home' Icon={HomeIcon}/>
            <SidebarRow title='Expore' Icon={HashtagIcon}/>
            <SidebarRow title='Notifications' Icon={BellIcon}/>
            <SidebarRow title='Messages' Icon={MapIcon}/>
            <SidebarRow title='Bookmarks' Icon={BookmarkIcon}/>
            <SidebarRow title='List' Icon={CalculatorIcon}/>
            <SidebarRow title='Sign In' Icon={UserIcon}/>
            <SidebarRow title='More' Icon={CircleStackIcon}/>
      </div>
  )
}

export default Sidebar