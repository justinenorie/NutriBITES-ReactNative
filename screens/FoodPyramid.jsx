import Colors from "../constants/Colors";
import fonts from "../constants/Typography";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

export default function Foodpyramid({ navigation }) {
    return (
        <View style={styles.container}>
            {/* Title */}
            <View
                style={{ flexDirection: "row", alignItems: "center"}}
            >
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={styles.backButton}>{"<"}</Text>
                </TouchableOpacity>
                <View style={{ marginHorizontal: 24 }}>
                    <Text style={fonts.title}>Food Pyramid</Text>
                </View>
            </View>

            {/* Contents */}
            

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
    },
    backButton: {
        fontSize: 40,
        color: Colors.TEXTblack,
        fontFamily: "MochiyPopOne-Regular",
    },
});
