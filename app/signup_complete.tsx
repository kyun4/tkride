import {Text,Image,View, StyleSheet,TextInput,TouchableOpacity,Dimensions,FlatList} from 'react-native';
import React,{useState} from 'react';
import {useRouter} from 'expo-router';
import { FontAwesome5 } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';

export default function SignUpComplete(){

    const router = useRouter();
    const [selectedCity, setSelectedCity] = useState("")

    const dataAvailableEWallets = [
        {
            "ewallet_id": "1",
            "ewallet_name":"GCash",
            "ewallet_img": require('@/assets/payment_methods/gcash1.png')
        },
        {
            "ewallet_id": "2",
            "ewallet_name":"Maya",
            "ewallet_img": require('@/assets/payment_methods/maya1.png')
        },
        {
            "ewallet_id": "3",
            "ewallet_name":"SeaBank",
            "ewallet_img": require('@/assets/payment_methods/seabank1.png')
        }
    ];

    const dataAvailableBanks = [
        {
            "ewallet_id": "1",
            "ewallet_name":"GCash",
            "ewallet_img": require('@/assets/payment_methods/cimb1.png')
        },
        {
            "ewallet_id": "2",
            "ewallet_name":"Maya",
            "ewallet_img": require('@/assets/payment_methods/kanorbank1.png')
        }    
    ];

    
    

    const x_dimensions = Dimensions.get('window').width
    const y_dimensions = Dimensions.get('window').height

    const styler = StyleSheet.create({

        page_title: {
            fontSize: 21,
            fontWeight:"bold",
            color:"#494547",
            textAlign:"center",
            width: "100%"            
        },
        section_title: { marginLeft: 12, marginBottom: 5, marginTop: 20, fontSize: 14, fontWeight:"300" },
        payment_method_img_signup: { height:55, width: 120, borderRadius: 10, marginVertical: 5 },
        payment_method_box: { shadowColor:"#737373", shadowOffset: {height:-4, width:10}, shadowRadius: 25, shadowOpacity:0.2, elevation: 5, backgroundColor: "#f5f5f4",  borderRadius: 10, paddingHorizontal:10, marginVertical: 5, marginHorizontal: 10, height: 70, width: "95%", flexDirection:"row", justifyContent:"space-between", alignItems:"center" },
        signup_field: {
            borderColor:"#78716c",
            borderWidth: 1,
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 10,
            marginVertical: 4           
        },
        signup_field_picker: {           
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 10,
            marginVertical: 4,
            backgroundColor:"#e7e5e4"
        },
        signup_field_short_address: {
            borderColor:"#78716c",
            borderWidth: 1,
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 10,
            marginVertical: 4,
            width: x_dimensions -200
        },
        
        tk_logo: {
            height: 75,
            width: 75,
            alignItems:"center",
            marginBottom: 30
        },
        welcome_signup_title: {fontSize:16, textAlign:"center", marginTop: 5},
        welcome_signup_subtitle: {fontSize:10, textAlign:"center", paddingHorizontal: 25}
    })

    const onLogin = () => {

          router.navigate("/")  

    }

    return(
        <View style = {{ paddingHorizontal: 25, flex:1, justifyContent:"center", alignItems:"center" }}>

            <Image style = { styler.tk_logo } source = {require('@/assets/images/tkridelogo1.png')}></Image>

            <View style = {{ flexDirection:"column", alignItems: "center" }}>

                 <Text style = { styler.page_title }>Sign Up Complete</Text>               
                 <Text style = {styler.welcome_signup_title}>Welcome our New User!</Text>
                 <Text style = {styler.welcome_signup_subtitle}>You can now enjoy our promos and unlimited adventures with almost no vehicle type limit</Text>

            </View>
          

            <View style = {{ height: 25 }}></View>

            <TouchableOpacity onPress={onLogin}>
                <View style = {{ flexDirection:"row", justifyContent:"center", marginTop: 10 }}>
                    <View style = {{backgroundColor:"#FD8A02", width: "70%", flexDirection:"row", alignItems:"center", justifyContent: "center", padding:15, borderRadius: 25}}>
                        <Text style = {{color:"#FFF", fontWeight: "bold", fontSize: 16}}>Done</Text>
                        
                    </View>
                </View>
            </TouchableOpacity>
          
        </View>
    );

}