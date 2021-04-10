import $ from 'jquery';
import tpl from './index.tpl';
import './index.scss';

import { tplReplace } from '../../../utils';

import courseFieldData from '../../../data/courseFieldData';


export default _ => {
    return {
        name: 'tab',
        tpl() {
            let list = '';
            list += tplReplace(tpl, {
                tabClass: 'tab-item-lk lk-current',
                tabField: 'all',
                tabName: '全部'
            });

            courseFieldData.forEach(item => {
                list += tplReplace(tpl, {
                    tabClass: 'tab-item-lk',
                    tabField: item.field,
                    tabName: item.field_name
                });
            });

            list = `<ul class="tab-item-list clearfix">${list}</ul>`
            return list;
        },
        bindEvent(onTabClick){
            const $courseTab = $('.tab-item-list');
            $courseTab.on('click', '.tab-item-lk', onTabClick)
        }
    }
}