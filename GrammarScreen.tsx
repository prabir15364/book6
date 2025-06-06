import { Ionicons } from "@expo/vector-icons";
import { usePathname, useRouter } from "expo-router";
import React, { useRef, useState } from "react";
import {
  FlatList,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { Searchbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { sectionDirectory } from "./sectionData";

interface GrammarScreenProps {
  sectionTitles: string[];
  sectionText: string[];
}

const HEADER_HEIGHT = 50;

const GrammarScreen: React.FC<GrammarScreenProps> = ({
  sectionTitles,
  sectionText,
}) => {
  const scrollViewRef = useRef<ScrollView | null>(null);
  const sectionRefs = useRef<Array<View | null>>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const fileNameRaw = pathname.split("/").pop()?.replace(".tsx", "") || "Untitled";
  const fileName = fileNameRaw.charAt(0).toUpperCase() + fileNameRaw.slice(1);

  const handleScrollToSection = (index: number) => {
    setDrawerVisible(false);
    sectionRefs.current[index]?.measure((x, y, width, height, pageX, pageY) => {
      scrollViewRef.current?.scrollTo({ y: pageY - HEADER_HEIGHT, animated: true });
    });
  };

  const handleDropdownSelect = (item: { path: string; title: string }) => {
    setDropdownVisible(false);
    router.navigate(item.path as any);
  };

  const flattenedDirectory = sectionDirectory.flatMap((group) => group.files);
  const filteredDirectory = flattenedDirectory.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#6200EE" }}>
      <StatusBar barStyle="light-content" backgroundColor="black" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setDrawerVisible(!drawerVisible)}>
          <Ionicons name="menu" size={24} color="white" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/")}>
          <Text style={styles.headerText}>{fileName}</Text>
        </TouchableOpacity>

        <View style={styles.headerIcons}>
          <TouchableOpacity onPress={() => setDropdownVisible(!dropdownVisible)}>
            <Ionicons name="list" size={22} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Dropdown Navigator */}
      {dropdownVisible && (
        <View style={styles.fullscreenOverlay}>
          <TouchableOpacity
            style={styles.backdrop}
            onPress={() => setDropdownVisible(false)}
          />
          <View style={styles.dropdownContainer}>
            <Searchbar
              placeholder="Search Sections"
              value={searchQuery}
              onChangeText={setSearchQuery}
              style={styles.searchbar}
            />
            <FlatList
              data={filteredDirectory}
              keyExtractor={(item, index) => item.title + index}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.dropdownItem}
                  onPress={() => handleDropdownSelect(item)}
                >
                  <Text>{item.title}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      )}

      {/* Drawer */}
      {drawerVisible && (
        <View style={[StyleSheet.absoluteFill, { zIndex: 10 }]} pointerEvents="box-none">
          <Pressable style={styles.backdrop} onPress={() => setDrawerVisible(false)} />
          <View style={styles.drawer}>
            {sectionTitles.map((title, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleScrollToSection(index)}
                style={styles.drawerItem}
              >
                <Text>{title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      )}

      {/* Content */}
      <ScrollView
        ref={scrollViewRef}
        style={{ flex: 1, backgroundColor: "#FFF" }}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {sectionTitles.map((title, index) => (
          <View
            key={index}
            ref={(ref) => {
              sectionRefs.current[index] = ref;
            }}
            style={styles.section}
          >
            <View style={styles.stickyHeader}>
              <Text style={styles.stickyHeaderText}>{title}</Text>
            </View>
            <Text style={styles.sectionText}>{sectionText[index]}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default GrammarScreen;

const styles = StyleSheet.create({
  header: {
    height: HEADER_HEIGHT,
    backgroundColor: "#6200EE",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  headerText: {
    fontSize: 26,
    color: "white",
    fontWeight: "bold",
  },
  headerIcons: {
    flexDirection: "row",
    gap: 12,
  },
  drawerItem: {
    paddingVertical: 6,
  },
  section: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  stickyHeader: {
    backgroundColor: "#EEE",
    paddingVertical: 8,
    paddingHorizontal: 10,
    position: "relative",
    zIndex: 1,
  },
  stickyHeaderText: {
    fontWeight: "bold",
  },
  sectionText: {
    fontSize: 16,
    lineHeight: 22,
    marginTop: 8,
  },
  dropdownContainer: {
    position: "absolute",
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#FFF",
    zIndex: 10,
    paddingBottom: 20,
  },
  dropdownItem: {
    padding: 10,
    borderBottomColor: "#EEE",
    borderBottomWidth: 1,
  },
  searchbar: {
    margin: 10,
  },
  fullscreenOverlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 10,
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "transparent",
  },
  drawer: {
    position: "absolute",
    top: HEADER_HEIGHT,
    left: 0,
    width: 220,
    backgroundColor: "yellow",
    paddingVertical: 20,
    paddingHorizontal: 20,
    elevation: 10,
    zIndex: 11,
  },
});
