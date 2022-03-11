import React ,{useState,useRef} from "react";
import {Input} from '../Input/Input'
import "../../App.css"
import {Cardlist} from '../Cardlist/index'
import { Mailer } from "../Mailer/Mailer";


export const Off = () =>{
    const [citieList, setCitieList]=useState([])
    return(
        <div>
                <Input setCitieList={setCitieList} />
                <Cardlist  citieList={citieList}/>   
                <Mailer />
        </div>
    )

}