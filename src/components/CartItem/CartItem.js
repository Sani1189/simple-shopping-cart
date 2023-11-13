import { useEffect, useState } from "react"
import { FaTrashAlt } from "react-icons/fa"
import { useDispatch } from "react-redux"
import { removeItem, updateQuantity } from "../../redux/slice/cartSlice"

import {toast, ToastContainer} from 'react-toastify';

import "./cartItem.css"

export default function CartItem({data}) {

    const dispatch = useDispatch()

    const [quantity, setQuantity] = useState(data?.quantity)
    const [totalPrice, setTotalPrice] = useState(+data?.price * +data?.quantity)

    const handleChange = (e) => {
        const value = parseInt(e.target.value) > 0 ? parseInt(e.target.value) : 1
        setQuantity(value)
    }

    const handleRemove = () => {
        dispatch(removeItem({id: data?.id}))
        toast("Removed from cart Successfully!", {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    useEffect(() => {
        setTotalPrice(data?.price * quantity)
        dispatch(updateQuantity({id: data?.id, quantity}))
    }, [quantity, data?.price, data?.id, dispatch])

    return(
        <tr>
           <td style={{maxWidth: 450, textAlign: 'left'}}>
                <div className="d-flex align-items-center">
                    <img src={data.imageUrl} alt="" style={{width: 100}} /> 
                    <p style={{marginLeft: 10}}>{data.name}</p>
                </div>
            </td> 
            <td className="price">
                {data.price}$
            </td>
            <td>
                <div className="d-flex align-items-center justify-content-center">
                    <button className="changeBtn" onClick={() => {
                        if (quantity > 1) {
                            setQuantity(pre => pre - 1)
                        }
                    }}>-</button>
                    <input type="number" value={quantity} className="input" onChange={handleChange} />
                    <button className="changeBtn" onClick={() => setQuantity(pre => pre + 1)}>+</button>
                </div>
            </td>
            <td className="price" style={{fontWeight: 'bold'}}>
                {totalPrice}$
            </td>
            <td>
                <button className="removeBtn" onClick={handleRemove}>
                    <FaTrashAlt />
                </button>
            </td>
        </tr>
    )
}
export const MyToastContainer2 = () => <ToastContainer />;