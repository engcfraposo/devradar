import React from "react";
import { WebView } from "react-native-webview";
import { useRoute } from "@react-navigation/native";

export default function Profile() {
  const route = useRoute();
  const githubUsername = route.params.github_username;

  return (
    <WebView
      style={{ flex: 1 }}
      source={{ uri: `https://github.com/${githubUsername}` }}
    />
  );
}
