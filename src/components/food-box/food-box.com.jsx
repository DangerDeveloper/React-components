import './food-box.sty.scss';

function FoodBox({foodColor, foodName}) {
    return (
    <div className="food-box">
        <div className="food-color-represent" style={{backgroundColor: foodColor}}></div>
        <p className='food-name' >
            {foodName}
        </p>
    </div>);
}

export default FoodBox;