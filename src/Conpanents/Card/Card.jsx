  import React from "react";

export const Card=({city})=> {
    return(
            <div className="card11">
                <div className="maininfo">
                    <marquee><img className="ia" src="http://openweathermap.org/img/wn/04d@2x.png" alt="" /></marquee>
                 
                <div className="title">{city}</div>
                <div>clude</div>
                <div className="temperature">20º</div>

                </div>
                <div className="information">
                <div>Humid:15</div>
                <div>Leki:19</div>
              
                </div>
            </div>
    
    )
}