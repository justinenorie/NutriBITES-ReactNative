import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";
import ButtonStyle from "../components/ButtonStyle";
import logo from "../assets/icons/logo.png";
import background from "../assets/background-img.jpg";

export default function Login({ navigation }) {
    const signIn = () => navigation.navigate("Login");
    const aboutUs = () => navigation.navigate("About");


    return (
        <SafeAreaView
            style={[styles.container, { backgroundColor: "rgba(0,0,0,0.1)" }]}
        >
            <Image source={background} style={styles.backgroundImage} />
            <View style={styles.initialContainer}>
                <View style={styles.title}>
                    <Image source={logo} style={{ width: 50, height: 50 }} />
                    <Text
                        style={[
                            {
                                color: Colors.SECONDARY,
                                fontSize: 30,
                                fontFamily: "MochiyPopOne-Regular",
                            },
                        ]}
                    >
                        HealthCheck
                    </Text>
                </View>

                <Text style={styles.textStyle}>Guides you to be healthy</Text>

                <ButtonStyle
                    title={"Get Started"}
                    onPress={signIn}
                    buttonstyle={{
                        borderWidth: 1,
                        borderColor: "black",
                        alignItems: "center",
                        backgroundColor: Colors.PRIMARY,
                    }}
                    fontsize={{ fontSize: 24 }}
                />

                <TouchableOpacity onPress={aboutUs}>
                    <Text>About Us</Text>
                </TouchableOpacity>

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
        opacity: 0.1,
    },
    initialContainer: {
        width: "100%",
        padding: 24,
    },
    textStyle: {
        color: Colors.TEXTblack,
        fontFamily: "Ubuntu-Regular",
        textAlign: "center",
    },
    title: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 12,
    },
});
