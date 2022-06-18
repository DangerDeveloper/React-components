import { daysInMonth, food_color } from '../../js/my';
import './graph-detail-container.sty.scss';
// import HSBar from "react-horizontal-stacked-bar-chart";
import Highcharts from 'highcharts';
import { useEffect } from 'react';

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

    // console.log(output);
    // console.log(output.map(co => {
    //     console.log(co['color'])
    //     return co['color'];
    // }));

    // console.log(output.map(co => {
    //     console.log(co);
    //     return {
    //         showInLegend: false,
    //         name: co['description'],
    //         data: [co['value']],
    //       };
    // }))

    useEffect(() => {
        Highcharts.chart('container', {
            credits: {
              enabled: false
            },
            colors: output.map(co => co['color']),
            plotOptions: {
                series: {
                    stacking: 'normal'
                },
                column: {
                colorByPoint: true
                    }
            },
            chart: {
                type: 'bar',
                spacing: [0, 0, 0, 0],
                backgroundColor: null,
                marginTop:0,
                marginBottom:0,
            
            },
            title: {
              text: ''
            },
            xAxis: {
              startOnTick: false,
              labels: {
                enabled: false
              },
              categories: [''],
              lineWidth: 0,
              tickWidth: 0,
              labels: {
                enabled: false
              }
            },
            yAxis: {
              minPadding: 0,
              maxPadding: 0,
              labels: {
                enabled: false
              },
              gridLineWidth: 0,
              title: null,
            },
            series: output.map((co, _, fco) => {
                // console.log(co);
                return {
                    showInLegend: false,
                    name: co['description'],
                    data: [((co['value'] / fco.map(a => a['value']).reduce((a, b) => a + b, 0)) * 100)],
                  };
            }),
        });
    }, []);

    

    return <div className='graph-data'>
        <div className='current-streak streak'>
            <p className='no-of-days'>7 Days</p>
            <p className='current-streak-paragraph'>Current Streak</p>
        </div>
        <div className='graph-box'>
                {/* <HSBar height={'100%'} id="new_id" data={output}/> */}
                <div id="container"></div>
        </div>
        <div className='longest-streak streak'>
            <p className='no-of-days'>7 Days</p>
            <p className='longest-streak-paragraph'>Longest Streak</p>
        </div>
    </div>
}

export default GraphDetailContainer;