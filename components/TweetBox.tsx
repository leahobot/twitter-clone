import * as React from 'react';
import { useState, useRef } from 'react';
import { PhotoIcon, MagnifyingGlassIcon, FaceSmileIcon, MapPinIcon, CalendarIcon } from '@heroicons/react/24/outline'

const TweetBox = () => {
      const [input, setInput] = useState<string>('');
      const [openImageBox, setOpenImageBox] = useState<Boolean>(false);
      const [openImagePreview, setOpenImagePreview] = useState<Boolean>(false);
      // const [image, setImage] = useState<HTMLImageElement>(null);
 
      // const fileRef = useRef<HTMLInputElement>(null);

      // const handleFiles = async (e: React.ChangeEvent<HTMLInputElement>) => {
      //       if (!e.target.files) {
      //             return;
      //       }else{
      //             setImage(e.target.files[0]);
      //       }
      // }

      const handleImage = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
   
            setOpenImageBox(false);
            setOpenImagePreview(true)
            
      }

  return (
    <div className='flex space-x-2 p-5'>
      <img className='h-14 w-14 object-cover rounded-full mt-4' src='https://links.papareact.com/gll' alt='user'/>
    
      <div className='flex flex-col pl-2 w-full'>
            <form className='flex flex-col'>
                  <input type='text' value={input} onChange={(e) => setInput(e.target.value)} className='h-24 w-full text-xl placeholder:text-xl outline-none' placeholder="What's happening..."></input>
                  <div className='flex justify-between items-center'>
                        <div className='flex flex-1 space-x-2 text-twitter'>
                              <PhotoIcon onClick={() => setOpenImageBox((prev) => !prev)} className='h-5 w-5 hover:cursor-pointer transition-transform duration-150 ease-out hover:scale-150'/>
                              <MagnifyingGlassIcon className='h-5 w-5'/>
                              <FaceSmileIcon className='h-5 w-5'/>
                              <MapPinIcon className='h-5 w-5'/>
                              <CalendarIcon className='h-5 w-5'/>
                        </div>
                        <button type='submit' disabled={!input ? true : false} className='bg-twitter px-5 py-2 font-bold text-white rounded-full disabled:opacity-40'>Tweet</button>
                  </div>

            </form>
            {openImageBox && (
                  <div className='mt-5 flex rounded-lg bg-twitter/80 py-2 px-4'>
                        <input className='flex-1 bg-transparent p-2 text-white outline-none border-none placeholder:text-white' type='file'/> 
                        <button onClick={(e)=>handleImage(e)} className='font-bold text-white'>Add Photo</button>
                  </div>
            )} 

      </div>
    </div>
  )
}

export default TweetBox