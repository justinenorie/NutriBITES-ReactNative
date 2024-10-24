import React, { useState } from "react";
import { View, StyleSheet, Pressable, Image } from "react-native";
import Colors from "../constants/Colors";

export default function MemberCard({ navigation }) {
    const [activeMenu, setActiveMenu] = useState("Dashboard");

    // Function to handle menu item press
    const handlePress = (menuName) => {
        setActiveMenu(menuName); // Set the active state for the pressed menu
        navigation.navigate(menuName); // Navigate to the respective screen
    };

    return (
        <View style={styles.container}>
            <View style={styles.menu}>
                {/* Home Menu */}
                <Pressable onPress={() => handlePress("Dashboard")}>
                    <Image
                        source={
                            activeMenu === "Dashboard"
                                ? require("../assets/menus/activeHome.png")
                                : require("../assets/menus/home.png")
                        }
                        style={[styles.icon, styles.iconMargin]}
                    />
                </Pressable>

                {/* Favorite Menu */}
                <Pressable onPress={() => handlePress("About")}>
                    <Image
                        source={
                            activeMenu === "About"
                                ? require("../assets/menus/activeFavorite.png")
                                : require("../assets/menus/favorite.png")
                        }
                        style={[styles.icon, styles.iconMargin]}
                    />
                </Pressable>

                {/* Scan Menu */}
                <Pressable
                    style={[styles.scan, activeMenu === "Scan" && { backgroundColor: Colors.PRIMARY }]}
                    onPress={() => handlePress("Scan")}
                >
                    <Image
                        source={
                            activeMenu === "Scan"
                                ? require("../assets/menus/scan.png")
                                : require("../assets/menus/scan.png")
                        }
                        style={styles.icon}
                    />
                </Pressable>

                {/* Info Menu */}
                <Pressable onPress={() => handlePress("Infos")}>
                    <Image
                        source={
                            activeMenu === "Infos"
                                ? require("../assets/menus/activeInfos.png")
                                : require("../assets/menus/infos.png")
                        }
                        style={[styles.icon, styles.iconMargin]}
                    />
                </Pressable>

                {/* Profile Menu */}
                <Pressable onPress={() => handlePress("Profile")}>
                    <Image
                        source={
                            activeMenu === "Profile"
                                ? require("../assets/menus/activeProfile.png")
                                : require("../assets/menus/profile.png")
                        }
                        style={[styles.icon, styles.iconMargin]}
                    />
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        padding: 24,
    },
    menu: {
        paddingHorizontal: 15,
        paddingVertical: 2.5,
        borderRadius: 27,
        borderColor: "#5B441D",
        borderWidth: 1,
        backgroundColor: '#D2D4DF',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        width: "100%",
    },
    icon: {
        width: 40,
        height: 40,
    },
    iconMargin: {
        marginHorizontal: 10, 
    },
    scan: {
        backgroundColor: Colors.BACKGROUND,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: "#5B441D",
        padding: 15,
    },
});
