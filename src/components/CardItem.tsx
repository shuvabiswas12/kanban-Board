import React from 'react'

interface MyCardItem{
    itemId: number,
    itemText: string,
}

export default function CardItem(cardItem: MyCardItem) {
    return (
        <div className="card-item" draggable="true">
            <div className="item-text">
                <p className="text-size-2" title="Double click to edit the item">{cardItem.itemText}</p>
            </div>
            <div className="item-actions">
                <button className="action" title="Delete item"><i className="fa-regular fa-trash-can icon"></i></button>
            </div>
        </div>
    )
}
