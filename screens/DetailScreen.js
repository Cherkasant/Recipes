import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { MEALS } from '../data/dummy_data'
import MealDetails from '../components/MealDetails'
import SubTitle from '../components/MealDetail/SubTitle'
import List from '../components/MealDetail/List'
import { useLayoutEffect } from 'react'
import IconButton from '../components/IconButton'

const DetailScreen = ({ route, navigation }) => {
    const id = route.params.id

    const selectedMeal = MEALS.find((meal) => meal.id === id)

    const onPressButtonHandler = () => {
        return console.log('pressed')
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton onPress={onPressButtonHandler} icon={'star'} color={'white'} />
            },
        })
    }, [navigation, onPressButtonHandler])
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