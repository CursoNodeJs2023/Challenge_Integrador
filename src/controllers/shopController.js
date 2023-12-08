
const shopController = {
    shop: async(req, res) =>  res.render('../views/shop/shop' , {
        view: {
            title:  "Shop | Funkoshop"
        },
        
    }),
    shopItem:(req, res) => res.render('../views/shop/item' , {
        view:{
            title: "Item | Funkoshop"
        }
    }),
    addItemToCart:(req, res) => res.send('Route for add the current item to the shop cart'),

    cart:(req, res) => res.render('../views/shop/cart' , {
        view:{
            title: "Cart | Funkoshop"
        },
    }),
    checkout:(req, res) => res.send('Route for got checkout page')

}
module.exports = shopController;