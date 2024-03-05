const { loadData } = require("../../data");

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = (req, res) => {
    const products = loadData()
    const productsVisited = products.filter(p => p.category === "visited")
    const productsInsale = products.filter(p => p.category === "in-sale")
    res.render('./other/home', { productsVisited, productsInsale, toThousand})
}