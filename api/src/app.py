from flask import jsonify
import os
from . import create_app

app = create_app(os.getenv("CONFIG_MODE"))

usersList = ['Aaron', 'Bianca', 'Cat', 'Danny', 'Elena']

@app.route('/api/users', methods=['GET'])
def users():
    return jsonify({ 'users': [user for user in usersList] })

@app.route('/api/user/<int:id>', methods=['GET'])
def userById(id):
    return jsonify({ 'username': usersList[id]  })

@app.route('/api/user/<string:name>', methods=['GET'])
def getUserByName(name):
    # Show some user information
    return "Some info"

@app.route('/api/user/<string:name>', methods=['POST'])
def addUserByName(name):
    usersList.append(name)
    return jsonify({ 'message': 'New user added'  })

from .accounts import urls

if __name__ == "__main__":
    app.run()