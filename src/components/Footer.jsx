import React from 'react'
import Logo from "../images/Logo.svg";
import Fab from '@mui/material/Fab';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CopyrightIcon from '@mui/icons-material/Copyright';
export default function Footer() {
    return (
        <div className='footer'>
            <div className="footerContent container d-flex flex-xl-row flex-md-row flex-column h-100 justify-content-around">
                <div className="footerF d-flex flex-column justify-content-end">
                    <div className='h-75 d-flex flex-xl-column flex-md-column flex-row justify-content-between align-items-start'>
                        <img src={Logo} alt="logo" className='footerLogo' />
                        <p className='text-secondary'><CopyrightIcon /> 2022 Dizipro</p>
                    </div>
                </div>
                <div className="footerS d-flex flex-xl-column flex-md-column flex-row align-items-start justify-content-xl-center justify-content-md-center justify-content-between pt-xl-0 pt-5">
                    <h5 className='mb-4'>Bog'lanish:</h5>
                    <h4><b>+998(99)145-45-65</b></h4>
                </div>
                <div className="footerTh d-flex flex-xl-column flex-md-column flex-row align-items-start justify-content-xl-center justify-content-md-center justify-content-between ps-xl-5 ps-0 pt-xl-0 pt-5">
                    <h5 className='mb-4'>Ijtimoiy tarmoqlar:</h5>
                    <div className='d-flex'>
                        <Fab size="small" color="white" aria-label="add" className="me-2">
                            <InstagramIcon />
                        </Fab>
                        <Fab size="small" color="white" aria-label="add" className="me-2">
                            <TelegramIcon />
                        </Fab>
                        <Fab size="small" color="white" aria-label="add">
                            <YouTubeIcon />
                        </Fab>
                    </div>
                </div>
            </div>
        </div>
    )
}
