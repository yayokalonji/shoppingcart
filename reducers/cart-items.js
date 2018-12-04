const CartItems = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return [...state, action.payload]
        case 'REMOVE_FROM_CART':
            return state.filte(cartItem => cartItem.id !== action.payload.id)
    }
    return state;
}
export default CartItems;