import { createSlice } from '@reduxjs/toolkit'

export const favouritesSlice = createSlice({
    name: 'counter',
    initialState: { ids: [] },
    reducers: {
        addFavourites: (state, action) => {
            state.ids.push(action.payload.id)
        },
        removeFavourites: (state, action) => {
            state.ids.splice(state.ids.indexOf(action.payload.id), 1)
        },
    },
})

export const { addFavourites, removeFavourites } = favouritesSlice.actions

const favouritesReducer = favouritesSlice.reducer

export default favouritesReducer
