import React from "react";
import { ScrollView, Text } from "react-native";
import Header from "../components/Header";

export default function ShoppingCart({ navigation }) {

    return (
        <ScrollView style={{ backgroundColor: '#fff' }}>
            <Header navigation={navigation} />
        </ScrollView>
    )
}