import {instance} from "../apiConfig";
import {captchaType} from "./types";

export const securityApi = {
    getCaptchaUrl() {
        return instance.get<captchaType>(`security/get-captcha-url`)
            .then(res => res.data)
    },
}