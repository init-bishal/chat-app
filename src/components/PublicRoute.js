import React from 'react'
import { Redirect, Route } from 'react-router'
import { useProfile } from '../context/profile.context'
import {Container,Loader} from 'rsuite'

const PublicRoute = ({children,...routeProps}) => {
    const {profile,isLoading}=useProfile()
    if(isLoading && !profile)
    {
        <Container>
            <Loader center vertical content="Loading" speed="slow" size="md"/>
        </Container>
    }
    if(profile && !isLoading)
    {
        return <Redirect to="/"/>
    }
    return (
        <Route {...routeProps}>{children}</Route>
    )
}

export default PublicRoute
