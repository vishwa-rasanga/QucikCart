import {Text,StyleSheet,Animated,View,Image} from "react-native";
import {useEffect, useRef} from "react";
import timing = Animated.timing;
import {COLOURS} from "@/constants/ColorePallet";
import  appJson from '../../../app.json';


const logo= require('../../../assets/images/logo/Wattpad_logo.png');

export default function SplashScreen ({OnFinish}: any){
    const progress = useRef(new Animated.Value(0)).current
    useEffect(()=>{
        Animated:timing(progress, {
                toValue :100,
                duration:5000,
                useNativeDriver:false
        }).start (()=>{

            OnFinish();

        });

    },[OnFinish])

    return(
        <View style={styles.container}>

        <View style={styles.logoWarpper}>

            <Image
                style={styles.logo}
                source={logo}
               resizeMode={'contain'}/>

        </View>
            <Text>Shop Smart,Shop Fast-Your Store in Your-Pocket </Text>

            <View style={styles.progressContainer}>

                <Animated.View
                    style={[styles.ProgressBar,
                        {width:progress.interpolate({inputRange:[0,100],outputRange:['0%','100%']})}]}
                />
            </View>

            <View style={styles.bottom}>
            <Text>Version : {appJson.expo.version} </Text>
                <Text> From: Vishwa</Text>
            </View>

        </View>
    )
}

const  styles = StyleSheet.create({

    bottom:{
        width: '100%',
        height:50,

        position:'absolute',
        bottom: 0,
        flexDirection: 'row',
        padding:10,
        justifyContent: 'space-between'

    },

    ProgressBar:{
        backgroundColor:COLOURS.orange,
        borderRadius:5,
        height: '100%'


    },

    progressContainer:{
        width:'80%',
        height:5,
        backgroundColor:COLOURS.darkGray,
        overflow:'hidden',
        borderRadius:5,
        marginTop:10


    },

    logo:{
            height:60
    },

    logoWarpper:{


    },

    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})