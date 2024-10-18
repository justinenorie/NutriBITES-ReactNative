import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/LoginPages';
import SignUpScreen from '../screens/SignUpPage';

const Stack = createNativeStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="SignUp" component={SignUpScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}