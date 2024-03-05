const { loadData, saveData } = require("../../data");

module.exports = (req, res) => {
    const { id } = req.params;
    const { name, price, discount, category, description } = req.body;

    const products = loadData();
    const productsMapped = products.map((p) => {
        if (p.id === +id) {
            const productUpdate = {
                ...p,
                name: name.trim(),
                price: +price,
                discount: +discount,
                category: category.trim(),
                description: description.trim(),
            }
            return productUpdate
        }
        return p
    });

    //return res.send(productsMapped)
    saveData(productsMapped)

    res.redirect(`/productos/detalle/${id}`)
}