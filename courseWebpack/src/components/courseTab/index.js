import tpl from './index.tpl';
import './index.scss';

import { tplReplace } from '../../utils';
import courseData from '../../data/courseData';

import tab from './tab';
import list from './list';

const tabComponent = tab();
const listComponent = list();

export default _ => {
    return {
        name: 'courseTab',
        tpl(){
            return tplReplace(tpl, {
                tabList: tabComponent.tpl(),
                courseList:`<ul class="course-card-list clearfix">${listComponent.tpl(courseData)}</ul>`
            })
        },
        tabClick(onTabClick){
            tabComponent.bindEvent(onTabClick);
        }
    }
}