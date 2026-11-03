import MyInput from '../../components/widgets/my-input';
import MyTextarea from '../../components/widgets/my-textarea';
import MyButton from '../../components/widgets/my-button';
import Banner from '../../components/Banner/banner';
import {useState} from 'react';
import AxiosInstance from '../../utils/axios';
import {useNavigate} from 'react-router-dom';

export default function IntakeForm(){

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
            <div className='main-content'>
                <div className='sub-title '>Intake Form</div>
                <div className='intake-form'>
                    <p>If you're intersted in taking my class I would love to hear from you.  Please fill out the form below 
                        and schedule a time for me to visit with you for an introductory session.  After sinding me your information
                        please <a href='https://calendar.app.google/iJjJDKeoaQDnsteG6' target='_blank'>schedule</a> with me a time when we can have an introductory visit.</p>
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
                    <a href='src/Pages/GettingStarted/Waiver.pdf' target='_blank'>Class Waiver</a>
                </div>
            </div>
        </div>
    )
}