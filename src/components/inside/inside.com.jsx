import { useEffect } from 'react';
import Profile from '../profile/profile.com';
import './inside.sty.scss'

function Inside({dateList}) {

    const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const year = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let dt = new Date();

    const remaningDays = dateList.reduce((totalCount, value) => {
        if(value.length === 3) {
            return totalCount += 1;
        }
        return totalCount += 0;
    }, 0);
    const remaningPercentage = Math.round((remaningDays / 30) * 100);

    return <div className="challenge-circle-inside-circle">
        <Profile />
        <div className='challenge-circle-inside-date'>{week[dt.getDay()]}, {year[dt.getMonth()]} {dt.getDate()}</div>
        <p className='challenge-circle-day-challenge'> 30 Day Challenge</p>
        <span className='challenge-circle-remanning-day'>{remaningDays} Day Remaining</span>
        <p className='challenge-circle-remanning-percentage'>Keep it Going {remaningPercentage}%</p>
    </div>
}

export default Inside;