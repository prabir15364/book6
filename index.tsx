import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function GrammarHome() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Grammar Topics</Text>
      <Link href="/idiomphrases/page1" style={styles.link}>✅ page1</Link>
      <Link href="/idiomphrases/page2" style={styles.link}>💪 page2</Link>
      <Link href="/idiomphrases/page3" style={styles.link}>🤔 page3</Link>
      <Link href="/idiomphrases/page4" style={styles.link}>🌟 page4</Link>
      <Link href="/idiomphrases/page5" style={styles.link}>📝 page5</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  link: {
    fontSize: 18,
    color: "blue",
    marginVertical: 5,
  },
});
