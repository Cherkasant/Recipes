import { FlatList, StyleSheet, View } from 'react-native'
import { CATEGORIES, MEALS } from '../data/dummy_data'
import MealItem from '../components/MealItem'
import { useEffect } from 'react'

const MealsScreen = ({ route, navigation }) => {
    const id = route.params.categoryId


    useEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === id).title
        navigation.setOptions({ title: categoryTitle })
    }, [id, navigation])

    const displayedMeals = MEALS.filter((item) => {
        return item.categoryIds.indexOf(id) >= 0
    })


    const mealItem = (itemData) => {

        const mealItemProps = {
            id: itemData.item.id,
            title: itemData.item.title,
            imageUrl: itemData.item.imageUrl,
            duration: itemData.item.duration,
            complexity: itemData.item.complexity,
            affordability: itemData.item.affordability,
            ingredients: itemData.item.ingredients,
        }
        return <MealItem {...mealItemProps} />
    }

    return <View style={styles.container}>
        <FlatList data={displayedMeals} renderItem={mealItem} keyExtractor={(el) => el.id} />
    </View>
}

export default MealsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
})