import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    StatusBar,
    Image,
    TextInput,
} from "react-native";
import Colors from "../constants/Colors";
import fonts from "../constants/Typography";
import Menu from "../components/MenuBar";

export default function Details({ navigation, activeState, setActiveState }) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollview}>
                {/* Title */}
                <View style={styles.title}>
                    <Text style={[fonts.title]}>Food Details</Text>
                </View>

                {/* Search Bar */}
                <View
                    style={{
                        borderWidth: 1,
                        borderColor: "black",
                        borderRadius: 15,
                        padding: 10,
                        flexDirection: "row",
                        alignItems: "center",
                        marginVertical: 12,
                    }}
                >
                    <Image
                        source={require("../assets/icons/search.png")}
                        style={{ width: 20, height: 20, marginHorizontal: 10 }}
                    />
                    <TextInput
                        placeholder="Search Meal"
                        placeholderTextColor={Colors.TEXTblack}
                        style={[fonts.h1, { width: "100%" }]}
                    />
                </View>
            </ScrollView>

            <StatusBar backgroundColor={Colors.BACKGROUND} />
            <Menu
                navigation={navigation}
                activeState={activeState}
                setActiveState={setActiveState}
            />
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
