import PocketBase from 'pocketbase'
import { defineStore } from 'pinia'
import { useAuthStore } from './auth'

export const useLinksStore = defineStore('links', () => {
  // Create a PocketBase client
  const pocketbaseClient = new PocketBase(process.env.POCKETBASE_URL || 'http://127.0.0.1:8090')
  const authStore = useAuthStore()
  const collectionName = 'links'

  async function fetchLinks (page, perPage) {
    const pageResult = await pocketbaseClient.collection(collectionName).getList(page || 1, perPage || 10)
    return pageResult
  }

  async function fetchLink (id) {
    const record = await pocketbaseClient.collection(collectionName).getOne(id) // , { expand: 'items' })
    return record
  }

  async function createLinks (name, data) {
    const record = await pocketbaseClient.collection(collectionName).create({
      name,
      data,
      owner: authStore.user.id
    })
    return record
  }

  async function deleteLinks (id) {
    await pocketbaseClient.collection(collectionName).delete(id)
  }

  async function updateLinks (id, updates) {
    const record = await pocketbaseClient.collection(collectionName).update(id, updates)
    return record
  }

  return {
    fetchLinks,
    createLinks,
    deleteLinks,
    updateLinks,
    fetchLink
  }
})
