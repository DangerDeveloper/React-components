import { daysInMonth, food_color } from '../../js/my';
import './graph-detail-container.sty.scss';
import HSBar from "react-horizontal-stacked-bar-chart";

function GraphDetailContainer() {
    let date = new Date();
    date = new Date(date.getTime() - (1000 * 60 * 60 * 24 * 6));
    
    const data = daysInMonth().filter(val => {
        if(date.getDate() === val[0].getDate() &&
            date.getMonth() === val[0].getMonth() &&
            date.getFullYear() === val[0].getFullYear() &&
            val[3]) {
            date = new Date(date.getTime() + (1000 * 60 * 60 * 24));
            return val;
        }
        return false;
    });
    
    const main_data = data.map(main => main[3].map(value => Object.keys(food_color).find(key => food_color[key] === value)))
                        .flat()
                        .filter(remove => remove !== '#D8D8D8');

    const output =  Object.values(main_data.reduce((obj, color) => {
        if (obj[color] === undefined)
           obj[color] = { color: color, value: 1, description: food_color[color]};
        else
           obj[color].value++;
        return obj;
    }, {}));

    console.log(output);

    return <div className='graph-data'>
        <div className='current-streak streak'>
            <p className='no-of-days'>7 Days</p>
            <p className='current-streak-paragraph'>Current Streak</p>
        </div>
        <div className='graph-box'>
                <HSBar height={'100%'} id="new_id" data={output}/>
        </div>
        <div className='longest-streak streak'>
            <p className='no-of-days'>7 Days</p>
            <p className='longest-streak-paragraph'>Longest Streak</p>
        </div>
    </div>
}

export default GraphDetailContainer;