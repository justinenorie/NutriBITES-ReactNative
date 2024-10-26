import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Image,
    StatusBar,
    TouchableOpacity,
    Modal,
    TextInput,
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

                <View
                    style={{
                        borderWidth: 1,
                        borderColor: "black",
                        borderRadius: 15,
                        padding: 10,
                        flexDirection: "row",
                        alignItems: "center",
                        marginBottom: 12,
                    }}
                >
                    <Image
                        source={require("../assets/icons/search.png")}
                        style={{ width: 20, height: 20, marginHorizontal: 10 }}
                    />
                    <TextInput
                        placeholder="What are you looking for today? "
                        placeholderTextColor={Colors.TEXTblack}
                        style={[fonts.h2, { width: "100%" }]}
                    />
                </View>

                {/* Content */}
                <View
                    style={[
                        styles.BLDContainer,
                        { backgroundColor: "#D5D4C3" },
                    ]}
                >
                    <View style={styles.textBLD}>
                        <Text style={styles.titleBLD}>BREAKFAST</Text>
                        <Text style={fonts.small}>
                            It jumpstarts your metabolism and gives you the
                            energy to start your day. It also improves
                            concentration and performance.
                        </Text>
                    </View>
                    <Image
                        style={styles.imagesize}
                        source={require("../assets/breakfast.jpg")}
                    />
                </View>

                <View
                    style={[
                        styles.BLDContainer,
                        { backgroundColor: "#D5C3C3" },
                    ]}
                >
                    <View style={styles.textBLD}>
                        <Text style={styles.titleBLD}>LUNCH</Text>
                        <Text style={fonts.small}>
                            It helps to maintain energy levels and provides
                            essential nutrients during the busiest part of the
                            day.
                        </Text>
                    </View>
                    <Image
                        style={styles.imagesize}
                        source={require("../assets/lunch.jpg")}
                    />
                </View>

                <View
                    style={[
                        styles.BLDContainer,
                        { backgroundColor: "#C4C3D5" },
                    ]}
                >
                    <View style={styles.textBLD}>
                        <Text style={styles.titleBLD}>DINNER</Text>
                        <Text style={fonts.small}>
                            A balanced dinner helps to replenish your body after
                            a long day and prepares it for rest and recovery
                            during sleep.
                        </Text>
                    </View>
                    <Image
                        style={styles.imagesize}
                        source={require("../assets/dinner.jpeg")}
                    />
                </View>

                <View style={[styles.BLDContainer, { marginTop: 12 }]}>
                    <Image
                        style={{ width: 150, height: 150, borderRadius: 100 }}
                        source={require("../assets/drinking-boy.jpg")}
                    />
                    <View style={styles.textBLD}>
                        <Text style={fonts.subtitle}>Did you know?</Text>
                        <Text style={fonts.small}>
                            Staying hydrated helps improve brain function and
                            mood. Dehydration can cause problems like difficulty
                            concentrating, headaches, and mood swings.
                        </Text>
                    </View>
                </View>

                <View
                    style={{
                        flexDirection: "row",
                        flexWrap: "wrap",
                        marginTop: 12,
                    }}
                >
                    {/* Food Pyramid */}
                    <TouchableOpacity
                        onPress={() => navigation.navigate("FoodPyramid")}
                    >
                        <View style={styles.blendmodeDark}>
                            <Image
                                style={{
                                    width: 168,
                                    height: 398,
                                    borderRadius: 20,
                                    opacity: 0.5,
                                }}
                                source={require("../assets/foodpyramid.jpg")}
                            />
                        </View>

                        <View style={{ position: "absolute", padding: 12 }}>
                            <Text style={fonts.subtitleWhite}>
                                Food Pyramid
                            </Text>
                            <Text
                                style={[
                                    fonts.smallWhite,
                                    { fontFamily: "Quicksand-Bold" },
                                ]}
                            >
                                The Food Pyramid is a visual guide that helps
                                people plan a balanced diet by categorizing
                                foods based on their nutritional value and
                                recommending the right proportions. It
                                encourages a higher intake of nutrient-rich
                                foods like fruits, vegetables, and whole grains,
                                while advising smaller portions of fats and
                                sugary foods for optimal health.
                            </Text>
                        </View>
                    </TouchableOpacity>

                    {/* Glow, Grow and Go Foods */}
                    <View
                        style={{
                            flexDirection: "column",
                            flexWrap: "wrap",
                            justifyContent: "space-between",
                            marginLeft: 20,
                        }}
                    >
                        <TouchableOpacity>
                            <View style={styles.blendmodeDark}>
                                <Image
                                    style={styles.GGGstyle}
                                    source={require("../assets/glow.jpg")}
                                />
                            </View>

                            <View style={{ position: "absolute", padding: 12 }}>
                                <Text style={fonts.subtitleWhite}>Glow</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={styles.blendmodeDark}>
                                <Image
                                    style={styles.GGGstyle}
                                    source={require("../assets/grow.jpg")}
                                />
                            </View>

                            <View style={{ position: "absolute", padding: 12 }}>
                                <Text style={fonts.subtitleWhite}>Grow</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={styles.blendmodeDark}>
                                <Image
                                    style={styles.GGGstyle}
                                    source={require("../assets/go.jpg")}
                                />
                            </View>
                            <View style={{ position: "absolute", padding: 12 }}>
                                <Text style={fonts.subtitleWhite}>Go</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ height: 150 }}></View>
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
        marginBottom: 24,
    },
    BLDContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        width: "100%",
        backgroundColor: "#D2D4DF",
        marginVertical: 6,
        padding: 12,
        borderRadius: 20,
        borderWidth: 1,
    },
    textBLD: {
        width: "50%",
    },
    titleBLD: {
        fontSize: 20,
        fontFamily: "Quicksand-Bold",
    },
    imagesize: {
        width: 130,
        height: 104,
        borderRadius: 17,
        borderWidth: 1,
        borderColor: "#5B441D",
    },
    GGGstyle: {
        width: 150,
        height: 120,
        borderRadius: 20,
        opacity: 0.5,
    },
    blendmodeDark: {
        backgroundColor: "rgba(0,0,0,0.9)",
        borderRadius: 20,
    },
});
