import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import styles from './style.js';

const Profile = (props) => {
    return (
        <View style={styles.container}>
            <Text>Profile</Text>
        </View>
    )
}

const mapStateToProps = null;
const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Profile);