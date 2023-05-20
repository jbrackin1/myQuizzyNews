import {createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../components/Home'
import CountDownPage from '../components/CountDownPage';


const screens = {
    Home: {
        screen: Home
    },
    CountDownPage: {
        screen: CountDownPage
    }
}

const HomeStack = createStackNavigator(screens)

export default createAppContainer(HomeStack);