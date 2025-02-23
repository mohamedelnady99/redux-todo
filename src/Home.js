import AntDesign from '@expo/vector-icons/AntDesign';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

import { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  TextInput,
  FlatList
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import DetailsScreen from './src/Details';
import Details from './Details';

export default function Home() {
  const navigation = useNavigation();

  const Stack = createStackNavigator();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('All');
  const [flag, setFlag] = useState(true);
  // تحميل المهام من AsyncStorage عند بدء التشغيل
  useEffect(() => {
    const loadTodos = async () => {
      try {
        const storedTodos = await AsyncStorage.getItem('todos');
        if (storedTodos) {
          setTodos(JSON.parse(storedTodos));
        }
      } catch (error) {
        console.error('Error loading todos:', error);
      }
    };
    loadTodos();
  }, []);

  // حفظ المهام عند التغيير
  useEffect(() => {
    const saveTodos = async () => {
      try {
        await AsyncStorage.setItem('todos', JSON.stringify(todos));
      } catch (error) {
        console.error('Error saving todos:', error);
      }
    };
    saveTodos();
  }, [todos]);

  const addTodo = () => {
    if (title.trim() === '' || description.trim() === '') {
      alert('Please enter a title and description');
      return;
    }

    const nextId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
    const newTodo = { id: nextId, title, description, completed: false };

    setTodos([...todos, newTodo]);
    setTitle('');
    setDescription('');
  };

  const toggleComplete = (id) => {
    setFlag((prevFlag) => !prevFlag);
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };


  const filteredTodos = todos.filter(todo =>
    status === 'All' ? true : status === 'Done' ? todo.completed : !todo.completed
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.appHeader}>To-Do List</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter description"
        value={description}
        onChangeText={setDescription}
      />

      <TouchableOpacity style={styles.submitBtn} onPress={addTodo}>
        <Text style={styles.text}>Add</Text>
      </TouchableOpacity>

      <View style={styles.dividerLine} />

      <View style={styles.filterContainer}>
        <TouchableOpacity style={styles.filterBtn} onPress={() => setStatus('All')}>
          <Text style={status === 'All' ? styles.activeFilterText : styles.filterText}>All</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.filterBtn} onPress={() => setStatus('InProgress')}>
          <Text style={status === 'InProgress' ? styles.activeFilterText : styles.filterText}>
            InProgress
          </Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.filterBtn} onPress={() => setStatus('Done')}>
          <Text style={status === 'Done' ? styles.activeFilterText : styles.filterText}>Done</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.dividerLine} />

      <FlatList
        data={filteredTodos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={[styles.todoItem, item.completed && styles.completed]}>
            <TouchableOpacity onPress={() => toggleComplete(item.id)}>

              <Text style={[styles.todoText, item.completed && styles.completedText]}>

                {flag ? <AntDesign style={[styles.check]} name="checkcircleo" size={24} color="red" /> :
                  <AntDesign style={[styles.check]} name="checkcircle" size={24} color="black" />}
                {item.title} - {item.description}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => deleteTodo(item.id)}>
              <Text style={styles.deleteButton}>
                <AntDesign name="delete" size={24} color="green" />
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
      
       <TouchableOpacity style={styles.submitBtn} onPress={() => navigation.navigate('Details')}>
         <Text style={styles.text}>Go to Details</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: 'center',
    backgroundColor: "#fff",
    alignItems: "center",
    paddingBottom: 20,
  },
  appHeader: {
    fontSize: 20,
    marginTop: 20,
    textTransform: 'uppercase',
  },
  input: {
    borderWidth: 1,
    borderColor: "#aeaeae",
    width: "90%",
    marginVertical: 10,
    height: 50,
    padding: 10,
    borderRadius: 5,
  },
  submitBtn: {
    width: '90%',
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 10,
  },
  text: {
    color: "white",
    fontSize: 18,
    textTransform: "uppercase",
  },
  dividerLine: {
    height: 1,
    backgroundColor: "#aeaeae",
    marginVertical: 15,
    width: "90%",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
  },
  filterBtn: {
    width: "30%",
    backgroundColor: "#ffffff",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "black",
  },
  filterText: {
    // width: "90%",
    color: "black",
    fontSize: 15,
  },
  activeFilterText: {
    color: "white",
    width: "100%",
    height: '100%',
    fontSize: 15,
    backgroundColor: "black",
    padding: 10,
    borderRadius: 10,
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: 15,
    marginVertical: 5,
    borderRadius: 8,
    width: "96%",
    alignSelf: "center",
  },
  todoText: {
    fontSize: 18,
  },
  completed: {
    width: "96%",
    alignSelf: "center",
    backgroundColor: 'rgba(255, 0, 21, 0.3)',
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: 'black',
  },
  deleteButton: {
    fontSize: 18,
    color: 'red',
  },
  check: {

    // flexDirection: "row",
    justifyContent: "space-between",

    // alignSelf: "center",
    fontSize: 18,
    color: 'red',
    marginStart: 10,
  },
});

