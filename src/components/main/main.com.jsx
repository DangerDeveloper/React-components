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
        document.querySelectorAll('.main-circle').forEach(ciclegraph => {
            // let innerCircle = ciclegraph.querySelector('.inside-circle');
            // console.log(innerCircle.clientWidth);
            let circles = ciclegraph.querySelectorAll('.single-date');
            let angle = 360-25, dangle = 345 / circles.length;
            for( let i = 0; i < circles.length; ++i ){
                let circle = circles[i];
                angle += dangle;
                circle.style.transform = `rotate(${angle}deg) translate(30.5vw) rotate(-${angle}deg)`
            }
        })
      }, []);

    const dateList =  daysInMonth();

    return (<div className="main-circle">
            <Inside dateList={dateList}/>
            {dateList.map((date, key) => <Date key={key} date={date}/>)}
        </div>);
}

export default Main;