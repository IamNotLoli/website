import React ,{useState,useRef} from 'react'
import emailjs from 'emailjs-com'


export const Mailer = () => {
   function sendEmail(e){
     
      e.preventDefault();
      emailjs.sendForm(
        'service_3qk3x7r',
        'template_8q876u8',
        e.target,
        'user_EtX6Egcv9w89sOHo5f2N8'

      ).then(res=>{
        console.log(res);
      }).catch(err=>console.log(err))
    }
      const [inputValue, setInputValue]=useState('')
      const inputref=useRef(null)
      const handleOnclick =()=>{ 
       setInputValue('')    
          }
          const handleOnChange =(Event) =>{
              setInputValue(Event.value)
          }
  
  return(
    <div className='rts'>
    <div className='rts1'>
      <div className='sh'>
        <form onSubmit={sendEmail}>
      <h1 className='ch'>¥ahoo!</h1>
    
      <div className='h1'>
        <input type="email" placeholder='mail📧' name='name' className='f2'   onChange={handleOnChange} value={inputValue}/> <br />
        <label htmlFor=""></label>
        </div>
        <div className='f1'>
        <input type="password" placeholder='password🔐' name='name' className='f2' onChange={handleOnChange} value={inputValue} />
        
        <div className='ff'>
        <textarea id="" cols="30" rows="10" name="message" placeholder='messege✍' className='f3' onChange={handleOnChange} value={inputValue}></textarea> <br />
      </div>  
        <input type="submit" className='g1' value='send' onClick={handleOnclick}/>
        </div>
        </form>

        </div>
    </div>
    </div>
  
  )
}
