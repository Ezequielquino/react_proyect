


export const setLocalStr = (key: string, value: string) => window.localStorage.setItem(key, value)
export const removeLocalStr = (key: string) => window.localStorage.removeItem(key)
export const getLocalStr = (key: string): string | null => window.localStorage.getItem(key)

export const getTokenAppLS = () => window.localStorage.getItem('accessTokenApp')
export const setTokenAppLS = (value: string) => window.localStorage.setItem('accessTokenApp', value)

export const getAccessTokenLS = () => window.localStorage.getItem('ACCESSTOKEN')
export const setAccessTokenLS = (value: string) => window.localStorage.setItem('ACCESSTOKEN', value)

export const getUserData = () => window.localStorage.getItem('userData')
export const setUserData = (value: string) => window.localStorage.setItem('userData', value)

export const clearLocalStorage = () => window.localStorage.clear()