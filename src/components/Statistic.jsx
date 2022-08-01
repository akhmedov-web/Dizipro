import React from 'react'

export default function Statistic() {
    return (
        <div className='statistic standard container d-flex flex-column justify-content-center align-items-center' >
            <h3 className='mb-5'><b>Qiziqarli raqamlar</b></h3>
            <div className='statisticContent d-flex flex-sm-row flex-xl-row flex-column justify-content-around'>
                <div className="statisticFraction text-center">
                    <h1 className='text-danger'><b>648</b></h1>
                    <p>Ish bilan ta’minlangan o’quvchilar</p>
                </div>
                <div className="statisticFraction text-center">
                    <h1 className='text-danger'><b>985</b></h1>
                    <p>O’quvchilar soni</p>
                </div>
                <div className="statisticFraction text-center">
                    <h1 className='text-danger'><b>10000</b></h1>
                    <p>Telegram obunchilar</p>
                </div>
            </div>
        </div>
    )
}
