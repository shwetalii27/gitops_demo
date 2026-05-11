document.getElementById("regform").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission  

    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let address = document.getElementById("address").value;

    let userdata={
        username: username,
        email: email,
        password: password,
        address: address
    };

    let users=JSON.parse(localStorage.getItem("users")) || [];
    users.push(userdata);
    localStorage.setItem("users", JSON.stringify(users));
    window.location.href = "list.html"; // Redirect to list page
});