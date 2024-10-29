import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Image,
    TouchableOpacity,
} from "react-native";
import Colors from "../constants/Colors";
import fonts from "../constants/Typography";
import ButtonStyle from "../components/ButtonStyle";
import logo from "../assets/HealthLogo.png";
import background from "../assets/background-img.jpg";

export default function Login({ navigation }) {
    const signIn = () => navigation.navigate("Login");
    return (
        <SafeAreaView
            style={[styles.container, { backgroundColor: "rgba(0,0,0,0.1)" }]}
        >
            <Image source={background} style={styles.backgroundImage} />
            <View style={styles.initialContainer}>  
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

                <Text
                    style={[
                        fonts.h1,
                        { color: Colors.TEXTblack, textAlign: "center" },
                        { fontWeight: 'bold' }
                    ]}
                >
                    Your Daily Dose of Nutritional Wisdom
                </Text>

                <ButtonStyle
                    title={"GET STARTED"}
                    onPress={signIn}
                    buttonstyle={{
                        borderWidth: 1,
                        borderColor: "black",
                        alignItems: "center",
                        backgroundColor: Colors.PRIMARY,
                    }}
                    fontsize={[fonts.h1, { fontWeight: 'bold' }]}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    backgroundImage: {
        position: "absolute",
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        opacity: 0.05,
        blendMode: "hard-light",
    },
    initialContainer: {
        width: "100%",
        padding: 24,
    },
    title: {
        flexDirection: "row",
        justifyContent: "center",
        marginVertical: 12,
    },
});
