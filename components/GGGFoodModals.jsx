import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    Image,
    Modal,
} from "react-native";
import fonts from "../constants/Typography";

export default function GGGFoodModals({ closeModal, type }) {
    const foodContents = {
       Glow: {
            image : require("../assets/glow.jpg"),
            title: "Glow Foods",
            description:
                "These are fruits and vegetables that are rich in vitamins and minerals. They help to maintain healthy skin, hair, and the immune system. It Keeps the body functioning well and looking healthy.",
        },
        Grow: {
            image : require("../assets/grow.jpg"),
            title: "Grow Foods",
            description:
                "These foods are rich in protein and are essential for building and repairing the body’s tissues. They help with muscle growth and strength. It supports body growth and maintenance of muscles, bones, and organs.",
        },
        Go: {
            image : require("../assets/go.jpg"),
            title: "Go Foods",
            description:
                "These are carbohydrates and fats that provide energy for daily activities. It provides the body with the energy needed for work, play, and physical activities.",
        },
    };
    const content = foodContents[type];
    return (
        <Modal
            transparent={true}
            visible={!!type}
            animationType="slide"
            onRequestClose={closeModal}
        >
            <View style={styles.container}>
                <View style={styles.modalContainer}>
                    {content && (
                        <>
                            <Image 
                                source={content.image}
                                style={{width: "auto", height: 120, borderRadius: 20, borderWidth: 1, borderColor: "black"}}
                            />
                            <Text style={fonts.subtitle}>{content.title}</Text>
                            <Text style={fonts.small}>{content.description}</Text>
                        </>
                    )}
                    <TouchableOpacity onPress={closeModal} style={styles.exit}>
                        <Text style={[{textAlign: "center"}, fonts.h2]}>Close</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
        padding: 24,
    },
    modalContainer: {
        backgroundColor: "#F3E4D8",
        padding: 24,
        borderRadius: 27,
    },
    exit: {
        borderRadius: 17,
        borderWidth: 1,
        marginTop: 24,
        backgroundColor: "#B4B7CA",
        alignSelf: "center",
        width: "60%",
        padding: 8,
    },
});
