import Main from "../containers/Main";
import Alt from "../containers/Alt";

const Routes = {
  Main: {
      screen: Main,
      navigationOptions: {
      title: 'Example Navbar'
    }
  },
  Alt: {
      screen: Alt,
      navigationOptions: {
      title: 'Alt'
    }
  }
};

export default Routes;
