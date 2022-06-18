import { food_color } from '../../js/my';
import FoodBox from '../food-box/food-box.com';
import './food.sty.scss'

function Food() {
    return (
    <div className="challenge-circle-food">
        {Object.keys(food_color).map((color, key) => {
            if(food_color[color] !== 'No Activity') {
                return <FoodBox key={key} foodColor={color} foodName={food_color[color]}/>
            }
            return ;
        })}
    </div>);
}

export default Food;