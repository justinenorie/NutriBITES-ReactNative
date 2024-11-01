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
import fonts from "../constants/Typography";
import Colors from "../constants/Colors";
import InputLayout from "../components/InputLayout";
import ButtonStyle from "../components/ButtonStyle";
import logo from "../assets/HealthLogo.png";
import Animated, { FadeInUp } from "react-native-reanimated";
import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Login({ navigation }) {
    const signIn = () => navigation.navigate("Login");

    const [fullName, setfullName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setemail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");

    const isFormValid = () => email.includes("@") && password === confirmPassword && password.length >= 8;

    const handleSignUp = async () => {
        if(!isFormValid()) {
            Alert.alert("Error", "Please enter a valid email and matching password with at least 8 characters above.");
        return;
        }
        
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            Alert.alert("Success", "Account created successfully");
            setfullName("");
            setUsername("");
            setemail("");
            setPassword("");
            setconfirmPassword("");
        } catch (error) {
            Alert.alert("Error", `Error creating user: ${error.message}`);
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.loginContainer}>
                <Animated.Text
                    style={fonts.title}
                    entering={FadeInUp.duration(1000)}
                >
                    Sign up with
                </Animated.Text>
                {/* Title */}
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

                <InputLayout
                    placeholder="Full Name"
                    value={fullName}
                    onChangeText={setfullName}
                />
                <InputLayout
                    placeholder="Username"
                    value={username}
                    onChangeText={setUsername}
                />
                <InputLayout
                    placeholder="Email"
                    value={email}
                    onChangeText={setemail}
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
                    value={confirmPassword}
                    onChangeText={setconfirmPassword}
                    security={true}
                    iconName="eye"
                />

                <ButtonStyle
                    title={"SIGN UP"}
                    onPress={handleSignUp}
                    buttonstyle={{
                        borderWidth: 1,
                        borderColor: "black",
                        alignItems: "center",
                        backgroundColor: Colors.PRIMARY,
                    }}
                    fontsize={[fonts.h1, { fontWeight: "bold" }]}
                />

                <View style={styles.haveAccount}>
                    <Text style={fonts.h2}>Already have an account? </Text>
                    <TouchableOpacity onPress={signIn}>
                        <Text
                            style={[
                                fonts.h2,
                                {
                                    fontWeight: "bold",
                                    textDecorationLine: "underline",
                                    color: Colors.ACCENT,
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
    title: {
        flexDirection: "row",
    },
});
