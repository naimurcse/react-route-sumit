import React from 'react';

const CurrentInfo = (props) => {
    const {datetime} = props.currentTime;
    const currentTime = datetime;
    return (
        <div>
            <h2>Current Time</h2>
            <h1>{currentTime}</h1>
        </div>
    );
};

export default CurrentInfo;