import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

export default function InputText({title, onPress, buttonstyle, fontsize}) {
    return (
        <View>
            <TouchableOpacity style={[styles.button, buttonstyle]} onPress={onPress}>
                <Text style={[fontsize, {fontFamily: "Ubuntu-Regular", fontWeight: "bold"}]}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {    
        height: 40,
        borderRadius: 15,
        justifyContent: 'center',
        marginTop: 24,
        width: '100%',
    },
    
});