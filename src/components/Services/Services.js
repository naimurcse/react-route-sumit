import React, { useEffect, useState } from 'react';
import CurrentInfo from '../CurrentInfo/CurrentInfo';
import "./Services.css";

const Services = () => {
    const [time, setTime] = useState([]);
    useEffect(() => {
        fetch("http://worldtimeapi.org/api/timezone")
        .then(response => response.json())
        .then(data => setTime(data));
    },[])
    // console.log(time);
   const [currentTime, setCurrentTime] = useState([]);
   const showTime = (currentZone) => {
       const url = `http://worldtimeapi.org/api/timezone/${currentZone}`;
       fetch(url)
       .then(res=>res.json())
       .then(data => setCurrentTime(data));
   }
    return (
        <div className="service-container">
            <div className="zone-name">
                <ol>
                    {
                        time.map(zone => <li onClick={()=>showTime(zone)}>{zone}</li>)
                    }
                </ol>
            </div>
            
            <div className="time-zone">   
                <CurrentInfo currentTime={currentTime}></CurrentInfo>
            </div>
        </div>
    )
};

export default Services;