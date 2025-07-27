from flask import Flask, request, render_template, jsonify
import smtplib
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/contact", methods=["POST"])
def contact():
    data = request.get_json()
    name = data.get("name")
    email = data.get("email")
    message = data.get("message")

    try:
        send_email(name, email, message)
        return jsonify({"message": "Message sent!"}), 200
    except Exception as e:
        print(e)
        return jsonify({"message": "Failed to send email"}), 500

def send_email(name, email, message):
    sender = os.getenv("EMAIL_USER")
    password = os.getenv("EMAIL_PASS")
    receiver = sender

    subject = f"New message from {name}"
    body = f"From: {email}\n\n{message}"

    with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
        server.login(sender, password)
        server.sendmail(sender, receiver, f"Subject: {subject}\n\n{body}")

if __name__ == "__main__":
    app.run(debug=True)
