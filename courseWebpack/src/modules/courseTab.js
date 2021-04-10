import courseTab from '../components/courseTab/index';
import list from '../components/courseTab/list';

import courseData from '../data/courseData';
import { filterData } from '../lib/courseTab';

export default ($, $app) => {
    const courseTabComponent = courseTab(),
          listComponent = list(),
          htmlCache = {}; //作缓存使用
    let $couseList = null; //要在render之后获取，否则拿不到节点
    const init = _ => {
        render();
        courseTabComponent.tabClick(onTabClick);
    }

    function render() {
        $app.append(courseTabComponent.tpl());
        $couseList = $('.J_listWrapper').find('.course-card-list');
    }

    function onTabClick() {
        const $this = $(this),
              field = $this.attr('data-field');
        tabChange($this);
        courseChange(courseData, field);
    }

    function tabChange(target) {
        target.addClass('lk-current')
              .parent()
              .siblings('.tab-item')
              .children('.tab-item-lk')
              .removeClass('lk-current');
    }
    function courseChange(data, field){
        if(!htmlCache[field]){
            htmlCache[field] = filterData(data, field);
        }
        $couseList.html(listComponent.tpl(htmlCache[field]));
    }

    return {
        init
    }
}