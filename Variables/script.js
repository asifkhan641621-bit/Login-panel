function showVariables() {

    var city = "Attock";

    let age = 22;

    const country = "Pakistan";
    
    document.getElementById("output").textContent =
        "city: " + city + " | Age: " + age + " | country: " + country;
}

function sayHello() {
    let message = "Hello Students Welcome to JavaScript"; 
    document.getElementById("output").textContent = message;
}

function showname() {
    let name = document.getElementById("username").value;
    let studentID = document.getElementById("stdID").value;
    let email = document.getElementById("email").value;

    if (name === "") {
        document.getElementById("output").textContent = "Please Enter Your Name";
    } 
    else if (studentID === "") {
        document.getElementById("output").textContent = "Please Enter Your Student ID";
    } 
    else if (email === "") {
        document.getElementById("output").textContent = "Please Enter Your Email";
    } 
    else {
        document.getElementById("output").textContent = 
            "Hello " + name + " | Student ID: " + studentID + " | Email: " + email;
    }
}
