import React, {useState} from 'react';
import propTypes from "prop-types";

export const AddCategory = ({setCategorias}) => {
    const [inputValue, secondInput] = useState('');

    const handleInput = (e) => {
        secondInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length > 2){        
            setCategorias(cats =>[...cats,inputValue]);
            secondInput('');
        }    
    }

  return (<><h2>Add Category{inputValue}</h2>
    <form onSubmit={handleSubmit}>
    <input type="text" value={inputValue} onChange={handleInput}/>
    </form>
  </>);
};

AddCategory.propTypes ={
    setCategorias: propTypes.func.isRequired,
}
