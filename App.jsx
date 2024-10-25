import React from 'react';
import AppNavigator from './navigation/mainNavigation';
import { useFonts } from "expo-font";
import { ActivityIndicator, View } from 'react-native';

export default function App() {
    const [fontsLoaded] = useFonts({
        'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
        'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
        'Quicksand-Regular': require('./assets/fonts/Quicksand-Regular.ttf'),
        'Quicksand-Bold': require('./assets/fonts/Quicksand-Bold.ttf'),
        'MochiyPopOne-Regular' : require('./assets/fonts/MochiyPopOne-Regular.ttf'),
        'Oswald-Regular' : require('./assets/fonts/Oswald-Regular.ttf'),
        'Oswald-Bold' : require('./assets/fonts/Oswald-Bold.ttf')
    });

    if (!fontsLoaded) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return (
        <AppNavigator />
    );
};