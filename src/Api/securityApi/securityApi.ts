import { captchaType } from './types';

import { instance } from 'Api/apiConfig';

export const securityApi = {
  getCaptchaUrl() {
    const endpoint = `security/get-captcha-url`;
    return instance.get<captchaType>(endpoint).then(res => res.data);
  },
};
