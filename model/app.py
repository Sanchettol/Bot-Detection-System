from flask import Flask, request, jsonify
import pickle
import numpy as np
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Load model
model = pickle.load(open("model.pkl", "rb"))

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json

    # Create ratio feature
    ratio = data["edge_followed_by"] / (data["edge_follow"] + 1)

    features = np.array([[
        data["edge_followed_by"],
        data["edge_follow"],
        ratio,
        data["username_length"],
        data["username_has_number"],
        data["full_name_has_number"],
        data["full_name_length"],
        data["is_private"],
        data["is_joined_recently"],
        data["has_channel"],
        data["is_business_account"],
        data["has_guides"],
        data["has_external_url"]
    ]])

    prediction = model.predict(features)[0]

    return jsonify({
        "result": "Bot" if prediction == 1 else "Real User"
    })

# Run server
app.run(port=5000)