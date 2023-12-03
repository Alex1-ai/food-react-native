import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from "../components/SearchBar";
import yelp from '../api/yelp';
import useResults from "../hooks/useResults";
import ResultList from "../components/ResultList";


const SearchScreen = ()=>{
    // console.log()
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();
    const filterResultByPrice = (price) =>{
        return results.filter(result =>{
            return result.price === price;
        })
    }
    // console.log(results);
    return (
        
        // <View style={styles.backgroundStyle}>
        <>
            <SearchBar 
            term={term} 
            onTermChange={newTerm=>setTerm(newTerm)}
            onTermSubmit={() =>searchApi(term)}
            />
            {errorMessage ? <Text > {errorMessage}</Text> : null}
            {/* <Text>We have found {results.length} results</Text> */}
            <ScrollView>
                <ResultList 
               
                results={filterResultByPrice("$$")}
                title="Bit Pricier"
                />
                <ResultList 
                
                results={filterResultByPrice("$$$")} 
                title="Big Spender"
                />
                <ResultList 
                
                  results={filterResultByPrice("$")} 
                  title="Cost Effective" />
            </ScrollView>
            {/* <ResultList /> */}
        {/* </View> */}
        </>
        
    )
}

const styles = StyleSheet.create({
    backgroundStyle:{
        backgroundColor: 'white',
        // flex:1

    }
})
export default SearchScreen