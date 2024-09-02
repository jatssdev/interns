import React, { useContext, useState } from 'react'
import { MainContext } from '../App'

const ProductDetails = () => {
    let { product } = useContext(MainContext)
    let [img, setImg] = useState(product.img)

    let setImage = (src) => {
        setImg(src)
    }

    return (
        <>
            <div className="grid grid-cols-12">
                <div className="col-span-6  p-5">
                    <div className="mainImg">
                        <img className='w-full' src={img} alt="" />
                    </div>
                    <div className="flex gap-3 my-3">
                        <div className="img">
                            <img className='w-full' onClick={() => setImage(product.img)} src={product.img} alt="" />
                        </div>
                        <div className="img">
                            <img className='w-full' onClick={() => setImage(product.img2)} src={product.img2} alt="" />
                        </div>
                        <div className="img">
                            <img className='w-full' onClick={() => setImage(product.img3)} src={product.img3} alt="" />
                        </div>
                        <div className="img">
                            <img className='w-full' onClick={() => setImage(product.img4)} src={product.img4} alt="" />
                        </div>
                        <div className="img">
                            <img className='w-full' onClick={() => setImage(product.img5)} src={product.img5} alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-span-6">
                    <h1>{product.title}</h1>
                    <button>Add To Cart</button>
                </div>
            </div>

        </>
    )
}

export default ProductDetails
