import React from 'react'

const ImageCard = ({image}) => {
    const tags=image.tags.split(',');   
  return (
    <div>
            <div className='max-w-sm rounded overflow-hidden shadow-lg mt-4'>
      <img src={image.webformatURL} alt='' className='w-full h-56'/>
      <div className='px-6 py-4'>
     <div className='font-bold color-purple-500 text-xl mb-2'>
      Photo by {image.user}
     </div>
     <ul>
      <li>
        <strong>Views:</strong>
        {image.views}
      </li>
      <li>
        <strong>Download:</strong>
       {image.downloads}
      </li>
      <li>
        <strong>Likes:</strong>
        {image.likes}
      </li>
     </ul>
      </div>
      <div className='py-4 px-4'>
         {tags.map((tag,index)=>(
             <span key={index} className='inline-block  bg-gray-200 rounded-full px-3 py-1 my-2 text-sm font-semibold text-gray-700 mr-2'>
                #{tag}
                </span>
         ))}
      </div>
    </div>
    </div>
  )
}

export default ImageCard