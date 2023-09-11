import actionTypes from './actionType'
import {getAllUserService, addNewUserService} from '../../service/UserService'
import { toast } from 'react-toastify'

export const getAllUsers = (page) => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllUserService(page)
            if(res && res.status === 'OK') {
                dispatch(fetchAllUserSuccess(res))
            }else {
                dispatch(fetchGenderFailed())
            }
        } catch (error) {
            dispatch(fetchGenderFailed())
            console.log('Error get all users: '. error);
        }
    }
}

export const fetchAllUserSuccess = (usersData) => ({
    type: actionTypes.FETCH_ALL_USER_SUCCESS,
    data: usersData
})

export const fetchGenderFailed = () => ({
    type: actionTypes.FETCH_ALL_USER_FAILED
})
