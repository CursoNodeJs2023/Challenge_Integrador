const shopController = {
    shop:(req, res) => res.send('Route for Shop View'),
    shopItem:(req, res) => res.send(`Route for find and retrieve a product from the id: ${req.params.id}`),
    addItemToCart:(req, res) => res.send('Route for add the current item to the shop cart'),
    cart:(req, res) => res.send('Route cart View'),
    checkout:(req, res) => res.send('Route for got checkout page')

}
module.exports = shopController;