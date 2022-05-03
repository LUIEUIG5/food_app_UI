import React from 'react'
import MealItemForm from './MealItemForm'
import classes from './MealItem.module.css'
import CartContext from '../../../store/cart-context'
import { useContext } from 'react/cjs/react.development'
import 'bootstrap/dist/css/bootstrap.css'
import Dropdown from 'react-bootstrap/Dropdown'

const MealItem = (props) => {
    const cartCtx = useContext(CartContext)
    const price = `$${props.price.toFixed(2)}`

    const addToCartHandler = (amount) => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            image: props.image,
            ingredient: props.ingredient,
            amount: amount,
            price: props.price,
        })
    }

    return (
        <li className={classes.meal}>
            <div>
                <h3 className={classes.name}>{props.name}</h3>
                {/* <img className={classes.item_image} src={props.image} /> */}
                <div className={classes.show_card}>
                    <div className={classes.item_image}>
                        <img className={classes.item_image} src={props.image} />
                    </div>
                    <div className={classes.description}>
                        {props.description}
                    </div>
                </div>
                <>
                    <Dropdown
                        className="d-inline mx-10 editPlate"
                        autoClose="outside"
                    >
                        <Dropdown.Toggle id="dropdown-autoclose-outside">
                            Edit my plate
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </>
            </div>
            <div>
                <div className={classes.price}>{price}</div>
                <MealItemForm onAddToCart={addToCartHandler} />
            </div>
        </li>
    )
}

export default MealItem
