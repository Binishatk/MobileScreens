

 import React ,{useState}from 'react';


 import {
 View,
Text,
   StyleSheet,Image,Button,TextInput,TouchableOpacity
 
 } from 'react-native';
 
import visa from '../../assets/visa.png'
import cardImage from '../../assets/card.png'
import applePay from '../../assets/apple.png'
import payPalImage from '../../assets/payPal.png'
import paymentSteps from '../../assets/PaymentSteps.png' 
import { Formik } from 'formik';
 
 const Payment= () => {
  const [payPal, setPayPal] = useState(true);
 
  const [card, setCard] = useState(false);
  const [apple, setApple] = useState(false);
 
 
 
   return (
    <View style={styles.container}>
         <View style={{alignItems:"center",marginTop:10}}>

              <Image source={paymentSteps}/> 
              </View>
       <View style={{marginTop:20,marginLeft:20}}>
              <Text style={styles.paymentText}>Payment Method</Text>
              </View>
             
              {/* <View style={{marginVertical:20}}> */}

             
              <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:20,borderWidth:1,borderColor:card?'#51C3FE':'#9D9B9B',padding:20,marginTop:20}}>

              <View style={{flexDirection:"row",}}>
                    <TouchableOpacity onPress={()=>{setPayPal(false),
        setCard(true),
        setApple(false)}}>

                  
                      <View style={[{
        height: 20,
        width: 20,
        borderRadius: 12,
        borderWidth: 2,
        // borderColor: '#9D9B9B',
        borderColor: card?'#51C3FE':'#9D9B9B',
        alignItems: 'center',
        justifyContent: 'center',
      }, ]}>
        
      
        <View style={{
height: 12,
width: 12,
borderRadius: 6,
// backgroundColor: '#51C3FE',
backgroundColor:card?'#51C3FE':null
}}/>
            
        </View>
        </TouchableOpacity>

        <Text style={{paddingLeft:10}}>Credit Card </Text>
        </View>
        <View style={{flexDirection:"row"}} >
        <Image source={visa}></Image>
        <Image source={cardImage}></Image>
        </View>
    
      
             


 </View>
 <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:20,borderWidth:2,borderColor:payPal?'#51C3FE':'#9D9B9B',padding:20,marginTop:20}}>

<View style={{flexDirection:"row",}}>
      <TouchableOpacity onPress={()=>{setPayPal(true),
        setCard(false),
        setApple(false)}}>

    
        <View style={[{
height: 20,
width: 20,
borderRadius: 12,
borderWidth: 2,
// borderColor:'#51C3FE',
borderColor: payPal?'#51C3FE':'#9D9B9B',
alignItems: 'center',
justifyContent: 'center',
}, ]}>


<View style={{
height: 12,
width: 12,
borderRadius: 6,
// backgroundColor: '#51C3FE',
backgroundColor:payPal?'#51C3FE':null
}}/>

</View>
</TouchableOpacity>

<Text style={{paddingLeft:10}}>PayPal </Text>
</View>

{/* <Image source={}></Image> */}


<Image source={payPalImage}/>




</View>
<View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:20,borderWidth:1,borderColor:apple?'#51C3FE':'#9D9B9B',padding:20,marginTop:20}}>

<View style={{flexDirection:"row",}}>
      <TouchableOpacity onPress={()=>{setPayPal(false),
        setCard(false),
        setApple(true)}}>

    
        <View style={[{
height: 20,
width: 20,
borderRadius: 12,
borderWidth: 2,
// borderColor: '#9D9B9B',
borderColor: apple?'#51C3FE':'#9D9B9B',
alignItems: 'center',
justifyContent: 'center',
}, ]}>



<View style={{
height: 12,
width: 12,
borderRadius: 6,
// backgroundColor: '#51C3FE',
backgroundColor:apple?'#51C3FE':null
}}/>

</View>
</TouchableOpacity>

<Text style={{paddingLeft:10}}>Apple Pay</Text>
</View>

<Image source={applePay}></Image>







</View>
<View style={{flex:1,justifyContent:"space-around",}}>
    <View style={{borderTopWidth:.5,borderBottomWidth:.5,borderColor:"#9D9B9B"}}>
    <View style={{flexDirection:"row",marginHorizontal:20,width:"100%",paddingVertical:20}}>

 
    <View style={{width:"30%"}}>
    <Text>Purchase Date</Text>
<Text>01/09/2020</Text>
        </View>
        <View style={{width:"30%"}}>
    <Text>Price</Text>
<Text>$240</Text>
        </View>
        <View style={{width:"40%"}}>
    <Text>Discount</Text>
    <View style={{flexDirection:"row"}}>
    <Text>-$120</Text>
    <Text style={{color:"#51C3FE"}}>{'(50%)'}</Text>
    </View>

        </View>


        </View>



        </View>


      <View style={{flexDirection:"row",marginHorizontal:20,width:"100%"}}>

 
      <View style={{width:"30%",paddingTop:10}}>
    <Text>Total Price</Text>

        </View>
        <View style={{width:"30%",paddingTop:10}}>
  
<Text>$120</Text>
        </View>
        <View style={{width:"40%"}}>
        <TouchableOpacity
		
    style={styles.appButtonContainer}
  
  >
    <Text style={styles.appButtonText}>Checkout</Text>
  </TouchableOpacity>

        </View>


        </View> 



</View>
       
      </View>
   );
 };
 
 const styles = StyleSheet.create({
    container: {
		flex: 1,
	
		backgroundColor: '#FDFDFD',
	
	},


    paymentText:{
  fontSize:18,
  color:"#181818",
fontWeight:"bold"

},
appButtonContainer: {
  elevation: 8,
  backgroundColor: '#51C3FE',
  borderRadius: 6,
  paddingVertical: 12,
  paddingHorizontal: 12,
  width:  136,
  height:42
},
appButtonText: {
  fontSize: 14,
  color: '#FDFDFD',
 
  alignSelf: 'center',
  
},

 });
 
 export default Payment;
 