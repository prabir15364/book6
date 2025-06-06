import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function GrammarHome() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Grammar Topics</Text>
      <Link href="/phrasalverb/come" style={styles.link}>✅ come</Link>
      <Link href="/phrasalverb/get" style={styles.link}>💪 get</Link>
      <Link href="/phrasalverb/go" style={styles.link}>🤔 go</Link>
      <Link href="/phrasalverb/put" style={styles.link}>🌟 put</Link>
      <Link href="/phrasalverb/take" style={styles.link}>📝 take</Link>
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
