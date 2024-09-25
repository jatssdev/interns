import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Home = () => {
    let [products, setProducts] = useState([])
    let getAllProducts = async () => {
        let response = await axios.get('https://dummyjson.com/products')
        console.log(response.data.products)
        setProducts(response.data.products)
    }

    useEffect(() => {
        getAllProducts()
    }, [])

    return (
        <div>
            <div className="wrapper row">
                {
                    products.length ? (
                        products.map((x) => {
                            return <Card className='col-3' >
                                <Card.Img variant="top" src={x.thumbnail} />
                                <Card.Body>
                                    <Card.Title>{x.title}</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Add To cart</Button>
                                </Card.Body>
                            </Card>
                        })
                    ) : <p>Loading...</p>
                }
            </div>

        </div>
    )
}

export default Home
