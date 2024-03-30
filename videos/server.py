from flask import Flask, jsonify, request, send_from_directory
from flask_cors import CORS
import json
import os

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load the questions and answers from the JSON file
with open('test.json', 'r') as file:
    questions_data = json.load(file)

@app.route('/test.json')
def serve_json():
    return send_from_directory(os.getcwd(), 'test.json')

@app.route('/check_answers', methods=['POST'])
def check_answers():
    incorrect_keywords = set()  # Reset incorrect keywords for each request
    data = request.get_json()

    for question in questions_data['questions']:
        question_id = question['questionID']
        user_answer = data.get(str(question_id))

        if user_answer is not None and user_answer != question['ans']:
            incorrect_keywords.update(question['keywords'])

    with open('incorrect.txt', 'a') as output_file:
        output_file.write('\n'.join(incorrect_keywords) + '\n')

    return jsonify({'message': 'User answers processed.'})

if __name__ == '__main__':
    app.run(debug=True)
