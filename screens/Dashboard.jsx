import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import Colors from "../constants/Colors";
import fonts from "../constants/Typography";

export default function Dashboard() { 
    return(
        <ScrollView>
            <SafeAreaView>
                <Text>Nutribites</Text>
            </SafeAreaView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container : {

    },
});