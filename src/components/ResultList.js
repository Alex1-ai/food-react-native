import React from 'react'
import {Text, View, StyleSheet, FlatList, TouchableOpacity} from 'react-native' 
import ResultDetail from './ResultDetail'
import { useNavigation } from '@react-navigation/native';
const ResultList = ({ title, results }) => {
  const navigation = useNavigation();

  if (!results.length){
    return null
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {/* <Text>Results: {results.length}</Text> */}
      <FlatList
         horizontal={true}
         showsHorizontalScrollIndicator={false}
         data={results}
         keyExtractor={(result)=>result.id}

         renderItem={({item})=>{
            return (
              <TouchableOpacity onPress={()=>navigation.navigate('ResultsShow',{id:item.id})}>
                  <ResultDetail result={item} />
              </TouchableOpacity>
            
            )
         }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    title:{
        fontSize:18,
        fontWeight:'bold',
        marginLeft: 15,
        marginBottom:5,
    },
    container:{
      marginBottom: 10,
    }
})

export default ResultList
