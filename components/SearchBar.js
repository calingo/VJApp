import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { Button } from 'react-native-elements';

class SearchBar extends Component {

    state = {
        term: '3iB1pZiEjWI'
      };
    
    render() {
        const {
            containerSearch,
            containerTextStyle,
            buttonStyle
          } = styles;
        
        return (
            <View style={containerSearch}>
                <TextInput 
                    style={containerTextStyle}
                    onChangeText={term => this.setState({ term })}
                    value={this.state.term}  
                    placeholder={"youtube search"}
                    placeholderTextColor={"white"}
                />
                <Button 
                    buttonStyle={buttonStyle}
                    title={this.props.loading ? "Loading" : "Search"}
                    onPress={() => this.props.onPressSearch(this.state.term)}
                />
            </View>
        ); 
    }
}

const styles = {
    container: {
      flex: 1,
      backgroundColor: 'black' ,
    },
    containerSearch: {
      flexDirection: 'row',
      margin: 18
    },
    containerTextStyle: {
      flex: 1,
      color: 'white',
      borderColor: 'gray',
    },
    buttonStyle: {
      height: 44,
      marginBottom: 8
    }
};


export default SearchBar;