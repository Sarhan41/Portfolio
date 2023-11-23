import React from 'react'
import { MotionP } from './ProjectsWrapper'


export const Text = () => {
  return (
    <span>
      <p className="sectionSubText">My Work</p>
      <h2 className="sectionHeadText">Projects.</h2>
    </span>
  )
}


export const TextDiv = () => {
  return (
    <div className='w-full flex'>
        <MotionP />
    </div>
  )
}

export const Text2 = () => {
  return (
    <>
         Explore my projects to see the real-world application of my skills. I've described each project briefly, sharing links to code repositories and live demos. These examples showcase my ability to solve problems, work with different technologies, and effectively manage projects.

    </>
  )
}
