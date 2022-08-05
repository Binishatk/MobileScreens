

 import * as 
 React from 'react';


 import {
 View,
Text,
   StyleSheet,Image,Button,TextInput,TouchableOpacity, ScrollView
 
 } from 'react-native';
 import RadioButtonRN from 'radio-buttons-react-native';
import logo from '../../assets/logo.png'
import eye from '../../assets/eye.png'
import { RadioButton} from 'react-native-paper';
 
import { Formik } from 'formik';
 
 const Register= () => {

 
  const [value, setValue] = React.useState('first');
  const data = [
    {
      label: 'data 1'
     },
     {
      label: 'data 2'
     }
    ];
 
   return (
    <ScrollView>
    <View style={styles.container}>
        <View style={styles.logo}>
            <Image source={logo}></Image>
           
       
            </View>
           <View style={styles.loginTitle}>
            <Text style={styles.loginTitleText}>Hi, Let’s Make a{'\n'}Journey with Us</Text>
            {/* <Text style={styles.loginTitleText}>Angela Christina</Text> */}
       
            </View>
            <View style={styles.loginInputView}>
              <View style={{marginTop:50,marginLeft:20}}>
              <Text style={styles.loginText}>Register</Text>
              </View>
              <Formik
     initialValues={{ password:'',email:'',phone:'' }}
     onSubmit={values => console.log(values)}
   >
     {({ handleChange, handleBlur, handleSubmit, values }) => (
       <View >
        <View 
        style={{margin:20}}
      
        >
      
        <TextInput
											name="email"
											value={values.email}
											placeholder="Email"
                      
										
											style={{ borderBottomWidth:1,borderBottomColor:"#9D9B9B",marginBottom:20  }}
										/>
                    <View style={{flexDirection:"row"}}>

             

                      <TextInput
											name="password"
											value={values.password}
											placeholder="Password"
                      
											autoCompleteType="password"
										
											secureTextEntry={true}
							
											style={{ borderBottomWidth:1 ,borderBottomColor:"#9D9B9B",width:"100%"}}
										/>
                        <Image source={eye} style={{width:24,height:20,position:"absolute",right:10,marginTop:20}}/>
                       </View>
                       {/* <View> */}

                    
                       <TextInput
											name="phone"
											value={values.phone}
											placeholder="Phone Number"
                      
										
											style={{ borderBottomWidth:1,borderBottomColor:"#9D9B9B" ,marginTop:20 }}
										/>
                       {/* </View> */}
                    {/* <Text style={{alignSelf:"flex-end",paddingTop:5,color:"#4F4F4F"}}>Forgot password?</Text> */}
                    <Text style={{paddingTop:20,color:"#4F4F4F"}}>Register As?</Text>
                    <View style={{flexDirection:"row"}}>
                  <View style={{flexDirection:"row",marginTop:10}}>
                    <TouchableOpacity>

                  
                      <View style={[{
        height: 20,
        width: 20,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#51C3FE',
        alignItems: 'center',
        justifyContent: 'center',
      }, ]}>
        
      
            <View style={{
              height: 12,
              width: 12,
              borderRadius: 6,
              backgroundColor: '#51C3FE',
            }}/>
            
        </View>
        </TouchableOpacity>

        <Text style={{paddingLeft:10}}>Student</Text>
      </View>
      
      <View style={{flexDirection:"row",marginTop:10,marginLeft:20}}>
        <TouchableOpacity>
                      <View style={[{
        height: 20,
        width: 20,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#9D9B9B',
        alignItems: 'center',
        justifyContent: 'center',
      }, ]}>
        
      
            <View style={{
              height: 12,
              width: 12,
              borderRadius: 6,
              // backgroundColor: '#9D9B9B',
            }}/>
            
            
        </View>
        </TouchableOpacity>
        <Text style={{paddingLeft:10}}>Teacher</Text>
      </View>
      </View>
        </View>
      
 
        <View style={{ alignItems: 'center',justifyContent:"center",marginTop:30 }}>
				<TouchableOpacity
		
					style={styles.appButtonContainer}
				
				>
					<Text style={styles.appButtonText}>Register</Text>
				</TouchableOpacity>
        <View style={{flexDirection:"row",marginVertical:40}}>

      
      <Text style={{color:"#181818"}}> Have an account?</Text>
  
      <TouchableOpacity
					// onPress={}
          onPress={() => navigation.navigate('Login')}
				>
					<Text style={{color:"#51C3FE"}} >Login</Text>
				</TouchableOpacity>
        </View>
			</View>
      
        
       </View>
     )}
   </Formik>
           
            </View>
    
     </View>
     </ScrollView>
   );
 };
 
 const styles = StyleSheet.create({
    container: {
		flex: 1,
	
		backgroundColor: '#F5F5F5',
	
	},
    logo: {
	
		alignItems: 'center',
	marginTop:50,

    
		justifyContent: 'center',
	},
  loginTitle: {
	
		alignItems: 'center',

  marginVertical:30,
    
		justifyContent: 'center',
	},
   loginTitleText:{
    fontSize:24,
  
    color:"#181818"
    

   },
   loginInputView:{
    flex:2,
    // backgroundColor:"red",
    backgroundColor:"#FDFDFD",
    borderTopLeftRadius:40,
    borderTopRightRadius:40,
  
   },
loginText:{
  fontSize:18,
  color:"#181818",


},
appButtonContainer: {
  elevation: 8,
  backgroundColor: '#51C3FE',
  borderRadius: 6,
  paddingVertical: 12,
  paddingHorizontal: 12,
  width:  285,
  height:54
},
appButtonText: {
  fontSize: 14,
  color: '#FDFDFD',
 
  alignSelf: 'center',
  
},
 });
 
 export default Register;
 