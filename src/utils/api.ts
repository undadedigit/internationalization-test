import { Item } from '../types'

const API_BASE_URL = 'https://api.restful-api.dev/objects'

export async function getObjects(): Promise<Item[]> {
  const response = await fetch(API_BASE_URL)
  if (!response.ok) {
    throw new Error('Failed to fetch objects')
  }
  return response.json()
}

export async function getObject(id: string): Promise<Item> {
  const response = await fetch(`${API_BASE_URL}/${id}`)
  if (!response.ok) {
    throw new Error('Failed to fetch object')
  }
  return response.json()
}
