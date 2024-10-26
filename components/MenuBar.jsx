import { View, StyleSheet, Pressable, Image } from "react-native";
import Colors from "../constants/Colors";

export default function MemberCard({ navigation, activeState, setActiveState }) {
    return (
        <View style={styles.container}>
            <View style={styles.menu}>
                {/* Home Menu */}
                <Pressable onPress={() => {
                    setActiveState("Dashboard")
                    navigation.navigate("Dashboard")
                }}>
                    <Image
                        source={
                            activeState === "Dashboard"
                                ? require("../assets/menus/activeHome.png")
                                : require("../assets/menus/home.png")
                        }
                        style={[styles.icon, styles.iconMargin, { opacity: activeState === "Dashboard" ? 1 : 0.5 }]}
                    />
                </Pressable>

                {/* Favorite Menu */}
                <Pressable onPress={() => {
                    setActiveState("Favorites")
                    navigation.navigate("Favorites")
                }}>
                    <Image
                        source={
                            activeState === "Favorites"
                                ? require("../assets/menus/activeFavorite.png")
                                : require("../assets/menus/favorite.png")
                        }
                        style={[styles.icon, styles.iconMargin, { opacity: activeState === "Favorites" ? 1 : 0.5 }]}
                    />
                </Pressable>

                {/* Scan Menu */}
                <Pressable
                    style={[styles.scan, activeState === "ScanFood" && { backgroundColor: Colors.PRIMARY }]}
                    onPress={() => {
                        setActiveState("ScanFood")
                        navigation.navigate("ScanFood")
                    }}
                >
                    <Image
                        source={
                            activeState === "ScanFood"
                                ? require("../assets/menus/scan.png")
                                : require("../assets/menus/scan.png")
                        }
                        style={[styles.icon, { opacity: activeState === "ScanFood" ? 1 : 0.5 }]}
                    />
                </Pressable>

                {/* Info Menu */}
                <Pressable onPress={() => {
                    setActiveState("FoodDetails")
                    navigation.navigate("FoodDetails")
                }}>
                    <Image
                        source={
                            activeState === "FoodDetails"
                                ? require("../assets/menus/activeInfos.png")
                                : require("../assets/menus/infos.png")
                        }
                        style={[styles.icon, styles.iconMargin, { opacity: activeState === "FoodDetails" ? 1 : 0.5 }]}
                    />
                </Pressable>

                {/* Profile Menu */}
                <Pressable onPress={() => {
                    setActiveState("Profile")
                    navigation.navigate("Profile")
                }}>
                    <Image
                        source={
                            activeState === "Profile"
                                ? require("../assets/menus/activeProfile.png")
                                : require("../assets/menus/profile.png")
                        }
                        style={[styles.icon, styles.iconMargin, { opacity: activeState === "Profile" ? 1 : 0.5 }]}
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
        position: 'absolute',
        bottom: 0,
        width: "100%",
        
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

