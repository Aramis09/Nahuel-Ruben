import axios from 'axios';

import { getAllPlatforms, getPlatformByID, errorMsg } from "../reducer/platformReducer";
//import { LIST_PLATFORMS } from "../../utils/constants";


//Obtener listado de plataformas. El objetivo principal es buscar la lista completa.
export const getListPlatforms =  (name: string) => async (dispatch: any) => {
    let listPlatforms: object[];
    try{
        listPlatforms = (await axios.get(`http://localhost:3001/platforms?name=${name}`)).data;
        dispatch(getAllPlatforms(listPlatforms));
    }catch(error){
        dispatch(errorMsg("Ocurrio un error...intentelo mas tarde"));
        console.log("Exception - getListPlatforms: " + error);
    };
};

//Obtener una plataforma por id. Esta existe pero no sabemos si va a tener uso.
export const getPlatByID =  (id: string) => async (dispatch: any) => {
    let platform: {};
    try{
        platform = (await axios.get(`http://localhost:3001/platforms/${id}`)).data;
        dispatch(getPlatformByID(platform));
    }catch(error){
        dispatch(errorMsg("Ocurrio un error...intentelo mas tarde"));
        console.log("Exception - getPlatByID: " + error);
    };
};

