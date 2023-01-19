import React from 'react'
import Card from 'react-bootstrap/Card'

const AppScreen = ({data}) => {
    return (
        <>
            {
                data.map((element) => {
                    return (
                        <>
                            <Card style={{ width: '13rem',border:"none" }} className="container mb-4">
                                <Card.Img variant="top" className='cd' src={element} />
                            </Card>
                        </>
                    )
                })
            }

        </>
    )
}

export default AppScreen