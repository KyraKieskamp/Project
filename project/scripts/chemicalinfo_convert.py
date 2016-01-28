# Author: Kyra Kieskamp
# File: Creating a json file from the csv file: chemical_information.csv.csv
####################################################################################

import json 
import csv


# opens the input file
file = open('../data/chemical_information.csv', 'r')

# splits the information
rows = file.read().split("\n")
data = []
for row in rows:
    col = row.split(";")
    data.append(col)

# writes json file
with open('../data/chemical_information.json', 'wb') as f:
     json.dump(data, f, indent=4)