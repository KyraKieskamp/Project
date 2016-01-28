# Author: Kyra Kieskamp
# File: Replacing ";" by ',' in the cohort_trial_reverse.csv file
###################################################################3

import json 
import csv

# Opens, replaces, writes and closes file
file = open('../data/cohort_trial_reverse.csv', 'r')
rows = file.read().replace(";", ",")
file = open("../data/cohort_trial__reverse_comma.csv", "w")
file.write(rows)
file.close()