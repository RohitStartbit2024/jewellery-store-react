import { useState } from "react"
import { useDispatch } from "react-redux"
import { addQuantity, deleteItem, subQuantity  } from "../../../store/features/cartSlice" 
import { useNavigate } from "react-router-dom"

export default function(props){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const[Quantity,setQuantity]= useState(props.quantity)
    function handlePlus(){
        if(Quantity<5){setQuantity(Quantity+1)
            dispatch(addQuantity(props.sku));
        } 
    }
    function handleMinus(){
        if(Quantity>1){setQuantity(Quantity-1)
            dispatch(subQuantity(props.sku));
        } 
    }
    function handleDelete(){
        dispatch(deleteItem(props.sku))
    }

    return(
        <div className="flex md:font-semibold p-2 md:p-4 items-center text-[10px] md:text-base">
                    <div className="w-[43%] md:w-[41%] flex items-center" onClick={()=> navigate(`/category/${props.sku}`)}>
                        <div className="w-[25%] md:h-16 mr-1 md:mr-5">
                            <img src={props.image} alt="" className="w-full h-full"/>
                        </div>
                        <p>{props.name}</p>
                    </div>
                    <p className="w-[15%]">$ {props.price}</p>
                    <div className="w-[22%]">
                        <div className="flex justify-between text-[10px] w-[90%] md:text-sm md:w-[50%] border-2">
                            <p className="hover:bg-gray-200 p-1 md:p-1" onClick={handleMinus}><i className="fa-solid fa-minus"></i></p>
                            <p className="text-center p-1 md:p-1 md:text-sm">{Quantity}</p>
                            <p className="hover:bg-gray-200 p-1 md:p-1" onClick={handlePlus}><i className="fa-solid fa-plus"></i></p>
                        </div>
                    </div>
                    <p className="w-[22%]">$ {props.price * Quantity}</p>
                    <div className="w-[3%] md:w-[5%]" onClick={handleDelete}><i className="fa-solid fa-trash text-gray-400 hover:text-black"></i></div>
                </div>
                
    )
}