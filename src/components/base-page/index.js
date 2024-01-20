import React from 'react'
import Container from '../container'
import { Helmet } from 'react-helmet-async'

const BasePage = ({title , description , children}) => {
  return (
    <Container>
        <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Moon Dance|Sofia|Princess Sofia|Trinton
        &effect=fire|neon|emboss|outline|shadow-multiple|fire-animation" />
        </Helmet>
        {children}
    </Container>
  )
}

export default BasePage