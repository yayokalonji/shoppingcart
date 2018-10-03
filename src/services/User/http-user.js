import HttpBase from './../http-base';
import { API_BASE, HTTP_USER } from './../config';

class HttpUser {
    async login(params){
        try {
            const url  = `${ API_BASE }${ HTTP_USER.getLogin }`
            const config = {
                header: {},
                params
            }
            console.log(url);
            const data = await HttpBase.baseGetParams(url, config);
            return data;
        } catch (error) {
            console.log(error);
        }
    }
}

export default new HttpUser;