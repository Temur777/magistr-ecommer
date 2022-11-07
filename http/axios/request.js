import axios from 'axios'

// import { getToken, removeToken, setToken } from '@/utils/authStore'
// import { getLocalKey, removeLocalKey, setLocalKey } from '@/utils/localStorageData'

// import toast from "vue-toastificati";
// import Vue from "vue";

const service = axios.create({
  baseURL: "http://localhost:3000/api/",
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 30000 // request timeout
})

// function logoutUser() {
//   if (process.browser && process.client) {
//     removeToken()
//     removeLocalKey('isLogged')
//     removeLocalKey('refreshToken')
//     if (window.location.pathname === '/uz/account/logout' || window.location.pathname === '/uz/account/login') {
//       return
//     }
//     // const langCode = getLocalKey('langCode')
//     const langCode = ''
//     if (langCode === 'uz') {
//       window.location.href = '/uz/account/logout'
//     } else {
//       window.location.href = '/account/logout'
//     }
//   }
// }
service.interceptors.request.use(
  (config) => {
    // const langCode = getLocalKey('langCode')
    // const allowedLanguages = ['ru', 'uz']
    // let activeLangCode = 'ru'
    // if (config.params && config.params.lang) {
    //   activeLangCode = config.params.lang
    // } else if (langCode && allowedLanguages.includes(langCode)) {
    //   activeLangCode = langCode
    // }
    // config.headers.Language = activeLangCode
    // const accessToken = getToken()
    // if (accessToken) {
    //   config.headers.Authorization = 'Bearer ' + accessToken
    // }
    // config.headers.typeOS = 'WEB'
    // const fingerprint = getLocalKey('fingerprint')
    // if (fingerprint) {
    //   config.headers.fingerprint = fingerprint
    // }
    // config.headers.typeOS = 'WEB'
    return config
  },
  (error) => {
    // do something with request error
    if (!process.client) {
      console.error(error) // for debug
    } else {
      console.log('Error axios', error)
    }
    return Promise.reject(error)
  }
)



service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  (response) => {
    return response
  },
  async (error) => {
    if (process.client) {
      console.log('Error axios Date', new Date(), 'Error axios', error)
    } else if (error && error.response && error.response.status >= 500) {
      console.error('Response error Date', new Date(), error.config)
    }
   if (error.response && error.response.status === 422) {
      let message = error.response.data.fields[0] ? error.response.data.fields[0].value : ''
      if (!message) {
        message = 'Ошибка валидации. Пожалуйста заново проверьте свои данные'
      }
      // Vue.$toast.error(message)
    } else if (error.response && error.response.status === 500) {
      // Vue.$toast.error('Внутренняя ошибка сервера. Пожалуйста, попробуйте позже')
    } else if (error.response.data.status === 404 && error.response.data.code && error.response.data.code === 99) {
    } else if (error.response.status !== 401) {
      let messageText = 'Внутренняя ошибка сервера. Пожалуйста, попробуйте позже'
      if (error.response.data.message) {
        messageText = error.response.data.message
      }
      // Vue.$toast.error(messageText)
    }
    // if (error.response && error.response.status === 401 && process.browser && errorCount === 1) {
    //   const savedRefreshToken = getLocalKey('refreshToken')
    //   if (savedRefreshToken) {
    //     let statusRefresh = false
    //     await axios
    //       .post('https://api.sello.uz/auth/security/refresh-token', null, {
    //         headers: {
    //           Authorization: `Bearer ${getLocalKey('refreshToken')}`,
    //           fingerprint: getLocalKey('fingerprint'),
    //           typeOS: 'WEB'
    //         }
    //       })
    //       .then((rs) => {
    //         const accessToken = rs.data.access_token
    //         const refreshToken = rs.data.refresh_token
    //         setToken(accessToken)
    //         setLocalKey('refreshToken', refreshToken)
    //         statusRefresh = true
    //       })
    //       .catch(() => {
    //         logoutUser()
    //       })
    //     if (statusRefresh) {
    //       const res = await service(error.config)
    //       errorCount = 0
    //       return res
    //     }
    //   } else {
    //     logoutUser()
    //   }
    // }
    return Promise.reject(error)
  }
)

export default service
