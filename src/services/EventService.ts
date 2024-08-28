import axios from 'axios'

const apiClient = axios.create({
  withCredentials: false,
  headers: {
    Accept: 'application/json'
  }
})

export default {
  async getAllEvents() {
    const parts = ['countrymedal/data1', 'data2/data2', 'data3/data3', 'data4/data4', 'data5/data5', 'data6/data6', 'data7/data7', 'data8/data8', 'data9/data9', 'data10/data10']

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

  async getCountryDetails() {
    const parts = ['dbolympic', 'dbolympic2', 'dbolympic3', 'dbolympic4', 'dbolympic5']
    const dataPromises = parts.map((part) =>
      apiClient
        .get(`https://my-json-server.typicode.com/matchimaky/${part}/country`)
        .then((response) => response.data)
    )
    const results = await Promise.all(dataPromises)
    const allCountry = results.flat()
    return allCountry
  },

  async getCountry(id: string) {
    const countries = await this.getCountryDetails()
    const country = countries.find((country) => country.id === id)
    if (!country) {
      throw new Error(`Event with ID ${id} not found`)
    }
    return country
  }
}
