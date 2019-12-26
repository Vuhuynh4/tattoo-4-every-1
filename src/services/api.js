import axios from 'axios'
// import {
//     AJAX_ROOT, ROOT_URL, APP_REFRESH_PAGE, APP_LOGOUT_PAGE, ERRORCODE_TOKEN_EXPIRED, ERRORCODE_UNAUTHORIZED,
//     ERRORCODE_CURL
// } from '../utils/constants'
import { toast } from 'react-toastify'
import _ from 'lodash'

// const refreshToken = ()=> axios.post(APP_REFRESH_PAGE)
// const logout = ()=>{
//     const goHome = ()=>{
//         window.location.replace(ROOT_URL)
//     }
//     axios.post(APP_LOGOUT_PAGE).then(goHome, goHome)
// }

let api = axios.create({
   baseURL: "localhost:8080/ajax"
})

api.interceptors.response.use(res=>{
    return res
}, err=> {
    // if (_.get(err, 'response.data.errorCode') === 1006){
    //     return refreshToken().then(()=>{
    //         return api.request(err.config)
    //     }, refreshTokenErr=>{
    //         if (_.get(refreshTokenErr, 'response.data.error') !== 1005){
    //             logout()
    //         }
    //     })
    // } else if (_.get(err, 'response.data.errorCode') === 1004){
    //     logout()
    //     return
    // }

    // if (_.get(err, 'response.data.message')){
    //     toast.error(err.response.data.message)
    // }
    return Promise.reject(err)
})

export default api