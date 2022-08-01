import React, { useState } from 'react'
import Accordion from './Accordion'

export default function Support() {
    const supportData = [
        { question: "Kursda o’qish uchun tarjiba qancha bo’lishi kerak?", answer: "Tasavvur qiling, siz haqiqiy samalyot yaratdingiz va u uchmadi. Dvigatel ishlamoqda, ammo samalyot osmonga koʻtarilmayapti.Aynan shu vaziyatlarda, interyer, eksteryer dizayn sohalarida, turli murakkab injenerlik sohalarida, geologiya, gidrologiya va boshqa turli sohalarda xarajatli vaziyatlarni oldini olishda 3D modellar kerak boʻladi." },
        { question: "Kursni sotib olgandan keyin pulni qaytarib olsa bo’ladimi?", answer: "Tasavvur qiling, siz haqiqiy samalyot yaratdingiz va u uchmadi. Dvigatel ishlamoqda, ammo samalyot osmonga koʻtarilmayapti.Aynan shu vaziyatlarda, interyer, eksteryer dizayn sohalarida, turli murakkab injenerlik sohalarida, geologiya, gidrologiya va boshqa turli sohalarda xarajatli vaziyatlarni oldini olishda 3D modellar kerak boʻladi." },
        { question: "3D modellashtirish qanday ishlaydi?", answer: "Tasavvur qiling, siz haqiqiy samalyot yaratdingiz va u uchmadi. Dvigatel ishlamoqda, ammo samalyot osmonga koʻtarilmayapti.Aynan shu vaziyatlarda, interyer, eksteryer dizayn sohalarida, turli murakkab injenerlik sohalarida, geologiya, gidrologiya va boshqa turli sohalarda xarajatli vaziyatlarni oldini olishda 3D modellar kerak boʻladi." },
        { question: "O’qish bitirgadan keyin daromad topshimgacha qancha vaqt ketadi?", answer: "Tasavvur qiling, siz haqiqiy samalyot yaratdingiz va u uchmadi. Dvigatel ishlamoqda, ammo samalyot osmonga koʻtarilmayapti.Aynan shu vaziyatlarda, interyer, eksteryer dizayn sohalarida, turli murakkab injenerlik sohalarida, geologiya, gidrologiya va boshqa turli sohalarda xarajatli vaziyatlarni oldini olishda 3D modellar kerak boʻladi." },
        { question: "O’quvchilarni ish bilan ta’minlashni zimmangizga olasizmi?", answer: "Tasavvur qiling, siz haqiqiy samalyot yaratdingiz va u uchmadi. Dvigatel ishlamoqda, ammo samalyot osmonga koʻtarilmayapti.Aynan shu vaziyatlarda, interyer, eksteryer dizayn sohalarida, turli murakkab injenerlik sohalarida, geologiya, gidrologiya va boshqa turli sohalarda xarajatli vaziyatlarni oldini olishda 3D modellar kerak boʻladi." },
        { question: "Diziproni afzalliklari nimada?", answer: "Tasavvur qiling, siz haqiqiy samalyot yaratdingiz va u uchmadi. Dvigatel ishlamoqda, ammo samalyot osmonga koʻtarilmayapti.Aynan shu vaziyatlarda, interyer, eksteryer dizayn sohalarida, turli murakkab injenerlik sohalarida, geologiya, gidrologiya va boshqa turli sohalarda xarajatli vaziyatlarni oldini olishda 3D modellar kerak boʻladi." }
    ]
    return (
        <div className='support standard container d-flex flex-column justify-content-center align-items-center'>
            <h3 className='mb-5'><b>Tez-tez beriladigan savollar</b></h3>
            <div className="accordionArea w-100 d-flex flex-column align-items-center">
                {supportData.map(item =>
                    <Accordion data={item}/>
                )}
            </div>
        </div>
    )
}
