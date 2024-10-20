import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomePage from '../screens/HomePage';
import AboutUs from '../screens/AboutUs';
import LoginScreen from '../screens/LoginPages';
import SignUpScreen from '../screens/SignUpPage';

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
            </Stack.Navigator>
        </NavigationContainer>
    );
}

