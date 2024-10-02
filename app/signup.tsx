import {Text,Image,View, StyleSheet,TextInput,TouchableOpacity,Dimensions,ScrollView, Platform} from 'react-native';
import React,{useState} from 'react';
import {useRouter} from 'expo-router';
import { FontAwesome5 } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import  DateTimePicker  from '@react-native-community/datetimepicker';

export default function SignUp(){

    const router = useRouter();
    const [selectedCity, setSelectedCity] = useState("")

    const x_dimensions = Dimensions.get('window').width
    const y_dimensions = Dimensions.get('window').height

    const nextToPaymentAccount = () => {
        router.navigate("/signup_payment_account")
    }

    const styler = StyleSheet.create({
        page_title: {
            fontSize: 21,
            fontWeight:"bold",
            color:"#494547",
            textAlign:"left"            
        },
        section_title: { marginLeft: 0, marginBottom: 5, marginTop: 10, fontSize: 14, fontWeight:"300" },
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

    const onLogin = () => {

          router.navigate("/")  

    }

    const [date, setDate] = useState(new Date());
    const [isShowDate, setShowDate] = useState(false);

    const onChange = (event, selectedDate) => {

      
        const currentDate = selectedDate || date;
       
        setDate(currentDate);

        setShowDate(!isShowDate);
        
        
    }

    const showDatePicker = () => {
        setShowDate(true);
    }

    return(
        <View style = {{ paddingHorizontal:30, marginTop: 70, marginBottom: 50 }}>

        <ScrollView showsVerticalScrollIndicator={false}  >
            <View style = {{ flexDirection:"row", alignItems:"center", marginBottom: 20 }}>

                <TouchableOpacity onPress = {onLogin}>
                    <FontAwesome5 name = "arrow-left" size = {15} style = {{ marginRight: 15 }}></FontAwesome5>
                </TouchableOpacity>                

                <Text style = { styler.page_title }>Create your Account</Text>

            </View>

            <View>
                <View>
                    <Text style = {styler.section_title}>Personal Information</Text>
                </View>

                <View>
                    <TextInput style = { styler.signup_field } placeholder = "First Name"></TextInput>
                </View>

                <View>
                    <TextInput style = { styler.signup_field } placeholder = "Last Name"></TextInput>
                </View>

                <View>
                    <TextInput style = { styler.signup_field } value = {date.toLocaleDateString()} onPress = {showDatePicker} placeholder = "Birthdate"></TextInput>
                </View>

                { isShowDate && (  <DateTimePicker
                value = {date}
                mode = "date"
                display = "default"
                onChange = {onChange}/> )}
               

            </View>

            
            <View style = {{ marginTop: 20 }}>
                <View>
                    <Text  style = {styler.section_title}>Contact Information</Text>
                </View>

                <View>
                    <TextInput style = { styler.signup_field } placeholder = "Email Address"></TextInput>
                </View>

                <View>
                    <TextInput style = { styler.signup_field } placeholder = "Mobile Number"></TextInput>
                </View>
            </View>

            <View style = {{ marginTop: 20 }}>

                <View>
                    <Text  style = {styler.section_title}>Address</Text>
                </View>

                <View style = {{ flexDirection:"row", justifyContent:"space-between" }}>

                    <View>
                        <TextInput style = { styler.signup_field } placeholder = "House/Lot No."></TextInput>
                    </View>

                    <View>
                        <TextInput style = { styler.signup_field_short_address } placeholder = "Street"></TextInput>
                    </View>

                </View>

                <View>
                    <TextInput style = { styler.signup_field } placeholder = "Village"></TextInput>
                    <Picker selectedValue = {selectedCity} style = {styler.signup_field_picker} onValueChange={(itemValue, itemIndex) => setSelectedCity(itemValue)}>
                        
                        <Picker.Item label = "(Select Your City)" value = ""></Picker.Item>
                        <Picker.Item label = "Taguig City" value = "1"></Picker.Item>
                        <Picker.Item label = "Makati City" value = "2"></Picker.Item>
                        <Picker.Item label = "Paranaque City" value = "3"></Picker.Item>
                        <Picker.Item label = "Pasay City" value = "4"></Picker.Item>
                        
                    </Picker>
                </View>
            </View>

            <TouchableOpacity onPress={nextToPaymentAccount}>
                <View style = {{ flexDirection:"row", justifyContent:"flex-end", marginTop: 10 }}>
                    <View style = {{backgroundColor:"#FD8A02", width: "50%", flexDirection:"row", alignItems:"center", justifyContent: "center", padding:10, borderRadius: 20}}>
                        <Text style = {{color:"#FFF", fontWeight: "bold", fontSize: 16}}>Next</Text>
                        <FontAwesome5 name = "arrow-right" size = {12} style = {{marginLeft: 15}} color ="#FFF"></FontAwesome5>
                    </View>
                </View>
            </TouchableOpacity>
          
            </ScrollView>

        </View>
    );

}