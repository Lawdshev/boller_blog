import React from 'react'

function NewsCard({title}) {
  return (
    <div className='w-full border-t-2  border-gray-600 flex h-60 py-8'>
        <p className='w-[20%] mt-2 text-sm md:text-lg font-semibold'>August 10,2023</p>
        <div className='w-[80%] flex flex-col justify-between'>
            <h3 className='text-xl md:text-2xl lg:text-3xl font-extrabold'>{title}</h3>
            <p className='font-semibold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam neque soluta, provident obcaecati quia id iure eligendi. Ipsam, est aspernatur...</p>
            <p>Read more...</p>
        </div>
    </div>
  )
}
export default NewsCard