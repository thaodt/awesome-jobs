from flask import Flask, render_template
import sqlite3

app = Flask(__name__)

@app.route('/')
def hello():
    return 'Hello guys!!! Welcome to my world!'

app.run(debug=True)
