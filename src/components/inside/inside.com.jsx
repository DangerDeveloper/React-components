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

    // console.log(100 * remaningDays / 30);
    const remaningPercentage = Math.round((remaningDays / 30) * 100);
    // console.log(remaningPercentage);

    return <div className="inside-circle">
        <Profile />
        <div className='inside-date'>{week[dt.getDay()]}, {year[dt.getMonth()]} {dt.getDate()}</div>
        <p className='day-challenge'> 30 Day Challenge</p>
        <span className='remanning-day'>{remaningDays} Day Remaining</span>
        <p className='remanning-percentage'>Keep it Going {remaningPercentage}%</p>
    </div>
}

export default Inside;