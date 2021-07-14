import axiosService from './../utils/axiosService';

const AND_POINT = "users";

export const fetchUserData = () => {
    return axiosService(AND_POINT);
}

export const registerUser = (user) => {
    return axiosService(AND_POINT, "POST", user);
}