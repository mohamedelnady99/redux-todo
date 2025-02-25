import { StyleSheet } from "react-native";
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

    
    justifyContent: "space-between",

    
    fontSize: 18,
    color: 'red',
    marginStart: 10,
  },
});

export default styles;