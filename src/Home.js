
import AntDesign from '@expo/vector-icons/AntDesign';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from "@react-navigation/native";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo, toggleComplete } from '../Redux/todoslise';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  TextInput,
  FlatList
} from 'react-native';
import styles from './styles';

export default function Home() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos); // جلب المهام من Redux
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('All');

  const handleAddTodo = () => {
    if (title.trim() === '' || description.trim() === '') {
      alert('Please enter a title and description');
      return;
    }
    dispatch(addTodo({ title, description }));
    setTitle('');
    setDescription('');
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

      <TouchableOpacity style={styles.submitBtn} onPress={handleAddTodo}>
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
            <TouchableOpacity onPress={() => dispatch(toggleComplete(item.id))}>
              <Text style={[styles.todoText, item.completed && styles.completedText]}>
                {item.title} - {item.description}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => dispatch(removeTodo(item.id))}>
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
