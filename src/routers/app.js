import { StackNavigator, TabNavigator } from "react-navigation"
import { headerOptions, RouteConfigs, TabNavigatorConfig, StackNavigatorConfig } from "../components/Navigation/config"
import { ReduxDemo, ReduxA, DemoList, Saga} from "./index"

const TabBarText = {
  home: "首页",
  my: "我的",
}

const Nav = TabNavigator(
  {
    Home: {
      screen: DemoList,
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
    ReduxDemo: {
      screen: ReduxDemo,
      navigationOptions: props => {
        return headerOptions({
          ...props,
          ...{
            back: true,
          },
        })
      },
    },
    Saga: {
      screen: Saga,
      navigationOptions: props => {
        return headerOptions({
          ...props,
          ...{
            back: true,
          },
        })
      },
    },
    ReduxA: {
      screen: ReduxA,
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
