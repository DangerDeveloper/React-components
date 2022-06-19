import { daysInMonth, food_color } from '../../js/my';
import './graph-detail-container.sty.scss';
import HSBar from "react-horizontal-stacked-bar-chart";
// import Highcharts from 'highcharts';

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

    // useEffect(() => {
    //     Highcharts.chart('challenge-circle-container', {
    //         credits: {
    //           enabled: false
    //         },
    //         colors: output.map(co => co['color']),
    //         plotOptions: {
    //             series: {
    //                 stacking: 'normal'
    //             },
    //             column: {
    //             colorByPoint: true
    //                 }
    //         },
    //         chart: {
    //             type: 'bar',
    //             spacing: [0, 0, 0, 0],
    //             backgroundColor: null,
    //             marginTop:0,
    //             marginBottom:0,
            
    //         },
    //         title: {
    //           text: ''
    //         },
    //         xAxis: {
    //           startOnTick: false,
    //           labels: {
    //             enabled: false
    //           },
    //           categories: [''],
    //           lineWidth: 0,
    //           tickWidth: 0,
    //           labels: {
    //             enabled: false
    //           }
    //         },
    //         yAxis: {
    //           minPadding: 0,
    //           maxPadding: 0,
    //           labels: {
    //             enabled: false
    //           },
    //           gridLineWidth: 0,
    //           title: null,
    //         },
    //         series: output.map((co, _, fco) => {
    //             // console.log(co);
    //             return {
    //                 showInLegend: false,
    //                 name: co['description'],
    //                 data: [((co['value'] / fco.map(a => a['value']).reduce((a, b) => a + b, 0)) * 100)],
    //               };
    //         }),
    //     });
    // }, []);

    

    return <div className='challenge-circle-graph-data'>
        <div className='challenge-circle-current-streak challenge-circle-streak'>
            <p className='challenge-circle-no-of-days'>7 Days</p>
            <p className='challenge-circle-current-streak-paragraph'>Current Streak</p>
        </div>
        <div className='challenge-circle-graph-box'>
                <HSBar height={'100%'} id="challenge-circle-new_id" data={output}/>
                {/* <div id="challenge-circle-container"></div> */}
        </div>
        <div className='challenge-circle-longest-streak challenge-circle-streak'>
            <p className='challenge-circle-no-of-days'>7 Days</p>
            <p className='challenge-circle-longest-streak-paragraph'>Longest Streak</p>
        </div>
    </div>
}

export default GraphDetailContainer;