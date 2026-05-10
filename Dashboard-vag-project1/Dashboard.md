**Create a responsive web page which shows the ecommerce/college/exam admin dashboard with sidebar and statistics in cards using HTML, CSS and Bootstrap and display the output on the local Virtual Machine OS (ubuntu 22.04)** 

Ensure PC has virtualbox and vagrant installed

# **1\. Create a Project Folder on Windows**

Example:

D:\\dashboard

Put:

* `index.html`

inside this folder.

Index.html:  
\<\!DOCTYPE html\>  
\<html lang="en"\>  
\<head\>  
  \<meta charset="UTF-8" /\>  
  \<meta name="viewport" content="width=device-width, initial-scale=1.0"/\>  
  \<title\>College Admin Dashboard\</title\>  
  \<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet"/\>  
  \<style\>  
    body { background: \#f4f6f9; }  
    /\* SIDEBAR \*/  
    \#sidebar {  
      width: 220px;  
      min-height: 100vh;  
      background: \#1e3a5f;  
      position: fixed;  
      top: 0; left: 0;  
    }  
    \#sidebar h4 { color: \#fff; padding: 20px; border-bottom: 1px solid \#2d5080; }  
    \#sidebar a {  
      display: block;  
      color: \#aac4e0;  
      padding: 12px 20px;  
      text-decoration: none;  
    }  
    \#sidebar a:hover, \#sidebar a.active { background: \#2d5080; color: \#fff; }  
    /\* MAIN \*/  
    \#main { margin-left: 220px; padding: 24px; }  
    /\* STAT CARD \*/  
    .stat-card {  
      background: \#fff;  
      border-radius: 10px;  
      padding: 20px;  
      border-left: 5px solid;  
      box-shadow: 0 2px 8px rgba(0,0,0,0.06);  
    }  
    .stat-card h3 { font-size: 2rem; font-weight: 700; margin: 0; }  
    .stat-card p  { color: \#888; margin: 4px 0 0; }  
  \</style\>  
\</head\>  
\<body\>  
\<\!-- SIDEBAR \--\>  
\<div id="sidebar"\>  
  \<h4\>🎓 CollegeAdmin\</h4\>  
  \<a href="\#" class="active"\>🏠 Dashboard\</a\>  
  \<a href="\#"\>👨‍🎓 Students\</a\>  
  \<a href="\#"\>👩‍🏫 Faculty\</a\>  
  \<a href="\#"\>📚 Courses\</a\>  
  \<a href="\#"\>📋 Attendance\</a\>  
  \<a href="\#"\>📝 Exams\</a\>  
  \<a href="\#"\>💰 Fees\</a\>  
  \<a href="\#"\>⚙️ Settings\</a\>  
\</div\>  
\<\!-- MAIN CONTENT \--\>  
\<div id="main"\>  
  \<h4 class="mb-1"\>Welcome, Admin 👋\</h4\>  
  \<p class="text-muted mb-4"\>Academic Year 2024–25\</p\>  
  \<\!-- STAT CARDS \--\>  
  \<div class="row g-3 mb-4"\>  
    \<div class="col-md-3"\>  
      \<div class="stat-card" style="border-color:\#1e3a5f"\>  
        \<h3\>3,847\</h3\>  
        \<p\>Total Students\</p\>  
      \</div\>  
    \</div\>  
    \<div class="col-md-3"\>  
      \<div class="stat-card" style="border-color:\#28a745"\>  
        \<h3\>214\</h3\>  
        \<p\>Faculty Members\</p\>  
      \</div\>  
    \</div\>  
    \<div class="col-md-3"\>  
      \<div class="stat-card" style="border-color:\#ffc107"\>  
        \<h3\>86\</h3\>  
        \<p\>Active Courses\</p\>  
      \</div\>  
    \</div\>  
    \<div class="col-md-3"\>  
      \<div class="stat-card" style="border-color:\#dc3545"\>  
        \<h3\>142\</h3\>  
        \<p\>Fee Pending\</p\>  
      \</div\>  
    \</div\>  
  \</div\>  
  \<\!-- RECENT STUDENTS TABLE \--\>  
  \<div class="bg-white rounded p-3 shadow-sm mb-4"\>  
    \<h5 class="mb-3"\>Recent Admissions\</h5\>  
    \<table class="table table-hover"\>  
      \<thead class="table-light"\>  
        \<tr\>  
          \<th\>Name\</th\>\<th\>Course\</th\>\<th\>Department\</th\>\<th\>Status\</th\>  
        \</tr\>  
      \</thead\>  
      \<tbody\>  
        \<tr\>\<td\>Aarav Mehta\</td\>\<td\>B.Tech CSE\</td\>\<td\>Engineering\</td\>\<td\>\<span class="badge bg-success"\>Active\</span\>\</td\>\</tr\>  
        \<tr\>\<td\>Priya Sharma\</td\>\<td\>BBA\</td\>\<td\>Management\</td\>\<td\>\<span class="badge bg-success"\>Active\</span\>\</td\>\</tr\>  
        \<tr\>\<td\>Rohit Desai\</td\>\<td\>BSc IT\</td\>\<td\>Science\</td\>\<td\>\<span class="badge bg-warning text-dark"\>Pending\</span\>\</td\>\</tr\>  
        \<tr\>\<td\>Sneha Patil\</td\>\<td\>B.Com\</td\>\<td\>Commerce\</td\>\<td\>\<span class="badge bg-success"\>Active\</span\>\</td\>\</tr\>  
      \</tbody\>  
    \</table\>  
  \</div\>  
  \<\!-- DEPARTMENT PROGRESS \--\>  
  \<div class="bg-white rounded p-3 shadow-sm"\>  
    \<h5 class="mb-3"\>Department Enrollment\</h5\>  
    \<p class="mb-1"\>Engineering\</p\>  
    \<div class="progress mb-3"\>\<div class="progress-bar bg-primary" style="width:83%"\>83%\</div\>\</div\>  
    \<p class="mb-1"\>Commerce\</p\>  
    \<div class="progress mb-3"\>\<div class="progress-bar bg-success" style="width:75%"\>75%\</div\>\</div\>  
    \<p class="mb-1"\>Science\</p\>  
    \<div class="progress mb-3"\>\<div class="progress-bar bg-warning" style="width:65%"\>65%\</div\>\</div\>  
    \<p class="mb-1"\>Management\</p\>  
    \<div class="progress"\>\<div class="progress-bar bg-danger" style="width:55%"\>55%\</div\>\</div\>  
  \</div\>  
\</div\>  
\<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"\>\</script\>  
\</body\>  
\</html\>\<\!DOCTYPE html\>  
\<html lang="en"\>  
\<head\>  
  \<meta charset="UTF-8" /\>  
  \<meta name="viewport" content="width=device-width, initial-scale=1.0"/\>  
  \<title\>College Admin Dashboard\</title\>  
  \<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet"/\>  
  \<style\>  
    body { background: \#f4f6f9; }  
    /\* SIDEBAR \*/  
    \#sidebar {  
      width: 220px;  
      min-height: 100vh;  
      background: \#1e3a5f;  
      position: fixed;  
      top: 0; left: 0;  
    }  
    \#sidebar h4 { color: \#fff; padding: 20px; border-bottom: 1px solid \#2d5080; }  
    \#sidebar a {  
      display: block;  
      color: \#aac4e0;  
      padding: 12px 20px;  
      text-decoration: none;  
    }  
    \#sidebar a:hover, \#sidebar a.active { background: \#2d5080; color: \#fff; }  
    /\* MAIN \*/  
    \#main { margin-left: 220px; padding: 24px; }  
    /\* STAT CARD \*/  
    .stat-card {  
      background: \#fff;  
      border-radius: 10px;  
      padding: 20px;  
      border-left: 5px solid;  
      box-shadow: 0 2px 8px rgba(0,0,0,0.06);  
    }  
    .stat-card h3 { font-size: 2rem; font-weight: 700; margin: 0; }  
    .stat-card p  { color: \#888; margin: 4px 0 0; }  
  \</style\>  
\</head\>  
\<body\>  
\<\!-- SIDEBAR \--\>  
\<div id="sidebar"\>  
  \<h4\>🎓 CollegeAdmin\</h4\>  
  \<a href="\#" class="active"\>🏠 Dashboard\</a\>  
  \<a href="\#"\>👨‍🎓 Students\</a\>  
  \<a href="\#"\>👩‍🏫 Faculty\</a\>  
  \<a href="\#"\>📚 Courses\</a\>  
  \<a href="\#"\>📋 Attendance\</a\>  
  \<a href="\#"\>📝 Exams\</a\>  
  \<a href="\#"\>💰 Fees\</a\>  
  \<a href="\#"\>⚙️ Settings\</a\>  
\</div\>  
\<\!-- MAIN CONTENT \--\>  
\<div id="main"\>  
  \<h4 class="mb-1"\>Welcome, Admin 👋\</h4\>  
  \<p class="text-muted mb-4"\>Academic Year 2024–25\</p\>  
  \<\!-- STAT CARDS \--\>  
  \<div class="row g-3 mb-4"\>  
    \<div class="col-md-3"\>  
      \<div class="stat-card" style="border-color:\#1e3a5f"\>  
        \<h3\>3,847\</h3\>  
        \<p\>Total Students\</p\>  
      \</div\>  
    \</div\>  
    \<div class="col-md-3"\>  
      \<div class="stat-card" style="border-color:\#28a745"\>  
        \<h3\>214\</h3\>  
        \<p\>Faculty Members\</p\>  
      \</div\>  
    \</div\>  
    \<div class="col-md-3"\>  
      \<div class="stat-card" style="border-color:\#ffc107"\>  
        \<h3\>86\</h3\>  
        \<p\>Active Courses\</p\>  
      \</div\>  
    \</div\>  
    \<div class="col-md-3"\>  
      \<div class="stat-card" style="border-color:\#dc3545"\>  
        \<h3\>142\</h3\>  
        \<p\>Fee Pending\</p\>  
      \</div\>  
    \</div\>  
  \</div\>  
  \<\!-- RECENT STUDENTS TABLE \--\>  
  \<div class="bg-white rounded p-3 shadow-sm mb-4"\>  
    \<h5 class="mb-3"\>Recent Admissions\</h5\>  
    \<table class="table table-hover"\>  
      \<thead class="table-light"\>  
        \<tr\>  
          \<th\>Name\</th\>\<th\>Course\</th\>\<th\>Department\</th\>\<th\>Status\</th\>  
        \</tr\>  
      \</thead\>  
      \<tbody\>  
        \<tr\>\<td\>Aarav Mehta\</td\>\<td\>B.Tech CSE\</td\>\<td\>Engineering\</td\>\<td\>\<span class="badge bg-success"\>Active\</span\>\</td\>\</tr\>  
        \<tr\>\<td\>Priya Sharma\</td\>\<td\>BBA\</td\>\<td\>Management\</td\>\<td\>\<span class="badge bg-success"\>Active\</span\>\</td\>\</tr\>  
        \<tr\>\<td\>Rohit Desai\</td\>\<td\>BSc IT\</td\>\<td\>Science\</td\>\<td\>\<span class="badge bg-warning text-dark"\>Pending\</span\>\</td\>\</tr\>  
        \<tr\>\<td\>Sneha Patil\</td\>\<td\>B.Com\</td\>\<td\>Commerce\</td\>\<td\>\<span class="badge bg-success"\>Active\</span\>\</td\>\</tr\>  
      \</tbody\>  
    \</table\>  
  \</div\>  
  \<\!-- DEPARTMENT PROGRESS \--\>  
  \<div class="bg-white rounded p-3 shadow-sm"\>  
    \<h5 class="mb-3"\>Department Enrollment\</h5\>  
    \<p class="mb-1"\>Engineering\</p\>  
    \<div class="progress mb-3"\>\<div class="progress-bar bg-primary" style="width:83%"\>83%\</div\>\</div\>  
    \<p class="mb-1"\>Commerce\</p\>  
    \<div class="progress mb-3"\>\<div class="progress-bar bg-success" style="width:75%"\>75%\</div\>\</div\>  
    \<p class="mb-1"\>Science\</p\>  
    \<div class="progress mb-3"\>\<div class="progress-bar bg-warning" style="width:65%"\>65%\</div\>\</div\>  
    \<p class="mb-1"\>Management\</p\>  
    \<div class="progress"\>\<div class="progress-bar bg-danger" style="width:55%"\>55%\</div\>\</div\>  
  \</div\>  
\</div\>  
\<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"\>\</script\>  
\</body\>  
\</html\>

**2\. Open CMD in That Folder** 

# **3\. Initialize Ubuntu 22.04 VM**

Run:

vagrant init ubuntu/jammy64   
(This creates a `Vagrantfile`.)

edit `Vagrantfile` and add:

config.vm.network "forwarded\_port", guest: 8000, host: 8000

# **4\. Start the Ubuntu VM**

Run:

vagrant up

# **5\. Login to Ubuntu VM**

Run:

vagrant ssh

# **STEP 7 — Install Apache Server**

sudo apt update  
sudo apt install apache2 \-y

# **STEP 8 — Go to Shared Folder**

cd /vagrant

Check files:

ls

# **STEP 9 — Copy Website Files to Apache**

sudo cp \-f index.html /var/www/html/  
sudo cp \-f style.css /var/www/html/

# **STEP 10 — Open Website**

Open browser on Windows:

http://localhost:8080

Your dashboard appears ✅

# **HOW TO STOP VM**

vagrant halt  
