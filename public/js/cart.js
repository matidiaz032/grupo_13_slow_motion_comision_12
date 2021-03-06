const $ = (identif) => document.querySelector(identif)

let $cart = $("#cart")
let $typePrice = $("#typePrice")
let $totalPrice = $("#totalPrice")

const getCarrito = async () => {
    try {
        let response = await fetch('/cart/show')
        let cart = await response.json()
        if(cart.ok) {
            loadCart(cart.data)
        }
    } catch (error) {
        console.log(error.message)
    }
}

const addMovieCart = async (id) => {
    try {
        let response = await fetch(`/cart/${id}?product=Movie`, {
            method: 'POST'
        })
        let cart = await response.json()
        if(cart.ok) {
            loadCart(cart.data)
        }
    } catch (error) {
        console.log(error.message)
    }
}

const addSerieCart = async (id) => {
    try {
        let response = await fetch(`/cart/${id}?product=Serie`, {
            method: 'POST'
        })
        let cart = await response.json()
        if(cart.ok) {
            loadCart(cart.data)
        }
    } catch (error) {
        console.log(error.message)
    }
}

const editTypeMovie = async (id) => {
    try {
        let response = await fetch(`/cart/${id}/editType?product=Movie`, {
            method: 'POST'
        })
        let cart = await response.json()
        if(cart.ok) {
            loadCart(cart.data)
        }
    } catch (error) {
        console.log(error.message)
    }
}

const editTypeSerie = async (id) => {
    try {
        let response = await fetch(`/cart/${id}/editType?product=Serie`, {
            method: 'POST'
        })
        let cart = await response.json()
        if(cart.ok) {
            loadCart(cart.data)
        }
    } catch (error) {
        console.log(error.message)
    }
}

const remove = async (id, type) => {
    if(type === "Movie") {
        try {
            let response = await fetch(`/cart/${id}?product=Movie`, {
                method: 'DELETE'
            })
            let cart = await response.json()
            if(cart.ok) {
                loadCart(cart.data)
            }
        } catch (error) {
            console.log(error.message)
        }
    } else if(type === "Serie") {
        try {
            let response = await fetch(`/cart/${id}?product=Serie`, {
                method: 'DELETE'
            })
            let cart = await response.json()
            if(cart.ok) {
                loadCart(cart.data)
            }
        } catch (error) {
            console.log(error.message)
        }
    }
}

const loadCart = (data) => {
    $cart.innerHTML = null;
    $totalPrice.innerText = null;
    let total = 0;

    let validatorBuy = (exp) => {
        if(exp.type === "buy") {
            return "selected"
        }
    };
    let validatorRental = (exp) => {
        if(exp.type === "rental") {
            return "selected"
        }
    }
    let typeRemove = (exp) => {
        if(exp.duration) {
            return `onclick="remove('${exp.id}', 'Movie')"`
        } else if(exp.seasons) {
            return `onclick="remove('${exp.id}', 'Serie')"`
        }
    }
    let validatorPrice = (exp) => {
        if(exp.type === "buy") {
            total += exp.Price.buy - (exp.Price.buy * exp.Price.discount / 100)
            return exp.Price.buy
        };
        total += exp.Price.rental - (exp.Price.rental * exp.Price.discount / 100)
        return exp.Price.rental
    }
    
    data.forEach(element => {
        if(element.duration) {
            let product = `
            <section class="detail-cart">
                <article class="section__article">
                    <div class="box__movie" id="conteinImage">
                        <div class="ProductImg">
                            <img src="/img/products-images/${element.image}" alt="">
                        </div>
                    </div>
                    <div class="box__movie">
                        <select name="typePrice" id="typePrice" onchange="editTypeMovie(${element.id})">
                            <option value="buy" ${validatorBuy(element)}>Comprar</option>
                            <option value="rental" ${validatorRental(element)}>Alquilar</option>
                        </select>
                        <div class="price"><p>$${validatorPrice(element)}</p></div>
                        <div class="price"><p>Descuento de %${element.Price.discount}</p></div>
                    </div>
                    <div class="box__movie">
                        <h1 class="title-product">${element.title}</h1>
                        <p class="android-p">${element.description.substring(0,90)}...</p>
                        <p class="tableDesktop-p">${element.description}</p>
                    </div>
                </article>
                <div class="modify-selection">
                    <button class="delete" ${typeRemove(element)})"><i class="far fa-trash-alt"></i></button>
                   
                </div>
            </section>
            `;
            $cart.innerHTML += product
        } else {
            let product = `
            <section class="detail-cart">
                <article class="section__article">
                    <div class="box__movie" id="conteinImage">
                        <div class="ProductImg">
                            <img src="/img/products-images/${element.image}" alt="">
                        </div>
                    </div>
                    <div class="box__movie">
                        <select name="typePrice" id="typePrice" onchange="editTypeSerie(${element.id})">
                            <option value="buy" ${validatorBuy(element)}>Comprar</option>
                            <option value="rental" ${validatorRental(element)}>Alquilar</option>
                        </select>
                        <div class="price"><p>$${validatorPrice(element)}</p></div>
                        <div class="price"><p>Descuento de %${element.Price.discount}</p></div>
                    </div>
                    <div class="box__movie">
                        <h1 class="title-product">${element.title}</h1>
                        <p class="android-p">${element.description.substring(0,90)}...</p>
                        <p class="tableDesktop-p">${element.description}</p>
                    </div>
                </article>
                <div class="modify-selection">
                    <button class="delete" ${typeRemove(element)}><i class="far fa-trash-alt"></i></button>
                </div>
            </section>
            `;
            $cart.innerHTML += product
        }
    });

    $totalPrice.innerText = `Precio Total: $${total}`

}

$cart && getCarrito()