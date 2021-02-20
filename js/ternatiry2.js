var username = prompt("masukkan username:");
var password = prompt("masukkan password: ");

if(username == "wahyudin"){
    if(password == "wahyu123"){
        document.write("anda berhasil masuk");
    }else{
        document.write("coba lagi");
    }
    
}else{
   document.write( "akun anda ilegal");
}