import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Heading = () => {
	return (
		<View style={styles.header}>
			<Text style={styles.headerText}> Todos</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	header: {
		marginTop: 0
	},
	headerText: {
		textAlign: 'center',
		fontSize: 72,
		color: '#000'
		// fontWeight: 100
	}
});

export default Heading;
