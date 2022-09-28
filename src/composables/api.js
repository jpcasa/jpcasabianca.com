import axios from 'axios'

/*
  Set up basic configuration for axios.
*/
export function setupApi() {
  const baseURL = `${import.meta.env.VITE_API_URL}`  
  const axiosClient = axios.create({ baseURL })

  return { axiosClient }
}

/*
  GENERAL API
*/
export function useApi() {
  const loading = ref(false)
  const { axiosClient } = setupApi()

  const getCaseStudies = async () => {
    loading.value = true
    try {
      const { data } = await axiosClient.get('/Case_Studies')
      loading.value = false
      return [null, data]
    } catch (error) {
      console.error(error)
      loading.value = false
      return [error]
    }
  }

  const getResources = async () => {
    loading.value = true
    try {
      const { data } = await axiosClient.get('/resources')
      loading.value = false
      return [null, data]
    } catch (error) {
      console.error(error)
      loading.value = false
      return [error]
    }
  }

  const createResource = async payload => {
    loading.value = true
    try {
      const { data } = await axiosClient.post('/resources', payload)
      loading.value = false
      return [null, data]
    } catch (error) {
      console.error(error)
      loading.value = false
      return [error]
    }
  }

  return { getCaseStudies, getResources, createResource, loading }
}