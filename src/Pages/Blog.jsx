import React from 'react';
import LatestNewsCard from '../components/LatestNewsCard';

function Blog() {
  return (
    <div className='flex flex-col md:flex-row px-8 py-2 justify-around md:justify-between bg-yellow-400'>
        <div className='w-full md:w-[65%] px-4  md:px-8'>
            <h1 className='text-3xl font-bold'>Where is your faith?</h1>
            <p className='text-gray-700 text-sm'>author: Okunade Sherif</p>
            <p className='text-gray-700 text-sm'>23-04-2023</p>
            <img src="https://icdn.empireofthekop.com/wp-content/uploads/2022/11/Screenshot-2022-11-10-at-16.56.26.jpg" width={'100%'} alt="" />
            <article className='mt-2 font-bold'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione explicabo exercitationem recusandae voluptatibus quibusdam ea inventore porro perspiciatis, nulla nobis unde officia voluptatum, reprehenderit doloremque? Recusandae placeat est veritatis aut., ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptatibus perspiciatis officiis quae, eum adipisci deleniti hic iste eligendi magni nam quisquam accusantium corporis suscipit amet iure consectetur quis? Culpa, quidem. Nemo aut sunt commodi officiis id ad sint molestiae alias exercitationem quasi voluptatem rerum explicabo, iste minus nostrum. Veniam, possimus omnis. Eum vero nisi ipsam quidem alias ea numquam doloremque. Quo, amet! Voluptatum eligendi tempore eveniet dolorem cum quia, esse, accusantium veniam necessitatibus minus saepe quo suscipit omnis nam mollitia eos? Dolor odit aperiam veniam ipsa architecto cumque nobis facilis facere quisquam voluptatum. Corrupti atque eum officia ratione nam!
            </article>
        </div>
        <div className='w-full md:w-[30%]  px-3'>
            <h1 className='text-2xl font-bold'>Latest News</h1>
            <LatestNewsCard/>
            <LatestNewsCard/>
            <LatestNewsCard/>
        </div>
    </div>
  )
}

export default Blog