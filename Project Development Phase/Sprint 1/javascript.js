}var data = [
    {
        username:"vivek",
        password:"vivek21"    
    },
    {
        username:"mahesh",
        password:"mahesh42"
    },
    {
        username:"shelton",
        password:"shelton22"
    },
    {
        username:"shiva ranjan",
        password:"shiva 22"
    }
]
function login(){
    var uname = document.getElementById("username").value
    var pass = document.getElementById("password").value

    for (i = 0; i<data.length; i++){
        if (uname == data[i].username && pass == data[i].password){
            window.location.replace("Homepage.html")
            return false
        }
    }
    alert("incorrect password")
}
function register(){
    var runame = document.getElementById("username").value
    var rpass = document.getElementById("password").value
    var rpass1 = document.getElementById("password1").value
    if (rpass == rpass1){
        var rdata = {
            username: runame,
            password: rpass
        }
    }else{
        alert("password incorrect")
        return
    }
    
    for (i = 0; i<data.length; i++){
        if (runame == data[i].username){
            alert("Kindly check the username")
            return false
        }
    }
    data.push(rdata)
    window.location.replace("Homepage.html")
