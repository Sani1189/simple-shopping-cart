import { useDispatch } from "react-redux"
import { addToCart } from "../../redux/slice/cartSlice"
import  "./productlist.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function ProductList({data}) {


    const dispatch = useDispatch()
    const handleAddToCart = () => {
        
        dispatch(addToCart({
            ...data,
            quantity: 1
        }));
        toast.success("Added to cart Successfully!", {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
                     
    };

    return (
        <div className="productList">
            <div className="productInfo">
                <img src={data.imageUrl} alt="" />
                <p className="name">{data.name}</p>
                <p><i>{data.author}</i></p>
            </div>
            <div className="footer">
                <span className="price">{data.price}$</span>
                <button className="addToCart" onClick={handleAddToCart}>Add to cart
                </button>               
            </div>
            
            
        </div>
    )
}
export const MyToastContainer = () => <ToastContainer />;