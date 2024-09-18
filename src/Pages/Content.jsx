import React from 'react'

const Content = () => {
  return (
        <div className="h-screen w-screen flex flex-row bg-gray-950 border border-transparent rounded fixed">
        <div className="w-[50%] h-[30%] ml-40 mt-40 flex flex-col bg-gray-950 justify-start items-start px-5 py-3 gap-2">
            <p className="text-2xl text-zinc-100">Hello,</p>
            <h1 className="text-4xl text-amber-400">I'm Mohammed Asan,</h1>
            <h1 className="text-4xl text-zinc-100">Full Stack Developer</h1>
            <p className="text-1xl text-zinc-100">Specializing in creating dynamic, responsive web applications with MongoDB, Express.js, React.js, and Node.js. Passionate about building scalable solutions and optimizing user experiences through modern web technologies.</p>
        </div>
        <div className="h-[35rem] w-screen flex justify-center items-center">
            <img className="h-[70%] w-[35%] rounded-full" src="https://wallpapercave.com/dwp1x/wp8500104.jpg"alt="My name"/>
        </div>
        </div>
  )
}

export default Content
