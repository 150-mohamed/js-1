var productNameInput = document.getElementById('productName');
var productPriceInput = document.getElementById('productPrice');
var productcategoryInput = document.getElementById('productcategory');
var productDescInput = document.getElementById('productDesc');
var productContainer;
var mainptn = document.getElementById('mainptn');
if (localStorage.getItem('products') == null) {
    productContainer = [];
}
else {
    productContainer = JSON.parse(localStorage.getItem('products'));
    displayProducts(productContainer);
}
function addProduct() {
    if (validateProductName()) {
        var product = {
            name: productName.value,
            price: productPrice.value,
            category: productcategory.value,
            Desc: productDescInput.value
        }
        productContainer.push(product);
        localStorage.setItem("products", JSON.stringify(productContainer));
        displayProducts(productContainer);
        clearForm();
    }
    else{
        alert(`productName input invald`)
    }
}
function displayProducts(productsList) {
    var cartona = ``;
    for (var i = 0; i < productsList.length; i++) {
        cartona += `<tr>
        <td>${i}</td>
        <td>${productsList[i].name}</td>
        <td>${productsList[i].price}</td>
        <td>${productsList[i].category}</td>
        <td>${productsList[i].Desc}</td>
        <td><button onclick="updateProduct(${i});" class="btn btn-warning">update</button> </td>
        <td><button onclick="deleteProduct(${i})" class="btn btn-danger">delete</button> </td>
    </tr>`;
    }
    document.getElementById('tableRow').innerHTML = cartona;
}
function clearForm() {
    productNameInput.value = "";
    productPriceInput.value = "";
    productcategoryInput.value = "";
    productDescInput.value = "";
}
function deleteProduct(productIndex) {
    productContainer.splice(productIndex, 1);
    localStorage.setItem("products", JSON.stringify(productContainer));
    displayProducts(productContainer);
}
function searchProducts(term) {
    var searchProducts = [];
    for (var i = 0; i < productContainer.length; i++) {
        if (productContainer[i].name.toLowerCase().includes(term.toLowerCase())) {
            searchProducts.push(productContainer[i]);
        }
    }
    displayProducts(searchProducts);
}
function updateProduct(index) {
    productNameInput.value = productContainer[index].name;
    productPriceInput.value = productContainer[index].price;
    productcategoryInput.value = productContainer[index].category;
    productDescInput.value = productContainer[index].Desc;
    mainptn.innerHTML = "update product"
}
function validateProductName() {
    var regex = /^[A-Z][a-z]{3,8}$/;
    if (regex.test(productNameInput.value)) {
        return true;
    }
    else {
        return false;
    }
}


  




