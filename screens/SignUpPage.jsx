import { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
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
                    style={[{ fontSize: 24, fontFamily: "Montserrat-Regular" }]}
                >
                    Sign up with
                </Text>
                <Text
                    style={[
                        { color: "#222488", fontSize: 30, fontFamily: "MochiyPopOne-Regular" },
                    ]}
                >
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
                    fontsize={{ fontSize: 24 }}
                />

                <View style={styles.haveAccount}>
                    <Text>Already have an account? </Text>
                    <TouchableOpacity
                        onPress={signIn}
                    >
                        <Text
                            style={[
                                styles.textStyle,
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
    textStyle: {
        color: Colors.TEXTblack,
    },
    haveAccount: {
        marginTop: 24,
        color: Colors.TEXTblack,
        flexDirection: "row",
        justifyContent: "center",
    },
});
