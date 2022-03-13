import React from 'react'

export default function AddCard() {
    return (
        <div className="add-another-card">
            <button className="btn">
                <div className="row flex-align-items-center">
                    <i className="fa-solid fa-plus btn-icon btn-fade"></i> &nbsp; <span className="btn-text text-light-dark btn-fade">Add another card</span>
                </div>
            </button>
        </div>
    )
}
