from flask import Flask
from flask import render_template, request
app = Flask(__name__)
# Home page
@app.route("/")
def home():
        print('Loading Home page')
        return render_templates("/index.html")
# Form page
@app.route("/register", methods=["GET", "POST"])
def form():
        print('Loading Registration page')
        if request.method == "POST":
                Name = request.form["name"]
                Email = request.form["email"]
                Comments = request.form["message"]
                Number = request.form["number"]
                
                return render_template('regsuccess.html',name=Name,email=Email,number=Number)
        else:
                Name = request.args.get("name")
                Email = request.args.get("email")
                Comments = request.args.get("message")
                Number = request.args.get("number")
                return render_template('regsuccess.html',name=Name,email=Email,number=Number)
        

if __name__ == "__main__":
        app.run(debug=True)
        print('Web service Started')
else:
        print('Web service Stopped')
