import React from 'react';
const Input = (props) => {
    const {inputName,value,type,handleInputField,lable,error}=props;
    return ( <div>
        <div class="form-group">
    <label htmlFor={inputName}>{lable}</label>
                  <input 
                  value={value}
                 type={type} 
                 class="form-control"
                 id={inputName}
                 name={inputName}
                 //ref={this.username}
                 onChange={handleInputField}
                 />

        
                 {error && <p className="text-danger">*{error}</p>}
                </div>
    </div> );
}
 
export default Input;