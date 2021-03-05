import {UPADTE_CONTENT} from "./ContentTypes"

const initialState = {
    userName: "",
    userEmail: "",
    userAddress:"",
    userPhoneNumber: "",
    userEducation: [{institueName:"",passOutYear:"", degree:""}],
    userExperience: [{companyName: "", numberOfYears: "", designation:""}],

}

const contentReducer = (state = initialState,action) => {
    switch (action.type){
        case UPDATE_USER_NAME: return{
            ...state,
            userName: action.payload
        }
        case UPDATE_USER_EMAIL: return{
            ...state,
            userEmail: action.payload
        }
        case UPDATE_USER_ADDRESS: return{
            ...state,
            userAddress: action.payload
        }
        case UPDATE_USER_PHONE_NUMBER: return{
            ...state,
            userPhoneNumber: action.payload
        }
        case UPDATE_EDUCATION: return{
            ...state,
            userEducation: [...state.userEducation, action.payload]
        }
        case UPDATE_USER_EXPERIENCE: return{
            ...state,
            userExperience: [...state.userExperience, action.payload]
        }
    }
}