import Date from '../date/date.com';
import Inside from '../inside/inside.com';
import './main.sty.scss';
import {daysInMonth} from '../../js/my';
import { useEffect } from 'react';

function Main() {

    useEffect(() => {
        function handleResize() {
            let semiCircle;
            document.querySelectorAll('.challenge-circle-main-circle').forEach(ciclegraph => {
                let circles = ciclegraph.querySelectorAll('.challenge-circle-single-date');
                semiCircle = ciclegraph.querySelector('.challenge-circle-semi-circle');
                circles = [...circles, semiCircle];
                let angle = 360-25, dangle = 357 / circles.length;
                let circle;
                for( let i = 0; i < circles.length; ++i ){
                    circle = circles[i];
                    angle += dangle;
                    circle.style.transform = `rotate(${angle}deg) translate(${ciclegraph.clientWidth / 2}px) rotate(-${angle}deg)`
                }
                circle.style.transform = `rotate(${angle - 2}deg) translate(${ciclegraph.clientWidth / 2}px) rotate(-${angle - 150}deg)`
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

    // useEffect(() => {
    //     document.querySelectorAll('.challenge-circle-main-circle').forEach(ciclegraph => {
    //         // let innerCircle = ciclegraph.querySelector('.challenge-circle-inside-circle');
    //         // console.log(innerCircle.clientWidth);
    //         let circles = ciclegraph.querySelectorAll('.challenge-circle-single-date');
    //         let semiCircle = ciclegraph.querySelector('.challenge-circle-semi-circle');
    //         circles = [...circles, semiCircle];
    //         // console.log(circles);
    //         let angle = 360-25, dangle = 357 / circles.length;
    //         let circle;
    //         for( let i = 0; i < circles.length; ++i ){
    //             circle = circles[i];
    //             angle += dangle;
    //             circle.style.transform = `rotate(${angle}deg) translate(30vw) rotate(-${angle}deg)`; 
    //         }
    //         // circle.style.transform = `rotate(${angle - 180}deg) rotate(-${angle - 180}deg)`;
    //     })
    //   }, []);

    const dateList =  daysInMonth();
    const afterAddingDateList = [...dateList, []];

    // console.log(afterAddingDateList[-1]);
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