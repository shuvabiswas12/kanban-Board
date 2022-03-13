import { IMyCard } from '../interfaces'
import React from 'react'
import CardItem from './CardItem'
import AddItem from './AddItem'

export default function Card(card: IMyCard) {

    return (
        <div className="card">
            <div className="card-header">
                <p className="text-size-2 card-name text-white" title="Double click to edit the card name">{card.cardName}</p>
                <p className="three-dot" title="Delete card"><i className="fa-regular fa-trash-can icon text-light-blueGrey"></i></p>
            </div>

            <div className="card-body">
                {
                    card.cardItems?.map((item, index) => {
                        return <CardItem itemText={item} itemId={index} key={index} />
                    })
                }
            </div>

            <div className="card-footer">
                {/* <button className="btn">
                    <div className="row flex-align-items-center">
                        <i className="fa-solid fa-plus btn-icon btn-fade"></i> &nbsp; <span className="btn-text text-light-dark btn-fade">Add item</span>
                    </div>
                </button> */}

                <AddItem />
            </div>
        </div>
    )
}
