const initialState = {
    item: ""
};

export default function testReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_ITEM':
            return {
                ...state,
                item: action.item
            };
        default:
            return state;
    }
};