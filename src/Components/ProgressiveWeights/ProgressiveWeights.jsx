import React from 'react';
import { render } from 'react-dom';

const ProgressiveWeights = () => {
    const data = ['5','7.5','7.5','7.5','10','10','10'];
    let initWeight = 0;

    return(
        <>
            {
                data instanceof Array && 
                data.map(item => {
                    initWeight = Number(item) + Number(initWeight)
                    return <div>{Number(item) + Number(initWeight)}</div>
                })
            }
        </>
    )
}

export default ProgressiveWeights