import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomePage from '../screens/HomePage';
import AboutUs from '../screens/AboutUs';
import LoginScreen from '../screens/LoginPages';
import SignUpScreen from '../screens/SignUpPage';
import Dashboards from '../screens/Dashboard';

const Stack = createNativeStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    animation: 'fade_from_bottom',
                    animationTypeForReplace: 'push',
                }}
                initialRouteName="Home"
            >
                <Stack.Screen name="Home" component={HomePage} />
                <Stack.Screen name="About" component={AboutUs} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="SignUp" component={SignUpScreen} />
                <Stack.Screen name="Dashboard" component={Dashboards} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

