import {select} from '@storybook/addon-knobs';

export default function() {
    return select('Theme', [
        'default',
        'wf',
        'galileo',
        'wb-mobile',
        'wb-mobile-tabs'
    ], 'default');
}