import { View, Text, FlatList } from 'react-native'
import React {useLayoutEffect} from 'react'
import FoodCard from '../components/FoodCard'
import { MEALS } from '../dummy-data'

export default function AllFood(props) {
    useLayoutEffect(() => {
        navigation.setOptions({
          title: value === '' ? 'No title' : value,
        });
      }, [navigation, value]);
    const { catId } = props.route.params
    let allMeals = MEALS.filter((v)=>v.categoryIds.includes(catId))
    // console.log(allMeals);
  return (
    // <Text>vchjsvckjsdbkjvbdskjv</Text>
    <FlatList data={allMeals} keyExtractor={(v)=>v.id} renderItem={(data)=><FoodCard data={data.item} />} />
  )
}