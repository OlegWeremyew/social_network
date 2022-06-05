import { instance } from '../apiConfig';

import { captchaType } from './types';

export const securityApi = {
  getCaptchaUrl() {
    const endpoint = `security/get-captcha-url`;
    return instance.get<captchaType>(endpoint).then(res => res.data);
  },
};
