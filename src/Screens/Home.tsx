import React, {FC, useEffect, useState} from 'react';
import {
    ActivityIndicator,
    FlatList,
    Image,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import axios, { AxiosResponse } from 'axios';
import { ListItem } from 'react-native-elements';
import { Props, Story } from '../Components/Interfaces';
import styles from '../Components/Styles';

const Home: FC<Props> = (props) => {
    const {navigation} = props;
    const [storyId, setStoryId] = useState<String[]>([]);
    const [stories, setStories] = useState<Story[]>([]);
    const [isLoading, setLoading] = useState<boolean>(true);

    const image = require('../assets/News.png');

    const navigatePath = () => {
        navigation.navigate('StoryDetails');
    };

    useEffect(() => {
            axios.get('https://hacker-news.firebaseio.com/v0/topstories.json')
                .then((response: AxiosResponse) => {
                  var id = response.data;
                  setStoryId(id);
                    
                    var story: Story[] = [];
                    
                    for(let i=0; i<10; i++) {
                      let url = "https://hacker-news.firebaseio.com/v0/item/" + id[i] + ".json"
                      axios.get<Story[]>(url)
                      .then((response: AxiosResponse) => {
                        
                      story.push(response.data);
                      
                        if(story.length === 9) {
                          setStories(story);
                          setLoading(false);
                        }
                      })
                    .catch((error) => console.error(error));
                    }
                })
                .catch((error) => console.error(error));                   
    }, []);
  
  return (
      
        <View style={styles.container}>
            <Image style={styles.image} resizeMode='contain' source={image} />
            <ActivityIndicator
                animating={isLoading} size="large" color="lightseagreen"
                style={styles.loadingAnimationContainer}
            />
            <FlatList
                    style={styles.listContainer}
                    data={stories ? stories : []}
                    keyExtractor={(story) => story.id.toString()}
                    renderItem={( story ) => (
                        <ListItem
                            bottomDivider
                            onPress={() => {
                                navigation.navigate('StoryDetails', {
                                    Title: story.item.title,
                                    Url: story.item.url,
                                });
                            }}
                        >
                            <ListItem.Content>

                                    <View style={styles.list}>
                                        <ListItem.Title>

                                            <Text style={{ fontWeight: "bold" }}>
                                                {story.item.title}
                                            </Text>
                                            
                                        </ListItem.Title>
                                    </View>
                                
                            </ListItem.Content>
                        </ListItem>
                    )}
            /> 
        </View>
      
  );
};

export default Home;
