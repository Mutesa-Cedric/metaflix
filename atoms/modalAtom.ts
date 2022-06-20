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
  key:'notAvailableState',
  default:false
})

export const loginErrorModalState=atom({
  key:'loginErrorState',
  default:false
})

export const featureInProgressModalState=atom({
  key:'featureInProgressState',
  default:true
})