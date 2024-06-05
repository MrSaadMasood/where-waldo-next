export type CharacterData = {
  id: string
  name: string,
  image: string,
  imageData: {
    path: string
  }
}

export type Coordinates = {
  x: number,
  y: number
}

export type Character = {
  id: number,
  name: string,
  location: Coordinates,
  coordinates: CoordinatesArray
}

type CoordinatesArray = [{ xmin: number, ymin: number }, { xmax: number, ymax: number }]
