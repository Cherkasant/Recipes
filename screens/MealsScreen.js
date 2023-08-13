import { StyleSheet } from 'react-native'
import { CATEGORIES, MEALS } from '../data/dummy_data'
import { useEffect } from 'react'
import MealsList from '../components/MealsList/MealsList'

const MealsScreen = ({ route, navigation }) => {
    const id = route.params.categoryId


    useEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === id).title
        navigation.setOptions({ title: categoryTitle })
    }, [id, navigation])

    const displayedMeals = MEALS.filter((item) => {
        return item.categoryIds.indexOf(id) >= 0
    })

    return <MealsList data={displayedMeals} />
}

export default MealsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
})