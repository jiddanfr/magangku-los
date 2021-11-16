const productForm = document.getElementById('personForm');

const {remote} = require('electron')
const main = remote.require('./main')

const productOrder = document.getElementById('order');
const productName = document.getElementById('name');
const productDescription = document.getElementById('description');

productForm.addEventListener('submit', (e) =>{
    e.preventDefault();

    const newProduct = {
        order : productOrder.value,
        name : productName.value,
        description : productDescription.value,

    }
    main.createProduct(newProduct)
})