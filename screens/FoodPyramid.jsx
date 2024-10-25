import Colors from "../constants/Colors";
import fonts from "../constants/Typography";
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    Image,
    ScrollView,
} from "react-native";

export default function Foodpyramid({ navigation }) {
    return (
        <ScrollView style={styles.container}>
            <View>
                {/* Title */}
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text style={styles.backButton}>{"<"}</Text>
                    </TouchableOpacity>
                    <View style={{ marginHorizontal: 24 }}>
                        <Text style={fonts.title}>Food Pyramid</Text>
                    </View>
                </View>

                {/* Contents */}
                <View style={styles.imageContainer}>
                    <Image
                        source={require("../assets/foodpyramidc.png")}
                        style={styles.image}
                    />
                </View>

                <View style={[styles.contentBlocks, { backgroundColor: "#03BBC6" }]}>
                    <Text style={fonts.subtitle}>
                        Bread, Rice, Potatoes, Pasta & Other Starchy Foods
                        (Base)
                    </Text>
                    <Text style={fonts.h2}>
                        Should be eaten at each mealtime and as some snacks.
                        Group of Carbohydrates, essential for energy.
                    </Text>
                </View>

                <View style={[styles.contentBlocks, { backgroundColor: "#8CC640" }]}>
                    <Text style={fonts.subtitle}>
                        Fruit & Vegetables (Second level from the base)
                    </Text>
                    <Text style={fonts.h2}>
                    Should be eaten at each mealtime and as snacks. It Provides essential vitamins, minerals, and fiber.
                    </Text>
                </View>

                <View style={[styles.contentBlocks, { backgroundColor: "#FEC20D" }]}>
                    <Text style={fonts.subtitle}>
                    Milk, Cheese & Yogurt (Third level)
                    </Text>
                    <Text style={fonts.h2}>
                    3 servings per day, it provides calcium for bone health.
                    </Text>
                </View>

                <View style={[styles.contentBlocks, { backgroundColor: "#F47B20" }]}>
                    <Text style={fonts.subtitle}>
                        Meat, Fish, Eggs, Nuts & Pulses (Fourth level)
                    </Text>
                    <Text style={fonts.h2}>
                        2 to 3 servings per day. For proteins, essential for muscle growth and tissue repair.
                    </Text>
                </View>

                <View style={[styles.contentBlocks, { backgroundColor: "#B7B6BB" }]}>
                    <Text style={fonts.subtitle}>
                        Foods High in Fats & Sugar (Top level)
                    </Text>
                    <Text style={fonts.h2}>
                        Eat in small amounts,  it should be consumed sparingly to avoid excess calories.
                    </Text>
                </View>

                <View style={{ height: 50 }}></View>
            </View>
        </ScrollView>
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
    imageContainer: {
        marginVertical: 24,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: "100%",
        height: 250,
        resizeMode: "contain",
    },
    contentBlocks: {
        marginVertical: 12,
        borderRadius: 15,
        padding: 12,
        borderWidth: 1,
    },
});
