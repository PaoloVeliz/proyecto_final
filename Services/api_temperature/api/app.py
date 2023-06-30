from flask import Flask
from service import Heat
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/allAges/', methods=['GET'])
def welcome():
    return Heat.getAllData()

@app.route('/holi', methods=['GET'])
def hello():
    return "holi"


if __name__ == '__main__':
    app.run()