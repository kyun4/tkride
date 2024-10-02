import {Text,Image,View, StyleSheet,TextInput,TouchableOpacity,Dimensions,FlatList} from 'react-native';
import React,{useEffect, useState} from 'react';
import {useRouter} from 'expo-router';
import { FontAwesome5 } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import { IconAlignCenter } from 'tabler-icons';

export default function SignUpMPin(){

    const router = useRouter();

    const onPaymentAccount = () => {

        router.navigate("/signup_payment_account")  

    }

    const onSignUpComplete = () => {

        router.navigate("/signup_complete")
        
    }

    const backclear_character = () => {
        var mpin_temp = mpin.slice(0,mpin.length-1)
        setMPin(mpin_temp)
    }

    const backclear_all_character = () => {
        var mpin_temp = mpin.slice(0,0)
        setMPin(mpin_temp)
    }



    const [mpin, setMPin] = useState("")

    const [keyTypeOne, setKeyTypeOne] = useState("0");
    const [keyTypeTwo, setKeyTypeTwo] = useState("0");
    const [keyTypeThree, setKeyTypeThree] = useState("0");

    const [mPinOne, setMPinOne] = useState("");
    const [mPinTwo, setMPinTwo] = useState("");
    const [mPinThree, setMPinThree] = useState("");
    const [mPinFour, setMPinfour] = useState("");
    const [mPinFive, setMPinFive] = useState("");
    const [mPinSix, setMPinSix] = useState("");

 
    const onPressKeyOne = () => {
        setMPin(mpin.toString().concat("1"))
    }

    const onPressKeyTwo = () => {
        setMPin(mpin.toString().concat("2"))
    }

    const onPressKeyThree = () => {
        setMPin(mpin.toString().concat("3"))
    }

    const onPressKeyFour = () => {
        setMPin(mpin.toString().concat("4"))
    }

    const onPressKeyFive = () => {
        setMPin(mpin.toString().concat("5"))
    }

    const onPressKeySix = () => {
        setMPin(mpin.toString().concat("6"))
    }

    const onPressKeySeven = () => {
        setMPin(mpin.toString().concat("7"))
    }

    const onPressKeyEight = () => {
        setMPin(mpin.toString().concat("8"))
    }

    const onPressKeyNine = () => {
        setMPin(mpin.toString().concat("9"))
    }

    
    const onPressKeyZero = () => {
        setMPin(mpin.toString().concat("0"))
    }
    


    useEffect(() => {

        setMPinOne(mpin.charAt(0) != null ? mpin.charAt(0) : "")
        setMPinTwo(mpin.charAt(1) != null ? mpin.charAt(1) : "")
        setMPinThree(mpin.charAt(2) != null ? mpin.charAt(2) : "")
        setMPinfour(mpin.charAt(3) != null ? mpin.charAt(3) : "")
        setMPinFive(mpin.charAt(4) != null ? mpin.charAt(4) : "")
        setMPinSix(mpin.charAt(5) != null ? mpin.charAt(5) : "")

        if(mpin.length >= 6){
            onSignUpComplete()
        }

    })

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
            textAlign:"left"            
        },
        page_note: {
            fontSize: 10,
            fontWeight:"400",
            color:"#494547",
            textAlign:"left",
            marginLeft: 30            
        },
        section_note_primary: { fontSize:12, width:"100%", textAlign:"center", marginTop: 15, marginBottom: 30 },
        text_input_mpin_wrapper: {marginTop: 70,flexDirection:"row", justifyContent:"center",alignItems:"center"},
        text_input_mpin: { borderColor:"#a8a29e", backgroundColor:"#f5f5f4", borderWidth: 1, fontWeight: "bold",borderRadius: 10, height: 60, width: 40,marginHorizontal:2, textAlign:"center", padding: 5 },
        type_mpin_wrapper: { marginBottom: 30 },
        type_mpin_button: { fontSize: 18, color: "#FFF", fontWeight: "bold", backgroundColor:"#fdba74", height: 60, width: 60, borderRadius: 60, textAlign:"center",padding: 15, margin: 8 },
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
        }
    })



    return(
        <View style = {{ paddingHorizontal: 25,  marginTop: 70 }}>

            <View style = {{ flexDirection:"row", alignItems:"center", marginBottom: 20 }}>

                <TouchableOpacity onPress = {onPaymentAccount}>
                    <FontAwesome5 name = "arrow-left" size = {15} style = {{ marginRight: 15 }}></FontAwesome5>
                </TouchableOpacity>                

                <Text style = { styler.page_title }>Type your MPIN</Text>
               
            </View>

            <View>
                <Text style = { styler.page_note }>Always remember your MPIN, this will be used for different transactions in TK Ride</Text>
            </View>

            <View>
                <View style = {styler.text_input_mpin_wrapper}>
                    <TextInput value = {mPinOne} editable = {false} maxLength={1} style = {styler.text_input_mpin}></TextInput>
                    <TextInput value = {mPinTwo}  editable = {false} maxLength={1} style = {styler.text_input_mpin}></TextInput>
                    <TextInput value = {mPinThree}   editable = {false} maxLength={1} style = {styler.text_input_mpin}></TextInput>
                    <TextInput  value = {mPinFour} editable = {false} maxLength={1} style = {styler.text_input_mpin}></TextInput>
                    <TextInput  value = {mPinFive} editable = {false} maxLength={1} style = {styler.text_input_mpin}></TextInput>
                    <TextInput  value = {mPinSix} editable = {false} maxLength={1} style = {styler.text_input_mpin}></TextInput>
                </View>
                <Text style = {styler.section_note_primary}>Your New MPIN Number</Text>
            </View>

            <View style = {styler.type_mpin_wrapper}>

                <View style = {{ flexDirection:"row",justifyContent:"center", alignItems:"center" }}>

                    <TouchableOpacity onPress={onPressKeyOne}>
                        <View><Text style = {styler.type_mpin_button}>1</Text></View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={onPressKeyTwo}>
                        <View><Text style = {styler.type_mpin_button}>2</Text></View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={onPressKeyThree}>
                        <View><Text style = {styler.type_mpin_button}>3</Text></View>
                    </TouchableOpacity>                    

                </View>
              
                <View style = {{ flexDirection:"row",justifyContent:"center", alignItems:"center" }}>

                    <TouchableOpacity onPress={onPressKeyFour}>
                        <View><Text style = {styler.type_mpin_button}>4</Text></View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={onPressKeyFive}>
                        <View><Text style = {styler.type_mpin_button}>5</Text></View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={onPressKeySix}>
                        <View><Text style = {styler.type_mpin_button}>6</Text></View>
                    </TouchableOpacity>

                </View>

                <View style = {{ flexDirection:"row",justifyContent:"center", alignItems:"center" }}>

                    <TouchableOpacity onPress={onPressKeySeven}>
                        <View><Text style = {styler.type_mpin_button}>7</Text></View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={onPressKeyEight}>
                        <View><Text style = {styler.type_mpin_button}>8</Text></View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={onPressKeyNine}>
                        <View><Text style = {styler.type_mpin_button}>9</Text></View>

                    </TouchableOpacity>
                </View>

                <View style = {{ flexDirection:"row",justifyContent:"center", alignItems:"center" }}>  

               

                    <TouchableOpacity onPress={backclear_character }>
                        <View style = {styler.type_mpin_button}>
                            <FontAwesome5 name = "arrow-left" size = {15} style = {{ margin: 7 }} color = "#FFF"></FontAwesome5>
                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity onPress={onPressKeyZero}>
                        <View><Text style = {styler.type_mpin_button}>0</Text></View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={backclear_all_character }>
                        <View><Text style = {styler.type_mpin_button}>C</Text></View>
                    </TouchableOpacity>



                </View>

               
               
            </View>


          
        </View>
    );

}