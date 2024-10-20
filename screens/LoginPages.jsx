import { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
} from "react-native";
import Colors from "../constants/Colors";
import fonts from "../constants/Typography";
import InputLayout from "../components/InputLayout";
import ButtonStyle from "../components/ButtonStyle";
import FacebookIcon from "../assets/icons/facebook.png";
import GoogleIcon from "../assets/icons/google.png";

export default function Login({ navigation }) {
    const signUp = () => navigation.navigate("SignUp");

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.loginContainer}>
                <Text
                    style={ fonts.title }>
                    Sign In with
                </Text>
                <Text
                    style={ fonts.logoName }>
                    HealthCheck
                </Text>

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
                    title={"Sign in"}
                    onPress={signUp}
                    buttonstyle={{
                        borderWidth: 1,
                        borderColor: "black",
                        alignItems: "center",
                        backgroundColor: Colors.PRIMARY,
                    }}
                    fontsize={ fonts.h1 }
                />

                <Text style={[styles.forgotPassword, fonts.h2 ]}>
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
                            fonts.h1,
                            { fontSize: 24, paddingHorizontal: 8 },
                        ]}
                    >
                        OR
                    </Text>
                    <View style={styles.line}></View>
                </View>

                <ButtonStyle
                    title={"Sign in with Facebook"}
                    image={FacebookIcon}
                    buttonstyle={[
                        { backgroundColor: "#AFCFF9" },
                        styles.signInwithButton,
                    ]}
                    fontsize={ fonts.small }
                />
                <ButtonStyle
                    title={"Sign in with Google"}
                    image={GoogleIcon}
                    buttonstyle={[
                        { backgroundColor: "#E5E7EA" },
                        styles.signInwithButton,
                    ]}
                    fontsize={ fonts.small }
                />

                <View style={styles.needAccount}>
                    <Text style={ fonts.h2 }>Don't have an account? </Text>
                    <TouchableOpacity onPress={signUp}>
                        <Text
                            style={[
                                styles.textStyle,
                                fonts.h2,
                                {
                                    fontWeight: "bold",
                                    textDecorationLine: "underline",
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
});
