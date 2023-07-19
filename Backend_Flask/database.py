from flask_sqlalchemy import SQLAlchemy
from main import app

chatroorc_db=SQLAlchemy(app)


# ==== Create database architecture====
class User(chatroorc_db.Model):
    id=chatroorc_db.Column(chatroorc_db.Integer,primary_key=True)
    password=chatroorc_db.Column(chatroorc_db.String(20),nullable=False)
    username=chatroorc_db.Column(chatroorc_db.String(20),unique=True,nullable=False)
    nickname=chatroorc_db.Column(chatroorc_db.String(30),unique=False,nullable=True)
    image = chatroorc_db.Column(chatroorc_db.LargeBinary)
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
        return 'SUCCESS'
    return 'FAILED USER/PSWRD'

def signup_query(signup_data):

    try:
        chatroorc_db.session.add(User(username=signup_data['username'],password=signup_data['password'],
                                      nickname=signup_data['nickname']))
        chatroorc_db.session.commit()
        return 'SUCCESS'
    except Exception as e:
        return 'FAILED with exception :'+ str(e)
def wipe_database():
    
    metadata = chatroorc_db.metadata
    tables = list(metadata.sorted_tables)

    
    for table in tables:
        with app.app_context():
            chatroorc_db.session.query(table).delete()

    
    chatroorc_db.session.commit()

    print("Database wiped successfully.")
    