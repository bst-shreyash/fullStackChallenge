import React from 'react'
import Card from 'react-bootstrap/Card'

const Cards = ({ data, onCardClick }) => {

    return (
        <>
            {
                data.map((element, k) => {
                    return (
                        <Card onClick={()=>onCardClick(element)} style={{ width: '15rem',position:'relative' }} className="hove mb-4">
                            <Card.Img variant="top" style={{ width: '13rem', height:'13rem'}} className='cd' src={element.appimg} />

                            <div className="card_body">
                                <div className="upper_data col-lg-12 d-flex justify-content-between align-items-center" style={{padding:'0.5rem'}}>
                                    <h4 className='mt-2'>{element.appname}</h4>
                                    <span>{element.rating}&nbsp;★</span>
                                </div>
                            </div>
                        </Card>
                    )
                })
            }
        </>
    )
}

export default Cards