import json 
import csv


# Opens the input file
file = open('../data/human_study_effects.csv', 'r')
rows = file.read().split("\n")
# print rows

data = []
effects = []
effect = []
data = []
chemical = []
data_chemicals = []
chemicals = []

for row in rows:
    col = row.split(";")
    data.append(col)

for i in range(2, len(data[0])):
	for j in range (1,4):
		chemicals = []
		effects = data[j][i]
		effect = effects.split(",")
		if effects:
			if j == 1:
				chemical = data[0][i] + " \n male and female"
			elif j ==2:
				chemical = data[0][i] + " \n male only"
			elif j ==3:
				chemical = data[0][i] + " \n female only"
			chemicals.append(chemical)
			chemicals.append(effect)
			data_chemicals.append(chemicals)

with open('../data/human_study_effects.json', 'wb') as f:
     json.dump(data_chemicals, f, indent=4)