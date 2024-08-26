import axios from 'axios'

const apiClient = axios.create({
  withCredentials: false,
  headers: {
    Accept: 'application/json'
  }
})

export default {
  async getAllEvents() {
    const parts = ['countrymedal/data1', 'data2/data2', 'data3/data3', 'data4/data4', 'data5/data5']

    const dataPromises = parts.map((part) =>
      apiClient
        .get(`https://my-json-server.typicode.com/Jasmxnej/${part}`)
        .then((response) => response.data)
    )
    const results = await Promise.all(dataPromises)

    const allEvents = results.flat()
    return allEvents
  },

  async getEvent(id: string) {
    const events = await this.getAllEvents()
    const event = events.find((event) => event.id === id)
    if (!event) {
      throw new Error(`Event with ID ${id} not found`)
    }
    return event
  },

  async getCountryDetails(id: string) {
    const response = await apiClient.get(
      `https://my-json-server.typicode.com/matchimaky/dbolympic/country`
    )
    const country = response.data.find((country: any) => country.id === id)
    if (!country) {
      throw new Error(`Country with ID ${id} not found`)
    }
    return country
  }
}
