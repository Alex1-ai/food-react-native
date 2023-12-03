import React,{ useState, useEffect} from 'react'
import { Text, View, StyleSheet, FlatList,Image} from 'react-native';
import yelp from '../api/yelp';
const ResultsShowScreen = ({route}) => {
    const [result, setResults]  = useState(null);
    // console.log(route)
  const id = route.params?.id;
//   console.log(id);
//   console.log(result)

  const getResult = async(id) =>{
    const response = await yelp.get(`/${id}`);
    setResults(response.data)



  }

  useEffect(()=>{
    getResult(id);
  },[])

  if (!result){
    return null;
  }
  return (
    <View style={styles.container}>
        <Text style={styles.textStyle} >{result.name}</Text>
        <FlatList 
        //    horizontal
           data={result?.photos}
           keyExtractor={(photo)=>photo}
           renderItem={({item})=>{
              return <Image style={styles.imageStyle} source={{uri:item}} />

           }}
        
        />
    </View>
  )
}

const styles = StyleSheet.create({
    imageStyle:{
        width: 350,
        height: 300,
        marginBottom: 5,
       
    },
    container:{
        marginLeft: 10,
        alignItems: 'center',
        flex: 1
        
    },
    textStyle:{
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    }

})

export default ResultsShowScreen