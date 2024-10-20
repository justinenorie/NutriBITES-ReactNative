import { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import fonts from "../constants/Typography";
import Colors from "../constants/Colors";
import InputLayout from "../components/InputLayout";
import ButtonStyle from "../components/ButtonStyle";

export default function Login({ navigation }) {
    const signIn = () => navigation.navigate("Login");

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.loginContainer}>
                <Text
                    style={ fonts.title }>
                    Sign up with
                </Text>
                <Text
                    style={ fonts.logoName }>
                    HealthCheck
                </Text>

                <InputLayout placeholder="Full Name" />
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
                <InputLayout
                    placeholder="Confirm Password"
                    security={true}
                    iconName="eye"
                />

                <ButtonStyle
                    title={"Sign up"}
                    onPress={signIn}
                    buttonstyle={{
                        borderWidth: 1,
                        borderColor: "black",
                        alignItems: "center",
                        backgroundColor: Colors.PRIMARY,
                    }}
                    fontsize={fonts.h1}
                />

                <View style={styles.haveAccount}>
                    <Text style={fonts.h2}>Already have an account? </Text>
                    <TouchableOpacity
                        onPress={signIn}
                    >
                        <Text
                            style={[
                                fonts.h2,
                                {
                                    fontWeight: "bold",
                                    textDecorationLine: "underline",
                                },
                            ]}
                        >
                            Sign In
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
    haveAccount: {
        marginTop: 24,
        color: Colors.TEXTblack,
        flexDirection: "row",
        justifyContent: "center",
    },
});
