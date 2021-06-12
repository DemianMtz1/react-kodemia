/**
 * import React from 'react'

export const Exercises = () => {

    let pets = [
        { name: 'pet', age: 15 },
        { name: 'pet3', age: 15 },
        { name: 'pet4', age: 15 },
        { name: 'pet5', age: 15 },
        { name: 'pet6', age: 15 },
        { name: 'pet7', age: 15 },
        { name: 'pet8', age: 15 },
        { name: 'pet9', age: 15 },
    ]

    const UIPets = pets.map((pet, idx) => <li className='list-group-item' key={idx}>Name: {pet.name}-Age: {pet.age}</li>)

    const builderPets = (pet, idx) => <li className='list-group-item' key={idx}>Name: {pet.name}-Age: {pet.age}</li>


    

    return (
        <div className='container'>
            <div className="row justify-content-center">
                <div className="col-12">
                    <ul className="list-group mt-4">
                        {
                            UIPets
                        }
                    </ul>

                    <ul className="list-group mt-4">
                        {pets.map(builderPets)}
                    </ul>
                </div>
            </div>
        </div>
    )
}

 */


import React from 'react'

export const Exercises = () => {
    const petsData = {
        dogs: [
            {
                name: "Sr. Peabody",
                age: "5",
            },
            {
                name: "Solovino",
                age: "10",
            },
        ],
        cats: [
            {
                name: "Misifu",
                age: "1",
            },
            {
                name: "Nefermishi",
                age: "5",
            },
        ],
    };



    return (
        <div className='container'>
            <div className="row justify-content-center">
                <div className="col-12">
                    <ul className="list-group mt-4">
                        {
                            Object.entries((petsData)).map(([title, pet]) => {
                                return (
                                    <div>

                                        <li className="list-group-item display-4" >{title}</li>
                                        {pet.map((petName, idx) => <li className="list-group-item" key={idx}>{petName.name}</li>)}
                                    </div>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}
