from flask import jsonify
import os
from src import create_app

app = create_app(os.getenv("CONFIG_MODE"))

usersList = ['Aaron', 'Bianca', 'Cat', 'Danny', 'Elena']

@app.route('/api/users', methods=['GET'])
def users():
    return jsonify({ 'users': [user for user in usersList] })

from src.accounts import urls

if __name__ == "__main__":
    app.run()