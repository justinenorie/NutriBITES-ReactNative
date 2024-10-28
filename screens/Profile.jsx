import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    StatusBar,
} from "react-native";
import Colors from "../constants/Colors";
import fonts from "../constants/Typography";
import Menu from "../components/MenuBar";

export default function Profile({ navigation, activeState, setActiveState }) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollview}>
                {/* Title */}
                <View style={styles.title}>
                    <Text style={[fonts.title]}>Profile</Text>
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
        marginVertical: 12,
    },
});
