import { API } from 'utils/config';
import HTTP from 'utils/http';

export default class ListModel extends HTTP {
    getCourseFields() {
        return new Promise(resolve => {
            this.ajax({
              url: API.getCourseFields,
              type: 'GET',
              dataType: 'JSONP',
              jsonpCallback: 'callback' ,
              success(data) {
                  resolve(data);
              }
            })
        })
    }

    getCourses(field) {
        return new Promise(resolve => {
            this.ajax({
                url: API.getCourses + field,
                type: 'GET',
                dataType: 'JSONP',
                jsonpCallback: 'callback',
                success(data) {
                    resolve(data);
                }
            })
        })
    }
}