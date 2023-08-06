import { StyleSheet, Text, View } from 'react-native'

const List = ({ data }) => {
    return data.map(dataElement => {
        return <View key={dataElement} style={styles.listItem}>
            <Text style={styles.itemText}>{dataElement}</Text>
        </View>
    })
}

export default List

const styles = StyleSheet.create({
    listItem: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 8,
        marginHorizontal: 12,
        backgroundColor: '#e2b497',
    },
    itemText: {
        color: '#3f2f25',
        textAlign: 'center',
    },
})