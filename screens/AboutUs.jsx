import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Image,
    ScrollView,
    Modal,
    TouchableOpacity,
} from "react-native";
import { useState } from "react";
import data from "../data/membersData.js";
import Cards from "../components/MemberCard";
import Colors from "../constants/Colors";
import fonts from "../constants/Typography";
import Menu from "../components/MenuBar";
import background from "../assets/background-img.jpg";
import images from "../data/images";
import Animated, { FadeInUp, FadeOutDown } from "react-native-reanimated";

export default function Login({ navigation, activeState, setActiveState }) {
    const [selectedMember, setSelectedMember] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    const openModal = (member) => {
        setSelectedMember(member);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
        setSelectedMember(null);
    };

    return (
        <SafeAreaView
            style={[styles.container, { backgroundColor: "rgba(0,0,0,0.1)" }]}
        >
            <ScrollView>
                <Image source={background} style={styles.backgroundImage} />

                <View style={styles.initialContainer}>
                    <View
                        style={{ flexDirection: "row", alignItems: "center" }}>
                        <View
                            style={{ marginVertical: 24 }}
                        >
                            <Text style={fonts.title}>About Us</Text>
                        </View>
                    </View>

                    <Text style={[fonts.h1, { fontWeight: "500" }]}>
                        Our mission is to deliver accessible and engaging
                        nutritional education, empowering you to make informed
                        choices for a healthier life.
                    </Text>

                    {data.map((item) => (
                        <Cards
                            key={item.id}
                            picture={images[item.picture]}
                            name={item.name}
                            assign={item.assign}
                            onPress={() => openModal(item)}
                        />
                    ))}
                </View>
                <View style={{ height: 100 }}></View>
            </ScrollView>

            <Menu
                navigation={navigation}
                activeState={activeState}
                setActiveState={setActiveState}
            />

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={closeModal}
            >
                <View style={styles.modalBackground}>
                    <Animated.View
                        entering={FadeInUp.delay(200).duration(400)}
                        exiting={FadeOutDown.delay(200).duration(800)}
                        style={styles.modalContainer}
                    >
                        {selectedMember && (
                            <>
                                <View style={styles.modalTitle}>
                                    <Image
                                        source={images[selectedMember.picture]}
                                        style={{
                                            width: 60,
                                            height: 60,
                                            borderRadius: 40,
                                        }}
                                    />
                                    <View
                                        style={{
                                            paddingHorizontal: 12,
                                            flex: 1,
                                            flexWrap: "nowrap",
                                        }}
                                    >
                                        <Text
                                            style={[
                                                fonts.h1,
                                                {
                                                    fontFamily:
                                                        "Quicksand-Bold",
                                                },
                                            ]}
                                        >
                                            {selectedMember.name}
                                        </Text>
                                        <Text
                                            style={[
                                                fonts.small,
                                                {
                                                    fontFamily:
                                                        "Quicksand-Regular",
                                                },
                                            ]}
                                        >
                                            {selectedMember.assign}
                                        </Text>
                                    </View>
                                </View>

                                <Text style={[fonts.small]}>
                                    {selectedMember.description}
                                </Text>
                                <TouchableOpacity
                                    style={styles.closeButton}
                                    onPress={closeModal}
                                >
                                    <Text style={fonts.h2White}>Close</Text>
                                </TouchableOpacity>
                            </>
                        )}
                    </Animated.View>
                </View>
            </Modal>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        position: "absolute",
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        opacity: 0.05,
        blendMode: "hard-light",
    },
    initialContainer: {
        width: "100%",
        padding: 24,
    },
    modalBackground: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.4)",
    },
    modalContainer: {
        backgroundColor: "#E7C8B1",
        marginHorizontal: 24,
        paddingHorizontal: 24,
        borderRadius: 27,
    },
    modalTitle: {
        marginVertical: 24,
        flexDirection: "row",
        alignItems: "center",
    },
    closeButton: {
        backgroundColor: Colors.SECONDARY,
        borderRadius: 27,
        marginVertical: 24,
        paddingVertical: 12,
        marginHorizontal: 24,
        alignItems: "center",
    },
    backButton: {
        fontSize: 40,
        color: Colors.TEXTblack,
        fontFamily: "MochiyPopOne-Regular",
    },
});
