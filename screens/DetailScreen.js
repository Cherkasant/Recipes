import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { MEALS } from '../data/dummy_data'
import MealDetails from '../components/MealDetails'
import SubTitle from '../components/MealDetail/SubTitle'
import List from '../components/MealDetail/List'
import { useContext, useLayoutEffect } from 'react'
import IconButton from '../components/IconButton'
import { FavouritesContext } from '../store/context/favourites-context'
import { useDispatch, useSelector } from 'react-redux'
import favouriteSelector from '../store/redux/Selectors/favouriteSelector'
import { addFavourites, removeFavourites } from '../store/redux/favourites'

const DetailScreen = ({ route, navigation }) => {
    const favouriteMealsContext = useContext(FavouritesContext)
    const favouriteMealIds = useSelector(favouriteSelector.getFavourite)
    const dispatch = useDispatch()
    const mealId = route.params.id

    const selectedMeal = MEALS.find((meal) => meal.id === mealId)

    const mealIsFavourite = favouriteMealIds.includes(mealId)

    const changeFavouriteStatusHandler = () => {
        if (mealIsFavourite) {
            //   favouriteMealsContext.removeFavourites(id)
            dispatch(removeFavourites({ id: mealId }))
        } else {
            dispatch(addFavourites({ id: mealId }))
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton onPress={changeFavouriteStatusHandler}
                                   icon={mealIsFavourite ? 'star' : 'star-outline'}
                                   color={'white'} />
            },
        })
    }, [navigation, changeFavouriteStatusHandler])
    return <ScrollView style={styles.container}>
        <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <MealDetails duration={selectedMeal.duration} complexity={selectedMeal.complexity}
                     affordability={selectedMeal.affordability} textStyle={styles.textStyle} />
        <View style={styles.listOuterContainer}>
            <View style={styles.listContainer}>
                <SubTitle>Ingredients</SubTitle>
                <List data={selectedMeal.ingredients} />
                <SubTitle>Steps</SubTitle>
                <List data={selectedMeal.steps} />
            </View>
        </View>
    </ScrollView>
}

export default DetailScreen

const styles = StyleSheet.create({
    container: {
        marginBottom: 24,
        flex: 1,
    },
    image: {
        width: '100%',
        height: 350,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white',
    },
    textStyle: { color: 'white' },
    listContainer: {
        maxWidth: '80%',
    },
    listOuterContainer: {
        alignItems: 'center',
    },
})