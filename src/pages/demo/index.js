import { StyleSheet, Text, View, FlatList } from 'react-native';
import React, { Component } from 'react';
import { Dimensions, Button, Alert } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons';
import { AppColors, AppStyles } from '../../commons/styles';

export default class Test extends Component {
    static navigationOptions = {
        headerTitle: "Home",
    }
    // 构造
    constructor(props) {
        super(props);
        console.log(AppStyles.line);
    }
    render() {
        var data = ['redux', 'redux-saga'];
        return (
            <View style={styles.container}>
                <FlatList
                    ref={(flatList) => this._flatList = flatList}
                    ListHeaderComponent={this.header}
                    ItemSeparatorComponent={this.separator}
                    renderItem={this.renderCell}
                    onEndReachedThreshold={0}
                    data={data}>
                </FlatList>
            </View>
        );
    }

    renderCell = (item) => {
        return (
            <View style={styles.cell}>
                <View style={styles.txtView}>
                    <Text
                        style={styles.txt}
                        onPress={() => this.clickCell(item.index)}>
                        {item.item}
                    </Text>
                </View>
                <View style={styles.icon}>
                    <Icon name="ios-arrow-forward-outline" size={30} color="black" style={{ marginRight: 12 }} />
                </View>
            </View>
        )
    }

    clickCell(index){
        switch (index) {
            case 0:
            this.props.navigation.navigate('ReduxDemo');
            case 1:
            this.props.navigation.navigate('ReduxDemo');
            case 2:
            this.props.navigation.navigate('ReduxDemo');
          }
    }

    header = () => {
        return <View style={{ height: 10 }}></View>;
    }

    separator = () => {
        return <View style={AppStyles.line} />;
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.background
    },
    cell: {
        flexDirection: 'row',
        height: 44,
        backgroundColor: 'white',

    },
    txt: {
        textAlignVertical: 'center',
        color: 'black',
        fontSize: 20,
        marginLeft: 12,
    },
    txtView: {
        justifyContent: 'center',
    },
    icon: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
    }

})
