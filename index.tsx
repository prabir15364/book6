import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function GrammarHome() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Grammar Topics</Text>
      <Link href={"/grammar/Used_to" as any} style={styles.link}>✅ used to</Link>
      <Link href={"/grammar/Must" as any} style={styles.link}>💪 Must</Link>
      <Link href={"/grammar/SupposedTo" as any} style={styles.link}>🤔 supposed to</Link>
      <Link href={"/grammar/could" as any} style={styles.link}>🤔 could</Link>
      <Link href={"/grammar/preposition" as any} style={styles.link}>📝 preposition</Link>
      <Link href={"/grammar/Would" as any} style={styles.link}>📝 would</Link>
      <Link href={"/grammar/Dare" as any} style={styles.link}>📝 dare</Link>
      <Link href={"/grammar/May" as any} style={styles.link}>📝 may</Link>
      <Link href={"/grammar/OughtTo" as any} style={styles.link}>📝 ought to</Link>
      <Link href={"/grammar/SupposedTo" as any} style={styles.link}>📝 supposed to</Link>
      <Link href={"/grammar/Might" as any} style={styles.link}>📝 might</Link>
      <Link href={"/grammar/Shall_Will" as any} style={styles.link}>📝 shall/will</Link>
      <Link href={"/grammar/Need" as any} style={styles.link}>📝 need</Link>
      <Link href={"/grammar/Should" as any} style={styles.link}>📝 should</Link>
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