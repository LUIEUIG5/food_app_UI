import { useContext } from 'react';
import Model from '../UI/Modal';
import classes from './Cart.module.css'
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';

const Cart = props => {
    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length>0;

    const cartItemRemoveHandler = id =>{
        cartCtx.removeItem(id);
    };

    const cartItemAddHandler = (item) =>{
        cartCtx.addItem({...item, amount: 1});
    };


    const cardItems = 
    <ul className={classes['cart-items']}>
        {cartCtx.items.map((item)=> 
        <CartItem
        key = {item.id}
        name = {item.name}
        amount={item.amount}
        price = {item.price}
        onRemove= {cartItemRemoveHandler.bind(null, item.id)}
        onAdd = {cartItemAddHandler.bind(null, item)}
        />)}</ul>;
    return (
        // <Model onClose={props.onClose}>
    //             {cardItems}
    //             <div className={classes.total}>
    //                 <span>Total Amount</span>
    //                 <span>{totalAmount}</span>  
    //             </div>
    //             <div className={classes.actions}>
    //                 <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
    //                 {hasItems && <button className={classes.button}>Order</button>}
    //             </div>
    //         </Model>

            <aside className="block col-1">
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.name}</div>
            <div className="col-2">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{' '}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            <div className="col-2 text-right">
              {item.qty} x ${item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">Items Price</div>
              <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Tax Price</div>
              <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Shipping Price</div>
              <div className="col-1 text-right">
                ${shippingPrice.toFixed(2)}
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>${totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <button onClick={() => alert('Implement Checkout!')}>
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
            )
}

export default Cart;