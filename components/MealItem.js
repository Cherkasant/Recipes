import { Image, Platform, Pressable, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import MealDetails from './MealDetails'

const MealItem = ({ id, title, imageUrl, duration, complexity, affordability, ingredients }) => {
    const navigation = useNavigation()

    const onPressMeal = () => navigation.navigate('Detail', { id: id })

    return <View style={styles.mealItem}>
        <Pressable android_ripple={{ color: '#ccc' }}
                   style={({ pressed }) => pressed ? styles.btnPressed : null} onPress={onPressMeal}>
            <View>
                <View>
                    <Image source={{ uri: imageUrl }} style={styles.image} />
                    <Text style={styles.title}>{title}</Text>
                </View>
                <MealDetails duration={duration} complexity={complexity} affordability={affordability} />
            </View>
        </Pressable>
    </View>
}

export default MealItem

const styles = StyleSheet.create({
    mealItem: {
        margin: 16, borderRadius: 8, backgroundColor: 'white', elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 200,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 8,
    },
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        justifyContent: 'center',
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12,
    },
    btnPressed: {
        opacity: 0.4,
    },
})