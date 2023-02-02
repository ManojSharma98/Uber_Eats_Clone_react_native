import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import HeaderTabs from '../components/HeaderTabs'
import SearchBar from '../components/SearchBar'
import Categories from '../components/Categories'
import RestaurantItem from '../components/RestaurantItem'

const Home = () => {
  return (
    <SafeAreaView>
      <HeaderTabs/>
      <SearchBar/>
      <ScrollView showsVerticalScrollIndicator={false}>
      <Categories/>
      <RestaurantItem/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home