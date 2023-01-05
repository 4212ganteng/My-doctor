import { StyleSheet, Text, View } from "react-native";
import React from "react";
import IsMe from "./IsMe";
import Other from "./Other";

export default function ChatItem({ isme }) {
  if (isme) {
    return <IsMe />;
  }
  return <Other />;
}
