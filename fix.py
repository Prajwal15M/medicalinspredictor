import json
with open('c:/PROJECTS/ML Project/medical.ipynb', 'r') as f:
    nb = json.load(f)

for cell in nb['cells']:
    if cell['cell_type'] == 'code':
        if len(cell['source']) > 0:
            if 'read_csv' in cell['source'][0]:
                cell['source'] = ["medical_data = pd.read_csv('C:\\\\PROJECTS\\\\ML Project\\\\insurance.csv')"]
            elif 'replace' in cell['source'][0]:
                cell['source'] = [
                    "medical_data.replace({'sex':{'male':0,'female':1}}, inplace=True)\n",
                    "medical_data.replace({'smoker':{'yes':0,'no':1}}, inplace=True)\n",
                    "medical_data.replace({'region':{'southeast':0,'southwest':1,'northeast':2,'northwest':3}}, inplace=True)"
                ]
            elif 'drop(columns' in cell['source'][0]:
                cell['source'] = [
                    "x=medical_data.drop(columns=['charges'])\n",
                    "y=medical_data['charges']"
                ]

with open('c:/PROJECTS/ML Project/medical.ipynb', 'w') as f:
    json.dump(nb, f, indent=1)
