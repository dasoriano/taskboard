import { View } from "react-native"

export const RootLayout = ({ children }) => {
  return (
    <View className='w-screen h-screen'>
      {children}
    </View>
  )
}