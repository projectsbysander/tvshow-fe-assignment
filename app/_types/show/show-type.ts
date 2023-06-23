import { ImageProps } from '@_types/image'

export interface ShowType {
  id: number
  url: string
  name: string
  type: string
  language: string
  genres: string[]
  image: ImageProps
}
