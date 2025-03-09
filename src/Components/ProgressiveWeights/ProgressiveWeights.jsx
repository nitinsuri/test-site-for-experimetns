import React from 'react';
import './styles.scss';

const ProgressiveWeights = () => {
    const data = ['5','7.5','7.5','7.5','10','10','10'];
    let initWeight = 0;

    return(
        <ul id='progressiveWeights'>
            {
                data instanceof Array && 
                data.map(item => {
                    initWeight += Number(item)
                    return <li>{Number(initWeight).toFixed(2)}</li>
                })
            }
        </ul>
    )
}

export default ProgressiveWeights