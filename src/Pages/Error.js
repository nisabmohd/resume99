import React from 'react'

export const Error = () => {
    return (
        <div style={{userSelect:'none'}}>
            <h1 style={{color:'rgb(25,118,210)',fontSize:'145px',fontFamily:'Roboto'}}>404</h1>
            <h1 style={{color:'gray',marginTop:'-99px',fontFamily:'Roboto'}}> Not Found</h1>
            <p style={{color:'gray',fontSize:'19px',fontFamily:'Roboto'}}>The page you were looking for doesn't exist</p>
        </div>
    )
}
