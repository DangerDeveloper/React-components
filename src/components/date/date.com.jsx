import './date.sty.scss';
import {food_color} from '../../js/my';

function Date({date}) {
    let col = ['transparent'];
    if(date[3]) {
        col = date[3].map(value => Object.keys(food_color).find(key => food_color[key] === value));
    }
    return <div className='challenge-circle-single-date' 
            style={{background: col[0] === 'transparent' ? 'transparent' :
                             col.length === 1 ? col[0] :
                             col.length === 2 ? `linear-gradient(to left, ${col[0]} 50%, ${col[1]} 50%)` :
                             col.length === 3 ? `conic-gradient(${col[0]} 0deg, ${col[0]} 120deg, ${col[1]} 120deg, ${col[1]} 240deg, ${col[2]} 240deg)` :
                              `conic-gradient(${col[0]} 0deg, ${col[0]} 90deg,
                                                 ${col[1]} 90deg, ${col[1]} 180deg, ${col[2]} 180deg, ${col[2]} 270deg, ${col[3]} 270deg)`,
                    color: col[0] === 'transparent' ? '#D8D8D8' : 'white'}}>
        <p>{date[1]}</p>
        <p>{date[2]}</p>
    </div>
}

export default Date;