# Report

This is the report of the project "Data Visualization of the OBELIX research" by Kyra Kieskamp (2016).

# Description project

The purpose of this project is to show a general interactive overview of the OBELIX research. OBELIX was a 4-year running, 2009-2013, European-Commission funded research project with its goal to investigate the effects of prenatal exposure to various endocrine disrupting chemicals on the development of obesity later in life (http://www.theobelixproject.org/). Endocrine disrupting chemicals are chemicals that can affect hormonal levels and their activity inside the body. Both animal and human studies were conducted to obtain data for a risk assessment for the endocrine disrupting chemicals and possible future effects regarding obesity. Certain chemicals indeed showed at the researched concentration that they could alter processes in the body relating to metabolism. The interactive visualization shows the following parts of the study: the final results of the risk assessment of the studied chemicals, the effects observed during the animal study, a comparison between exposure of chemicals and the effects (growth) in babies in the studied cohorts (groups of people), and an overview of various characteristics of those cohorts. For understanding this interactive visualization, some background in (environmental) toxicology and scientific research is advised. 


# Technical Design
General

A general bootstrap format was used as platform to show visualizations of the endocrine disrupting chemicals, their risk assessment, and parts of the animal and human study. In the header of the bootstrap-format, two links to two articles are presented. One of the articles leads to the final summary report of the OBELIX project, the other leads to an article which contains additional data used in the visualization (the human study and information on the cohorts). As the color of the OBELIX project was mainly blue, this same color is used as main color in this visualization as well. 

Chemicals

In the visualization images of the endocrine disrupting chemicals are presented in the sidenaviagation of the bootstrap format. These images have directly been inserted in the index.html file. A button has been added as well for each chemical, which activates the function InitChart() to create a risk assessment bar graph for that specific chemical (in riskgraph2.js). Additionally, a tooltip has been inserted with the images of the chemicals which shows an explanation of the specific chemical upon hovering over its image. The addition of the explanation has been done with the function InitInfo() in javascript which is called upon as the webpage loads (in initinfo.js).

Risk Assessment - bar graph 

The risk assessment bar graphs are created in riskgraph2.js. Using d3, the specific data for the chemical, of which the button is clicked, will be obtained from the data, and a bar graph will be made. Upon hovering over the various bars, the colors will change from blue to red/orange. 

Animal study - conceptmap and table

The conceptmap is created in conceptmap_mouse_effects.js. Data was transformed into a json format, presenting the effects of the chemicals for both males and females (this was done using mouse_effects.py in the directory scripts). Then using d3, a concept map was created in the div element with the id "mouse_model". The data is selected, where the type of chemical is presented in the inner nodes, the effects in the outer nodes, and whether there is a link between them in the links. The concept map is eventually created by creating 'rect' elements for the inner nodes, circles and text for the outer nodes, and lines for the links between them. Additionally, the functions for mouseover and mouse out, respectively highlight the line of the links and the text in bold upon hovering on either the chemical or the effect and going back to 'normal' again when no hovering takes place. 
Besides the concept map, a table is created by the function generate_table2() in javascript (in generate_table2.js), which shows explanations of the effects in the conceptmap. The effects have a bold font, due to the style for this table in style.css. 


Human study - scatterplot 

In the human study part of the visualization, a scatterplot is created using a form with checkboxes. The checkboxes are directly created in a form element in index.html. Upon clicking on the button of the form to generate the plot, the function generate_scatterplot() is activated (in scatterplot.js). This function obtains the values of the checkboxes, and extracts the titles from the boxes which are checked. With these titles the function scatterplot(xlabel, ylabel) is called upon with the titles of the checked boxes as xlabel and ylabel. Using d3, a scatterplot is created, which the correct values and positions for the x and y-axis for the labels. Colored circles to present the data for each cohort (these are the groups of which data is shown), and a legend for the explanation of which color belongs to which cohort. Tooltips are added for hovering upon the circle, to obtain the exact information on that circle's position, in a tooltip text box. 


Cohorts - parallel coordinates and table 

For explanation of the various cohorts, both a parallel coordinates visualization and a dynamic table is made. The parallel coordinates visualization is created upon loading html page at the position of the id 'wrapper', using the paracord element in d3 and a csv data file (parallel_coordinates.js). The functionality of the parallel coordinates occurs when hovering on a line belonging to a cohort; this line will then come to the forefront. 
The dynamic table is created with the use of checkboxes. Upon clicking on the button belonging to that form, the information of the checked boxes are extracted in the function 'generate_table()' (in generate_table.js). For each checked box, the corresponding data of the cohorts is written in a table row at the position of the div with id 'cohort_table'. 

# Changes and challenges
Changes

Quite a few big changes have been made regarding the product described in the PROCESS.md. Firstly, showing the cohorts in an interactive map of Europe was replaced by an interactive table and eventually also a parallel coordinates visualization of the most important characteristics of the cohorts was added. Secondly, the visualization showing the effects of the animal and human studies by using images of the effect and explanations upon hovering on these images, was replaced by a concept map for the animal studies and an interactive scatterplot for a few of the human effects. 

Challenges

The main challenge during this project was the data set. As a research study was visualized, the data set was both qualitative as well as quantitative. Additionally, for the quantitative part of the data set, only the final results of the study were integrated, as no raw data is usually presented in scientific articles. As a result, no visualizations with multiple data layers based on a large quantitative data set could be created. This challenge was tackled by adapting the point of view I had, and changing it to find ways of visualizations that could be used as a platform for both or either qualitative data or small quantitative data sets. 
Minor challenges were bugs here and there, such as linking the checkboxes to the dynamic table, and the positioning of all the visualizations on the page. 
Additionally creating an understanding visualization of this study for the general public was another challenge. To create both the visualizations of the OBELIX research and create an understandable accompanying text explaining the research for the public in the given time was not feasible. Therefore, I decided to focus on creating the visualizations and using the explanatory text from the scientific articles. As a result, the audience might need a bit more background in academia in general and/or toxicology specifically to fully comprehend the visualizations. 

# Argumentation for changes
The two main changes mentioned in the previous paragraph have been made for the following reasons. Firstly, only five different countries would have had data in the interactive map of Europe.  This was not enough countries for an interactive map to be the right visualization for this data. Applying the interactive feature to a table showing all the characteristics of those countries increased the amount of data of the cohorts that could be shown. Additionally, the parallel coordinates visualization helps the user to gain a faster overview of the most important data. The trade-off for this change is that no visual location is present in the visualization. Secondly, the visualization for the effects of the animal and human study was changed. Solely displaying images of the effect and on  hovering showing extra information did not have enough variables. So, a concept map was created for the animal study. In this visualization, more data could be shown in one view, namely the direct links between the effects and which chemicals caused them. And still, additional explanatory data is shown in a table. Furthermore, some effects of the chemicals in the human study are shown in a scatterplot. The differences between the cohorts can be seen, as well as effects on growth and heights which are caused by the chemicals. Again, this visualization shows more variables than just images of the effects and explanation upon hovering would have shown. 

# Current bugs and possible further implementations
Risk Assessment - bar graph

A further implementation is to still add a tooltip presenting the exact value for the variables presented. The reasoning for this is that the user could see the exact value of the tolerable daily intake and the body burden. Yet, the main purpose of this bar graph if to see if the concentrations for the two values, tolerable daily intake and body burden, which came up in the OBELIX study are lower than those currently used. In order to do this, the exact data is not specifically necessary. Some current bugs are that the title for the bar graphs was not big enough and properly positioned yet. Furthermore, due to missing data, not all the values for all chemicals could be implemented in the bar graphs. The final risk assessment is therefore difficult to comprehend, if no knowledge the toxicological field is present. 

Animal study – conceptmap and table

An added function to the concept map would be to click upon an effect, which would highlight the explanation in the table beside it. Also if the chemical would be clicked, all the observed effects of that chemical and their explanations in the table would be highlighted. Also a color coding could have been added to the conceptmap, for example a coding for male or female, or color coding per chemical. A current bug in the conceptmap is that the positioning of the concept map is not optional. 

Human study - scatterplot

Currently, the user can only choose the items for the scatterplot once, and that the scatterplot cannot be reset with new data. If the user does change the items, a second scatterplot will be created below the present scatterplot. Additionally, the lay-out of the scatterplot is not optimal; the y-axis label for instance has to start slightly lower, as right now part of the label cannot be read. Additionally the legend should be moved slightly to the right, as it now overlaps slightly with some of the data in the plot. And a title is still missing. An added feature for the human study could be integrating a conceptmap for the human study as well, like the one for the animal study.

Cohorts - parallel coordinates and table 

For some reason the parallel coordinates does not contain all functionality anymore. Two cohort information links will not be highlighted anymore during the last day, and the bug was not found. Additionally, the click function to resort the order per value given is not working either at moment of uploading the project. 
Furthermore, the table presented for the cohorts lacks a proper style. The table should be wider, so it is easier to read. Additionally, the titles/cohorts of the table should be either in bold or in a larger font. Every odd row could also have a slight blue-ish color to improve reading of the table.
