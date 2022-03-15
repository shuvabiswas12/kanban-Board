import React, { useContext, useEffect } from 'react'
import CardItem from './CardItem'
import CardName from './CardName';
import AddMoreCard from './AddMoreCard';
import StateContext from '../StateContext';
import AddNewItem from './AddNewItem';

export default function Cards() {

    const cardState = useContext(StateContext)

    function dragStart(e, item) {
        e.dataTransfer.setData('item', item)
        setTimeout(() => {
            e.target.style.display = "none";
        }, 0)
    }

    function dragEnd(e) {
        setTimeout(() => {
            e.target.style.display = "flex";
        }, 0)
    }

    function dragOver(e, cardName) {
        e.preventDefault()
        e.dataTransfer.setData('destinationCard', cardName)
    }

    function drop(e, cardName) {
        const draggedItem = e.dataTransfer.getData('item');
        const srcCard = e.dataTransfer.getData('srcCard');
        const destinationCard = e.dataTransfer.getData('destinationCard');
    }

    function dragOn(e, cardName) {
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
                                <div className="card-header">
                                    <CardName cardName={card.cardName} cardId={card.cardId} />
                                </div>
                                <div className="card-body" onDrop={(e) => drop(e, card.cardName)} >
                                    {
                                        card.cardItems.map((item, position) => <CardItem cardId={card.cardId} itemIndex={position} itemText={item} key={position} />)
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
