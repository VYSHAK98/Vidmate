import { BASE_URL } from "./baseUrl";
import { commonApi } from "./commonStructure";


// Add video 
export const addVideo = async (body) => {
    return await commonApi('POST', `${BASE_URL}/videos`, body)
}


// get videos
export const getVideo = async () => {
    return await commonApi('GET', `${BASE_URL}/videos`, {})
}

// remove video
export const removeVideo = async (id) => {
    return await commonApi('DELETE', `${BASE_URL}/videos/${id}`, {})
}

// add category
export const addCategory = async (body) => {
    return await commonApi('POST', `${BASE_URL}/categories`, body)
}

// GET categories
export const getCategories = async () => {
    return await commonApi('GET', `${BASE_URL}/categories`, {})
}

//delete category
export const removeCategory = async (id) => {
    return await commonApi('DELETE', `${BASE_URL}/categories/${id}`, {})
}

//add  history
export const addHistory = async (body) => {
    return await commonApi('POST', `${BASE_URL}/histories`, body)
}

//view history
export const getHistory = async () => {
    return await commonApi('GET', `${BASE_URL}/histories`, {})
}

// delete history
export const removeHistory = async (id) => {
    return await commonApi('DELETE', `${BASE_URL}/histories/${id}`, {})
}

//Drag and Drop

// to get single video
export const getSingleVideo= async (id)=>{
    return await commonApi('GET', `${BASE_URL}/videos/${id}`,{})
}

//update category
export const updateCategory = async (id,body)=>{
    return await commonApi('PUT', `${BASE_URL}/categories/${id}`,body)
}