import { useNavigation } from '@react-navigation/native';
import {View,Text, ScrollView, Button} from 'react-native';
import { TableView,Section,Cell } from "react-native-tableview-simple";

// const HomescreenCell=[
//     {
//         title="Joe's Gelato"
//         tagline="Desert, Ice cream, £££"
//         eta="10-30"
//         imgUri={require('./images/ice-cream-header.jpg')}       
//     }
// ]
const Restarant = () => {
    const navigation=useNavigation()
    return (
        <ScrollView>
            <TableView>
                <Section title="" hideSeparator sectionTintColor={"#ccc"}>
                    <Cell title="first cell">
                        <Button onPress={()=>navigation.navigate('menu')} title='Click me'>
                        </Button>
                        </Cell>
                </Section>
            </TableView>
        </ScrollView>
    );
};

export default Restarant;