import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📚 Learn English</Text>
      <Link href="./phrases" style={styles.link}>Phrases</Link>
      <Link href="./grammar" style={styles.link}>Grammar</Link>
      <Link href="./phrasalverb" style={styles.link}>Phrasal Verbs</Link>
      <Link href="../idiomphrases" style={styles.link}>Idiom Phrases</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  link: { fontSize: 18, color: "blue", marginVertical: 5 },
});