import { createContext, useState } from 'react'

export const FavouritesContext = createContext({
    id: [], addFavourites: (id) => {
    }, removeFavourites: (id) => {
    },
})

const FavouritesContextProvider = ({ children }) => {
    const [favouriteMealsId, setFavouritesMealId] = useState([])

    const addFavourites = (id) => {
        setFavouritesMealId((prev) => [...prev, id])
    }

    const removeFavourites = (id) => {
        setFavouritesMealId((prev) => prev.filter(mealId => mealId !== id))
    }
    const value = {
        id: favouriteMealsId,
        addFavourites: addFavourites,
        removeFavourites: removeFavourites,
    }
    return <FavouritesContext.Provider value={value}>{children}</FavouritesContext.Provider>
}


export default FavouritesContextProvider