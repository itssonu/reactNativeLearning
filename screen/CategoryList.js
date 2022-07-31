import { StyleSheet, View, FlatList } from 'react-native'
import React from 'react'
import { CATEGORIES } from "../dummy-data";
import CategoryCard from "../components/CategoryCard";
import FoodCard from "../components/FoodCard.js";

export default function CategoryList(props) {
    const onCatCardPressHandler = (catId)=>{
        props.navigation.navigate('AllFood', { catId: catId })
    }
  return (
    <View style={styles.container}>
    <FlatList data={CATEGORIES} keyExtractor={(v)=>v.id} renderItem={(item)=><CategoryCard onCatCardPressHandler={onCatCardPressHandler} data={item.item}/>} numColumns={2} />
  </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });
  