"use strict"




var main = (function () {
    // console.log("hi")

    function Product(name, price, expdate) {
        this.name = name;
        this.price = price;
        this.productId = Math.round(Math.random() * 100000);
        this.expdate = new Date(expdate);

        this.addInfo = function () {
            var productCode = this.name.slice(0, 2).toUpperCase() + "" + this.productId;
            return productCode + "," + this.name + "," + this.price;


        }
    }
    function ShoppingBag() {
        this.listOfProducts = [];

        this.addProduct = function (product) {
            var date = new Date()
            if (product.expdate > date) {
                this.listOfProducts.push(product);

            } else {
                console.log("Data has expired");
            }
            return this.listOfProducts;
        }

        this.avreageProductPrice = function () {
            var sum = 0;
            for (var i = 0; i < this.listOfProducts.length; i++) {
                sum += this.listOfProducts[i].price;
            }
            return sum / this.listOfProducts.length;
        }


        this.getMostExpensive = function () {

            var maxPrice = this.listOfProducts[0].price;

            for (var i = 1; i < this.listOfProducts.length; i++) {
                var curentProduct = this.listOfProducts[i];
                if (maxPrice < curentProduct.price) {
                    maxPrice = curentProduct.price;

                }
                for (var j = 0; j < this.listOfProducts.length; j++) {
                    var getMostExpensiveProduct;
                    if (this.listOfProducts[j].price === maxPrice) {
                        getMostExpensiveProduct = this.listOfProducts[j]

                    }
                }
                return getMostExpensiveProduct
            }
        }

        this.calculateTotalPrice = function () {
            var totalPrice = 0;

            for (var i = 0; i < this.listOfProducts.length; i++) {
                totalPrice += this.listOfProducts[i].price;
            }
            return totalPrice;
        }


    }

    function PaymentCard(accauntBalance, accauntValidationDate) {
        this.accauntBalance = accauntBalance;
        this.accauntStatus = new Date(accauntValidationDate) < new Date ? 'inactive' : 'active';
        this.accauntValidationDate = accauntValidationDate;

    }

    function checkOutAndBuy(shopingKart, creditCard) {
        if (creditCard.accauntStatus === "active") {
            if (creditCard.accauntBalance >= shopingKart.calculateTotalPrice()) {
                console.log("Uspesna kupovina");
            } else {
                console.log("Nedostaje ti" + shopingKart.calculateTotalPrice() - creditCard.accauntBalance + "dinar");
            }
        } else {

            console.log("Credit card is not active");
        }

    }

    var banana = new Product("banana", 23, "Dec 16 2033")
    var jabuka = new Product("jabuka", 223, "Dec 16 2020")
    var kivi = new Product("kivi", 3663, "Dec 16 2055")

    var visa = new PaymentCard(100, "Jan 10 2020");

    var fer = new ShoppingBag()
    fer.addProduct(banana);
    fer.addProduct(kivi);
    fer.addProduct(jabuka);

    // console.log(fer.listOfProducts);
    //  console.log(fer.listOfProducts);

    // console.log(fer.getMostExpensive());
    // console.log(fer.calculateTotalPrice());
    checkOutAndBuy(fer, visa);

})();


