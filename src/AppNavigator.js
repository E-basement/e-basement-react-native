import {createStackNavigator}  from "react-navigation-stack";
import Menu from "./Menu";
import Pickup from "./Pickup";

const AppNavigation = createStackNavigator({
  Menu: { screen:Menu },
  Pickup: { screen:Pickup },
});
export default AppNavigation;