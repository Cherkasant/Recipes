import { Button, StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MealsScreen from './screens/MealsScreen'
import DetailScreen from './screens/DetailScreen'
import { createDrawerNavigator } from '@react-navigation/drawer'
import CategoryScreen from './screens/CategoryScreen'
import FavoritesScreen from './screens/FavoritesScreen'
import { Ionicons } from '@expo/vector-icons'
import { Provider } from 'react-redux'
import { store } from './store/redux/store'

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()
const DrawerNavigator = () => {
    return <Drawer.Navigator screenOptions={{
        headerStyle: { backgroundColor: '#351401' },
        headerTintColor: 'white',
        sceneContainerStyle: { backgroundColor: '#3f2f25' },
        drawerContentStyle: { backgroundColor: '#351401' },
        drawerInactiveTintColor: 'white',
        drawerActiveTintColor: '#351401',
        drawerActiveBackgroundColor: '#e4baa1',
    }}>
        <Drawer.Screen name={'Category'} component={CategoryScreen} options={{
            title: 'All categories',
            drawerIcon: ({ color, size }) => <Ionicons name='ios-list-circle' size={size} color={color} />
            ,
        }} />
        <Drawer.Screen name={'Favorites'} component={FavoritesScreen} options={{
            drawerIcon: ({ color, size }) => <Ionicons name='star' size={size} color={color} />
            ,
        }} />
    </Drawer.Navigator>
}

export default function App() {
    return (<>
            <StatusBar style={'light'} />
            <Provider store={store}>
                <NavigationContainer>
                    <Stack.Navigator screenOptions={{
                        headerStyle: { backgroundColor: '#351401' },
                        headerTintColor: 'white',
                        contentStyle: { backgroundColor: '#3f2f25' },
                    }}>
                        <Stack.Screen name={'Drawer'} component={DrawerNavigator}
                                      options={{ title: 'All Categories', headerShown: false }} />
                        <Stack.Screen name={'Meals'} component={MealsScreen} options={({ route, navigation }) => {
                            return { title: route.params.title }
                        }} />
                        <Stack.Screen name={'Detail'} component={DetailScreen} options={{
                            headerRight: () => {
                                return <Button title={'Press'} />
                            },
                        }
                        } />
                    </Stack.Navigator>
                </NavigationContainer>
            </Provider>

        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
