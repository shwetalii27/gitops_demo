**2\. Write a JavaScript Program to get the user registration data and push to array/local storage with AJAX POST method and data list in new page and display the output on the vagrant machine (ubuntu 22.04)**

# **SOFTWARE REQUIRED**

1. [Vagrant](https://developer.hashicorp.com/vagrant/install?utm_source=chatgpt.com)  
2. [Oracle VirtualBox](https://www.virtualbox.org/wiki/Downloads?utm_source=chatgpt.com)

# **STEP 1: Create Vagrant Folder**

Open **Windows CMD**:

mkdir vagrant-project  
cd vagrant-project

# **STEP 2: Initialize Ubuntu VM**

vagrant init ubuntu/jammy64

# **STEP 3: Configure Port Forwarding**

Open Vagrantfile:

notepad Vagrantfile

Find:

\# config.vm.network "forwarded\_port", guest: 80, host: 8080

Add below it:

config.vm.network "forwarded\_port", guest: 3000, host: 3000

Save file.

# **STEP 4: Start Ubuntu VM**

vagrant up

# **STEP 5: Login into Ubuntu**

vagrant ssh

# **STEP 6: Install Node.js and npm**

Inside Ubuntu terminal:

sudo apt update  
sudo apt install nodejs npm \-y

Check versions:

node \-v  
npm \-v

# **STEP 7: Create Project Folder**

cd /vagrant  
mkdir AJAX-chit  
cd AJAX-chit  
mkdir public

# **STEP 8: Initialize Node Project**

npm init \-y

# **STEP 9: Install Required Packages**

npm install express body-parser cors

# **STEP 10: Create Files**

Create:

* `server.js`  
* `public/index.html`  
* `public/script.js`  
* `public/display.html`

# **STEP 11: Write Backend Code**

## **`server.js`**

const express \= require("express");  
const bodyParser \= require("body-parser");  
const cors \= require("cors");

const app \= express();  
const PORT \= 3000;

app.use(cors());  
app.use(bodyParser.json());  
app.use(express.static("public"));

let users \= \[\];

app.post("/register", (req, res) \=\> {

   const user \= req.body;

   users.push(user);

   res.json({  
       message: "User registered successfully\!"  
   });

});

app.get("/users", (req, res) \=\> {

   res.json(users);

});

app.listen(PORT, () \=\> {

   console.log(\`Server running at http://localhost:${PORT}\`);

});

# **STEP 12: Write Registration Page**

## **`public/index.html`**

\<\!DOCTYPE html\>  
\<html\>  
\<head\>  
   \<title\>User Registration\</title\>  
\</head\>

\<body\>

\<h2\>User Registration Form\</h2\>

\<form id="userForm"\>

   Name:  
   \<input type="text" id="name" required\>  
   \<br\>\<br\>

   Email:  
   \<input type="email" id="email" required\>  
   \<br\>\<br\>

   Password:  
   \<input type="password" id="password" required\>  
   \<br\>\<br\>

   \<button type="submit"\>Register\</button\>

\</form\>

\<br\>

\<a href="display.html"\>View Registered Users\</a\>

\<script src="script.js"\>\</script\>

\</body\>  
\</html\>

# **STEP 13: Write AJAX \+ LocalStorage Code**

## **`public/script.js`**

document.getElementById("userForm").addEventListener("submit", function(e) {

   e.preventDefault();

   let user \= {

       name: document.getElementById("name").value,

       email: document.getElementById("email").value,

       password: document.getElementById("password").value

   };

   // Store in LocalStorage

   let users \= JSON.parse(localStorage.getItem("users")) || \[\];

   users.push(user);

   localStorage.setItem("users", JSON.stringify(users));

   // AJAX POST Request

   fetch("http://localhost:3000/register", {

       method: "POST",

       headers: {  
           "Content-Type": "application/json"  
       },

       body: JSON.stringify(user)

   })

   .then(response \=\> response.json())

   .then(data \=\> {

       alert(data.message);

       document.getElementById("userForm").reset();

   })

   .catch(error \=\> console.log(error));

});

# **STEP 14: Write Display Page**

## **`public/display.html`**

\<\!DOCTYPE html\>  
\<html\>  
\<head\>  
   \<title\>Registered Users\</title\>  
\</head\>

\<body\>

\<h2\>Registered Users\</h2\>

\<table border="1"\>

   \<thead\>

       \<tr\>  
           \<th\>Name\</th\>  
           \<th\>Email\</th\>  
       \</tr\>

   \</thead\>

   \<tbody id="userTable"\>\</tbody\>

\</table\>

\<script\>

fetch("http://localhost:3000/users")

.then(response \=\> response.json())

.then(data \=\> {

   let table \= document.getElementById("userTable");

   data.forEach(user \=\> {

       let row \= \`  
           \<tr\>  
               \<td\>${user.name}\</td\>  
               \<td\>${user.email}\</td\>  
           \</tr\>  
       \`;

       table.innerHTML \+= row;

   });

});

\</script\>

\</body\>  
\</html\>

# **STEP 15: Run Server**

Inside Ubuntu:

node server.js

Output:

Server running at http://localhost:3000

Keep terminal OPEN.

# **STEP 16: Open Browser**

Open in Windows browser:

http://localhost:3000

# **STEP 17: Test Application**

1. Enter:  
   * Name  
   * Email  
   * Password  
2. Click:

    Register

3. Data will:  
   * Store in LocalStorage  
   * Send using AJAX POST  
   * Save in array  
4. Click:

    View Registered Users

5. Registered users will display in table.

# **OUTPUT**

* User registration form displayed successfully  
* AJAX POST request executed  
* Data stored in LocalStorage  
* Registered users displayed on new page

# **IMPORTANT COMMANDS**

| Command | Purpose |
| ----- | ----- |
| `vagrant up` | Start VM |
| `vagrant ssh` | Open Ubuntu |
| `node server.js` | Start server |
| `npm install express body-parser cors` | Install packages |

