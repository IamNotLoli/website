import React,{useState,useRef} from "react";
import '../../App.css'
import rasm from '../../logo.svg'


export const Input =({setCitieList})=>{
    const [inputValue, setInputValue]=useState('Empty')
    const inputref=useRef(null)
    const handleonclick =()=>{
       
        setCitieList((currentArray) =>[...currentArray, inputValue])  

        setInputValue('Andijon')     
        inputref.current.focus();
        }

        const handleOnChange =(Event) =>{
            setInputValue(Event.target.value)
        }
    return (
<div className="input1">
   <input className="inp1" onChange={handleOnChange} value={inputValue}  ref={inputref}/>
    <button className="btn1" onClick={handleonclick}><img src={rasm} alt=""  className="rf"/></button>
    

</div>
)
 }   


