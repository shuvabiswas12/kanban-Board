import React, { useContext, useState } from 'react'
import DispatchContext from '../DispatchContext';
import Button from './elements/Button';

export default function AddItem(props: { cardId: string }) {
    const [isAddNewItem, setAddNewItem] = useState<boolean>(false);
    const [newItem, setNewItem] = useState<string>();

    const cardDispatch = useContext(DispatchContext);

    function handleAddingNewItem() {
        if (newItem.trim()) {
            setAddNewItem(false);
            cardDispatch({ type: "ItemAdd", value: { cardId: props.cardId, item: newItem } })
            setNewItem(() => "");
        }
    }


    return (
        <>
            {
                !isAddNewItem &&
                <Button
                    className='btn row flex-align-items-center btn-fade'
                    icon='fa-solid fa-plus'
                    text="Add Item"
                    onClickEvent={() => setAddNewItem(true)} />}


            {/* this block given bellow works during adding new item in a card  */}
            {
                isAddNewItem &&

                <div className='add-item-form'>
                    <div className='row flex-justify-end'>
                        <Button icon='fa-solid fa-xmark' iconColor='text-red' className='btn btn-width-25 btn-icon bg-white' onClickEvent={() => setAddNewItem(false)} />
                    </div>
                    <textarea rows={3} onChange={(e) => setNewItem(e.target.value)} value={newItem}></textarea>
                    <div className='row'>
                        <Button className='btn btn-width-50 bg-blue text-center' text='Save' onClickEvent={() => handleAddingNewItem()} />
                    </div>
                </div>
            }
        </>
    )
}
