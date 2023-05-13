import React from 'react'

const About = () => {
  return (
    <div name='about' className='h-screen w-full bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <h1 className='text-4xl font-bold inline border-b-4 border-gray-500'>About</h1>
        </div>

        <p className='text-xl mt-20'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque, sapiente, nobis quasi quo, temporibus neque animi quia ex nam doloremque nulla alias. Ratione doloribus error molestias impedit suscipit sed quaerat debitis, velit repellat. Quibusdam dicta enim nobis officia porro laudantium vero aut beatae numquam, odit asperiores, natus quos quam corporis.
        </p>
        <br />
        <p className='text-xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente sed atque sint aspernatur facere vel laborum dolores officiis, dignissimos architecto, similique asperiores cum commodi quam? Delectus id dolorem veniam saepe!
        </p>
        </div>
    </div>
  )
}

export default About