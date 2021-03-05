import {UPDATE_USER_NAME} from "./ContentTypes"
import {UPDATE_USER_EMAIL} from "./ContentTypes"
import {UPDATE_USER_ADDRESS} from "./ContentTypes"
import {UPDATE_USER_PHONE_NUMBER} from "./ContentTypes"
import {UPDATE_USER_EDUCATION} from "./ContentTypes"
import {UPDATE_USER_EXPERIENCE} from "./ContentTypes"


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

export const updateUserEducation = (payload) => {
    return {
        type: UPDATE_USER_EDUCATION,
        payload
    }
}

export const updateUserExperience = (payload) => {
    return {
        type: UPDATE_USER_EXPERIENCE,
        payload,
    }
}