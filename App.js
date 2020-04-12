import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Heading from './heading';
import Input from './input';
import Button from './button';
import TodoList from './todolist';
import TabBar from './tabbar';

let todoIndex = 0;

class App extends Component {
	state = {
		inputValue: '',
		todos: [],
		type: 'All'
	};
	inputChange = (inputValue) => {
		console.log('Input Value :', inputValue);
		this.setState({
			inputValue
		});
	};
	submitTodo = () => {
		if (this.state.inputValue.match(/^\s*$/)) {
			return;
		}
		let todo = {
			title: this.state.inputValue,
			todoIndex: todoIndex,
			complete: false
		};
		todoIndex++;
		this.state.todos.push(todo);
		this.setState({ todos: this.state.todos, inputValue: '' }, () => {
			console.log('State : ', this.state);
		});
	};

	toggleComplete = (todoIndex) => {
		let { todos } = this.state;
		todos.forEach((todo) => {
			if (todo.todoIndex === todoIndex) {
				todo.complete = !todo.complete;
			}
		});
		this.setState({ todos });
	};

	deleteTodo = (todoIndex) => {
		let { todos } = this.state;
		todos = this.state.todos.filter((todo) => {
			return todo.todoIndex !== todoIndex;
		});
		this.setState({ todos });
	};
	setType = (type) => {
		this.setState({ type });
	};
	render() {
		const { inputValue, todos, type } = this.state;
		return (
			<View style={styles.container}>
				<ScrollView style={styles.content}>
					<Heading />
					<Input inputValue={inputValue} inputChange={(text) => this.inputChange(text)} />
					<Button submitTodo={this.submitTodo} />
					<TodoList
						type={type}
						todos={todos}
						deleteTodo={this.deleteTodo}
						toggleComplete={this.toggleComplete}
					/>
				</ScrollView>
				<TabBar type={type} setType={this.setType} />
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f5f5f5'
	},
	content: {
		flex: 1,
		paddingTop: 60
	}
});
export default App;
