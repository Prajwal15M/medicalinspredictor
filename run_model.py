import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import r2_score

medical_data = pd.read_csv('C:\\PROJECTS\\ML Project\\insurance.csv')
medical_data.replace({'sex':{'male':0,'female':1}}, inplace=True)
medical_data.replace({'smoker':{'yes':0,'no':1}}, inplace=True)
medical_data.replace({'region':{'southeast':0,'southwest':1,'northeast':2,'northwest':3}}, inplace=True)

x=medical_data.drop(columns=['charges'])
y=medical_data['charges']

x_train,x_test,y_train,y_test=train_test_split(x,y,test_size=0.2, random_state=2)

regressor=LinearRegression()
regressor.fit(x_train,y_train)

# Calculate accuracy using R-squared for regression model
y_train_pred = regressor.predict(x_train)
train_r2 = r2_score(y_train, y_train_pred)

y_test_pred = regressor.predict(x_test)
test_r2 = r2_score(y_test, y_test_pred)

print(f"Model Training Completed Successfully!")
print(f"Training R-squared Score: {train_r2:.4f}")
print(f"Testing R-squared Score: {test_r2:.4f}")
