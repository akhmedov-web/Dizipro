import React from 'react'
import BlogCard from './BlogCard'

export default function Blogs() {
    const blogCards=[
        {title:"3d sohasini Mahsulot dizaynidagi o’rni",desc:"Dunoya IT texnologiyalar rivojlangan sari 3D sohasi ham ilg’orlab bormoqda. Yildan yilga har hil yangi...",date:"12.04.2022"},
        {title:"NFT bozorining keljagi: Nega ko’pchilig odamlar 3d modellarga qiziqishni boshladi?",desc:"Dunoya IT texnologiyalar rivojlangan sari 3D sohasi ham ilg’orlab bormoqda. Yildan yilga...",date:"12.04.2022"},
        {title:"NFT bozorining keljagi: Nega ko’pchilig odamlar 3d modellarga qiziqishni boshladi?",desc:"Dunoya IT texnologiyalar rivojlangan sari 3D sohasi ham ilg’orlab bormoqda. Yildan yilga...",date:"12.04.2022"},
        {title:"3d sohasini Mahsulot dizaynidagi o’rni",desc:"Dunoya IT texnologiyalar rivojlangan sari 3D sohasi ham ilg’orlab bormoqda. Yildan yilga har hil yangi...",date:"12.04.2022"}
    ]
    return (
        <div className='blogs standard container d-flex flex-column justify-content-center align-items-center'>
            <h3 className='mb-5'><b>Maqolalar</b></h3>
            <div className='blogsContent w-100 d-flex flex-xl-row flex-md-row flex-column flex-wrap justify-content-around'>
                {blogCards.map(item=>
                <BlogCard data={item}/>
                )}
            </div>
        </div>
    )
}
