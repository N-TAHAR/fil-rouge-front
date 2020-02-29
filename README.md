# Projet Fil Rouge Groupe 16 - Repository front-end

**Personnes du groupe notées sur le front**
+ Félix Robaglia

## Choix argumentés entre les solutions SVG, canvas, webGL...

Pour la carte, élément principal de notre application, nous avons choisi de partir sur une carte en SVG, tout simplement car le design de la carte s'y prêtait bien. De plus, le SVG étant basé sur le XML comme le HTML, nous permet de gérer très simplement les animations triviales comme la variation couleur au hover.
<br /> <br />
Nous avons estimé qu'une solution canvas serait inutilement compliquée au vu de nos besoins, ainsi que plus gourmande en performance. <br />
Nous avons également décider de gérer les graphiques en SVG comme expliqué ci-dessous.

## Les librairies externes utilisées

Au commencement du projet, nous avions décider de gérer les graphiques de notre application avec la librarie javascript **chart.js**. <br>
Seulement, après l'intégration de la totalité des graphiques avec cette librarie, nous avons remarqué une baisse de performances et des charts au design qui ne nous convenaient pas totalement, la librarie ne laissant pas modifier l'intégralité de ces composants.
<br /> <br />
Ainsi, nous avons décider de refaire nos graphiques en SVG, qui encore une fois nous a permis de gérer plus efficacement les transitions visuelles sur les graphiques, et de gérer le design comme on le souhaitait initialement. Cela nous a également permis de passer d'une librarie de plusieurs milliers de lignes à des SVG de 2 lignes pour les graphiques en cercle.

