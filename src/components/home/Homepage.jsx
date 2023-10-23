import React from 'react'
import Header from '../Header'
import HomepageMain from './HomepageMain'
import HomepageInfo from './HomepageInfo'
import HomepageFooter from '../Footer'

export default function Homepage() {
    return (
        <>
            <Header homePage='active_page'/>
            <HomepageMain/>
            <HomepageInfo/>
            <HomepageFooter/>
        </>
    )
}
