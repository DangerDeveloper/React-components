import './App.css';
import Food from './components/food/food.com';
import GraphDetailContainer from './components/graph-detail-container/graph-detail-container.com';
import Main from './components/main/main.com';

function App() {
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
