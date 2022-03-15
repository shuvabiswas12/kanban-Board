import React, { useContext, useEffect, useState } from 'react'
import DispatchContext from '../DispatchContext';
import { IMyCardItem } from '../interfaces/interfaces'
import Button from './elements/Button';

function CardItem(props: IMyCardItem) {

    const [isEditItem, setEditItem] = useState<boolean>(false);
    const [initialValue, setUpdateValue] = useState(props.itemText);

    const cardDispatch = useContext(DispatchContext);

    const itemIndex = props.itemIndex
    const cardId = props.cardId

    function handleEditItem(e) {
        if (initialValue.trim()) {
            setEditItem(false)
            cardDispatch({ type: "ItemEdit", value: { editedText: initialValue, itemIndex: itemIndex, cardId: cardId } })
        }
    }

    function handleDeletingCardItem() {
        cardDispatch({ type: "ItemDelete", value: { itemIndex: itemIndex, cardId: cardId } })
    }

    useEffect(() => {

    }, [isEditItem])



    return (
        <div className="card-item" draggable={!isEditItem} onDragEnd={props.onDragEnd} onDragStart={props.onDragStart}>

            {
                !isEditItem &&
                <div className='row flex-justify-space-between'>
                    <p onDoubleClick={() => setEditItem(() => true)} className="item-text text-size-2 item" title="Double click to edit the item">{props.itemText}</p>
                    <div className="item-actions ">
                        <button onClick={() => handleDeletingCardItem()} className="action three-dot" title="Delete item"><i className="fa-regular fa-trash-can icon"></i></button>
                    </div>
                </div>
            }

            {/* this block given bellow works during edit an item from a card  */}
            {isEditItem &&

                <div className='text-field'>
                    <textarea
                        rows={3}
                        onChange={(e) => setUpdateValue(() => e.target.value.trim())}
                        defaultValue={initialValue}></textarea>

                    <div className='row'>
                        <Button
                            title='Edit and Save'
                            icon='fa-solid fa-check'
                            className='btn btn-width-50 btn-icon bg-blue'
                            onClickEvent={(e) => handleEditItem(e)} />

                        <Button
                            onClickEvent={() => setEditItem(() => false)}
                            title="Cancel" icon='fa-solid fa-xmark'
                            iconColor='text-red'
                            className='btn btn-width-50 btn-icon bg-white' />
                    </div>
                </div>
            }
        </div>
    )
}

export default CardItem;
