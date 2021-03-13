import { UPDATE_USER_NAME } from "./ContentTypes";
import { UPDATE_USER_EMAIL } from "./ContentTypes";
import { UPDATE_USER_ADDRESS } from "./ContentTypes";
import { UPDATE_USER_PHONE_NUMBER } from "./ContentTypes";
import { UPDATE_USER_EDUCATION } from "./ContentTypes";
import { UPDATE_USER_EXPERIENCE } from "./ContentTypes";
import { ADD_USER_EDUCATION } from "./ContentTypes";
import { ADD_USER_EXPERIENCE } from "./ContentTypes";
import { ADD_USER_SKILLS } from "./ContentTypes";
import { REMOVE_USER_EDUCATION } from "./ContentTypes";
import { REMOVE_USER_EXPERIENCE } from "./ContentTypes";


const initialState = {
    userName: "",
    userEmail: "",
    userAddress: "",
    userPhoneNumber: "",
    userEducation: [{ institueName: "", passOutYear: "", degree: "" }],
    userExperience: [{ companyName: "", numberOfYears: "", designation: "" }],
    userSkills: [],
}

const contentReducer = (state = initialState, action) => {
    let name = action.name;
    let key = action.key;
    switch (action.type) {
        case UPDATE_USER_NAME: return {
            ...state,
            userName: action.payload,
        }

        case UPDATE_USER_EMAIL: return {
            ...state,
            userEmail: action.payload,
        }

        case UPDATE_USER_ADDRESS: return {
            ...state,
            userAddress: action.payload,
        }

        case UPDATE_USER_PHONE_NUMBER: return {
            ...state,
            userPhoneNumber: action.payload,
        }

        case UPDATE_USER_EDUCATION:
            const userEducation = state.userEducation.map((each, i) => {
                if (i === key) {
                    each[name] = action.payload;
                }
                return each
            })
            return {
                ...state,
                userEducation: userEducation,
            }

        case UPDATE_USER_EXPERIENCE:
            const userExperience = state.userExperience.map((each, i) => {
                if (i === key) {
                    each[name] = action.payload;
                }
                return each
            })
            return {
                ...state,
                userExperience: userExperience,
            }


        case ADD_USER_EDUCATION:
            const userEducationCopy = [...state.userEducation];
            userEducationCopy.push({ institueName: "", passOutYear: "", degree: "" })
            return {
                ...state,
                userEducation: userEducationCopy,
            }

        case ADD_USER_EXPERIENCE:
            const userExperienceCopy = [...state.userExperience];
            userExperienceCopy.push({ companyName: "", numberOfYears: "", designation: "" });
            return {
                ...state,
                userExperience: userExperienceCopy,
            }

        case ADD_USER_SKILLS:
            const userSkillsCopy = [...state.userSkills];
            console.log(action.payload)
            if (action.payload !== undefined)
                userSkillsCopy.push(action.payload);
            return {
                ...state,
                userSkills: userSkillsCopy,
            }

        case REMOVE_USER_EDUCATION:
            const userEducationCpy = [...state.userEducation];
            userEducationCpy.pop();
            return {
                ...state,
                userEducation: userEducationCpy,
            }

        case REMOVE_USER_EXPERIENCE:
            const userExperienceCpy = [...state.userExperience];
            userExperienceCpy.pop();
            return {
                ...state,
                userExperience: userExperienceCpy,
            }
        default: return state;
    }
}

export default contentReducer;