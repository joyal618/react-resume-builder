import {UPDATE_USER_NAME} from "./ContentTypes"
import {UPDATE_USER_EMAIL} from "./ContentTypes"
import {UPDATE_USER_ADDRESS} from "./ContentTypes"
import {UPDATE_USER_PHONE_NUMBER} from "./ContentTypes"
import {UPDATE_USER_EDUCATION} from "./ContentTypes"
import {UPDATE_USER_EXPERIENCE} from "./ContentTypes"


export const updateUserName = () => {
    return {
        type: UPDATE_USER_NAME,
    }
}

export const updateUserEmail = () => {
    return {
        type: UPDATE_USER_EMAIL,
    }
}

export const updateUserAddress = () => {
    return {
        type: UPDATE_USER_ADDRESS,
    }
}

export const updateUserPhoneNumber = () => {
    return {
        type: UPDATE_USER_PHONE_NUMBER,
    }
}

export const updateUserEducation = () => {
    return {
        type: UPDATE_USER_EDUCATION,
    }
}

export const updateUserExperience = () => {
    return {
        type: UPDATE_USER_EXPERIENCE,
    }
}