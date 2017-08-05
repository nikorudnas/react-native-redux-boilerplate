import {AppNavigator} from '../navigation';
import { NavigationActions } from 'react-navigation';

const NavReducer = (state, action) => {
    let newState;
    switch (action.type) {
        case 'goToMain':
            newState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'Main' }),
                state
            );
            break;
         case 'goToAlt':
            newState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'Alt' }),
                state
            );
            break;
        default:
            newState = AppNavigator.router.getStateForAction(action, state);
            break;
    }

    return newState || state;
};

export default NavReducer;
