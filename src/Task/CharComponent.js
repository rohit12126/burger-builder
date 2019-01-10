import React from 'react';
import TaskCss from './TaskComponent.madule.css'

const CharComponent = (props) => {
    return props.char.map((element, index) => {
        return <span className="text" key={index} onClick={(e) => props.handelDelete(index)}>{element}</span>
    })
}

export default CharComponent