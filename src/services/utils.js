export function zipCodeToId(zipCode) {
  return (
    zipCode.charAt(3) === '0' ? parseInt(zipCode.charAt(4)) : parseInt(zipCode.charAt(3) + zipCode.charAt(4))
  )
}

export function getDistrictName(districtNumber) {
  switch (districtNumber) {
    case 1:
      return 'Le Louvre'
    case 2:
      return 'La Bourse'
    case 3:
      return 'Le Temple'
    case 4:
      return 'L\'Hôtel-de-Ville'
    case 5:
      return 'Le Panthéon'
    case 6:
      return 'Le Luxembourg'
    case 7:
      return 'Le Palais-Bourbon'
    case 8:
      return 'L\'Élysée'
    case 9:
      return 'L\'Opéra'
    case 10:
      return 'L\'Enclos-Saint-Laurent'
    case 11:
      return 'Popincourt'
    case 12:
      return 'Reuilly'
    case 13:
      return 'Les Gobelins'
    case 14:
      return 'L\'Observatoire'
    case 15:
      return 'Vaugirard'
    case 16:
      return 'Passy'
    case 17:
      return 'Les Batignolles-Monceau'
    case 18:
      return 'La Butte-Montmartre'
    case 19:
      return 'Les Buttes-Chaumont'
    case 20:
      return 'Ménilmontant'
    default: 
      console.error(`Arrondissement inconnu: ${districtNumber}`)
      return 'Arrondissement inconnu'
      
  }
}