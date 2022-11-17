import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'

import React from 'react'
import Menu from '../template/menu'
import Routers from './routers'

export default props => (
    <div className='container'>
        <Menu/>
        <Routers/>
    </div>
)