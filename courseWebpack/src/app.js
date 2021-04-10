import $ from 'jquery';
import courseTab from './modules/courseTab';

import './scss/common.scss';

;($ => {
    const $app = $('#app');
    const init = _=> {
        courseTab($, $app).init()
    }
    init();
})($);