import React from 'react'
import CourseCard from './CourseCard'


export default function Course() {
  return (
    <div className='course standard container d-flex flex-column justify-content-center align-items-center'>
      <h3 className='mb-5'><b>Bizning kurslarimiz</b></h3>
      <div className="courseArea w-100 d-flex flex-xl-row flex-md-row flex-column justify-content-xl-around justify-content-md-between justify-content-around flex-wrap">
        <CourseCard/>
        <CourseCard/>
        <CourseCard/>
      </div>
    </div>
  )
}
