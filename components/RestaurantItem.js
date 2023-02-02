import { View, Text, Image } from "react-native";
import React from "react";

const RestaurantItem = () => {
  return (
    <View>
      <RestaurantImage/>
    </View>
  );
};

const RestaurantImage = () => {
  return <Image source={require("../assets/images/bg1.jpg")} />;
};

export default RestaurantItem;
