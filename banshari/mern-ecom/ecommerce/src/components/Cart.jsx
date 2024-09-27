import React, { useContext } from "react";
import { maincontext } from "../App";
import { MdDelete } from "react-icons/md";


const Cart =() => {
const {cart,RemoveCart,inr,qtyDec,qtyInc} =   useContext(maincontext)
    return(
        <>
        <div className="flex gap-9 p-20">
             <div className='border-ivory border-4  rounded-sm w-[70%]'>
             <div className="gap-4 items-center flex p-5 text-center">
                <h3 className="w-40"></h3>
                <h3 className="w-[60%]">Product</h3>
                <h3 className="w-auto">Subtotal</h3>
                <h3 className="w-auto">remove</h3>
                </div>
            <div className=" border-ivory border-2"></div>
                {
                    cart.map((x) => {

                        return <>
                       
                        <div className="gap-4 items-center flex p-5">
                            
                            <img className="w-40" src={x.img} alt="" />
                            <h2 className="w-[60%] text-center">{x.title}</h2>
                            <div className="w-auto">
                                {/* if quantity increase this prise should increase */}
                                <h3 className="text-center">{x.price * x.qty}</h3>
                                <div className="flex gap-2">
                                    <button onClick={() => qtyInc(x)}>+</button>
                                    <span className="px-2 border-ivory border-2">{x.qty}</span>
                                    <button onClick={() => qtyDec(x)}>-</button>
                                </div>
                            </div>
                            {/* //NOT WORKING */}
                            <div className="items-center">  
                            <button className="p-2 bg-black text-white rounded-lg w-auto" onClick={() => RemoveCart(x.id)}><MdDelete /></button>
                            </div>
                        </div>
                        </>
                    })
                }
            </div>
            <div className='border-ivory border-4 rounded-sm w-[30%] size-80'>
            <div className="items-center p-5">
                <h3 className="text-center">Total</h3>
            </div>
            <div className=" border-ivory border-2"></div>
            <div className="flex justify-between">
                <div className="p-5">
                    <h3 className="leading-10">Subtotal</h3>
                    <h3 className="leading-10">Shipping Charges</h3>
                </div>
                <div className="p-5">
                     {/* //NOT WORKING */}
                    <h3 className="leading-10">{inr}1000</h3>
                    <h3 className="leading-10"><b>₹</b>1000</h3>  
                    {/* ctrl+shift+4 */}
                </div>
            </div>
            <div className=" border-ivory border-2"></div>
                <div className="flex justify-between">
                <div className="p-5">
                <h3 className="leading-10">Total Amount</h3>
                </div>
                <div className="p-5">
                <h3 className="leading-10">{inr}1000</h3>
                </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Cart;