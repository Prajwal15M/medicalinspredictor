import json

with open('c:/PROJECTS/ML Project/medical.ipynb', 'r') as f:
    nb = json.load(f)

# Add seaborn import to first cell
first_cell_source = nb['cells'][0]['source']
if "import seaborn as sns\n" not in first_cell_source:
    first_cell_source.insert(2, "import seaborn as sns\n")

# Define new graph cells
graph_cell_1 = {
 "cell_type": "code",
 "execution_count": None,
 "metadata": {},
 "outputs": [],
 "source": [
  "plt.figure(figsize=(8, 6))\n",
  "sns.histplot(medical_data['charges'], kde=True, color='purple')\n",
  "plt.title('Distribution of Insurance Charges')\n",
  "plt.show()"
 ]
}

graph_cell_2 = {
 "cell_type": "code",
 "execution_count": None,
 "metadata": {},
 "outputs": [],
 "source": [
  "plt.figure(figsize=(8, 6))\n",
  "sns.boxplot(x='smoker', y='charges', data=medical_data, palette='Set2')\n",
  "plt.title('Smoker vs Insurance Charges')\n",
  "plt.show()"
 ]
}

graph_cell_3 = {
 "cell_type": "code",
 "execution_count": None,
 "metadata": {},
 "outputs": [],
 "source": [
  "plt.figure(figsize=(8, 6))\n",
  "sns.scatterplot(x='age', y='charges', hue='smoker', data=medical_data, palette='coolwarm')\n",
  "plt.title('Age vs Charges (Colored by Smoker Status)')\n",
  "plt.show()"
 ]
}

# Insert cells after cell index 5 (which is the smoker value_counts)
nb['cells'].insert(6, graph_cell_3)
nb['cells'].insert(6, graph_cell_2)
nb['cells'].insert(6, graph_cell_1)

with open('c:/PROJECTS/ML Project/medical.ipynb', 'w') as f:
    json.dump(nb, f, indent=1)
