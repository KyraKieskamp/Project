# Author: Kyra Kieskamp
# File: Creating a json file from the csv file: effects_explanations.csv
#############################################################################################3
import json 
import csv


# opens the input file
file = open('../data/effects_explanations.csv', 'r')

# splits the information
rows = file.read().split("\n")
data = []
for row in rows:
    col = row.split(";")
    data.append(col)

# writes json file
with open('../data/effects_explanations.json', 'wb') as f:
     json.dump(data, f, indent=4)