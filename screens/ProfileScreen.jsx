import { View, Text } from "react-native";

export default function ProfileScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Navn: Andreas Buch</Text>
        <Text>Telefon nummer: +45 29 86 87 55</Text>
        <Text>E-mail: Buchandreas@iCloud.com</Text>
      </View>
    );
  }