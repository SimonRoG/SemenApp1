from flask import *
import json
import os

app = Flask(__name__)

@app.route('/')
@app.route('/index')
def index():
    with open(os.path.join(app.root_path, 'data', 'Stellenanzeigen.json'), 'r', encoding='utf-8') as f:
        data = json.load(f)

    return render_template('index.html', data=data)

@app.route('/formular')
def formular():
    return render_template('formular.html')

@app.route('/api/stellenanzeigen')
def stellenanzeigen():
    with open(os.path.join(app.root_path, 'data', 'Stellenanzeigen.json'), 'r', encoding='utf-8') as f:
        data = json.load(f)
    return jsonify(data)
