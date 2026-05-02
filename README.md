# Medical Insurance Predictor 🏥

A full-stack, intelligent web application that uses Machine Learning to predict medical insurance costs based on demographic and lifestyle factors (Age, Sex, BMI, Children, Smoker status, and Region). 

## 🚀 Features

- **Machine Learning Engine**: Powered by a Multiple Linear Regression model (`scikit-learn`) achieving ~0.75 R-squared accuracy.
- **Premium User Interface**: A modern, dark-mode "glassmorphism" UI built with **Next.js** and **Tailwind CSS**, featuring beautiful Lucide React icons.
- **Localization & Currency Conversion**: Dynamically calculates predictions and allows users to toggle between USD ($), INR (₹), and EUR (€). Regions are seamlessly localized for Indian users while securely mapping to the underlying model's data.
- **Provider Dashboard**: A dedicated page showcasing top Indian insurance providers with ratings and key features.
- **Data Visualization**: Includes a comprehensive Jupyter Notebook (`medical.ipynb`) detailing Exploratory Data Analysis (EDA) using `seaborn` and `matplotlib`.

## 🛠️ Tech Stack

**Frontend:**
- Next.js (React)
- Tailwind CSS
- Lucide React (Icons)

**Backend:**
- Python
- Flask & Flask-CORS

**Machine Learning / Data Science:**
- Scikit-learn
- Pandas & NumPy
- Seaborn & Matplotlib
- Joblib (Model Serialization)

---

## 📂 Project Structure

```text
├── frontend/                 # Next.js Frontend Application
│   ├── src/app/page.tsx      # Main Prediction Interface
│   ├── src/app/companies/    # Top Providers Page
│   └── ...                   
├── app.py                    # Flask Backend API Server
├── export_model.py           # Script to train and export model.pkl
├── model.pkl                 # Serialized Machine Learning Model
├── medical.ipynb             # Data Analysis & Model Training Notebook
├── insurance.csv             # Raw Dataset
└── README.md                 # Project Documentation
```

---

## 💻 How to Run the Project Locally

To run this project on your local machine, you need to start both the Python backend server and the Next.js frontend server.

### 1. Start the Backend (Flask API)
Open a terminal in the root directory and run:
```bash
# Install required Python libraries
pip install flask flask-cors pandas scikit-learn joblib

# Start the server
python app.py
```
*The backend will run on `http://127.0.0.1:5000`*

### 2. Start the Frontend (Next.js)
Open a **second** terminal, navigate to the frontend folder, and run:
```bash
cd frontend

# Install Node dependencies
npm install

# Start the development server
npm run dev
```
*The frontend will run on `http://localhost:3000`*

### 3. View the App
Open your web browser and navigate to **[http://localhost:3000](http://localhost:3000)** to use the application!

---

**Developed by:** Prajwal M
