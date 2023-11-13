
import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem/CartItem';
import './styles.css';

import { MyToastContainer2 } from '../components/CartItem/CartItem';
import { ToastContainer , toast} from 'react-toastify';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav/Nav';

export default function Cart() {
    const showSuccess = () => {
        toast.success("Check Out Successfully!", {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    const cart = useSelector((state) => state.cart);


    return (
        <>
        <Nav />
        <div className="Container">
            <div>
                {cart?.list && cart?.list?.length > 0 ? (
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Sub Total</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody style={{ verticalAlign: 'middle' }}>
                                {cart?.list.map((item) => (
                                    <CartItem key={item?.id} data={item} />
                                ))}
                                <tr className='mytotal'>
                                    <td colSpan={6} style={{ textAlign: 'right' }}>
                                        Total : {cart?.total} $
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className='mybtn'>
                        <button onClick={showSuccess} >Check Out</button>
                        </div>
                    </div>
                ) : (
                    <div className="emptyCart">
                        <h3>Your cart is empty!</h3>
                        <Link to="/">Continue Shopping</Link>
                    </div>
                )}
            </div>
            <ToastContainer />

            <MyToastContainer2 />
        </div>
        </>
    );
}
