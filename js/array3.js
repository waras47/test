//array slice atau memotong
var array1 = [1,2,3,4,5,6,7,8,9];

array2 = array1.slice(3,6);
console.log(array1.join("-"));
console.log(array2.join("-"));

//for each
array1.forEach(function(e){
    console.log(e);
})