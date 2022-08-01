import React from 'react'
import Image from '../images/about.jpg'
export default function About() {
    return (
        <div className='about d-flex flex-md-row flex-xl-row flex-column'>
            <div className="aboutF">
                <img src={Image} alt="img" className='aboutImg'/>
            </div>
            <div className="aboutS d-flex align-items-center">
                <ul className='aboutContent'>
                    <h3 className='mb-4'><b>Dizipro qanday loyiha</b></h3>
                    <h6 className='aboutDesc'>
                        <span className='mb-3 d-block'>Dizipro — Oʻzbekistonda 3D sohasini rivojlantirishni va shu yoʻlda yaxshi mutaxassislar tayyorlashni niyat qilgan loyiha.</span>
                        <span className='mb-3 d-block'>Bu loyihaga 5 yil oldin yetakchi 3D sohasi mutaxassisi Abdusattor Abdurahimov tomonidan asos solingan. U paytlarda loyiha modellar yasash bilan shugʻullangan, hozirda esa oʻquv markaziga aylangan.</span>
                        <span className='mb-3 d-block'>Oʻquv markazimizda tajribali oʻqituvchilar tomonidan, barcha kerakli jihozlar bilan taʻminlangan xonalarda mutaxassislar yetishtiriladi.</span>
                    </h6>
                </ul>
            </div>
        </div>
    )
}
