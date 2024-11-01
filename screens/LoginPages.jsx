import { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Image,
    Alert,
} from "react-native";
import Colors from "../constants/Colors";
import fonts from "../constants/Typography";
import InputLayout from "../components/InputLayout";
import ButtonStyle from "../components/ButtonStyle";
import GoogleIcon from "../assets/icons/google.png";
import logo from "../assets/HealthLogo.png";
import Animated, { FadeInUp } from "react-native-reanimated";
import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login({ navigation }) {
    const signUp = () => navigation.navigate("SignUp");

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, username, password)
            .then(() => {
                Alert.alert("Success", "Login successful");
                navigation.navigate("Dashboard");
            })
            .catch(() => {
                Alert.alert("Error", "Invalid credentials");
            });
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.loginContainer}>
                <Animated.View
                    style={styles.title}
                    entering={FadeInUp.duration(1000)}
                >
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
                </Animated.View>
                <Animated.Text
                    style={[fonts.title, { textAlign: "center" }]}
                    entering={FadeInUp.duration(1000)}
                >
                    Sign in to your Account
                </Animated.Text>

                <InputLayout
                    placeholder="Username"
                    value={username}
                    onChangeText={setUsername}
                />

                <InputLayout
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    security={true}
                    iconName="eye"
                />

                <ButtonStyle
                    title={"SIGN IN"}
                    onPress={handleLogin}
                    buttonstyle={{
                        borderWidth: 1,
                        borderColor: "black",
                        alignItems: "center",
                        backgroundColor: Colors.PRIMARY,
                    }}
                    fontsize={[fonts.h1, { fontWeight: "bold" }]}
                />

                <Text style={[styles.forgotPassword, fonts.h2]}>
                    Forgot Password?
                </Text>

                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: 24,
                    }}
                >
                    <View style={styles.line}></View>
                    <Text
                        style={[
                            fonts.h2,
                            { fontSize: 24, paddingHorizontal: 8 },
                        ]}
                    >
                        OR
                    </Text>
                    <View style={styles.line}></View>
                </View>

                <ButtonStyle
                    title={"Sign in with Google"}
                    image={GoogleIcon}
                    buttonstyle={[
                        { backgroundColor: "#E5E7EA" },
                        styles.signInwithButton,
                    ]}
                    fontsize={fonts.small}
                />

                <View style={styles.needAccount}>
                    <Text style={fonts.h2}>Don't have an account? </Text>
                    <TouchableOpacity onPress={signUp}>
                        <Text
                            style={[
                                styles.textStyle,
                                fonts.h2,
                                {
                                    fontWeight: "bold",
                                    textDecorationLine: "underline",
                                    color: Colors.ACCENT,
                                },
                            ]}
                        >
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.BACKGROUND,
        justifyContent: "center",
    },
    loginContainer: {
        width: "100%",
        padding: 24,
    },
    forgotPassword: {
        textAlign: "right",
        marginTop: 24,
        color: Colors.TEXTblack,
    },
    needAccount: {
        marginTop: 24,
        color: Colors.TEXTblack,
        flexDirection: "row",
        justifyContent: "center",
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: "#000",
    },
    signInwithButton: {
        borderWidth: 1,
        borderColor: Colors.TEXTblack,
        paddingHorizontal: 16,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    title: {
        flexDirection: "row",
        justifyContent: "center",
        marginVertical: 12,
    },
});
