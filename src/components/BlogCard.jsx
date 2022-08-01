import React from 'react'
import Image from '../images/blogImg1.jpg'
export default function BlogCard(props) {
  return (
    <div className="blogCard mb-3 d-flex">
        <img src={Image} alt="img" className='blogImg' />
        <div className="blogCardContent d-flex flex-column justify-content-around px-3">
            <h6 className='mt-3 blogTitle'><b>{props.data.title}</b></h6>
            <p className='blogDesc'>{props.data.desc}</p>
            <p className='text-dark opacity-75 blogDate'>{props.data.date}</p>
        </div>
    </div>
  )
}
