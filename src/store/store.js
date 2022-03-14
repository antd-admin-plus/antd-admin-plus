import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducers/counterSlice'
import loginReducer from './reducers/loginSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    login: loginReducer,
  },
})