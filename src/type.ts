export interface MedalDetails {
  gold: number
  silver: number
  bronze: number
}

export interface SportMedalDetails {
  name: string
  gold: number
  silver: number
  bronze: number
}

export interface Event {
  id: string
  name: string
  continent: string
  flag_url: string
  description: string
  total_medals: number
  medals_by_sport: {
    until_2024: {
      sports: SportMedalDetails[]
      total: MedalDetails
    }
    in_2024: {
      sports: SportMedalDetails[]
      total: MedalDetails
    }
  }
}

export interface Country {
  id: string
  name: string
  description: string
}

export interface Comment {
  name: string
  text: string
  date: string
}

export interface MessageState {
  message: string
}
