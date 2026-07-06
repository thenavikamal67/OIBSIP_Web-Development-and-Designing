from flask import Flask,render_template,request,redirect,session,url_for
import json
import os
app=Flask(__name__)
app.secret_key="secretkey123";
USER_FILE="users.json"
if not os.path.exists(USER_FILE):
    with open(USER_FILE,"w") as f:
        json.dump({},f)
def load_users():
    with open(USER_FILE,"r") as f:
        return json.load(f)
def save_users(users):
    with open(USER_FILE,"w") as f:
        json.dump(users,f,indent=4)
@app.route("/")
def home():
    return redirect("/login")
@app.route("/register",methods=["GET","POST"])
def register():
    message=""
    if request.method=="POST":
        username=request.form["username"]
        password=request.form["password"]
        users=load_users()
        if username in users:
            message="Username already exists!" 
        else:
            users[username]=password
            save_users(users)
            return redirect("/login")
    return render_template("register.html",message=message)
@app.route("/login",methods=["GET","POST"])
def login():
    message=""
    if request.method=="POST":
        username=request.form["username"]
        password=request.form["password"]
        users=load_users()
        if username in users and users[username]==password:
            session["user"]=username
            return redirect("/dashboard")
        else:
            message="Invalid Username or Password"
    return render_template("login.html",message=message)
@app.route("/dashboard")
def dashboard():
    if "user" not in session:
        return redirect("/login")
    return render_template("dashboard.html",user=session["user"])
@app.route("/logout")
def logout():
    session.pop("user",None)
    return redirect("/login")
if __name__=="__main__":
        app.run(debug=True)
