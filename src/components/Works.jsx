import React from 'react'
import Work from './Work'
export default function Works() {
    const works=[
        {name:"Uug’bek Rahimov",job:"“Interyer dizayn” kursi o’quchisi"},
        {name:"Uug’bek Rahimov",job:"“Interyer dizayn” kursi o’quchisi"},
        {name:"Uug’bek Rahimov",job:"“Interyer dizayn” kursi o’quchisi"},
        {name:"Uug’bek Rahimov",job:"“Interyer dizayn” kursi o’quchisi"},
        {name:"Uug’bek Rahimov",job:"“Interyer dizayn” kursi o’quchisi"},
        {name:"Uug’bek Rahimov",job:"“Interyer dizayn” kursi o’quchisi"}
    ]
    return (
        <div className='works standard container d-flex flex-column justify-content-center align-items-center'>
            <h3 className='mb-5'><b>O'quvchilarimizning ishlari</b></h3>
            <div className="worksArea d-flex flex-xl-row flex-md-row flex-column justify-content-around flex-wrap w-100">
                {works.map(item=>
                    <Work data={item}/>
                    )}
            </div>

        </div>
    )
}
