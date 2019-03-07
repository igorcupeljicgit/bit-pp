"use strict"




var main = (function () {
    console.log("hi")

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
            var prices = [];
            var mostExpencivePrice;
            for (var i = 0; i <)



        }


        var banana = new Product("banana", 23, "Dec 16 2033")
        var jabuka = new Product("jabuka", 223, "Dec 16 2020")
        var kivi = new Product("kivi", 3663, "Dec 16 2055")

        var fer = new ShoppingBag()
        fer.addProduct(banana);
        fer.addProduct(kivi);
        fer.addProduct(jabuka);

        // console.log(fer.listOfProducts);
        console.log(fer.getMostExpensive());




    }) ();


