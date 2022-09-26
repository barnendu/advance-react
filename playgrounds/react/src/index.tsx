import React from 'react'
import ReactDOM from 'react-dom'

import { Select, Header } from '@ds.e/react';

import '@ds.e/scss/lib/Utilities.css'
import '@ds.e/scss/lib/Text.css'
import '@ds.e/scss/lib/Margin.css'
import '@ds.e/scss/lib/Select.css'
import '@ds.e/scss/lib/global.css'

const options = [{
    label: 'London',
    value: 'london'
}, {
    label: 'Paris',
    value: 'paris'
}, {
    label: 'New Delhi',
    value: 'new delhi'
}]

ReactDOM.render(
    <>
        <Header></Header>
        <div style={{ padding: '40px' }}>
        <Select options={options} />
    </div>
    </>,
    document.querySelector('#root')
)
