import json 
import csv


# Opens the input file
file = open('../data/cohort_trial_reverse.csv', 'r')
rows = file.read().replace(";", ",")
# print rows

print rows


file = open("../data/cohort_trial__reverse_comma.csv", "w")

file.write(rows)

file.close()