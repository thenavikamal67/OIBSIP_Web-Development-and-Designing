**Login Authentication System**

**Project Overview**
The Login Authentication System is a simple web application built using Python (Flask), HTML, and CSS. It allows users to create an account, log in with their credentials, access a protected dashboard, and securely log out.
This project demonstrates the fundamentals of user authentication, session management, and web development using the Flask framework.

**Features**
User Registration
User Login
Secure Dashboard Access
User Logout
Session Management
Form Validation
Simple and Responsive User Interface
Stores user credentials in a JSON file

**Technologies Used**
Python
Flask
HTML5
CSS3
JSON
Visual Studio Code

**Project Structure**
login-authentication/
│
├── app.py
├── users.json
│
├── templates/
│   ├── login.html
│   ├── register.html
│   └── dashboard.html
│
└── static/
    └── style.css

**Prerequisites**
Before running the project, ensure you have:
Python 3.x installed
Flask installed
Visual Studio Code (recommended)

Install Flask using:
pip install flask

**How to Run the Project**
**Step 1**
Clone or download the project.

**Step 2**
Open the project folder in Visual Studio Code.

**Step 3**
Open the integrated terminal.

**Step 4**
Run the application:
python app.py

**Step 5**
Open your browser and visit:
http://127.0.0.1:5000

**Application Workflow**
Open the application.
Register a new user account.
Log in using the registered credentials.
Access the secured dashboard.
Log out to end the session.

**How It Works**
Users register by providing a username and password.
Credentials are stored in a local JSON file.
During login, the application validates the entered credentials.
Upon successful authentication, a user session is created.
The dashboard is accessible only to authenticated users.
Logging out clears the session and redirects the user to the login page.

**Learning Outcomes**
This project helps understand:
Flask routing
HTML form handling
Session management
User authentication
Basic web application development
Frontend and backend integration

**Future Enhancements**
Password hashing for secure storage
Email verification
Forgot password functionality
SQLite or MySQL database integration
Password strength validation
Responsive UI improvements
User profile management
Remember Me feature

**Screenshot**

**Video**

**Author**
Thenavi K

Feel free to customize and enhance this project by adding new authentication features, database support, and improved security mechanisms.
