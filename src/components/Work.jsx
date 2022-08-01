import React from 'react'
import CardHeader from '@mui/material/CardHeader';
import User from "../images/user.jpg"
export default function Work(props) {
    return (
        <div className="workCard">
            <div className='workImg' />
            <div className="workCardContent d-flex align-items-center">
                <img src={User} alt="user" className='userImg' />
                <CardHeader
                    title={props.data.name}
                    subheader={props.data.job}
                />
            </div>
        </div>
    )
}
