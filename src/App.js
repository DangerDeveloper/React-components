import { useEffect } from 'react';
import './App.css';
import Food from './components/food/food.com';
import GraphDetailContainer from './components/graph-detail-container/graph-detail-container.com';
import Main from './components/main/main.com';

function App() {
  
  useEffect(() => {
    document.querySelectorAll('.main-circle').forEach(ciclegraph => {
      let circles = ciclegraph.querySelectorAll('.single-date')
      let angle = 360-25, dangle = 345 / circles.length
      for( let i = 0; i < circles.length; ++i ){
        let circle = circles[i]
        angle += dangle
        circle.style.transform = `rotate(${angle}deg) translate(${ciclegraph.clientWidth / 2.33}px) rotate(-${angle}deg)`
      }
    })
  }, []);

  return (
    <div className="App">
      <div className='challenge-box'>
        <Food />
        <Main />
        <GraphDetailContainer />
      </div>
    </div>
  )
}

export default App;
