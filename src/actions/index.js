const selectedCategory = song => {
    return {
        type : 'CATEGORY_SELECTED',
        payload : song
    };
};
export default selectedCategory;