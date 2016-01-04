# Project
Project - Data Visualization of the OBELIX research
Kyra Kieskamp

The goal of this project is to create a general and understandable interactive overview of the OBELIX research (or part of the research for the Minimum Viable Product) for the general public. The Obelix study is a large scale research investigating the effect of certain chemicals on potential development of obesity. In the overview various objectives of this study will be visualized and final results will be presented. 


# Features exposed/problem solved
In my data visualization project I aim to create an interactive visualization of the OBELIX study. OBELIX was a 4-year running, 2009-2013, European-Commission funded research project with its goal to investigate the effects of prenatal exposure to various endocrine disrupting chemicals on the development of obesity later in life (http://www.theobelixproject.org/). Endocrine disrupting chemicals are chemicals that can affect hormonal levels and their activity inside the body. The interactive visualization I aim to create will show both the general set-up of this academic study as well as the final results, including the risk assessment of the chemicals studied. By doing this, I hope to present an understandable overview of the OBELIX study for not only academics themselves, but mainly for the general public. 

The OBELIX project consists of various objectives, which I all aim to show in my visualization. The Minimum Viable Product however, will not contain all, but only a carefully selected part of the objectives. 
The objectives of the OBELIX study were assessing blood levels in infants after prenatal and postnatal exposure of the studied chemicals, using mother-child cohorts from various European regions. Additionally, mouse model analysis was used to perform hazard characterization of early life exposure to the studied chemicals with respect to obesity later in life. Mechanisms of action of the chemicals in the OBELIX study were determined, in other words how these chemicals cause certain effects in a body. Lastly, a risk assessment was performed of prenatal exposure to the studied chemicals (http://cordis.europa.eu/result/rcn/153420_en.html).  

The features chosen to be represented in the interactive visualization is the risk assessment of the various chemicals (potentially in a graph), a map representing the locations of the mother-child cohorts used across Europe, various characteristics of the mother-child cohorts, the results of the mouse model analysis, linking early life exposure to potential developments in obesity later in life, and general information and environmental concentrations (for example in food) of the various researched chemicals. 
The Minimum Viable Product will contain the map representing the locations of the mother-child cohorts across Europe, and an interactively linked visualization of the characteristics of these cohorts. Additionally, an information overview will be presented of two chosen chemicals researched in OBELIX (persistent organist pollutants: PCB-153 and p,p’-DDE), which will be interactively linked to graphs/bar charts showing the exposure, concentration in blood and the risk assessment of these two chosen chemicals for the mother-child cohorts.

So, the goal of this project is to create a general and understandable interactive overview of the OBELIX research (or part of the research for the Minimum Viable Product) for the general public, solving the problem of necessarily having an academic background in the environmental/toxicological field in order to comprehend the OBELIX project. 

#Preliminary sketch of application

![](doc/raw_sketch.png)

Depending on the data found in the first week, the outline of the application will be adapted. 	

# Data sets and data sources

The data sources for the application are various academic published papers on the OBELIX project. From these papers the necessary data will be extracted manually and be converted into usable data sets. 

The following data sets will be extracted and/or created:
- 1.	Mouse model data for various endocrine disrupting chemicals.
- 2.	Exposure and prenatal and postnatal chemical levels in blood in the mother-child cohorts for all researched chemicals. 
- a.	Information for the chemicals PCB-153 and p,p’-DDE  (already found – Iszatt et al. 2015).
- 3.	Data on relation of a chemical exposure to potential development in obesity.
- a.	Information for the chemicals PCB-153 and p,p’-DDE  (already found – Iszatt et al. 2015).
- 4.	Characteristics of all the mother-child cohorts, such as maternal height, breastfeeding, birth height and weight of the children (already found – Iszatt et al. 2015).
- 5.	Data on environmental concentrations of chemicals in the OBELIX study (might be found at an alternative source, namely the World Health Organization). 
- 6.	Risk assessment data on all chemicals in the OBELIX study(already found at: http://cordis.europa.eu/result/rcn/153420_en.html).
- 7.	If necessary, additional information regarding the parmacokinetic model used for determining the infant blood concentrations could be obtained from the respective paper. Otherwise, a link to that paper could be implemented in the visualization.

Mentioned reference: 
Iszatt N, Stigum H, Verner M, White RA, Govarts E, Murinova LP, Schoeters G, Trnovec T, Legler J, Pelé F, Botton J, Chevrier C, Wittsiepe J, Ranft U, Vandentorren S, Kasper-Sonneberg M, Klümper  C, Weisglas-Kuperus N, Polder A, Eggesbø M, OBELIX. 2015. Prenatal and Postnatal Exposure to Persistent Organic Pollutants and Infant Growth: A Pooled Analysis of Seven European Birth Cohorts. 
Environ Health Perspect 123: 730-736; doi:10.1289/ehp.1308005

# Separate parts of the application and the interaction between them

The following separate features of the application will be implemented:
- 1.	A risk assessment graph. [MVP - 2 chemicals]
- a.	Comparision between found chemical levels in the OBELIX study and the chemical levels used to calcualte the current tolerable daily intake (TDI).
- 2.	Map of Europe representing the mother-child cohorts of the OBELIX study. [MVP]
- 3.	Characteristics of the mother-child cohorts. [MVP]
- a.	Visualization type: to be determined.
- 4.	Infant blood concentrations for chemical prenatal and postnatal exposure for the various cohorts. [MVP – 2 chemcial]
- a.	Probably represented in a bar graph.
- 5.	Association between total exposure of chemicals from conception to 2 years with effect on weight score.
- a.	Presentation: to be determined
- 6.	Results from mouse models for the chemicals in the OBELIX study.
- a.	Probably represented in a bar or line graph.
- 7.	Overview of all chemcials researched in the OBELIX study (and their characteristics, type of chemcials, etc). [MVP – 2 chemicals]
- a.	Represented as image and a text box for the characteristics.
- 8.	Environmental concententrations of the chemicals.
- a.	Presented in a bar or line graph.


Interaction between features:
-	When clicked on the chemical in point 7, all graphs regarding chemicals will change visualizing the information on the clicked chemical.
-	Upon hovering on the chemical in point 7, the text box representing characteristics of this chemical and the information at point 8 will appear. [MVP – 2 chemicals]
-	Upon clicking on one of the cohorts in the Map of Europe in point 2, the characteristics (point 3) will be visualized in a separate window. [MVP]
-	The results of mouse models (point 6) are potentially linked to the association between total exposure and results in weight (point 5). Yet, this has to be determined 			during data collection in the first week. Interaction between these two point will then be determined. 
-	When hovered upon in one graph, corresponding chemicals and or cohorts in every graph on the application will light up. 


# Platform facilitate creating the application
The platform to facilitate creating the application will be mainly javascript and D3. Additionally python will be used if the data sets need to be adapted for their proper integration in javascript and D3. A map of Europe in which the locations of the cohorts from the study are presented, will be integrated in the application using D3. Web-searched images of the chemicals researched in the OBELIX project will be represented in the application as well. Features in D3, like bar graphs and line graphs, will also be used for data representation of chemical concentrations and risk assessments. 

# Short review of similar applications 

Various features and interactions have been explored in the course Data Visualization, such as line and bar graphs. Additonally, a World-Map was used for various exercises, which will probably be alike to using a map of Europe. The basics of interactions like pop-ups and appearances of new graphs have also been covered in the Data Visualization course exercises and in the discussions of visualizations. 
Lighting up of corresponding features in different visualizations is a new feature, such as change of all graphs when one feature is clicked. Examples of applications containing these features will be researched in the coming week. 