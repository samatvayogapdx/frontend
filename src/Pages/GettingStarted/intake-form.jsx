import MyInput from '../../components/widgets/my-input';
import MyTextarea from '../../components/widgets/my-textarea';
import MyButton from '../../components/widgets/my-button';
import Banner from '../../components/Banner/banner';
import {useState} from 'react';
import AxiosInstance from '../../utils/axios';
import {useNavigate} from 'react-router-dom';
import {useIsMobile} from '../../utils/is-mobile.jsx';
import BottomBanner from '../../components/bottom-banner/bottom-banner.jsx';


export default function IntakeForm(){

    const isMobile = useIsMobile();   
    const navigate=useNavigate(); 
    const [firstName, setFirstName]=useState('');
    const [lastName, setLastName]=useState('');
    const [email, setEmail]=useState('');
    const [phone, setPhone]=useState('');
    const [personalInfo, setPersonalInfo]=useState('');

    const sendIntakeForm=async()=>{
        if (firstName===''){
            alert('First name needs to be entered')
            return
        } 

        if (lastName===''){
            alert('Last name needs to be entered')
            return
        } 
        
        if (email===''){
            alert('Email name needs to be entered')
            return
        } 
        
        if (phone===''){
            alert('Phone name needs to be entered')
            return
        } 
        try{
            let dataToSend={
                first_name:firstName,
                last_name:lastName,
                email:email,
                phone:phone,
                personal_info:personalInfo
            }

            const response=await AxiosInstance.post('accounts/intake-form/', dataToSend);   
            navigate('/form-sent');
        }catch(err){
            alert('Problem processing form.')
            console.log(err)
        }
             
    }
    return (
        <div >
            <Banner/>
            {(!isMobile) ?            
                <div className='main-content'>
   

                    <div className='container'>
                        <div className='text-block'>
                            <div className='centered-text'  style={{fontSize:'35px'}}>Welcome to Samatva Yoga! </div>
                             <div className='centered-text'>
                                If you are new student interested in practicing with us, please fill out and submit the intake form below, 
                                then schedule an introductory meeting with the teacher.  During this meeting you can introduce yourself and 
                                get to know the teacher. You will receive additional information about the classes. This would also be a great opportunity for you to get your questions answered!                                
                            </div>
                            <div className='centered-text'  style={{fontSize:'35px'}}>Intake Form </div>                            
                        </div>

                        <div className='intake-form'>

                            <MyInput
                                labelText='First Name'
                                handleChange={e=>setFirstName(e.target.value)}
                                inputValue={firstName}
                                inputName='FirstName'
                                inputStyle={{fontSize:'20px'}}
                            />
                            <MyInput
                                labelText='Last Name'
                                handleChange={e=>setLastName(e.target.value)}
                                inputValue={lastName}
                                inputName='LastName'
                                inputStyle={{fontSize:'20px'}}
                            />
                            <MyInput
                                labelText='Email'
                                handleChange={e=>setEmail(e.target.value)}
                                inputValue={email}
                                inputName='Email'
                                inputStyle={{fontSize:'20px'}}
                            /> 
                            <MyInput
                                labelText='Phone'
                                handleChange={e=>setPhone(e.target.value)}
                                inputValue={phone}
                                inputName='Phone'
                                inputStyle={{fontSize:'20px'}}
                            />     
                            <MyTextarea
                                labelText='A little about yourself'
                                handleChange={e=>setPersonalInfo(e.target.value)}
                                inputValue={personalInfo}
                                inputName='About'
                                rows='5'
                                columns='15'
                                inputStyle={{fontSize:'20px'}}
                            />                                                                             
                            <MyButton
                                button_function={sendIntakeForm}
                                button_text='Submit Form'
                            />
                            <div className='centered-text'>
                                Please schedule with me a time when we can have an 
                                introductory visit.
                            </div>
                            <div
                                style={{
                                    display:'flex',
                                    margin:'auto',
                                    justifyContent:'center'
                                }}>
                                <a href='https://calendar.app.google/iJjJDKeoaQDnsteG6' target='_blank' className='my_button'>schedule</a>
                                <a href='src/Pages/GettingStarted/Waiver.pdf' target='_blank' className='my_button'>Class Waiver</a>
                            </div>
                            
                            <div style={{
                                height:'250px',
                                display:'block',
                                marginTop:'2%'}}
                            >
                                <div>About / Pricing:</div>
                                <div>$59.00 monthly membership - all classes</div>
                                <div>$599.00 annual membership - all classes</div>
                            </div>   
                        </div>                            
                    </div>
                    <BottomBanner/>   
                </div>
            :
                <div  className='main-content-mobile'>
                    <div className='mobile-container'>
                        <div className='mobile-text-block'>
                            <div className='centered-text'  style={{fontSize:'35px'}}>Welcome to Samatva Yoga! </div>
                            <div className='centered-text'>
                                If you are new student interested in practicing with us, please fill out and submit the intake form below, 
                                then schedule an introductory meeting with the teacher.  During this meeting you can introduce yourself and 
                                get to know the teacher. You will receive additional information about the classes. This would also be a great opportunity for you to get your questions answered!                                
                            </div> 
                            <div className='centered-text'  style={{fontSize:'35px'}}>Intake Form </div>                    
                            <MyInput
                                labelText='First Name'
                                handleChange={e=>setFirstName(e.target.value)}
                                inputValue={firstName}
                                inputName='FirstName'
                                inputStyle={{fontSize:'20px'}}
                            />  
                            <MyInput
                                labelText='Last Name'
                                handleChange={e=>setLastName(e.target.value)}
                                inputValue={lastName}
                                inputName='LastName'
                                inputStyle={{fontSize:'20px'}}
                            />
                            <MyInput
                                labelText='Email'
                                handleChange={e=>setEmail(e.target.value)}
                                inputValue={email}
                                inputName='Email'
                                inputStyle={{fontSize:'20px'}}
                            /> 
                            <MyInput
                                labelText='Phone'
                                handleChange={e=>setPhone(e.target.value)}
                                inputValue={phone}
                                inputName='Phone'
                                inputStyle={{fontSize:'20px'}}
                            />     
                            <MyTextarea
                                labelText='A little about yourself'
                                handleChange={e=>setPersonalInfo(e.target.value)}
                                inputValue={personalInfo}
                                inputName='About'
                                rows='5'
                                columns='15'
                                inputStyle={{fontSize:'20px'}}
                            />                                                                             
                            <MyButton
                                button_function={sendIntakeForm}
                                button_text='Submit Form'
                            />       
                            <div className='centered-text'>
                                Please schedule with me a time when we can have an 
                                introductory visit.
                            </div>                                      
                            <div
                                style={{
                                    display:'flex',
                                    margin:'auto',
                                    justifyContent:'center'
                                }}>
                                <a href='https://calendar.app.google/iJjJDKeoaQDnsteG6' target='_blank' className='my_button'>schedule</a>
                                <a href='src/Pages/GettingStarted/Waiver.pdf' target='_blank' className='my_button'>Class Waiver</a>
                            </div>
                            <div style={{
                                height:'250px',
                                display:'block',
                                marginTop:'1%'}}
                            >
                                <div>About / Pricing:</div>
                                <div>$59.00 monthly membership - all classes</div>
                                <div>$599.00 annual membership - all classes</div>
                            </div>                                                               
                        </div>
                    </div>
                    <BottomBanner/>   
                </div>
            }
        </div>
    )
}