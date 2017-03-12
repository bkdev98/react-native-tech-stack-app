export default (state = null, action) => {
    switch (action.type) {
        case 'select_library':
            return action.payload; 
        case 'un_select_library':
            return null;
        default:
            return state;
    }
};
