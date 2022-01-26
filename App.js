import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View, ScrollView } from "react-native";
import Restaurant from './components/RestaurantItem';
import Categories from "./components/Categories";
import HeaderTabs from "./components/HeaderTabs";
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
          {/* <Restaurant /> */}
         </ScrollView> 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
