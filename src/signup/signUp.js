import React from 'react';
import Navbar from './navbar/Navbar.js'
import FormField from './formfield/FormField.js'
import CoolButton from '../coolbutton/coolButton.js'

const SignUp = () => {
    return (
         <div>
            <Navbar/>
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com"/>
            <FormField label="Password" type="password" placeholder="*****" />
            <CoolButton label="submit" isSmall isSuccess className="is-rounded my-class">Submit</CoolButton>
         </div>
        )
    }


export default SignUp