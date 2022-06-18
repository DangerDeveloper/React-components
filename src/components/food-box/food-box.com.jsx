import './food-box.sty.scss';

function FoodBox({foodColor, foodName}) {
    return (
    <div className="challenge-circle-food-box">
        <div className="challenge-circle-food-color-represent" style={{backgroundColor: foodColor}}></div>
        <p className='challenge-circle-food-name' >
            {foodName}
        </p>
    </div>);
}

export default FoodBox;