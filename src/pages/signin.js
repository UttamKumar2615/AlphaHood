import React from 'react'
import { scrollToTop } from 'react-scroll/modules/mixins/animate-scroll';
import SignIn from '../components/SignIn';
const SigninPage = () => {
    return (
        <>
        <scrollToTop/>
          <SignIn/> 
        </>
    )
}

export default SigninPage
