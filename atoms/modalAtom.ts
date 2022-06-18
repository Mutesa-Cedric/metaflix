import { DocumentData } from 'firebase/firestore'
import { atom } from 'recoil'
import { Movie } from '../typings'

//showing or hiding model
export const modalState = atom({
  key: 'modalState',
  default: false,
})
//showing or hiding model


export const movieState = atom<Movie | DocumentData | null>({
  key: 'movieState',
  default: null,
})

export const notAvailableModalState=atom({
  key:'notAvailableModalState',
  default:false
})

export const loginErrorModalState=atom({
  key:'loginErrorModalState',
  default:false
})

export const featureInProgressModalState=atom({
  key:'featureInProgressModalState',
  default:true
})