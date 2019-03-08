"use strict"
console.log("Hi");


var mainPr = (function Product(name, price, expdate) {

    this.name = name;
    this.price = price;
    this.expdate = expdate;
    this.prodId = Math.round(Math.random() * 100000);

    function ShopinBag() {
        this.productList = [];

        this.addProduct = function (product) {

            if (expdate > new Date()) {
                this.productList.push(product);
            }

        }

    }

    var jaja = new Product("jaja", 444, "Dec 13 2222")
    var Bag1 = new ShopinBag();

    console.log(Bag1);



})();
