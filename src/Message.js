import './Form.css'
export default function Message({isVisible,errorMes}){
    if(isVisible){
       return(
        <div className='message'>
            <h2 style={{color: errorMes!=null ? 'red' : 'green'}}>{errorMes!=null ? errorMes : 'The Form Been Submitted Successfully'}</h2>
        </div>
       )
    }else{
        return(<></>)
    }
    
}