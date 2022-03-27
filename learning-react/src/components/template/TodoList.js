import React, { useMemo, useRef, useState } from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
    
};

function TodoList(props) {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [product, setProduct] = useState([])
    const onChangeName = (e) => {
        setName(e.target.value)
        console.log(name)
    }
    const onChangePrice = (e) => {
        setPrice(e.target.value)
        console.log(price)
    }
    const handleAddProduct = () =>{
        setProduct([
            ...product, {
                name,
                price : Number(price)
            }
        ])
        setName('')
        setPrice('')
        nameRef.current.focus()
    }
    const nameRef = useRef()
    const total = useMemo (()=>{
        const result = product.reduce((total, product)=> {
            return total + product.price
        }, 0)
        return result
    }, [product])
    return (
        <div>
           <input ref={nameRef} type="text" value={name}  onChange={onChangeName} placeholder='name product' /> 
           <input type="text" value={price} onChange={onChangePrice} placeholder='price product' /> 
           <br />
           <br />
           <button onClick={handleAddProduct}>Add Product</button>
            <p>Total: {total} </p>
            <ul>
                {product.map((product, index) => 
                     <li key={index}> {product.name} - {product.price}</li> 
                )}
            </ul>
        </div>
    );
}

export default TodoList;