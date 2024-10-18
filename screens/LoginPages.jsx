import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import Colors from "../constants/Colors";
import InputLayout from "../components/InputLayout";
import ButtonStyle from "../components/ButtonStyle";

export default function Login({ navigation }) {
    const login = () => navigation.navigate("SignUp");

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.loginContainer}>
                <Text
                    style={[{ fontSize: 24, fontFamily: "Montserrat-Regular" }]}
                >
                    Sign In with
                </Text>
                <Text
                    style={[
                        { fontSize: 24, fontFamily: "MochiyPopOne-Regular" },
                    ]}
                >
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
                    onPress={login}
                    buttonstyle={{
                        borderWidth: 1,
                        borderColor: "black",
                        alignItems: "center",
                        backgroundColor: Colors.PRIMARY,
                    }}
                    fontsize={{ fontSize: 24 }}
                />

                <Text style={styles.forgotPassword}>Forgot Password?</Text>

                <Text style={styles.textStyle}>OR</Text>

                <ButtonStyle
                    title={"Sign in with Facebook"}
                    buttonstyle={{
                        backgroundColor: "#AFCFF9",
                        borderWidth: 1,
                        borderColor: Colors.TEXTblack,
                    }}
                    fontsize={{ fontSize: 13 }}
                />
                <ButtonStyle
                    title={"Sign in with Google"}
                    buttonstyle={{
                        backgroundColor: "#E5E7EA",
                        borderWidth: 1,
                        borderColor: Colors.TEXTblack,
                    }}
                    fontsize={{ fontSize: 13 }}
                />

                <View style={styles.needAccount}>
                    <Text>Don't have an account? SignUp</Text>
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
    textStyle: {
        color: Colors.TEXTblack,
    },
    forgotPassword: {
        textAlign: "right",
        marginTop: 24,
        color: Colors.TEXTblack,
    },
    needAccount: {
        marginTop: 24,
        color: Colors.TEXTblack,
        alignItems: "center",
    },
});
