import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TodoButton from './todoButton';

const Todo = (props) => {
	return (
		<View style={styles.todoContainer}>
			<Text style={styles.todoText}>{props.todo.title}</Text>
			<View style={styles.buttons}>
				<TodoButton
					name="Done"
					complete={props.todo.complete}
					onPress={() => props.toggleComplete(props.todo.todoIndex)}
				/>
				<TodoButton
					name="Delete"
					complete={props.todo.complete}
					onPress={() => props.deleteTodo(props.todo.todoIndex)}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	todoContainer: {
		marginLeft: 20,
		marginRight: 20,
		backgroundColor: '#ffffff',
		borderTopWidth: 1,
		borderRightWidth: 1,
		borderLeftWidth: 1,
		borderColor: '#ededed',
		paddingLeft: 14,
		paddingTop: 7,
		paddingBottom: 7,
		shadowOpacity: 0.2,
		shadowRadius: 3,
		shadowColor: '#000000',
		shadowOffset: { width: 2, height: 2 },
		flexDirection: 'row',
		alignItems: 'center',
		marginVertical: 5
	},
	todoText: {
		fontSize: 17,
		padding: 5
	},
	buttons: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center'
	}
});
export default Todo;
