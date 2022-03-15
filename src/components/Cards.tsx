import React, { useContext, useEffect, useState } from 'react'
import CardItem from './CardItem'
import CardName from './CardName';
import AddMoreCard from './AddMoreCard';
import StateContext from '../StateContext';
import AddNewItem from './AddNewItem';
import DispatchContext from '../DispatchContext';

export default function Cards() {

    const [ShouldItemHide, setItemShouldHide] = useState<boolean>(false);

    const cardState = useContext(StateContext)
    const cardDispatch = useContext(DispatchContext);

    let draggedOverCardId: string = "";
    let draggedOverCardName: string = "";
    let draggedItem: string = "";
    let srcCardName: string = "";
    let srcCardId: string = "";

    function dragStart(e, item) {
        draggedItem = item;
        setTimeout(() => {
            e.target.style.display = "none";
        }, 0)
    }

    function dragEnd(e) {
        setTimeout(() => {
            e.target.style.display = "flex";
        }, 0)
    }

    function dragOver(e, cardName, cardId) {
        e.preventDefault()
        draggedOverCardId = cardId;
        draggedOverCardName = cardName;
    }

    function drop(e, cardName) {
        console.log("DraggedItem = " + draggedItem + " SrcCard = " + srcCardName + " and srcCard Id = " + srcCardId + " DestinationCard = " + draggedOverCardName + " and Card Id = " + draggedOverCardId)
        if (draggedItem && srcCardId !== draggedOverCardId) {
            setItemShouldHide(() => true);
            cardDispatch({ type: "ItemDrag", value: { draggedItem: draggedItem, destinationCardId: draggedOverCardId, srcCardId: srcCardId } })
        }

    }

    function dragOn(e, cardName, cardId) {
        srcCardName = cardName;
        srcCardId = cardId;
        e.dataTransfer.setData('srcCard', cardName)
    }

    useEffect(() => {
    }, [cardState])


    return (
        <div className='container'>
            <div className='row'>

                {
                    cardState.map((card, index) => {
                        return (
                            <div className="card" key={index}>
                                <div className="card-header" draggable="false" onDragEnd={(e) => e.preventDefault()} onDragStart={(e) => e.preventDefault()}>
                                    <CardName cardName={card.cardName} cardId={card.cardId} />
                                </div>
                                <div className="card-body"
                                    onDrop={(e) => drop(e, card.cardName)}
                                    onDrag={(e) => dragOn(e, card.cardName, card.cardId)}
                                    onDragOver={(e) => { dragOver(e, card.cardName, card.cardId) }}
                                >
                                    {
                                        card.cardItems.map(
                                            (item, position) =>
                                                <CardItem
                                                    cardId={card.cardId}
                                                    itemIndex={position}
                                                    itemText={item}
                                                    key={position}
                                                    onDragStart={(e) => dragStart(e, item)}
                                                    onDragEnd={(e) => dragEnd(e)}
                                                />)
                                    }
                                </div>
                                <div className="card-footer">
                                    <AddNewItem cardId={card.cardId} />
                                </div>
                            </div>
                        )
                    })
                }
                <AddMoreCard />
            </div>
        </div>
    )
}
