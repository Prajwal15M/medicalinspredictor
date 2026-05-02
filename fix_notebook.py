import json

with open('c:/PROJECTS/ML Project/medical.ipynb', 'r') as f:
    nb = json.load(f)

# Cell 7 (index 6): add smoker and region
nb['cells'][6]['source'] = [
    "medical_data.replace({'sex':{'male':0,'female':1}}, inplace=True)\n",
    "medical_data.replace({'smoker':{'yes':0,'no':1}}, inplace=True)\n",
    "medical_data.replace({'region':{'southeast':0,'southwest':1,'northeast':2,'northwest':3}}, inplace=True)"
]

# Cell 8 (index 7): remove axis=1
nb['cells'][7]['source'] = [
    "x=medical_data.drop(columns=['charges'])\n",
    "y=medical_data['charges']"
]

with open('c:/PROJECTS/ML Project/medical.ipynb', 'w') as f:
    json.dump(nb, f, indent=1)
