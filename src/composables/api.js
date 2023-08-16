import axios from 'axios'
import qs from 'qs'

import { caseStudies } from './mocks/caseStudies'
import { experiences } from './mocks/experiences'
import { skills } from './mocks/skills'

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

  const getCaseStudies = () => {
    loading.value = true
    try {
      loading.value = false
      return [null, caseStudies]
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

  const getSkills = () => {
    loadingSkills.value = true
    try {
      loadingSkills.value = false
      return [null, skills]
    } catch (error) {
      console.error(error)
      loadingSkills.value = false
      return [error]
    }
  }

  const getExperience = () => {
    loadingExperience.value = true
    try {
      loadingExperience.value = false
      return [null, experiences]
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