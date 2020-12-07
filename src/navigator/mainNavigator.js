import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList182921Navigator from '../features/ArticleList182921/navigator';
import ArticleList182920Navigator from '../features/ArticleList182920/navigator';
import ArticleList182919Navigator from '../features/ArticleList182919/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList182921: { screen: ArticleList182921Navigator },
ArticleList182920: { screen: ArticleList182920Navigator },
ArticleList182919: { screen: ArticleList182919Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
