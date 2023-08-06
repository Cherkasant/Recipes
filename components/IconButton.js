import { Pressable, StyleSheet, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'

const IconButton = ({ children, onPress, icon, color }) => {
    return <View style={styles.buttonOuterContainer}>
        <Pressable onPress={onPress}
                   style={({ pressed }) => pressed ? [styles.pressed, styles.buttonInnerContainer] : styles.buttonInnerContainer}>
            <Ionicons name={icon} size={24} color={color} />
        </Pressable>
    </View>

}

export default IconButton


const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden',
    },
    buttonInnerContainer: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
    pressed: {
        opacity: 0.75,
    },
})




