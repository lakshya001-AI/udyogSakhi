from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app) 

@app.route("/calculate_score", methods=["POST"])
def calculate_score():
    data = request.get_json()

    # Extract data from request
    income = data.get("income", 1)  # Avoid division by zero
    sales = data.get("sales", 0)
    profit_margin = data.get("profit_margin", 0)
    customer_reviews = data.get("customer_reviews", 0)
    expenses = data.get("expenses", 0)

    # Validate inputs
    if not all(isinstance(x, (int, float)) and x >= 0 for x in [income, sales, profit_margin, customer_reviews, expenses]):
        return jsonify({"error": "All inputs must be non-negative numbers."}), 400

    # Adjusted credit score calculation
    sales_weight = min(25, (sales / income) * 25) if income > 0 else 0
    profit_margin_weight = min(30, (profit_margin / 100) * 30)
    reviews_weight = min(15, (customer_reviews / 100) * 15)
    expenses_weight = min(10, (expenses / income) * 10) if income > 0 else 0

    credit_score = sales_weight + profit_margin_weight + reviews_weight - expenses_weight
    credit_score = max(0, min(100, credit_score))  # Clamp between 0 and 100

    # Determine rating
    if credit_score >= 81:
        rating = "Excellent"
    elif credit_score >= 61:
        rating = "Good"
    elif credit_score >= 41:
        rating = "Average"
    else:
        rating = "Poor"

    # Provide explanation
    explanation = f"Your credit score is {credit_score:.2f} ({rating})."
    if rating == "Excellent":
        explanation += " This is due to consistent sales, positive customer reviews, and high profit margins."
    elif rating == "Good":
        explanation += " Consider improving profit margins or reducing expenses for a higher score."
    elif rating == "Average":
        explanation += " Focus on increasing sales and gaining more positive customer reviews."
    else:
        explanation += " Work on reducing expenses and increasing income to improve your score."

    # Debugging logs
    print(f"Sales Weight: {sales_weight}")
    print(f"Profit Margin Weight: {profit_margin_weight}")
    print(f"Reviews Weight: {reviews_weight}")
    print(f"Expenses Weight: {expenses_weight}")
    print(f"Final Credit Score: {credit_score}")

    # Return response
    return jsonify({
        "credit_score": credit_score,
        "rating": rating,
        "explanation": explanation
    })

if __name__ == "__main__":
    app.run(port=4000, debug=True)
