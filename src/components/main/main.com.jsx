import Date from '../date/date.com';
import Inside from '../inside/inside.com';
import './main.sty.scss';
import {daysInMonth} from '../../js/my';

function Main() {

    const dateList =  daysInMonth();
    const afterAddingDateList = [...dateList, []];

    return (<div className="challenge-circle-main-circle-outer">
            <div className='challenge-circle-main-circle'>
                <Inside dateList={dateList}/>
                {afterAddingDateList.map((date, key) => {
                    if(!date[0]) {
                        return <div key={key} className="challenge-circle-semi-circle">
                        </div>
                    }
                    return <Date key={key} date={date}/>
                })}
            </div>
        </div>);
}

export default Main;