import {UPDATE_USER_NAME} from "./ContentTypes";
import {UPDATE_USER_EMAIL} from "./ContentTypes";
import {UPDATE_USER_ADDRESS} from "./ContentTypes";
import {UPDATE_USER_PHONE_NUMBER} from "./ContentTypes";
import {UPDATE_USER_EDUCATION} from "./ContentTypes";
import {UPDATE_USER_EXPERIENCE} from "./ContentTypes";
import {ADD_USER_EDUCATION} from "./ContentTypes";
import {ADD_USER_EXPERIENCE} from "./ContentTypes";
import {REMOVE_USER_EDUCATION} from "./ContentTypes";
import {REMOVE_USER_EXPERIENCE} from "./ContentTypes";

export const updateUserName = (payload) => {
    return {
        type: UPDATE_USER_NAME,
        payload,
    }
}

export const updateUserEmail = (payload) => {
    return {
        type: UPDATE_USER_EMAIL,
        payload,
    }
}

export const updateUserAddress = (payload) => {
    return {
        type: UPDATE_USER_ADDRESS,
        payload,
    }
}

export const updateUserPhoneNumber = (payload) => {
    return {
        type: UPDATE_USER_PHONE_NUMBER,
        payload,
    }
}

export const updateUserEducation = (key,name,payload) => {
    console.log(name)
    return {
        type: UPDATE_USER_EDUCATION,
        key,
        name,
        payload    
    }
}

export const updateUserExperience = (key,name,payload) => {
    return {
        type: UPDATE_USER_EXPERIENCE,
        key,
        name,
        payload
    }
}



export const addUserExperience = () => {
    return{
        type: ADD_USER_EXPERIENCE,
    }   
}

export const addUserEducation = () => {
    return{
        type: ADD_USER_EDUCATION,
    }   
}

export const removeUserEducation = () => {
    return{
        type: REMOVE_USER_EDUCATION,
    }   
}

export const removeUserExperience = () => {
    return{
        type: REMOVE_USER_EXPERIENCE,
    }   
}