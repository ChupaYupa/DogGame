import React from 'react';



function BlockCounter(props) {
    return (
        <div className="counter">
            {props.counter}
        </div>
    );
}

export default BlockCounter;