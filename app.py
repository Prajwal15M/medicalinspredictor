from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import pandas as pd

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes so the Next.js app can talk to it

# Load the trained model
print("Loading model...")
model = joblib.load('C:\\PROJECTS\\ML Project\\model.pkl')
print("Model loaded successfully!")

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.json
        
        # Expected inputs from the frontend:
        # age (number), sex (string: 'male'/'female'), bmi (number), 
        # children (number), smoker (string: 'yes'/'no'), region (string: 'southeast', etc)
        
        # Mapping dictionaries from the training phase
        sex_map = {'male': 0, 'female': 1}
        smoker_map = {'yes': 0, 'no': 1}
        region_map = {'southeast': 0, 'southwest': 1, 'northeast': 2, 'northwest': 3}
        
        # Convert inputs using maps
        age = float(data.get('age', 0))
        sex = sex_map.get(data.get('sex', 'male').lower(), 0)
        bmi = float(data.get('bmi', 0))
        children = int(data.get('children', 0))
        smoker = smoker_map.get(data.get('smoker', 'no').lower(), 1)
        region = region_map.get(data.get('region', 'southeast').lower(), 0)
        
        # Create a DataFrame with the features in the exact order as training
        # The training columns were: age, sex, bmi, children, smoker, region
        features = pd.DataFrame([{
            'age': age,
            'sex': sex,
            'bmi': bmi,
            'children': children,
            'smoker': smoker,
            'region': region
        }])
        
        # Predict using the loaded model
        prediction = model.predict(features)[0]
        
        # Return the prediction formatted to 2 decimal places
        return jsonify({
            'success': True,
            'prediction': round(prediction, 2)
        })
        
    except Exception as e:
        print(f"Error during prediction: {str(e)}")
        return jsonify({
            'success': False,
            'error': str(e)
        }), 400

if __name__ == '__main__':
    print("Starting Flask Server on port 5000...")
    app.run(debug=True, port=5000)
