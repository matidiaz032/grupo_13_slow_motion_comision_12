const getCarrito = async () => {
    try {
        let response = await fetch('/cart/show')
        let cart = await response.json()
        if(cart.ok) {
            console.log(cart)
        }
    } catch (error) {
        console.log(error.message)
    }
}

getCarrito()