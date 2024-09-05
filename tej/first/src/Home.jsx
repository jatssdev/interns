import { tshirts } from "./Products"

function Home({ products }) {

    return (
        <>
            <h1>Earbuds</h1>
            <div className="wrapper">
                {
                    products.map((x) => {
                        return <div className="product">
                            <img src={x.img} alt="" />
                            <h2>{x.title}</h2>
                            <h3>₹{x.price}</h3>
                            <button>Add To cart</button>
                        </div>
                    })
                }
            </div>
            <h1>Tshirts</h1>
            <div className="wrapper">
                {
                    tshirts.map((x) => {
                        return <div className="product">
                            <img src={x.img} alt="" />
                            <h2>{x.title}</h2>
                            <h3>₹{x.price}</h3>
                            <button>Add To cart</button>
                        </div>
                    })
                }
            </div>
        </>
    )
}

export default Home