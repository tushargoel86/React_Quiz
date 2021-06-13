import React from 'react';

const Quiz = (props) => {

    if (props.data.length === 0) return [];
    let objects = [];
    for (let i = 0; i < props.data.length; i++) {
        objects.push(<div key={i}>{props.data[i].question}</div>);
    }
    return props.data.length === 0 ? "null" : <div c>{objects}</div>;
}

export default Quiz