import json 
import csv


# Opens the input file
file = open('../data/chemical_information.csv', 'r')
rows = file.read().split("\n")
# print rows

print rows
# col = rows[0].split(';')
# print col
data = []
for row in rows:
    col = row.split(";")
    data.append(col)

with open('../data/chemical_information.json', 'wb') as f:
     json.dump(data, f, indent=4)