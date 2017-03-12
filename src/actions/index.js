export const selectLibrary = (libraryId) => {
    return {
        type: 'select_library',
        payload: libraryId
    };
};

export const unSelectLibrary = () => {
    return {
        type: 'un_select_library'
    };
};
