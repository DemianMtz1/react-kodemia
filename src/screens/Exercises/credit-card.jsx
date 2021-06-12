import React, { useState } from 'react'

export const Exercises = () => {

    const [creditCard, setCreditCard] = useState({
        creditCardNumber: '4242 4242 4242 4242',
        owner: 'Eric Martinez',
        date: '13/14',
        cvc: '344'
    })


    const handleChangeCreditCard = ev => {
        setCreditCard({
            ...creditCard,
            [ev.target.name]: ev.target.value
        })
    }

    const handleChangeDate = (ev) => {
        let selectedDate = new Date(ev.target.value)
        let date = `${selectedDate.getDate()}/${selectedDate.getFullYear().toString().split('').slice(2,4).join().replace(',','')}`;
        setCreditCard({
            ...creditCard,
            date
        })
    }

    return (
        <div className="container container-fluid">
            <div className="row">
                <div className="col-12">
                    <div className="w-100 bg-dark p-4 text-white mt-2 rounded shadow">
                        <div className="d-flex justify-content-between">
                            <h2>Credit Card</h2>
                            <h2>VISA</h2>
                        </div>
                        <p>{creditCard.creditCardNumber}</p>
                        <p>{creditCard.owner}</p>
                        <div className="d-flex justify-content-between">
                            <p>{creditCard.date}</p>
                            <p>{creditCard.cvc}</p>
                        </div>
                    </div>
                </div>

                <div className="col-12">
                    <form className="bg-light p-4 mt-5">
                        <div className="form-group mb-4">
                            <label>Credit Card</label>
                            <input
                                className="form-control"
                                maxLength={16}
                                name='creditCardNumber'
                                onChange={handleChangeCreditCard}
                                type="text"
                            />
                        </div>

                        <div className="form-group mb-4">
                            <label>Owner</label>
                            <input
                                className="form-control"
                                name='owner'
                                onChange={handleChangeCreditCard}
                                type="text"
                            />
                        </div>

                        <div className="form-group mb-4">
                            <label>Validate Date</label>
                            <input
                                className="form-control"
                                maxLength={5}
                                name='date'
                                onChange={handleChangeDate}
                                type="date"
                            />
                        </div>

                        <div className="form-group mb-4">
                            <label>CVC</label>
                            <input
                                className="form-control"
                                maxLength={3}
                                name='cvc'
                                onChange={handleChangeCreditCard}
                                type="text"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
