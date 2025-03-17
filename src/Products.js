const product1Imgs = require.context('./images/1', true);
const product1ImgList = product1Imgs.keys().map(image => product1Imgs(image));

const product2Imgs = require.context('./images/2', true);
const product2ImgList = product2Imgs.keys().map(image => product2Imgs(image));

const product3Imgs = require.context('./images/3', true);
const product3ImgList = product3Imgs.keys().map(image => product3Imgs(image));

const product4Imgs = require.context('./images/4', true);
const product4ImgList = product4Imgs.keys().map(image => product4Imgs(image));

const product5Imgs = require.context('./images/5', true);
const product5ImgList = product5Imgs.keys().map(image => product5Imgs(image));

const product6Imgs = require.context('./images/6', true);
const product6ImgList = product6Imgs.keys().map(image => product6Imgs(image));

const product7Imgs = require.context('./images/7', true);
const product7ImgList = product7Imgs.keys().map(image => product7Imgs(image));

const PRODUCTS = [
    {
        id: 1,
        productName: "Geometric Vase",
        price: 30.00,
        productImages: product1ImgList,
    },
    {
        id: 2,
        productName: "Bowl with Fish",
        price: 15.00,
        productImages: product2ImgList,
    },
    {
        id: 3,
        productName: "Leaf Bowl",
        price: 20.00,
        productImages: product3ImgList,
    },
    {
        id: 4,
        productName: "Gourd Vase",
        price: 20.00,
        productImages: product4ImgList,
    },
    {
        id: 5,
        productName: "Circular Vase",
        price: 15.00,
        productImages: product5ImgList,
    },
    {
        id: 6,
        productName: "Small Pot",
        price: 15.00,
        productImages: product6ImgList,
    },
    {
        id: 7,
        productName: "Mug with Handle",
        price: 15.00,
        productImages: product7ImgList,
    },
];

export default PRODUCTS;