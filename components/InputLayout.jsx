import React, { useState } from "react";
import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import fonts from "../constants/Typography";
import Colors from "../constants/Colors";
import Icons from "react-native-vector-icons/Ionicons";

export default function InputText({ placeholder, security, iconName, value, onChangeText }) {
    const [isPasswordVisible, setIsPasswordVisible] = useState(!security);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    }

    return (
        <View style={styles.container}>
            <TextInput 
                style={[{flex: 1}, fonts.h2 ]}
                placeholder={placeholder}
                secureTextEntry={security && !isPasswordVisible}
                value={value}
                onChangeText={onChangeText}
            />
            {iconName && (
                <TouchableOpacity onPress={togglePasswordVisibility}>
                    <Icons
                        name={isPasswordVisible ? "eye-off" : "eye"}
                        size={24}
                        color={Colors.TEXTblack}
                        style={styles.icon}
                    />
                </TouchableOpacity>
                
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 43,
        borderBottomWidth: 1,
        borderColor: Colors.TEXTblack,
        marginTop: 24,
        width: '100%',

    },
    icon: {
        padding: 10,
    },
});
