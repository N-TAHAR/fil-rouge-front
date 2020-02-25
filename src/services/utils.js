export function zipCodeToId(zipCode) {
  return (
    zipCode.charAt(3) === '0' ? parseInt(zipCode.charAt(4)) : parseInt(zipCode.charAt(3) + zipCode.charAt(4))
  )
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