for(var i = 0; i < 10; i++){
    document.write("<p>wahyudin"+ i +"</p>");
}

var cars = ["BMW","LAMBORGINI", "FERRARI"];

for(i in cars){
    document.write(i+"."+cars[i]+"<br>");
}

var cars = ["BMW","LAMBORGINI", "FERRARI"];

cars.forEach(function(cars){
    document.write("<p>"+cars+"</p>");
});


