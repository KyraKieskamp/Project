import json 
import csv


# Opens the input file
file = open('../data/effects_explanations.csv', 'r')
rows = file.read().split("\n")
# print rows

# print rows[0]
# col = rows[0].split(';')
# print col
data = []
for row in rows:
    col = row.split(";")
    data.append(col)

with open('../data/effects_explanations.json', 'wb') as f:
     json.dump(data, f, indent=4)