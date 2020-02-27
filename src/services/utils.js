export function zipCodeToId(zipCode) {
  return (
    zipCode.charAt(3) === '0' ? parseInt(zipCode.charAt(4)) : parseInt(zipCode.charAt(3) + zipCode.charAt(4))
  )
}

export function idToZipCode(id) {
  if (id < 10) {
    return `7500${id}`
  }
  return `750${id}`
}

export function getCategoryNameFromIndex(index) {

  const categories = {
    0: 'Espaces verts',
    1: 'Evènements',
    2: 'Vélos',
    3: 'Bornes wifi'
  }

  if (!categories[index]) return `index ${index} : Catégorie inconnue`
  return categories[index]
}

export function getDistrictName(districtNumber) {
  const districtNames = {
    1: 'Le Louvre',
    2: 'La Bourse',
    3: 'Le Temple',
    4: 'L\'Hôtel-de-Ville',
    5: 'Le Panthéon',
    6: 'Le Luxembourg',
    7: 'Le Palais-Bourbon',
    8: 'L\'Élysée',
    9: 'L\'Opéra',
    10: 'L\'Enclos-Saint-Laurent',
    11: 'Popincourt',
    12: 'Reuilly',
    13: 'Les Gobelins',
    14: 'L\'Observatoire',
    15: 'Vaugirard',
    16: 'Passy',
    17: 'Les Batignolles-Monceau',
    18: 'La Butte-Montmartre',
    19: 'Les Buttes-Chaumont',
    20: 'Ménilmontant'
  }

  if (!districtNames[districtNumber]) return `Arrondissement ${districtNumber} inconnu`
  return districtNames[districtNumber]
}

export function getDistrictDescription(districtNumber) {
  const districtDescriptions = {
    1: "Le musée du Louvre, qui abrite la Joconde, est le cœur de ce quartier animé où l'on trouve des boulevards haussmanniens, des parcs tels que le jardin des Tuileries, ainsi que le Palais-Royal, édifié au XVIIe siècle.",
    2: "Au cœur du 2e arrondissement de la ville, riche en diversité, les grossistes textiles du Sentier côtoient des boutiques tendance dans la rue commerçante de Montorgueil. Les passages couverts d'époque, regorgent de boutiques originales.",
    3: "Également appelé le Haut-Marais, le 3e arrondissement est une enclave branchée réunissant cafés, restaurants et boutiques tendance. Les amateurs d'art se retrouvent dans les galeries modernes et au musée Picasso, qui expose de nombreuses œuvres d'art.",
    4: "Le 4e arrondissement comprend une partie du quartier branché du Marais, connu pour ses boutiques tendance, ses galeries d'art et ses bars gays. Ancien quartier juif de la ville, il a conservé un certain nombre de restaurants casher.",
    5: "Surnommé le Quartier latin, le 5e arrondissement comprend l'université Paris-Sorbonne ainsi que des cafés appréciés des étudiants. Il est également réputé pour ses librairies, dont la célèbre Shakespeare and Company.",
    6: "Le jardin du Luxembourg domine le quartier chic de la Rive Gauche, qui comprend des boutiques et restaurants chics, ainsi que l'abbaye de Saint-Germain-des-Prés datant du VIe siècle, la plus ancienne église de Paris",
    7: "Ce quartier raffiné comprend l'emblématique tour Eiffel et son parc du Champ-de-Mars. Il attire aussi les touristes avec ses sites culturels dont le musée d'Orsay et sa collection d'œuvres impressionnistes, le musée Rodin avec son jardin de sculptures et le musée des Invalides, qui abrite le tombeau de Napoléon.",
    8: "Ce quartier chic est composé de la grande avenue des Champs-Élysées, qui relie le célèbre Arc de Triomphe au rond-point très fréquenté de la place de la Concorde. Dotée de boutiques haut de gamme et de façades de bureau étincelantes, la zone est fréquentée par une foule éclectique.",
    9: "L'élégant 9e arrondissement est connu pour ses théâtres, dont l'opéra Garnier, qui date de 1875, surnommé le \"gâteau de mariage\" du fait de son dôme et de son architecture complexe.",
    10: "Le 10e arrondissement est un quartier émergent où les passerelles pittoresques et les cafés bohèmes le long du canal Saint-Martin côtoient les restaurants indiens du passage Brady.",
    11: "Le 11e arrondissement est un quartier branché et éclectique qui attire les fêtards dans les bars animés de la rue Oberkampf et des rues voisines. C'est aussi là que se trouve l'opéra Bastille, le principal opéra de la ville.",
    12: "Autrefois empreint d'une atmosphère simple, le 12e arrondissement regroupe aujourd'hui un ensemble de quartiers résidentiels tranquilles. La coulée verte René-Dumont est une promenade paisible comprenant des jardins le long d'une ancienne voie ferrée surélevée.",
    13: "Dans le 13e arrondissement multiculturel, les bâtiments classiques se mêlent aux gratte-ciel modernes. Le plus grand quartier chinois de la ville regorge d'épiceries asiatiques colorées et de restaurants chinois et vietnamiens haut de gamme ou à petits prix",
    14: "Le 14e arrondissement s'étend autour de Montparnasse, une zone commerçante où l'on trouve des restaurants simples, des crêperies et des bistrots historiques. L'atmosphère bohème du quartier est présente dans les cafés animés et le cimetière de Montparnasse.",
    15: "Le 15e arrondissement est une zone résidentielle éclectique où les boutiques pittoresques qui entourent la station de métro La motte-Picquet-Grenelle côtoient le gratte-ciel de la tour Montparnasse.",
    16: "Le très chic 16e arrondissement abrite des ambassades étrangères et des musées renommés, notamment la fondation d'entreprise Louis Vuitton et le palais de Tokyo, où sont exposées des œuvres d'art contemporain.",
    17: "Au sein de l'éclectique 17e arrondissement, les jeunes résidents branchés se réunissent dans les bars tendance de la place de Clichy, tandis que les touristes viennent visiter le musée national Jean-Jacques-Henner.",
    18: "Le 18e arrondissement se concentre autour de la charmante butte Montmartre, un ancien village d'artistes autrefois habité par Picasso et Dali, avec la majestueuse basilique du Sacré-Cœur.",
    19: "Le 19e arrondissement est un fleuron du renouveau urbain. Les familles apprécient la promenade du canal de l'Ourcq et sa piste cyclable menant au parc de la Villette, qui abrite des musées comme la Cité des sciences et de l'industrie ainsi que des salles de concert.",
    20: "Le 20e arrondissement, où règne une ambiance décontractée et bohème, se trouve dans l'ancien cœur industriel de Paris. Orné d'œuvres d'art urbain, le quartier tendance de Belleville comprend des restaurants chinois bon marché et une nouvelle vague de galeries d'art contemporain."
  }

  if (!districtDescriptions[districtNumber]) return `Arrondissement ${districtNumber} inconnu - pas de description`
  return districtDescriptions[districtNumber]
}

export function getAthleticEvents(districtNumber) {
  const events = {
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: ['Beach volley', 'Tir à l\'arc', 'Triathlon', 'Escrime', 'Taekwondo'],
    8: 'Cyclisme',
    9: false,
    10: false,
    11: false,
    12: ['Judo', 'Basket', 'Lutte'],
    13: false,
    14: false,
    15: ['Football', 'Handball', 'Tennis de table'],
    16: ['Tennis', 'Boxe', 'Rugby'],
    17: false,
    18: false,
    19: 'Haltérophilie',
    20: false
  }

  if (!events[districtNumber]) return 'Aucune épreuve ne se déroule dans cet arrondissement.'
  else if (typeof events[districtNumber] === "string") {
    return `L'épreuve ${events[districtNumber]} se déroule dans cet arrondissement.`
  }
  else {
    return `Les épreuves ${events[districtNumber].join(', ')} se déroulent dans cet arrondissement.`
  }
}

export function search(keyValue, array){
  for (var i=0; i < array.length; i++) {
      if (array[i].name === keyValue) {
          return array[i];
      }
  }
}