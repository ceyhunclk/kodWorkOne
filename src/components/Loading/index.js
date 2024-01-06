import React from "react";
import LottieView from "lottie-react-native";

export default function Loading() {
  return (
    <LottieView style={{flex:1}} source={require("../../assets/loading.json")} autoPlay loop />
  );
}
