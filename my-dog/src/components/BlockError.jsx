import React from 'react';



function BlockError(props) {
    return (
        <div className="counterError">
            Errors: {''}
            {props.errors}
        </div>
    );
}

export default BlockError;