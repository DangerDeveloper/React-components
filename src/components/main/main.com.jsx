import Date from '../date/date.com';
import Inside from '../inside/inside.com';
import './main.sty.scss';
import {daysInMonth} from '../../js/my';

function Main() {

    return (<div className="main-circle">
            <Inside />
            {daysInMonth()
            .map((date, key) => <Date key={key} date={date}/>)}
            
        </div>);
}

export default Main;