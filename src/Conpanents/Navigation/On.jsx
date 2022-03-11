import React, { useState }  from "react";
import {Input} from '../Input/Input'
import "../../App.css"
import {Cardlist} from '../Cardlist/index'
import { Alpha } from "../Alpha/alpha";


export const On = () =>{
    const [citieList, setCitieList]=useState([])
    return(
        <div>
                <Input setCitieList={setCitieList} />
                <Cardlist  citieList={citieList}/>   
                <Alpha />
        </div>
    )
}