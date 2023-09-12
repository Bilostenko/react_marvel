import error from './error.gif' 

const ErrorMessage = ()=>{
  return (
    <img src= {error} style={{width: 250, height: 250, display: 'block', objectFit: 'contain', margin: '0 auto'}} 
    alt="Error"/>
  )
}

export default ErrorMessage;