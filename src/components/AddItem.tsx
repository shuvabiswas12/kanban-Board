import React from 'react'

export default function AddItem() {
    return (
        <div className='add-item-form'>
            <div className='row flex-justify-end'>
                <button className='btn btn-width-25 close-btn'><i className="fa-solid fa-xmark icon text-red"></i></button>
            </div>
            <textarea rows={3}></textarea>
            <div className='row'>
                <button className='btn btn-width-50 bg-blue'>Save</button>
            </div>
        </div>
    )
}
