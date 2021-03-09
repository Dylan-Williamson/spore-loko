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


export const removeFromCart = (props) => ({
    type: "REMOVE_FROM_CART",
    id: props.id
})