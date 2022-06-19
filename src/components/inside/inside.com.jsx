import { useEffect } from 'react';
import Profile from '../profile/profile.com';
import './inside.sty.scss'

function Inside({dateList}) {

    const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const year = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let dt = new Date();

    const remainingDays = dateList.reduce((totalCount, value) => {
        if(value.length === 3) {
            return totalCount += 1;
        }
        return totalCount += 0;
    }, 0);

    const remainingPercentage = Math.round((remainingDays / 30) * 100);

    return <div className="challenge-circle-inside-circle">
        <Profile />
        <div className='challenge-circle-inside-date'>{week[dt.getDay()]}, {year[dt.getMonth()]} {dt.getDate()}</div>
        <p className='challenge-circle-day-challenge'> 30 Day Challenge</p>
        <span className='challenge-circle-remaining-day'>{remainingDays} Day Remaining</span>
        <p className='challenge-circle-remaining-percentage'>Keep it Going {remainingPercentage}%</p>
    </div>
}

export default Inside;