import axios from 'axios'
import qs from 'qs'

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
  const loadingSkills = ref(false)
  const loadingExperience = ref(false)
  const loadingGallery = ref(false)

  const { axiosClient } = setupApi()

  const getCaseStudiesSync = () =>  axiosClient.get('/case-studies')

  const getCaseStudies = async () => {
    loading.value = true
    try {
      const { data } = await axiosClient.get('/case-studies')
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

  const getSkills = async () => {
    loadingSkills.value = true
    try {
      const { data } = await axiosClient.get('/skills')
      loadingSkills.value = false
      return [null, data]
    } catch (error) {
      console.error(error)
      loadingSkills.value = false
      return [error]
    }
  }

  const getExperience = async () => {
    loadingExperience.value = true
    try {
      const { data } = await axiosClient.get('/experiences')
      loadingExperience.value = false
      return [null, data]
    } catch (error) {
      console.error(error)
      loadingExperience.value = false
      return [error]
    }
  }

  const getCaseStudy = async slug => {
    loading.value = true
    try {
      // const query = qs.stringify({ filter: { seo_slug: { _eq: slug }}})
      const query = ''
      const { data } = await axiosClient.get(`/case-studies?${query}`)
      loading.value = false
      return [null, data]
    } catch (error) {
      console.error(error)
      loading.value = false
      return [error]
    }
  }

  const getGallery = async () => {
    loadingGallery.value = true
    try {
      const { data } = await axiosClient.get('/gallery?sort=sort,-date_created')
      loadingGallery.value = false
      return [null, data]
    } catch (error) {
      console.error(error)
      loadingGallery.value = false
      return [error]
    }
  }

  return {
    getCaseStudiesSync,
    getCaseStudies,
    getResources,
    createResource,
    getSkills,
    getExperience,
    getCaseStudy,
    loading,
    loadingSkills,
    loadingExperience,
    loadingGallery,
    getGallery
  }
}