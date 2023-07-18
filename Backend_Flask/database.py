from flask_sqlalchemy import SQLAlchemy
from main import app

chatroorc_db=SQLAlchemy(app)


# ==== Create database architecture====
class User(chatroorc_db.Model):
    id=chatroorc_db.Column(chatroorc_db.Integer,primary_key=True)
    password=chatroorc_db.Column(chatroorc_db.String(20),nullable=True)
    username=chatroorc_db.Column(chatroorc_db.String(20),unique=True,nullable=False)
    
    def __repr__(self):
        return f"user of id {self.id} username {self.username} password {self.password}"    


# ==== Helper Functions ====

def build_database(app):
    global chatroorc_db
    try:
        with app.app_context():
           chatroorc_db.create_all()
    except Exception as e:
        print(e)

def login_query(login_data):
    try:
        can_login=User.query.filter_by(username=login_data['username'],password=login_data['password']).first()
    except Exception as e:
        return str(e)    
    if can_login != None:
        return True
    return False 

def signup_query(signup_data):

    try:
        chatroorc_db.session.add(User(username=signup_data['username'],password=signup_data['password']))
        chatroorc_db.session.commit()
        return 'SUCCESS'
    except Exception as e:
        return str(e) 