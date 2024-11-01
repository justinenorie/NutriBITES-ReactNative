import { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomePage from "../screens/HomePage";
import AboutUs from "../screens/AboutUs";
import LoginScreen from "../screens/LoginPages";
import SignUpScreen from "../screens/SignUpPage";
import Dashboards from "../screens/Dashboard";
import Favorites from "../screens/Favorites";
import ScanFood from "../screens/ScanFood";
import FoodDetails from "../screens/FoodDetails";
import Foodpyramid from "../screens/FoodPyramid";

const Stack = createNativeStackNavigator();

export default function Navigation() {
    const [activeState, setActiveState] = useState("Dashboard");
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerShown: false,
                    animation: "fade",
                }}
            >
                {/* Main Screen Navigations */}
                <Stack.Screen name="Home" component={HomePage} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="SignUp" component={SignUpScreen} />

                {/* Menu Navigations */}
                <Stack.Screen name="Dashboard">
                    {(props) => (
                        <Dashboards
                            {...props}
                            activeState={activeState}
                            setActiveState={setActiveState}
                        />
                    )}
                </Stack.Screen>

                <Stack.Screen name="Favorites">
                    {(props) => (
                        <Favorites
                            {...props}
                            activeState={activeState}
                            setActiveState={setActiveState}
                        />
                    )}
                </Stack.Screen>

                <Stack.Screen name="ScanFood">
                    {(props) => (
                        <ScanFood
                            {...props}
                            activeState={activeState}
                            setActiveState={setActiveState}
                        />
                    )}
                </Stack.Screen>

                <Stack.Screen name="FoodDetails">
                    {(props) => (
                        <FoodDetails
                            {...props}
                            activeState={activeState}
                            setActiveState={setActiveState}
                        />
                    )}
                </Stack.Screen>

                <Stack.Screen name="About">
                    {(props) => (
                        <AboutUs
                            {...props}
                            activeState={activeState}
                            setActiveState={setActiveState}
                        />
                    )}
                </Stack.Screen>

                {/* Content Navigations */}
                <Stack.Screen name="FoodPyramid" component={Foodpyramid} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
