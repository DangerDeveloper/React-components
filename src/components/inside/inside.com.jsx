import Profile from '../profile/profile.com';
import './inside.sty.scss'

function Inside() {
    return <div className="inside-circle">
        <Profile />
        <p className='inside-date'>Tuesday, May 26</p>
        <p className='day-challenge'> 30 Day Challenge</p>
        <span className='remanning-day'>8 Day Remaining</span>
        <p className='remanning-percentage'>Keep it Going 80%</p>
    </div>
}

export default Inside;