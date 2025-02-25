
import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

const Details = () => {
  const todos = useSelector((state) => state.todo.todos);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>detils tasks</Text>
      {todos.length === 0 ? (
        <Text style={styles.emptyText}>nothing add yet</Text>
      ) : (
        <FlatList
          data={todos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={[styles.todoItem, ]}>
              <Text style={[styles.todoText, item.completed && styles.completedText]}>
                {item.title}
              </Text>
              <Text style={[styles.description, item.completed && styles.completedText]}>
                 {item.description}
              </Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    flex: 1,
    backgroundColor: "#f8f9fa", 
    padding: 20,
    justifyContent:"center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
  emptyText: {
    fontSize: 18,
    color: "#777",
    textAlign: "center",
    marginTop: 50,
  },
  todoItem: {
    width: "100%",
    backgroundColor: "#ffffff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, 
  },
  todoText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    color: "#666",
  },
  completed: {
    backgroundColor: "#d4edda",
    borderLeftWidth: 5,
    borderLeftColor: "#28a745", 
  },
  completedText: {
    textDecorationLine: "line-through",
    color: "#555",
  },
});
export default Details;
