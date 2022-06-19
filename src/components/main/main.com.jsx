import Date from '../date/date.com';
import Inside from '../inside/inside.com';
import './main.sty.scss';
import {daysInMonth} from '../../js/my';
import { useEffect } from 'react';

function Main() {

    useEffect(() => {
        function handleResize() {
            let semiCircle;
            document.querySelectorAll('.challenge-circle-main-circle').forEach(circleGraph => {
                let circles = circleGraph.querySelectorAll('.challenge-circle-single-date');
                semiCircle = circleGraph.querySelector('.challenge-circle-semi-circle');
                circles = [...circles, semiCircle];
                let angle = 360-25, dangle = 357 / circles.length;
                let circle;
                for(let i = 0; i < circles.length; ++i){
                    circle = circles[i];
                    angle += dangle;
                    circle.style.transform = `rotate(${angle}deg) translate(${circleGraph.clientWidth / 2}px) rotate(-${angle}deg)`
                }
                circle.style.transform = `rotate(${angle - 2}deg) translate(${circleGraph.clientWidth / 2}px) rotate(-${angle - 150}deg)`
            })

            let outerCircle = document.querySelector('.challenge-circle-main-circle-outer');
            let innerCircle = document.querySelector('.challenge-circle-inside-circle');
            innerCircle.style.width = outerCircle.clientWidth * 0.7 + 'px';
            semiCircle.style.width = (((outerCircle.clientWidth - innerCircle.clientWidth) / 2) + 1) + 'px';
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
      }, []);

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