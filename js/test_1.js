// var amount = 99.99;

// amount = amount*2 ;
// console.log(amount);

// amount = "$ " + String(amount);

// console.log(amount);


var a = ".";
var b = true;
// var str = prompt("Give a text for the program!");
var str = "Hello, my name is Andrii. I'm lookin for new phone.";
var new_str = "";
var str_arr = str.split(" ");


for (i = 0; i<str_arr.length; i++) {

    var i_arr = str_arr[i];

    new_str = new_str.concat(str_arr[i] + " ");

    if (b) {

        for(j = 0; j<i_arr.length; j++) {

            if (i_arr[j] == a) {
                console.log(new_str);
                console.log("here is a point");
                console.log("----------------------------------------------");
                console.log("number of spaces to the point: " + i);
                b = false;
            } 
    
        }

    } else {
        break;
    }


}

console.log("----------------------------------------------");
console.log("total number of spaces: " + (str_arr.length - 1));
console.log("----------------------------------------------");

for (i = 0; i<str_arr.length; i++) {

    var i_arr = str_arr[i];

    for(j = 0; j<i_arr.length; j++) {

        console.log(i_arr);

        if (i_arr[j] == a) {
            if (j == str.indexOf(".")) {
                console.log("Here is the first point");
            } else {
                console.log("here is a point");
            }
            
        } 

    }

}

console.log("----------------------------------------------");
console.log("total number of spaces: " + (str_arr.length - 1));
console.log("----------------------------------------------");


// var str = "Hello, my name is Andrii. I'm lookin for new phone.";
// var new_str = "";
// var str_arr = str.split(" ");
// var point = str.indexOf(".");

// for(i = 0; i<str.length; i++) {

//     new_str = new_str.concat(str[i]);

// }

// console.log(new_str);
