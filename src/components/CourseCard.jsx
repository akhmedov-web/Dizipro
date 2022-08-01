import React from 'react'
import Courses from "../images/course.svg"

export default function CourseCard() {
  return (
        <div className="courseCard">
          <img src={Courses} alt="img" className='courseImg'/>
          <div className="courseContent p-3">
            <h4 className='mb-3 '>Interyer dizayn</h4>
            <p>Kurs so’ngida siz har hil qiliyinlikdagi interyer dizayn qila olasiz va darmoad qilish darajasiga chiqasiz</p>
            <div>
              <p className='text-secondary'><b>O'Z ICHIGA OLADI:</b></p>
              <li className='mb-3'>Vray, Corona va 3dmax dasturlarini ishlatish</li>
              <li className='mb-3'>Video darslarga cheksiz dostup</li>
              <li className='mb-3'>7 portfolio loyiha</li>
              <li className='mb-3'>Ish topishda yordam</li>
            </div>
            <button className='btn btn-outline-dark w-100'>Batafsil ma'lumot</button>
          </div>
        </div>
  )
}
