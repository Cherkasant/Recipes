import { StyleSheet, Text, View } from 'react-native'
import MealsList from '../components/MealsList/MealsList'
import { useSelector } from 'react-redux'
import favouriteSelector from '../store/redux/Selectors/favouriteSelector'
import { MEALS } from '../data/dummy_data'

const FavoritesScreen = () => {
    // const FavouriteMealsContext = useContext(FavouritesContext)
    const favouriteMealsIds = useSelector(favouriteSelector.getFavourite)
    const favouriteMeals = MEALS.filter((meal) => favouriteMealsIds.includes(meal.id))

    if (favouriteMeals.length === 0) {
        return <View style={styles.rootContainer}>
            <Text style={styles.text}>Oops, no favourites yet....</Text>
        </View>
    }

    return <MealsList data={favouriteMeals} />
}

export default FavoritesScreen

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
})