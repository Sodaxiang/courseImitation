var courseTab = (function($, initTools){
    // 节点对象
    var $courseTab = $('.J_courseTab'),
        $listWrapper = $('.J_listWrapper'),
        $tabList = $courseTab.find('.tab-item-list');
        $courseList = $listWrapper.find('.course-card-list');
    
    //数据对象
    var courseFieldData = $.parseJSON($('#J_courseFieldData').html()),
        courseData = JSON.parse($('#J_courseData').html());

    //tpl
    var tabTpl = $('#J_tabTpl').html(),
        courseTpl = $('#J_courseTpl').html(),
        noCourrseTpl = $('#J_noCourseTpl').html();
    
    // 缓存
    var htmlCache = {};

    var init = function() {
        render();
        bindEvent();
    }
    function render() {
        $tabList.html(renderTab());
        $courseList.html(renderCourse('all'))
    }

    function renderTab() {
        var list = '';
        list += initTools.tplReplace(tabTpl, {
            tabClass: 'tab-item-lk lk-current',
            tabField: 'all',
            tabName: '全部'
        });
        courseFieldData.forEach((function(item, index){
            list += initTools.tplReplace(tabTpl,{
                tabClass: 'tab-item-lk',
                tabField: item.field,
                tabName: item.field_name
            });
        }));
    
        return list;
    }

    function renderCourse(field){
        var filterCourse = [],
            list = '';
        if(field == 'all'){
            filterCourse = courseData;
        }else{
            filterCourse = courseData.filter(function(item){
                return item.field == field;
            });
        }
        if(filterCourse.length === 0){
            list += noCourrseTpl;
        }else{
            filterCourse.forEach(function(item, index){
                list += initTools.tplReplace(courseTpl, {
                 courseId: item.id,
                 courseImg: item.img,
                 courseName: item.course_name,
                 coursePriceClass:  Number(item.price/100) ? '' : 'free',
                 coursePrice: Number(item.price/100) ? `￥${Number(item.price/100).toFixed(2)}` : '免费' 
                });
             })
        }
      

        return list;
    }

    function bindEvent() {
        $courseTab.on('click', '.tab-item-lk', onTabClick);
    }

    function onTabClick() {
        var $this = $(this),
            index = $this.parent('.tab-item').index(),
            field = $this.data('field');
            tabChange($this, field);
    }

    function tabChange(target, field){
        target.addClass('lk-current')
             .parent('.tab-item')
             .siblings()
             .children('.tab-item-lk')
             .removeClass('lk-current');
             
        if(!htmlCache[field]){
            htmlCache[field] = renderCourse(field);
        }
        $courseList.html(htmlCache[field]);
    }

    return {
        init: init
    }
})(jQuery, initTools);


;(function($, modules){
    var courseTab = modules[0];
    var init = function() {
        courseTab.init();
    }

    init();

})(jQuery, [courseTab]);