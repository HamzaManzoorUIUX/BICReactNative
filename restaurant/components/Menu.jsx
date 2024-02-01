import {View,Text, Button} from 'react-native';

const Menu = ({navigation}) => {
    return (
        <View>
            <Text>
                Restarant
            </Text>
            <Button onPress={()=>navigation.navigate('restarant')} title='Click me'>
                        </Button>
        </View>
    );
};

export default Menu;