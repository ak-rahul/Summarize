from flask import Flask, request, jsonify
from PyPDF2 import PdfReader
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS to allow communication from the React frontend

@app.route('/extract-text', methods=['POST'])
def extract_text():
    if 'file' not in request.files:
        return jsonify({"error": "No file uploaded"}), 400
    
    pdf_file = request.files['file']
    reader = PdfReader(pdf_file)
    text = ""
    
    for page in reader.pages:
        text += page.extract_text() + "\n"
    
    return jsonify({"text": text})

if __name__ == '__main__':
    app.run(debug=True)
