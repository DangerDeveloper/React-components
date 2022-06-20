import { useEffect } from 'react';
import './App.css';
import Food from './components/food/food.com';
import GraphDetailContainer from './components/graph-detail-container/graph-detail-container.com';
import Main from './components/main/main.com';

function App() {

  useEffect(() => {
    function handleResize() {
        // For Food
        let challengeCircleBox = document.querySelector('.challenge-circle-box');

        let challengeCircleFood = document.querySelector('.challenge-circle-food');
        let challengeCircleFoodBoxList = document.querySelectorAll('.challenge-circle-food-box');

        challengeCircleFood.style.width = challengeCircleBox.clientWidth * 0.7 + 'px';
        
        challengeCircleFoodBoxList.forEach(challengeCircleFoodBox => {
          let challengeCircleFoodColorRepresent =  challengeCircleFoodBox.querySelector('.challenge-circle-food-color-represent');
          let challengeCircleFoodName =  challengeCircleFoodBox.querySelector('.challenge-circle-food-name');
          challengeCircleFoodColorRepresent.style.width = challengeCircleFood.clientWidth / 9 + 'px';
          challengeCircleFoodName.style.fontSize = challengeCircleFood.clientWidth / 35 + 'px';
        });
        
        // For Circle
        let challengeCircleMainCircleOuter = document.querySelector('.challenge-circle-main-circle-outer');
        let challengeCircleMainCircle = document.querySelector('.challenge-circle-main-circle');
        
        let challengeCircleInsideCircle = document.querySelector('.challenge-circle-inside-circle');
        let challengeCircleProfile = document.querySelector('.challenge-circle-profile');
        let challengeCircleInsideDate = document.querySelector('.challenge-circle-inside-date');
        let challengeCircleDayChallenge = document.querySelector('.challenge-circle-day-challenge');
        let challengeCircleRemainingDay = document.querySelector('.challenge-circle-remaining-day');
        let challengeCircleRemainingPercentage = document.querySelector('.challenge-circle-remaining-percentage');
        let circles = document.querySelectorAll('.challenge-circle-single-date');
        let semiCircle = document.querySelector('.challenge-circle-semi-circle');
        
        
        challengeCircleMainCircleOuter.style.width = challengeCircleBox.clientWidth * 0.7 + 'px';
        challengeCircleMainCircle.style.width = challengeCircleMainCircleOuter.clientWidth * 0.85 + 'px';
        challengeCircleInsideCircle.style.width = challengeCircleMainCircleOuter.clientWidth * 0.7 + 'px';
        challengeCircleProfile.style.width = challengeCircleMainCircleOuter.clientWidth * 0.1 + 'px';
        challengeCircleInsideDate.style.fontSize = challengeCircleMainCircleOuter.clientWidth * 0.05 + 'px';
        challengeCircleDayChallenge.style.fontSize = challengeCircleMainCircleOuter.clientWidth * 0.08 + 'px';
        challengeCircleRemainingDay.style.fontSize = challengeCircleMainCircleOuter.clientWidth * 0.05 + 'px';
        challengeCircleRemainingDay.style.borderRadius = challengeCircleMainCircleOuter.clientWidth * 0.1 + 'px';
        challengeCircleRemainingDay.style.paddingRight = challengeCircleMainCircleOuter.clientWidth * 0.05 + 'px';
        challengeCircleRemainingDay.style.paddingLeft = challengeCircleMainCircleOuter.clientWidth * 0.05 + 'px';
        challengeCircleRemainingPercentage.style.fontSize = challengeCircleMainCircleOuter.clientWidth * 0.05 + 'px';
        circles.forEach(circle => {
          circle.style.fontSize = challengeCircleMainCircleOuter.clientWidth * 0.018 + 'px';
          circle.style.width = challengeCircleMainCircleOuter.clientWidth * 0.075 + 'px';
        });

        let outerCircle = document.querySelector('.challenge-circle-main-circle-outer');
        let innerCircle = document.querySelector('.challenge-circle-inside-circle');
        challengeCircleMainCircle.style.width = outerCircle.clientWidth * 0.85 + 'px';
        innerCircle.style.width = outerCircle.clientWidth * 0.7 + 'px';

        
        circles = [...circles, semiCircle];
        let angle = 360-25, dangle = 357 / circles.length;
        let circle;
        for(let i = 0; i < circles.length; ++i){
            circle = circles[i];
            angle += dangle;
            circle.style.transform = `rotate(${angle}deg) translate(${challengeCircleMainCircle.clientWidth / 2}px) rotate(-${angle}deg)`
        }
        circle.style.transform = `rotate(${angle - 2}deg) translate(${challengeCircleMainCircle.clientWidth / 2}px) rotate(-${angle - 150}deg)`
        semiCircle.style.width = (((outerCircle.clientWidth - innerCircle.clientWidth) / 2) + 1) + 'px';
        
        // For Graph Container
        let challengeCircleGraphData = document.querySelector('.challenge-circle-graph-data');
        let challengeCircleNoOfDays = challengeCircleGraphData.querySelectorAll('.challenge-circle-no-of-days');
        let challengeCircleParagraphs = challengeCircleGraphData.querySelectorAll('.challenge-circle-paragraph');
        let challengeCircleGraphBox = document.querySelector('.challenge-circle-graph-box');
        
        challengeCircleGraphData.style.width = challengeCircleBox.clientWidth * 0.7 + 'px';
        challengeCircleNoOfDays.forEach(challengeCircleNoOfDay => {
          challengeCircleNoOfDay.style.fontSize = challengeCircleGraphData.clientWidth * 0.05 + 'px';
        });
        challengeCircleParagraphs.forEach(challengeCircleParagraph => {
          challengeCircleParagraph.style.fontSize = challengeCircleGraphData.clientWidth * 0.035 + 'px';
        });
        challengeCircleGraphBox.style.height = challengeCircleGraphData.clientHeight * 0.5 + 'px';
        challengeCircleGraphBox.style.height = challengeCircleGraphData.clientHeight * 0.5 + 'px';
        
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="App">
      <div className='challenge-circle-box'>
        <Food />
        <Main />
        <GraphDetailContainer />
      </div>
    </div>
  )
}

export default App;
