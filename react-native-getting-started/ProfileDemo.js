import React from "react";
import { View,Text, StyleSheet, ImageBackground} from "react-native";

export default function ProfileDemo() {
  return (
    <ImageBackground
      source={{
        uri: "https://images.unsplash.com/photo-1518199266791-5375a83190b7",
      }} 
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <View style={styles.card}>
          <Text style={styles.title}>Profile Demo</Text>
          <Text style={styles.text}>Course & Section: BSIS 3B</Text>
          <Text style={styles.text}>Name: Veneese Julia M. Lazaraga</Text>
          <Text style={styles.text}>Age: 20</Text>
          <Text style={styles.text}>Favorite Hobby: Watching movies</Text>
          <Text style={styles.subTitle}>Pet Peeves in Class / Classmates:</Text>
          <Text style={styles.text}>• Students who take advantage of the teacher’s generosity</Text>
          <Text style={styles.text}>• Side conversations during discussions</Text>
          <Text style={styles.text}>• Groupmates who don’t respond</Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },

  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 245, 250, 0.75)",
    padding: 20,
  },

  card: {
    width: "100%",
    maxWidth: 360,
    padding: 22,
    backgroundColor: "rgba(255, 228, 236, 0.95)",
    borderRadius: 28,
    borderWidth: 1,
    borderColor: "#F2A1B3",
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 6,
  },

  title: {
    fontSize: 28,
    fontWeight: "600",
    letterSpacing: 1,
    marginBottom: 14,
    color: "#B03060",
    textAlign: "center",
    fontFamily: "serif",
  },

  text: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 8,
    color: "#6A1B4D",
    fontFamily: "sans-serif-light",
  },

  subTitle: {
    marginTop: 14,
    marginBottom: 6,
    fontSize: 17,
    fontWeight: "600",
    color: "#C2185B",
    fontFamily: "serif",
  },
});
