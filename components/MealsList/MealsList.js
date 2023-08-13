import MealItem from './MealItem'
import { FlatList, StyleSheet, View } from 'react-native'

const MealsList = ({ data }) => {
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
        <FlatList data={data} renderItem={mealItem} keyExtractor={(el) => el.id} />
    </View>
}

export default MealsList


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
})