export type SportData = {
  id: string
  name: string
  image: string
  color: string
  tricks: Array<{
    name: string
    type: string
    points: number
  }>
}
