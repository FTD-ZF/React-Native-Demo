import { StackNavigator, TabNavigator } from "react-navigation"
import { headerOptions, RouteConfigs, TabNavigatorConfig, StackNavigatorConfig } from "../components/Navigation/config"
import { Home, Test, DemoList} from "./index"

const TabBarText = {
  home: "首页",
  my: "我的",
}

const Nav = TabNavigator(
  {
    Home: {
      screen: Home,
      path: "Home",
      navigationOptions: props => {
        return RouteConfigs({
          iconame: "ios-home",
          label: TabBarText.home,
          props,
        })
      },
    },
    My: {
      screen: DemoList,
      path: "My",
      navigationOptions: props => {
        return RouteConfigs({
          iconame: "ios-home",
          label: TabBarText.my,
          props,
        })
      },
    },
  },
  TabNavigatorConfig({
    initialRouteName: "Home",
  }),
)

const Routers = StackNavigator(
  {
    Nav: {
      screen: Nav,
    },
    Test: {
      screen: Test,
      navigationOptions: props => {
        return headerOptions({
          ...props,
          ...{
            back: true,
          },
        })
      },
    },
  },

  StackNavigatorConfig({
    initialRouteName: "Nav",
  }),
)
export default Routers
