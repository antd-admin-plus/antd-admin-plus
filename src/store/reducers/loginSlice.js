import { createSlice } from '@reduxjs/toolkit'

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    username: 0,
  },
  reducers : {
    saveUsername: (state, action) => {
      state.username = action.payload.username
    }
  }
})

export const { saveUsername } = loginSlice.actions

export default loginSlice.reducer