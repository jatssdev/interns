import { useContext } from "react"
import { tshirts } from "./Products"
import { mainContext } from "./App"

function Home() {
    let { products, AddToCart, singleProductHandler } = useContext(mainContext)

    return (
        <>
            <h1>Earbuds</h1>
            <div className="wrapper">
                {
                    products.map((x) => {
                        return <div className="product">
                            <div onClick={() => singleProductHandler(x.id)}>
                                <img src={x.img} alt="" />
                                <h2>{x.title}</h2>
                                <h3>₹{x.price}</h3>
                            </div>
                            <button onClick={() => AddToCart(x.id)}>Add To cart</button>
                        </div>
                    })
                }
            </div>
            <h1>Tshirts</h1>
            <div className="wrapper">
                {
                    tshirts.map((x) => {
                        return <div className="product">
                            <div onClick={() => singleProductHandler(x.id)}>
                                <img src={x.img} alt="" />
                                <h2>{x.title}</h2>
                                <h3>₹{x.price}</h3>
                            </div>
                            <button onClick={() => AddToCart(x.id)}>Add To cart</button>
                        </div>
                    })
                }
            </div>
        </>
    )
}

export default Home