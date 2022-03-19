from flask import Flask
from flask import request
import subprocess

app = Flask(__name__)

params = ""

def run_command(command):
    return subprocess.run(f"mlflow run ../Desktop/docker {command}", shell=True, capture_output=True)

@app.route('/', methods = ['POST'])
def get_query_from_react():
    global params
    params = request.get_json()
    print(params['data'])
    print(run_command(params['data']))
    return params

if __name__ == '__main__':
    app.run()