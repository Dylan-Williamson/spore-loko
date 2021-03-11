export const addToCart = (props) => ({
    type: "ADD_TO_CART",
    item: {
        id: props.id,
        title: props.title,
        image: props.image,
        price: props.price,
        rating: props.rating,
    }
});

export const emptyCart = () => ({
    type: "EMPTY_CART",
    // cart: props.cart
})

export const removeFromCart = (props) => ({
    type: "REMOVE_FROM_CART",
    id: props.id
})

export const handleLoginFormChange = (e) => ({
    type: "LOGIN_FORM_CHANGE",
    payload: {
        name: e.target.name,
        value: e.target.value
    }
})

export const setUser = (user) => ({
    type: "SET_USER",
    user: user
})
