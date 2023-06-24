import { createNativeStackNavigator } from "@react-navigation/native-stack"
import MoviesPage from "../pages/MoviesPage"
import MovieDetailsPage from "../pages/MovieDatailsPage"
import DashboardPage from "../pages/DashboardPage"

export default function AppRoutes() {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator>
            <Stack.Screen name='MoviesPage' component={MoviesPage} options={{headerShown: false}}/>
            <Stack.Screen name='MovieDetailsPage' component={MovieDetailsPage} options={{headerShown: false}}/>
            <Stack.Screen name='DashboardPage' component={DashboardPage} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}