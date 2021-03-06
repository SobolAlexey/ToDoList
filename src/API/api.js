import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: { "API-KEY": "12e3371e-bbe3-4f4e-be58-95f1ddd21b3e" }
})
export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count${pageSize}`)
        .then(response => {
            return response.data;
        })
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },

}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
    },
  putPhoto(photoFile) {
      const formData = new FormData();
      formData.append('image', photoFile)
        return instance.put(`profile/photo`, formData , {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}
export const authAPI = {
me() {
    return instance.get(`auth/me`)
},
login(email, password, rememberMe = false, captcha = null) {
    return instance.post(`auth/login`, {email, password, remeberMe, captcha})
},
logout() {
    return instance.delete(`auth/login`)
}
};

