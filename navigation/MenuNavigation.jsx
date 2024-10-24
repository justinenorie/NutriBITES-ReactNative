import { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomePage from "../screens/HomePage";
import AboutUs from "../screens/AboutUs";
import LoginScreen from "../screens/LoginPages";
import SignUpScreen from "../screens/SignUpPage";
import Dashboards from "../screens/Dashboard";
import Profile from "../screens/Profile";

const Stack = createNativeStackNavigator();

export default function Navigation() {
    const [activeState, setActiveState] = useState("Dashboard");
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    animation: "fade",
                    animationTypeForReplace: "push",
                }}
            >
                <Stack.Screen name="Dashboard">
                    {(props) => (
                        <Dashboards
                            {...props}
                            activeState={activeState}
                            setActiveState={setActiveState}
                        />
                    )}
                </Stack.Screen>
                <Stack.Screen name="Profile">
                    {(props) => (
                        <Profile
                            {...props}
                            activeState={activeState}
                            setActiveState={setActiveState}
                        />
                    )}
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
