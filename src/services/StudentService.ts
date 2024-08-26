import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://api.instantwebtools.net/v1',
  withCredentials: false,
  headers: {
    Accept: 'application/json'
  }
})

export default {
  getAirline(id: number) {
    return apiClient
      .get(`/airlines/${id}`)
      .then((response) => {
        if (response.data && response.data._id) {
          return response.data
        } else {
          throw new Error('Invalid data format received')
        }
      })
      .catch((error) => {
        console.error('Error fetching airline data:', error)
        throw error
      })
  }
}
