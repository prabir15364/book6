import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function GrammarHome() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Grammar Topics</Text>
      <Link href="/phrases/agree" style={styles.link}>✅ agree</Link>
      <Link href="/phrases/conversation" style={styles.link}>💪 conversation</Link>
      <Link href="/phrases/discussion" style={styles.link}>🤔 discussion</Link>
      <Link href="/phrases/goodbye" style={styles.link}>🌟 goodbye</Link>
      <Link href="/phrases/greeting" style={styles.link}>📝 greeting</Link>
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
