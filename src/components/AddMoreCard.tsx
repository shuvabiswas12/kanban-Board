import React, { useContext } from 'react'
import DispatchContext from '../DispatchContext'
import Button from './elements/Button'

export default function AddMoreCard() {

    const cardDispatch = useContext(DispatchContext);

    function handleAddingCard() {
        cardDispatch({type: "CardAdd"})
    }

    return (
        <div className="add-another-card margin-x-8px">
            <Button onClickEvent={() => handleAddingCard()} className='btn row flex-align-items-center btn-fade' icon='fa-solid fa-plus' text='Add another card'/>
        </div>
    )
}
