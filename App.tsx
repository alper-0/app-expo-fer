import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import "./global.css"
import { Profile } from '@/app/Profile';

export default function App() {
  return (
    <View >
      <Profile/>
      <Text className="text-2xl font-bold text-blue-500">
        Welcome to Nativewind!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}


