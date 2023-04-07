import React from 'react'
import Header from '../Header/Header'
import Content from '../Content/Content'


const Layout = () => {
    return (
        <div className='flex w-full justify-center'>
            <div className='w-5w'>
                <Header />
                <Content />
            </div>
        </div>
    )
}

export default Layout