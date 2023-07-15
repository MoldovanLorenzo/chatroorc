from flask import Flask,request,jsonify
from flask_cors import CORS
import database as db


app=Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI']='sqlite:///chatroorc.db'
CORS(app)   #Allows request from any url



# =====Back-end request handler=====

@app.route('/login_request',methods=['GET','POST'])
def login_request():
    # ==== Handle login request(POST),DATA SENT NEEDS TO BE IN JSON FORMAT, fields : "username":..... "password":..... ====

    if request.method=='GET':
        return jsonify({'message':'Hello from flask(login_handler)'})
    if request.method=='POST':
        if request.is_json:
           login_data=request.json

           print("DATA RECIEVED : ")
           print(login_data)

           result=db.login_query(login_data)
           return jsonify({'login_result':result})
        else :
            return jsonify({'login_result':'REQUEST NOT IN JSON FORMAT!'})

@app.route('/signup_request',methods=['GET','POST','OPTIONS'])
def signup_request():
    # ==== Handle signup request(POST),DATA SENT NEEDS TO BE IN JSON FORMAT, fields : "username":..... "password":..... ====
    
    if request.method=='GET':
        return jsonify({'message':'Hello from flask(signup_handler)'})
    if request.method=='POST':    
        print(request.headers)
        if request.is_json:
           signup_data=request.json

           print("DATA RECIEVED : ")
           print(signup_data)

           result=db.signup_query(signup_data)
           return jsonify({'signup_result':result})
        else :
            return jsonify({'signup_result':'REQUEST NOT IN JSON FORMAT!'})


if __name__=="__main__":
    app.run(debug=True)
    