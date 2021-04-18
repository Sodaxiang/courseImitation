import {API} from 'utils/config';
import HTTP from 'utils/http';

export default class IndexModel extends HTTP {
    getCourseDatas() {
        return new Promise(resolve => {
            this.ajax({
                url: API.getCourseDatas,
                type: 'GET',
                dataType: 'JSONP',
                jsonpCallback: 'callback',
                success(data) {
                    resolve(data);
                }
            });
        })
    }
}