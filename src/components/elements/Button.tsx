import React from 'react'
import { IButton } from '../../interfaces/interfaces'

export default function Button(props: IButton) {

    return (
        <button title={props.title} className={props.className} onClick={props.onClickEvent}>
            {props.icon && <i className={props.icon + " " + props.iconBg + " " + props.iconColor}></i>}

            {props.icon && props.text? <span>&nbsp;&nbsp;{props.text}</span> : props.text}
        </button>
    )
}
