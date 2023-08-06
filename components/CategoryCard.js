import { Platform, Pressable, StyleSheet, Text, View } from 'react-native'

const CategoryCard = ({ title, color, onPress }) => {
    return <View style={[styles.container]}>
        <Pressable onPress={onPress} android_ripple={{ color: '#ccc' }}
                   style={({ pressed }) => [styles.buttonStyle, pressed ? styles.btnPressed : null]}>
            <View style={[styles.innerContainer, { backgroundColor: color }]}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </Pressable>
    </View>
}

export default CategoryCard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    buttonStyle: {
        flex: 1,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    btnPressed: {
        opacity: 0.4,
    },
})