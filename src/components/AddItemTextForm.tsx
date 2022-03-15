import React from 'react'
import Button from './elements/Button'

export default function AddItemTextForm(props: {onClick: any}) {
    return (
        <div className='add-item-form'>
            <div className='row flex-justify-end'>
                <Button icon='fa-solid fa-xmark' iconColor='text-red' className='btn btn-width-25 btn-icon bg-white' onClickEvent={props.onClick}/>
            </div>
            <textarea rows={3}></textarea>
            <div className='row'>
                <Button className='btn btn-width-50 bg-blue text-center' text='Save'/>
            </div>
        </div>
    )
}
