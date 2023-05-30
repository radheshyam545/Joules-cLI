import React, { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import { SafeAreaView, StyleSheet, TouchableOpacity, Image, TextInput, Alert } from 'react-native';
import { Text, View, Linking } from 'react-native';
import Button from '../components/Button';
import Background from '../components/Background';
import { useDispatch, useSelector } from 'react-redux';
import RNSpeedometer from 'react-native-speedometer'
import { Click, Clicked, EcoMode, ScheduleMode, BalanceMode, ResolveMode,StopChargingMode, setStateValue } from '../Redux/Action';
import Svg, { Path, Defs, ClipPath, Rect } from 'react-native-svg';
import Lottie from 'lottie-react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import PersonIcon from '../components/PersonIcon';
import { Animated, Easing } from 'react-native';

// import FastImage from 'react-native-fast-image';
import Modes from '../components/Modes';
import Modes1 from '../components/Modes1';
import { black } from 'react-native-paper/lib/typescript/styles/colors';
import Hamburger from '../components/Hamburger';

export default function Home({ navigation }) {
  const animationProgress = useRef(new Animated.Value(0))

  useEffect(() => {
    Animated.timing(animationProgress.current, {
      toValue: 1,
      duration: 5000,
      easing: Easing.linear,
      useNativeDriver: false
    }).start();
  }, [])
  const dispatch = useDispatch();
  const [state, setState] = useState();
  console.log(state);
  const [gifTime, setGifTime] = useState(0);

  const increaseGifTime = () => {
    // Here, you can update the GIF time based on the received data
    const newData = 1000; // Replace with your logic to retrieve the new data

    // Increase the GIF time by adding the new data to the existing time
    setGifTime(gifTime + newData);
  };
  const [datas, setDatas] = useState("Connect your charger");
  const [user, setUserData] = React.useState("Charging Mode: Eco_Mode");
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const [isSwitchOn1, setIsSwitchOn1] = React.useState(false);
  const [button1, setButton1] = React.useState("false");
  const [button2, setButton2] = React.useState("false");
  const [button3, setButton3] = React.useState("false");
  const [button4, setButton4] = React.useState("false");
  const [stateValue, SetStateValue] = useState("")
  const [stateMode, SetStateMode] = useState("23")
  const [stateEnergy, SetStateEnergy] = useState("23")
  // const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  // console.log(user, "harsh authtoken");
  setTimeout(function () {
    setDatas("Charger is connected");
  }, 5000);


  const imagesAllData = useSelector(state => state?.userReducers?.StateValue);
  const SampleData = useSelector(state => state?.userReducers?.modeValue);
  const SampleDataaa = useSelector(state => state?.userReducers?.SetEnergy);
  useEffect(() => {
    // console.log("harsheeheuhheddhe", SampleData);
    // console.log("hhhhhh", imagesAllData);
    // const mEmail = AsyncStorage.getItem('Authtoken');
    // console.log(imagesAllData, "here is the token stored");
    SetStateValue(imagesAllData);
    // SetStateMode(SampleData)
    console.log(imagesAllData,"CHARGING POWER");
  }, [imagesAllData]);
  // const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  // const getRandomNumber = (min, max) => {
  //   return Math.floor(Math.random() * 100); // Generate a random number between 0 and 100
  // };
  useEffect(() => {
    // console.log("harsheeheuhheddhe", SampleData);
    // console.log("hhhhhh", imagesAllData);
    // const mEmail = AsyncStorage.getItem('Authtoken');
    // console.log(imagesAllData, "here is the token stored");
    // SetStateValue(imagesAllData);
    SetStateMode(SampleData)
    // const randomValue = getRandomNumber(0, 100);
  }, [SampleData]);
  useEffect(() => {
    console.log("harsheeheuhheddhe", SampleData);
    console.log("hhhhhh", imagesAllData);
    // const mEmail = AsyncStorage.getItem('Authtoken');
    // console.log(imagesAllData, "here is the token stored");
    // SetStateValue(imagesAllData);
    SetStateEnergy(SampleDataaa)
    // const randomValue = getRandomNumber(0, 100);
  }, [SampleDataaa]);

  const myStorage = {
    setItem: (key, item) => {
      myStorage[key] = item;
    },
    getItem: (key) => myStorage[key],
    removeItem: (key) => {
      delete myStorage[key];
    },
  };

  const Sample = (data) => {
    console.log(data, "hello");
    console.log("hello here");
    if (button1 == "true") {

      setButton1("false")
    } else {
      setButton1("true")
      setButton2("false")
      setButton3("false")
      setButton4("false")
      // SetStateValue("Charging Started")
    }
    setIsSwitchOn(!isSwitchOn);
    dispatch(BalanceMode());
    // navigation.navigate('Load');
  };
  const Samplee = (data) => {
    console.log(data, "hello");
    console.log("hello here");
    if (button2 == "true") {

      setButton2("false")
    } else {
      setButton2("true")
      setButton1("false")
      setButton3("false")
      setButton4("false")
    }
    setIsSwitchOn1(!isSwitchOn1);
    dispatch(EcoMode());
  };
  const Sampleed = (data) => {
    console.log(data, "hello");
    console.log("hello here");
    if (button3 == "true") {

      setButton3("false")
    } else {
      setButton3("true")
      setButton1("false")
      setButton2("false")
      setButton4("false")
    }
    setIsSwitchOn1(!isSwitchOn1);
    navigation.navigate('Date');
    // dispatch(ScheduleMode());
  };

  const Sampleeeed = (data) => {
    console.log(data, "hello");
    console.log("hello here");
    if (button4 == "true") {

      setButton4("false")
    } else {
      setButton4("true")
      setButton1("false")
      setButton2("false")
      setButton3("false")
    }
    setIsSwitchOn1(!isSwitchOn1);
    dispatch(Clicked());
    //
  };

  const Clickk = () => {
    // navigation.navigate('Load');
    dispatch(StopChargingMode());
    setButton2("false")
      setButton1("false")
      setButton3("false")
      setButton4("false")
    SetStateValue("Charging Stopped")
  };
  const Resolve = () => {
    // navigation.navigate('Load');
    dispatch(ResolveMode());
    SetStateValue("Resolving Issue")
    setButton2("false")
      setButton1("false")
      setButton3("false")
      setButton4("false")
  };
  // const [chargingLevel, setChargingLevel] = useState(0);

  // const updateChargingLevel = (newLevel) => {
  //   setChargingLevel(newLevel);
  // };

  const getImageColor = () => {
    if (chargingLevel >= 80) {
      return 'green'; // Fill the image with green color
    } else {
      return 'white'; // Fill the image with white color
    }
  };


  const [gifXPosition, setGifXPosition] = useState(new Animated.Value(32));
  const data = "93"


  useEffect(() => {
    const newData = 1000; // Replace with your logic to retrieve the new data
    setGifTime(gifTime + newData);
  }, []);

  // useEffect(() => {
  //   moveGifAutomatically(stateValue);
  // }, [stateValue]);



  useEffect(() => {
    // Update the position of the GIF based on the provided data
    moveGifAutomatically(data);
  }, [data]);

  const moveGifAutomatically = (data) => {
    // Calculate the new position based on the data
    const newPosition = calculateNewPosition(data);

    // Animate the GIF to the new position
    Animated.timing(gifXPosition, {
      toValue: newPosition,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const calculateNewPosition = (data) => {
    // Perform any necessary calculations based on the provided data
    // and return the new position for the GIF
    // Example: return data * 10;
  };

  return (
    <Background>
      
      <PersonIcon></PersonIcon>
      <Hamburger></Hamburger>
      <Header style={styles.header}>{stateValue==""?"Charging Status":stateValue}</Header>
      <SafeAreaView style={styles.container}>

        {/* <RNSpeedometer style={styles.labels} value={"23"} size={400} /> */}

        <View style={styles.containerefdf}>
          {/* <Image
            source={require('../assets/loading.gif')}
            style={{ width: 100, height: 100 }}
          />
          <Image
            style={{ width: 100, height: 80 }}
            source={{ uri: "https://media.geeksforgeeks.org/wp-content/uploads/20220221170632/ezgifcomgifmaker1.gif" }}
          /> */}
        </View>
      </SafeAreaView>


      <View style={styles.modesContainer}>

      <TouchableOpacity style={styles.modeContainered}>

<Header>Power Used</Header>
<Text style={styles.sample}>House  : 0 kW</Text>
<Text style={styles.sample}>Charger  : {stateMode==""?"0 kW":stateMode}</Text>
{/* <View style={styles.modesContainer}>
  <Header>rgjng</Header>
</View> */}
{/* <TouchableOpacity style={styles.powerCon}> */}
{/* <Text>Power Used</Text> */}
{/* </TouchableOpacity> */}

      </TouchableOpacity>
      <TouchableOpacity style={styles.modeContainered}>

      <Image
            source={require('../assets/loading.gif')}
            style={{ width: 200, height: 250 }}
          />
      </TouchableOpacity>




      </View>
      <Header></Header>

      {/* <Header style={styles.header}>harsh</Header> */}

      <View style={styles.modesContainer}>
        <TouchableOpacity onPress={Sample} style={button1 == "true" ? styles.modeContainer : styles.modeContainer2}>
          <View style={styles.modeInnerContainer}>
            <Text style={button1 == "true" ? styles.modeText : styles.modeText1}>Balanced Mode</Text>
            {/* <Text style={styles.modeText}> Mode</Text> */}
            <Text style={button1 == "true" ? styles.modeStatus : styles.modeStatus1}>{button1 == "true" ? "ON" : "OFF"}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={Samplee} style={button2 == "true" ? styles.modeContainer : styles.modeContainer2}>
          <View style={styles.modeInnerContainer}>
            <Text style={button2 == "true" ? styles.modeText : styles.modeText1}>Eco{'\n'}Mode</Text>
            {/* <Text style={styles.modeText}> Mode</Text> */}
            <Text style={button2 == "true" ? styles.modeStatus : styles.modeStatus1}>{button2 == "true" ? "ON" : "OFF"}</Text>
          </View>
        </TouchableOpacity>
        {/* </View> */}

        {/* <View style={styles.modesContainer}> */}
        <TouchableOpacity onPress={Sampleed} style={button3 == "true" ? styles.modeContainer : styles.modeContainer2}>
          <View style={styles.modeInnerContainer}>
            <Text style={button3 == "true" ? styles.modeText : styles.modeText1}>Schedule Mode </Text>
            {/* <Text style={styles.modeText}> Mode</Text> */}
            <Text style={button3 == "true" ? styles.modeStatus : styles.modeStatus1}>{button3 == "true" ? "ON" : "OFF"}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={Sampleeeed} style={button4 == "true" ? styles.modeContainer : styles.modeContainer2}>
          <View style={styles.modeInnerContainer}>
            <Text style={button4 == "true" ? styles.modeText : styles.modeText1}>Slow Mode</Text>
            {/* <Text style={styles.modeText}>Mode</Text> */}
            <Text style={button4 == "true" ? styles.modeStatus : styles.modeStatus1}>{button4 == "true" ? "ON" : "OFF"}</Text>
          </View>
        </TouchableOpacity>
      </View>



      <View style={styles.textSample}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Energy consumed</Text>
          <Header style={styles.energy}>{stateEnergy==""?"0 Wh":stateEnergy}</Header>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Cost of Charging</Text>
          <Header style={styles.energy}>0</Header>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Charging
            <Text> </Text> time</Text>
          <Header style={styles.energy}>0 Min</Header>
        </View>
      </View>

      <Button mode="contained" onPress={Clickk}>
        Stop Charging
      </Button>
      <Button style={styles.redButton} mode="contained" onPress={Resolve}>
        RESOLVE
      </Button>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textSample: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
    marginBottom: 20,
  },
  textContainer: {
    flex: 1,
    
    alignItems: 'center',
  },
  text: {
    color: 'green',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingVertical: 3,
  },
  containerr: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '80%',
    alignSelf: 'center',
  },
  button: {
    width: '48%',
    aspectRatio: 1, // Set the width and height to be equal to create a square
    borderRadius: 8,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  mode: {
    marginLeft: 10,
    paddingLeft: 90
  },
  lastMode: {
    marginLeft: 0,
  },
  modesContainer: {

    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    // borderRadius: 10, // Add border radius for rounded corners
    // overflow: 'hidden',
  }, 
  modeContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    backgroundColor: 'green',
    borderRadius: 25,
    overflow: 'hidden',
    height: 120,
    width: 90,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modeContainer2: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    // backgroundColor: 'red',
    borderRadius: 25,
    overflow: 'hidden',
    height: 120,
    width: 90,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: "#118615",
    justifyContent: 'center',
    alignItems: 'center',

  },
  modeInnerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    // paddingHorizontal: 10,

  },
  modeText: {
    color: 'white',
    fontSize: 14,
    marginBottom: 0,
    textAlign: 'center',
    // paddingHorizontal: 10,
    lineHeight: 20,
  },
  modeText1: {
    color: 'black',
    fontSize: 14,
    marginBottom: 0,
    textAlign: 'center',

    // paddingHorizontal: 10,
    lineHeight: 20,
  },
  modeStatus: {
    color: 'white',
    marginTop: 10,
    fontSize: 15,
  },
  modeStatus1: {
    color: 'black',
    marginTop: 10,
    fontSize: 15,
  },
  energy: {
    marginBottom: 10,
    marginTop:15
  }







  , image: {
    width: 20,
    height: 150,
    marginBottom: 90,
    marginTop: 1,
  }

  ,



  containerefdf: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gif: {
    width: 200,
    height: 150,
  }, 
  modeContainered: {
    flexDirection: 'column',
    // paddingHorizontal: 10,
    marginLeft:20,
    // marginRight:20,
    // backgroundColor: 'green',
    // borderRadius: 25,
    height:210,
    overflow: 'hidden',
    // height: 290,
    // width: 190,
    // marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  powerCon:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  sample:{
    color:"black",
  },
  redButton:{
    borderRadius: 18,
    backgroundColor:"red",
    marginVertical: 10,
    paddingVertical: 2,
    width:230
  }
});