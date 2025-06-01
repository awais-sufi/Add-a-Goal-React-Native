import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  StyleSheet,
  StatusBar,
  Button,
  Alert,
  Switch,
  FlatList,
  ActivityIndicator,
  ImageBackground,
  TouchableOpacity,
  Pressable,
} from 'react-native';

const App = () => {
  const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};

  const DATA = [
    {id: '1', title: 'First Item'},
    {id: '2', title: 'Second Item'},
    {id: '3', title: 'Third Item'},
  ];

  type ItemProps = {
    title: string;
  };

  const Item = ({title}: ItemProps) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);

  const [goal, setGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState<{id: string; text: string}[]>(
    [],
  );

  const goalInput = (enteredText: any) => {
    setGoal(enteredText);
  };

  const addGoal = () => {
    if (goal.trim() === '') return; 
    const newGoal = {
      id: Date.now().toString(),
      text: goal,
    };
    setCourseGoals(currentCourseGoals => [...currentCourseGoals, newGoal]);
  };

  const onPressHandler = (goalId: string) => {
    setCourseGoals(currentCourseGoals =>
      currentCourseGoals.filter(goal => goal.id !== goalId),
    );
  };

  return (
    <>
      <ScrollView style={styles.ScrollView}>
        <Text style={styles.text}>Welcome to Goals App </Text>
        <View style={styles.appC}>
          <View style={styles.InputIems}>
            <TextInput
              style={styles.TextInput}
              placeholder="Enter the goals"
              onChangeText={goalInput}
              value={goal}
            />
            <Button title="Add Goals" color="#784389" onPress={addGoal} />
          </View>
        </View>

        <View style={styles.goalcontainer}>
          {courseGoals.map(goalItem => (
            <Pressable
            android_ripple={{color: '#234566'}}
              key={goalItem.id}
              onPress={() => onPressHandler(goalItem.id)}>
              <View style={styles.Goalitem}>
                <Text style={styles.goaltext}>{goalItem.text}</Text>
              </View>
            </Pressable>
          ))}
        </View>

        <Text style={styles.text}>
          Lorem ipsum dolor sit amet... hi my name is awais
        </Text>

        <View style={styles.fix}>
          <Button
            title="left button"
            onPress={() => Alert.alert('Left button pressed!')}
          />
          <Button
            title="right button"
            onPress={() => Alert.alert('Right button pressed!')}
          />
        </View>

        <Text style={styles.text}>Some text my name is awais</Text>
        <Button
          title="Press me"
          onPress={() => Alert.alert('Button pressed!')}
        />

        <View>
          <Text>Some more text</Text>
          <Image
            source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}}
            style={{width: 200, height: 200}}
          />
        </View>

        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          defaultValue="You can type in me"
        />

        <ActivityIndicator size="large" color="#00ff00" />

        <View style={styles.cen}>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
          <Text style={styles.text}>Some text my name is awais</Text>
        </View>

        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <Text style={styles.text1}>Inside Test</Text>
        </ImageBackground>

        <FlatList
          data={DATA}
          renderItem={({item}) => <Item title={item.title} />}
          keyExtractor={item => item.id}
        />
        <View style={styles.Bb}>
          <View>
            <Text style={styles.count}>Count: {count}</Text>
          </View>

          <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text>Press Here</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  ScrollView: {
    backgroundColor: 'lightblue',
    padding: 25,
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 20,
  },
  fix: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  cen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    height: 200,
  },
  text1: {
    color: 'white',
    fontSize: 22,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    fontSize: 20,
  },
  count: {
    fontSize: 20,
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  appC: {
    padding: 20,
  },
  InputIems: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  TextInput: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ad3535',
    width: '70%',
    marginRight: 10,
    padding: 10,
  },
  goalcontainer: {
    flex: 5,
    paddingBottom: 50,
  },
  Goalitem: {
    margin: 10,
    backgroundColor: '#754453',
    borderRadius: 5,
  },
  goaltext: {
    color: '#fff',
    fontSize: 20,
    padding: 10,
  },
  Bb: {
    marginVertical: 20,
    paddingBottom: 50,
  },
});
