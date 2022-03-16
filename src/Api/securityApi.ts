import {instance} from "./api";

export const securityApi = {
    getCaptchaUrl() {
        return instance.get<captchaType>(`security/get-captcha-url`)
            .then(res => res.data)
    },
}

//types

type captchaType = {
    url: string
}