# 🤖 Intelligent Social Media Bot Detection System

## 📌 Overview

This project is a **Machine Learning-based web application** that detects whether a social media account is a **Bot or a Real User** based on profile and behavioral features.

It combines **AI + Full Stack Development** to provide real-time predictions through a user-friendly interface.

---

## 🚀 Features

* 🔍 Detect fake (bot) accounts instantly
* 📊 Uses ML model trained on real dataset
* 🌐 Interactive web interface (React)
* ⚡ Real-time API integration (Flask)
* 🎯 High accuracy using Random Forest
* 📈 Feature engineering (follower-following ratio)

---

## 🧠 Machine Learning Model

* Algorithm: **Random Forest Classifier**

* Dataset Features:

  * Followers & Following count
  * Username patterns
  * Profile attributes
  * Account activity indicators

* Engineered Feature:

  * Follower/Following Ratio

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Axios
* Tailwind CSS (Modern UI)

### Backend

* Flask (Python API)
* Node.js (optional integration)

### Machine Learning

* Python
* Scikit-learn
* Pandas / NumPy

---

## 📂 Project Structure

```
bot-detection-system/
 ├── frontend/
 │    ├── src/
 │    ├── public/
 │    ├── package.json
 │
 ├── backend/
 │    ├── server.js
 │
 ├── model/
 │    ├── app.py
 │    ├── model.pkl
 │
 ├── README.md
```

---

## ⚙️ Installation & Setup

### 🔹 1. Clone Repository

```
git clone https://github.com/Sanchettol/Bot-Detection-System.git
cd bot-detection-system
```

---

### 🔹 2. Run Backend (Flask API)

```
cd model
pip install flask numpy scikit-learn flask-cors
python app.py
```

---

### 🔹 3. Run Frontend (React)

```
cd frontend
npm install
npm start
```

---

## 🧪 How It Works

1. User enters profile details
2. React sends data to Flask API
3. ML model processes input
4. Returns result → **Bot / Real User**
5. Output displayed on UI

---

## 📊 Example Output

```
Input:
Followers: 50
Following: 2000

Output:
⚠️ Bot Detected
```

---

## 🎯 Applications

* Social media security
* Spam account detection
* Influencer authenticity analysis
* Platform moderation tools

---

## 💡 Future Improvements

* 📊 Analytics Dashboard
* 📁 Prediction history storage
* 🌐 Live deployment
* 🧠 Deep learning model integration

---

## 👨‍💻 Author

**Sanchet Khemani**
Full-Stack Developer & AI Enthusiast

---

## ⭐ Acknowledgement

Dataset inspired by real-world social media account patterns.

---

## 🚀 Conclusion

This project demonstrates the integration of **Machine Learning with Web Development** to solve real-world problems like detecting fake social media accounts efficiently.
