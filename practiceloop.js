var a;

for (a = 1; a < 100; a++) {
    if (a % 3 === 0 && a % 5 === 0) {
        console.log("fizbuz");
    }
    else if (a % 3 === 0) {
        console.log("fiz");
    }
    else if (a % 5 === 0) {
        console.log("buz");
    }
    else {
        console.log(a);
    }
}




var a = [[4, 6, 8], [6, 3, 5, 6], [4, 2, 4]];
for (var i = 0; i < a.length; i++) {
    for (var j = 0; j < a[i].length; j++) {
        console.log(a[i][j]);
    }

}

var numb, h = 0, d = 0, s = 0;

for (var i = 0; i < 1000; i++) {
    h = (i - (i % 100)) / 100;
    d = ((i % 100) - (i % 10)) / 10;
    s = i % 10;
    if ((h * h * h) + (d * d * d) + (s * s * s) === i) {
        console.log(i);
    }
}