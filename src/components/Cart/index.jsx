import React, {  useCartContext } from '../../components/context/CartContext';
import {Link} from 'react-router-dom'
import './cart.scss'

const CartComponent = () => {
    
        const {cart, removeItem, clearCart, total} = useCartContext();

        return (
            <div className="cart">
                <h1>Carrito</h1>
                {
                    cart.length > 0 ?

                    <div className="cartContainer">
                        <div>
                        {cart.map((product, index) => {
                            return (
                                <div className ="cartBody" key={index}>
                                    <p><strong>{product.item.title}</strong></p>
                                    <p>Cantidad: {product.cantidad}</p>
                                    <p>Precio: ${product.item.price}</p>
                                    <p>Subtotal: ${product.item.price * product.cantidad}</p>
                                    <button onClick={() => removeItem(product.item.id, product.cantidad, product.item.price * product.cantidad)}>X</button>
                                </div>
                            )
                        })}
                        </div>
                        <div className="buttons">
                        <hr></hr>
                        <p><strong>Total: ${total}</strong></p>
                        
                        {cart.length > 0 && <button className="emptyCart" onClick={clearCart}>Vaciar carrito</button>}
                        <Link to="/checkout" className="checkoutCart">Finalizar compra</Link>
                        
                        </div>
                    </div> :
                    <>
                        <div className="emptyCartMsj">
                            <p>El carrito está vacío</p>
                            <Link to="/" className="buttons">Volver al inicio</Link>
                        </div>
                    </>
                }
            </div>
        )
    }
export default CartComponent;
