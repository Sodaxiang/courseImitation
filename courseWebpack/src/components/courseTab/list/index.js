import tpl from './index.tpl';
import './index.scss';

import { tplReplace } from '../../../utils';
export default _ => {
    return {
        name: 'courseList',
        tpl(data) {
            let list = '';
            data.forEach(item => {
                list += tplReplace(tpl, {
                    courseId: item.id,
                    courseImg: item.img,
                    courseName: item.course_name,
                    coursePriceClass:  Number(item.price/100) ? '' : 'free',
                    coursePrice: Number(item.price/100) ? `￥${Number(item.price/100).toFixed(2)}` : '免费'  
                });    
            });
            return list;
        }
    }
}