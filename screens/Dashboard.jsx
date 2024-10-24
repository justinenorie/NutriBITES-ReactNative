import { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Image,
    StatusBar,
} from "react-native";
import Colors from "../constants/Colors";
import fonts from "../constants/Typography";
import logo from "../assets/HealthLogo.png";
import Menu from "../components/MenuBar";

export default function Dashboard({ navigation, activeState, setActiveState }) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollview}>
                {/* Title */}
                <View style={styles.title}>
                    <Text style={[fonts.logoName, { fontSize: 50 }]}>
                        Nutri
                        <Text style={[fonts.logoName, { fontSize: 38 }]}>
                            BITES
                        </Text>
                    </Text>
                    <Image
                        source={logo}
                        style={{ width: 50, height: 50, marginHorizontal: 2 }}
                    />
                </View>

                {/* Content */}
                <View style={styles.BLDContainer}>
                    <View>
                        <Text>BREAKFAST</Text>
                        <Text>
                            It jumpstarts your metabolism and gives you the
                            energy to start your day. It also improves
                            concentration and performance.
                        </Text>
                    </View>
                    
                </View>

                <View style={styles.BLDContainer}>
                    <View>
                        <Text>LUNCH</Text>
                        <Text>
                            It helps to maintain energy levels and provides
                            essential nutrients during the busiest part of the
                            day.
                        </Text>
                    </View>
                </View>

                <View style={styles.BLDContainer}>
                    <View>
                        <Text>DINNER</Text>
                        <Text>
                            A balanced dinner helps to replenish your body after
                            a long day and prepares it for rest and recovery
                            during sleep.
                        </Text>
                    </View>
                </View>
            </ScrollView>

            <StatusBar backgroundColor={Colors.BACKGROUND} />
            <Menu navigation={navigation}
                activeState={activeState}
                setActiveState={setActiveState} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: Colors.BACKGROUND,
    },
    scrollview: {
        flex: 1,
        padding: 24,
    },
    title: {
        flexDirection: "row",
        justifyContent: "center",
    },
    BLDContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 24,
    },
});
