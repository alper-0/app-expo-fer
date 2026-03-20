import { Image, View } from "react-native";

export function Profile(){
    return(
        <View>
            <Image 
            source={require("@/assets/banner.png")}
            className="w-full h-52"
            ></Image>
            
        </View>
    )
}