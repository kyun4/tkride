import {Text,Image,View,Dimensions,StyleSheet,FlatList,TouchableOpacity} from 'react-native';
import React,{} from 'react';
import {useRouter} from 'expo-router';
import { FontAwesome5 } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home(){

    const router = useRouter();

    const onLogout = () => {
        router.navigate("/");
    }

    const x_dimensions = Dimensions.get('window').width
    const y_dimensions = Dimensions.get('window').height


    const styler = StyleSheet.create({
        profile_picture: {
            height: 60,
            width: 60
        },
        account_header: {
            flexDirection:"row",
            marginHorizontal: 20,
            alignItems:"center",
            justifyContent:"space-between"
        },
        account_name_info: {
            flexDirection: "column"
        },
        account_name: {
            fontSize: 16,
            fontWeight: "bold"
        },
        account_subtitle: {
            fontSize: 10,
            color:"#FFF"           
        },
        account_subtitle_info: {
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"center",
            backgroundColor:"#FD8A02",
            borderRadius: 10,
            width: 70,
            marginTop: 2,
            padding: 1
        },
        box_spot_promo_builder: {
            marginHorizontal: 10,
            marginBottom: 10
        },
        box_spot_promo: {
            height: 55,
            width: 200,
            backgroundColor:"#FD8A02",
            marginRight: 10,
            borderRadius: 5,
            paddingHorizontal: 15,
            flexDirection:"row",
            alignItems:"center"
        },
        spot_promo_title: { color:"#FFF", fontWeight:"bold" },
        spot_promo_subtitle: { color:"#FFF",fontSize: 10 },
        box_category_builder: {
            marginHorizontal: 10
        },
        box_categories: {
            borderRadius: 10,
            backgroundColor:"#ebebeb",
            height: 120,
            width: 120,
            marginRight: 10,
            padding: 10
        },
        box_category_title: {
            fontSize: 18,
            fontWeight: "bold"
        },
        box_category_subtitle: {
            fontSize: 12,
            fontWeight: "300"
        }
    })

    return((<View style = {{ marginTop: 70 }}>

        <View style = {styler.account_header}>

           <TouchableOpacity onPress={onLogout}>
                <Image style = {styler.profile_picture} source = {require('@/assets/images/blankprofile2.png')}></Image>
           </TouchableOpacity>

           <View style = {styler.account_name_info}>

                <Text style = {styler.account_name}>Welcome Tiyo Kanor</Text>

                <View style = {styler.account_subtitle_info}>
                    <Text style = {styler.account_subtitle}>Verified</Text>
                    <FontAwesome5 name = "check" size = {8} style = {{ marginLeft: 5, color:"#FFF" }}></FontAwesome5>
                </View>
            
           </View>

           <View style = {{ width: x_dimensions-275 }}>
           
           </View>

        </View>

        <SafeAreaView>

            <FlatList showsHorizontalScrollIndicator = {false} style = {styler.box_spot_promo_builder} data = {["Car (4 Seater) - 20%","TK Bike","TK Truck","TK Motor"]} horizontal renderItem = {({item}) =>{
                return (

                        <View style = {styler.box_spot_promo}>                

                           <View>
                            <FontAwesome5 size = {25} name = "motorcycle" style = {{ color: "#FFF", marginRight: 15 }}></FontAwesome5>
                           </View>
                           <View style = {{ flexDirection:"column" }}>
                                <Text style = {styler.spot_promo_title}>{item}</Text>
                                <Text style = {styler.spot_promo_subtitle}>Promo Until Tomorrow</Text>
                           </View>

                          

                        </View>

                    );
            }}>
            </FlatList>

            <FlatList showsHorizontalScrollIndicator = {false} style = {styler.box_category_builder} data = {["TK Car","TK Bike","TK Truck","TK Motor","TK Scooter","TK E-Bike","TK Cruise","TK Ferry","TK Drone","TK Heli","TK Cable","TK Jeep","TK Tricycle","TK Side Car","TK Skaters"]} horizontal renderItem = {({item}) =>{
                return (

                        <View style = {styler.box_categories}>
                            <View style = {{ height: 10 }}></View>
                            <FontAwesome5 name = "car" size = {36}></FontAwesome5>
                            <Text style = {styler.box_category_title}>{item}</Text>
                            <Text style = {styler.box_category_subtitle}>Good for</Text>
                        </View>

                    );
            }}>
            </FlatList>
        </SafeAreaView>

    </View>));

}