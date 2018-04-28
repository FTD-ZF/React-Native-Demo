import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { add, del, reset } from '../../../infrastructure/actions/demo/redux';

@connect(
    state => ({ counter: state.redux })
)
export default class Index extends Component {

    static navigationOptions = {
        headerTitle: "Home",
    }
    reset() {
        this.props.dispatch(reset());
    }

    onAdd() {
        this.props.dispatch(add());
    }

    onDelete() {
        this.props.dispatch(del());
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.counter}>{this.props.counter.count}</Text>
                <TouchableOpacity style={styles.reset} onPress={() => this.reset()}>
                    <Text>归零</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.start} onPress={() => this.onAdd()}>
                    <Text>加1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.stop} onPress={() => this.onDelete()}>
                    <Text>减1</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    counter: {
        fontSize: 50,
        marginBottom: 70
    },
    reset: {
        margin: 10,
        backgroundColor: 'yellow'
    },
    start: {
        margin: 10,
        backgroundColor: 'yellow'
    },
    stop: {
        margin: 10,
        backgroundColor: 'yellow'
    }
})


// const mapStateToProps = state => ({
//     counter: state.counter
// })

// export default connect(mapStateToProps)(Home);



// import { StyleSheet, Text, View } from 'react-native';
// import React, { Component } from 'react';

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
// });

// export default class Home extends Component {
//   render() {
//     return (
//       <View style={styles.container} >
//         <Text style={styles.welcome}>
//           Profile Screen
//         </Text>
//       </View>
//     );
//   }
// }
