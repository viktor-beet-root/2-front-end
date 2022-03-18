import $ from './$';
import customSelect from './customSelect';

const newSelect = new customSelect(
    document.querySelector('.test'),
    {
        customClass: 'bar'
    }
)


