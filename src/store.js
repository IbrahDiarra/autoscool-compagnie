import { legacy_createStore as createStore } from 'redux'

const initialState = {
  sidebarShow: true,
  theme: localStorage.getItem('theme') || 'light', // Récupère le thème du localStorage
}

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      const newState = { ...state, ...rest }
      if (rest.theme) {
        localStorage.setItem('theme', rest.theme) // Enregistre le thème dans le localStorage
      }
      return newState
    default:
      return state
  }
}

const store = createStore(changeState)
export default store
