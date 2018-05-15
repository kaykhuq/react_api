var initialState = [
    {
        id:1,
        name:'Iphone',
        price:500,
        status:true
    },
    {
        id:1,
        name:'Samsung',
        price:200,
        status:false
    },
    {
        id:1,
        name:'Oppo',
        price:300,
        status:true
    },
];

const products = (state = initialState, action) => {
    switch (action.type) {
        default: return [...state];
    }
}
export default products;