import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeMenuScreen from "@/components/ui/Sreen/Home/HomeMenuScreen";
import HomeCartScreen from "@/components/ui/Sreen/Home/HomeCartScreen";
import HomePageScreen from "@/components/ui/Sreen/Home/HomePageScreen";
import HomeBookMarkScreen from "@/components/ui/Sreen/Home/HomeBookMarkScreen";
import HomeProductScreen from "@/components/ui/Sreen/Home/HomeProductScreen";

const Tab =createBottomTabNavigator()
export default function HomeBottomTabNavigation (){
    return(
        <Tab.Navigator>

            <Tab.Screen name={'Menu'} component={HomeMenuScreen}/>
            <Tab.Screen name={'Cart'} component={HomeCartScreen}/>
            <Tab.Screen name={'Home'} component={HomePageScreen}/>
            <Tab.Screen name={'BookMark'} component={HomeBookMarkScreen}/>
            <Tab.Screen name={'Products'} component={HomeProductScreen}/>

        </Tab.Navigator>
    )
}