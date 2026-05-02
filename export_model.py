import pandas as pd
from sklearn.linear_model import LinearRegression
import joblib

print("Loading data...")
medical_data = pd.read_csv('C:\\PROJECTS\\ML Project\\insurance.csv')

print("Preprocessing data...")
medical_data.replace({'sex':{'male':0,'female':1}}, inplace=True)
medical_data.replace({'smoker':{'yes':0,'no':1}}, inplace=True)
medical_data.replace({'region':{'southeast':0,'southwest':1,'northeast':2,'northwest':3}}, inplace=True)

x = medical_data.drop(columns=['charges'])
y = medical_data['charges']

print("Training model...")
# Training on the whole dataset for the production model to get best fit
regressor = LinearRegression()
regressor.fit(x, y)

print("Exporting model to model.pkl...")
joblib.dump(regressor, 'C:\\PROJECTS\\ML Project\\model.pkl')

print("Model exported successfully!")
