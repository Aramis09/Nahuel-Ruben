import axios from 'axios';

import {getAllProducts, getProductByID, errorMsg, carouselPicks, getProductByPlatform} from "../reducer/productReducer";
//import { LIST_PRODUCTS, LIST_PRODUCTS_BY_PLATFORMS } from "../../utils/constants";


//Obtener listado de productos, tambien puede buscar por nombre.    
export const getListProducts =  (name: string) => async (dispatch: any) => {
    let listProducts: object[];
    try{
        listProducts = (await axios.get(`http://localhost:3001/products?name=${name}`)).data;
        dispatch(getAllProducts(listProducts));
    }catch(error){
        dispatch(errorMsg("Ocurrio un error...intentelo mas tarde"));
        console.log("Exception - getListProducts: " + error);
    };
};

//Obtener detalle de producto;
//agreguenle el nombre getProductByIdAction <-------
export const getProdByID =  (id: string) => async (dispatch: any) => {
    let product: {};
    try{
        product = (await axios.get(`http://localhost:3001/products/${id}`)).data;
        dispatch(getProductByID(product));
    }catch(error){
        dispatch(errorMsg("Ocurrio un error...intentelo mas tarde"));
        console.log("Exception - getProdByID: " + error);
    };
};


//Obtener listado de productos para el carrusel;ARAMIS: HAY QUE SELECCIONAR LOS  QUE MAS RATING TIENEN.
export const getListProductsCarrusel =  () => async (dispatch: any) => {
    var arr: number[]=[]
    for(var i:number=0; i < 3; i++){
        arr.push(Math.floor(Math.random()*74))
    }
    try{
        var all = (await axios.get(`http://localhost:3001/products`)).data;

        dispatch(carouselPicks([all[arr[0]], all[arr[1]], all[arr[2]]]));
    }catch(error){
        dispatch(errorMsg("Ocurrio un error...intentelo mas tarde"));
        console.log("Exception - listProducts: " + error);
    }
}

