import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import StoryList from '../../components/story/StoryList';
import PostCard from '../../components/feed/PostCard';
import { dummyPosts } from '../../data/dummyPosts';
import AppHeader from '../../components/common/AppHeader';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AppHeader />

      <FlatList
        ListHeaderComponent={<StoryList />}
        data={dummyPosts}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <PostCard post={item} />}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
