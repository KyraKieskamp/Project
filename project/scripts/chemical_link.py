# Author: Kyra Kieskamp
# File: Creating a json file from the csv file: cohort_trial2.csv
#######################################################################

import json 
import csv


# opens the input file
file = open('../data/cohort_trial2.csv', 'r')

# splits the information
rows = file.read().split("\n")
data = []
for row in rows:
    col = row.split(";")
    data.append(col)

# writes json file
with open('../data/cohort_trial2.json', 'wb') as f:
     json.dump(data, f, indent=4)