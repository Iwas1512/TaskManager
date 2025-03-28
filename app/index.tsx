import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Alert,
  LinearGradient,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Task } from '../components/Task';
import { Ionicons } from '@expo/vector-icons';

interface TaskItem {
  id: string;
  text: string;
  completed: boolean;
}

export default function App() {
  const [tasks, setTasks] = useState<TaskItem[]>([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([
        ...tasks,
        {
          id: Date.now().toString(),
          text: newTask.trim(),
          completed: false,
        },
      ]);
      setNewTask('');
    }
  };

  const toggleTask = (id: string) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleSubmit = () => {
    if (newTask.trim()) {
      addTask();
    } else {
      Alert.alert('Error', 'Please enter a task description');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <StatusBar style="light" />
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.title}>Task Manager</Text>
          <Text style={styles.subtitle}>By Anlil Iwas</Text>
          <View style={styles.decorativeLine} />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add a new task..."
          placeholderTextColor="#666"
          value={newTask}
          onChangeText={setNewTask}
          onSubmitEditing={handleSubmit}
          returnKeyType="done"
        />
        <TouchableOpacity 
          style={styles.addButton} 
          onPress={handleSubmit}
          activeOpacity={0.7}
        >
          <Ionicons name="add-circle" size={44} color="#4A90E2" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Task
            id={item.id}
            text={item.text}
            completed={item.completed}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        )}
        style={styles.list}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    paddingTop: 60,
    paddingBottom: 20,
    backgroundColor: '#4A90E2',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 8,
  },
  headerContent: {
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  subtitle: {
    fontSize: 16,
    color: '#E8F1FC',
    marginTop: 5,
    fontStyle: 'italic',
  },
  decorativeLine: {
    width: 40,
    height: 4,
    backgroundColor: '#fff',
    borderRadius: 2,
    marginTop: 15,
    opacity: 0.8,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: '#fff',
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  input: {
    flex: 1,
    height: 50,
    backgroundColor: '#f8f9fa',
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 16,
    marginRight: 10,
    color: '#333',
  },
  addButton: {
    padding: 5,
    transform: [{ scale: 1.1 }],
  },
  list: {
    flex: 1,
    marginTop: 10,
  },
  listContent: {
    padding: 20,
    paddingTop: 10,
  },
}); 