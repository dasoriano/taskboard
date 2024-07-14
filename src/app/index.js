import { RootLayout } from "./layout";
import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <RootLayout>
      <View className='w-full h-full flex-1 justify-evenly items-center'>
        <Text className='text-5xl'>Welcome, Bai!</Text>
        <View className='w-[300px] h-[50px] flex justify-center items-center bg-black rounded-[4px]'>
          <Text 
            className='text-lg font-semibold text-white'
          >
            Get Started
          </Text>
        </View>
      </View>
    </RootLayout>
  ) 
}