export interface Airline {
  _id: string
  name: string
  country: string
  logo: string
  slogan: string
  head_quaters: string
  website: string
  established: string
}

export interface Event {
  _id: string
  name: string
  trips: number
  airline: Airline[]
}

export interface MessageState {
  message: string
}

export interface EventState {
  event: Event | null
}
