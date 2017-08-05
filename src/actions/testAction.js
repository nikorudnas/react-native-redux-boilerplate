export function testFunction(item) {
    console.log(item);
    return {
        type: 'SET_ITEM',
        item
    };
};