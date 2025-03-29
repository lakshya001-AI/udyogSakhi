from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Enhanced loan suggestion logic based on amount, timeframe, urgency, and business stage
def suggest_loan(amount, timeframe, urgency, business_stage):
    option1 = ""
    option2 = ""
    approval_percentage = 0

    # Define thresholds for different scenarios
    if amount <= 50000 and timeframe == "immediate":
        option1 = "Crowdfunding"
        option2 = None
        approval_percentage = 90 if urgency == "high" else 80  # Higher chance for small amounts
    elif amount <= 500000 and timeframe != "flexible":
        option1 = "Crowdfunding"
        option2 = "Bank Loan"
        approval_percentage = 75 if business_stage == "growth" else 70  # Medium chance for medium amounts
    elif 500000 < amount <= 1000000 and timeframe == "flexible":
        option1 = "Total Crowdfunding"
        option2 = None
        approval_percentage = 70 if business_stage == "startup" else 60  # Lower chance due to larger amount
    elif amount > 1000000 or timeframe == "immediate":
        option1 = None
        option2 = "Total Loan"
        approval_percentage = 55 if urgency == "high" else 50  # Lowest chance for very large amounts
    else:
        option1 = "Custom Consultation Required"
        option2 = None
        approval_percentage = 50  # Default fallback

    # Additional adjustments based on business stage and urgency
    if business_stage == "established":
        approval_percentage += 5  # Slightly higher chance for established businesses

    return {
        "option1": option1,
        "option2": option2,
        "approval_percentage": min(approval_percentage, 100)
    }


# API endpoint
@app.route('/loan-suggestion', methods=['POST'])
def loan_suggestion():
    data = request.get_json()

    # Validate input
    required_fields = ["amount", "timeframe", "urgency", "businessStage"]
    if not data or not all(field in data for field in required_fields):
        return jsonify({"error": "Amount, timeframe, urgency, and business_stage are required."}), 400

    try:
        amount = int(data['amount'])  # Convert amount to integer
    except ValueError:
        return jsonify({"error": "Amount must be a number."}), 400

    timeframe = data['timeframe']
    urgency = data['urgency']
    business_stage = data['businessStage']

    result = suggest_loan(amount, timeframe, urgency, business_stage)
    return jsonify(result)

if __name__ == '__main__':
    app.run(port=3000)
