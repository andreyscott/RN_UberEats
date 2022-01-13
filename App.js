import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View, ScrollView } from "react-native";

import Categories from "./components/Categories";
import HeaderTabs from "./components/HeaderTabs";
import RestaurantItem from "./components/RestaurantItem";
import SearchBar from "./components/SearchBar";

export default function App() {
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs />
        <SearchBar />
        </View>
        <ScrollView showVerticalScrollIndicator={false}>
          <Categories />
          <RestaurantItem />
        </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
