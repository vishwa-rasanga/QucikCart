import { Image, StyleSheet, View, Text,Platform } from 'react-native';
import {useState} from "react";
import SplashScreen from "@/components/ui/Sreen/SplashScreen";
import Dashboard from "@/components/ui/Sreen/Dashboard";


export default function HomeScreen() {
    const [isLoading, SetIsloading]=useState(true);
  return (
    <View style={styles.container}>
        {isLoading?(
        <SplashScreen OnFinish={()=>{SetIsloading(false)}}/>

        ):(

        <Dashboard/>
        )}
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,



    }

});
