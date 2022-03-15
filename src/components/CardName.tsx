import React, { useContext, useState } from 'react'
import DispatchContext from '../DispatchContext';
import Button from './elements/Button';

export default function CardName(props: { cardName: string, cardId: number | string }) {

    const [isCardNameEdit, setCardNameEdit] = useState<boolean>(false);
    const [initialValue, setUpdateValue] = useState(props.cardName);

    const cardDispatch = useContext(DispatchContext);

    const cardId = props.cardId

    function editCardName(value: boolean) {
        setCardNameEdit(value)
    }

    function handleEditCardName(e) {
        editCardName(false);
        cardDispatch({ type: "CardEdit", value: { editedCardName: initialValue, cardIdNo: cardId } })
    }

    function handleCardDelete() {
        cardDispatch({ type: "CardDelete", value: { id: cardId } })
    }


    return (
        <>
            {
                !isCardNameEdit &&

                <div className='row flex-justify-space-between'>
                    <p onDoubleClick={() => editCardName(true)} className="text-size-2 card-name text-white" title="Double click to edit the card name">{props.cardName}</p>
                    <p onClick={() => handleCardDelete()} className="three-dot" title="Delete card"><i className="fa-regular fa-trash-can icon text-light-blueGrey"></i></p>
                </div>
            }

            {
                isCardNameEdit &&

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
                            onClickEvent={(e) => handleEditCardName(e)} />

                        <Button
                            onClickEvent={() => editCardName(false)}
                            title="Cancel" icon='fa-solid fa-xmark'
                            iconColor='text-red'
                            className='btn btn-width-50 btn-icon bg-white' />
                    </div>
                </div>
            }
        </>
    )
}
