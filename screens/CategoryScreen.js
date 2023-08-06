import { FlatList, StyleSheet, View } from 'react-native'
import { CATEGORIES } from '../data/dummy_data'
import CategoryCard from '../components/CategoryCard'


const CategoryScreen = ({ navigation }) => {
    const categoryItem = (itemData) => {
        const onPressHandler = () => {
            navigation.navigate('Meals', { categoryId: itemData.item.id })
        }
        return <CategoryCard title={itemData.item.title} color={itemData.item.color} onPress={onPressHandler} />
    }
    return <View>
        <FlatList data={CATEGORIES} keyExtractor={item => item.id} renderItem={categoryItem} numColumns={2} />
    </View>
}

export default CategoryScreen

const styles = StyleSheet.create({
    container: {},
})