import Date from '../date/date.com';
import Inside from '../inside/inside.com';
import './main.sty.scss';
import {daysInMonth} from '../../js/my';
import { useEffect } from 'react';

function Main() {

    // useEffect(() => {
    //     function handleResize() {
    //         document.querySelectorAll('.main-circle').forEach(ciclegraph => {
    //             let innerCircle = ciclegraph.querySelector('.inside-circle');
    //             console.log(innerCircle.clientWidth);
    //             let circles = ciclegraph.querySelectorAll('.single-date');
    //             let angle = 360-25, dangle = 345 / circles.length;
    //             for( let i = 0; i < circles.length; ++i ){
    //                 let circle = circles[i];
    //                 angle += dangle;
    //                 circle.style.transform = `rotate(${angle}deg) translate(${ciclegraph.clientWidth / 2.4}px) rotate(-${angle}deg)`
    //             }
    //         })
    //     }
    //     window.addEventListener("resize", handleResize);
    //     handleResize();
    //     return () => window.removeEventListener("resize", handleResize);
    //   }, []);

    useEffect(() => {
        document.querySelectorAll('.challenge-circle-main-circle').forEach(ciclegraph => {
            // let innerCircle = ciclegraph.querySelector('.challenge-circle-inside-circle');
            // console.log(innerCircle.clientWidth);
            let circles = ciclegraph.querySelectorAll('.challenge-circle-single-date');
            let semiCircle = ciclegraph.querySelector('.semi-circle');
            circles = [...circles, semiCircle];
            // console.log(circles);
            let angle = 360-25, dangle = 355 / circles.length;
            let circle;
            for( let i = 0; i < circles.length; ++i ){
                circle = circles[i];
                angle += dangle;
                circle.style.transform = `rotate(${angle}deg) translate(30vw) rotate(-${angle}deg)`; 
            }
            circle.style.transform = `rotate(${angle}deg) translate(30vw) rotate(-${angle - 145}deg)`;
        })
      }, []);

    const dateList =  daysInMonth();
    const afterAddingDateList = [...dateList, []];

    // console.log(afterAddingDateList[-1]);
    return (<div className="challenge-circle-main-circle">
            <Inside dateList={dateList}/>
            {afterAddingDateList.map((date, key) => {
                if(!date[0]) {
                    return <div key={key} className="semi-circle">
                    </div>
                }
                return <Date key={key} date={date}/>
            })}
        </div>);
}

export default Main;