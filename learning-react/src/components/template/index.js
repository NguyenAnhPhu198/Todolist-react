import React, { useState } from 'react';

TodoList.propTypes = {
    
};

function TodoList(props) {
    const [count, setCount] = useState(0)
    const [color, setColor] = useState('black')
    const [isShow, setIsShow] = useState(false)
    const handleIncrease = () => {
        setCount(count+1)
        console.log( count-1)
    }
    const handleDecrease = () => {
        setCount(count-1)
        console.log(count)
        setIsShow(!isShow)
        console.log(isShow)
    }
    const colorList = ['red', 'lightgreen', 'yellow', 'orange']
    const handleChangeColor = () => {
        const newColor = colorList[Math.trunc(Math.random()*colorList.length)]
        setColor(newColor)
    }
    return (
        <div>
            <p style={{color: color}}>{count}</p>
            <button onClick={handleIncrease}>Tăng</button>        
            <button  onClick={handleDecrease}>Giảm</button> 
            <button onClick={handleChangeColor}>Change Color</button>       
        </div>
    );
}
export default TodoList;