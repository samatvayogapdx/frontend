import {WEBSITE_URL} from '../../constants/website-constants';

import {useNavigate} from 'react-router-dom';
import OneMenu from './one-menu';

export default function Banner(){
    const navigate=useNavigate();    
    
    const aboutMenu=[
        {
        title:'Your Teacher',
        link:'/about-teacher'
        },
        {
        title:'Class Information',
        link:'/class-information'
        },   
        {
        title:'Class Types',
        link:'/class-types'
        },           
        {
        title:'Class Venue',
        link:'/class-venue'
        },                 
    ]   

    const yogaMenu=[
        {
        title:'Ashtanga Yoga',
        link:'/ashtanga'
        }, 
        {
        title:'New to Ashtanga',
        link:'/new-to-ashtanga'
        },         
        {
        title:'Primary Series',
        link:'/our-sequence'
        },                   
    ]
    
    const gettomgStartedMenu=[
        {
        title:'Intake Form',
        link:'/intake-form'
        },
        {
        title:'Getting Started',
        link:'/getting-started'
        },   
   
    ]
    
    
    const scheduleMenu=[
        {
        title:'Class Schedule',
        link:'/class-schedule'
        },    
        {
        title:'Moon Days',
        link:'/moon-days'
        },    
        {
        title:'Annual Schedule',
        link:'/annual-schedule'
        }
    ]

    return(
        <div className='banner-main'>
            <div className='links-div'>
                <div 
                    style={{cursor:'pointer'}}
                    onClick={()=>navigate('/')}
                    className='home-link'
                >

                    <img 
                        src='src/images/Logo.png'
                        width='170px'
                        height='123px'/>


                </div>
                              

            </div>
            <div className='banner-menu'>
                <OneMenu
                    menuName='About'
                    menuList={aboutMenu}
                />        
                <OneMenu
                    menuName='Getting Started'
                    menuList={gettomgStartedMenu}
                /> 
                <OneMenu
                    menuName='Yoga'
                    menuList={yogaMenu}
                />                    
                <OneMenu
                    menuName='Schedule'
                    menuList={scheduleMenu}
                />                                           
        
            </div>
            <div className='sub-banner'>
                <div className='image-link'>
                    <a href='https://www.instagram.com/samatvayogapdx?cplk=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr'>

                        <img 
                            src='src/images/instagram.jpg'
                            width='25px'
                            height='25px'/>            
                    </a>
                </div>

                <div className='image-link'>
                    <a href='https://www.facebook.com/profile.php?fb_profile_edit_entry_point=%7B%22click_point%22%3A%22edit_profile_button%22%2C%22feature%22%3A%22profile_header%22%7D&id=61567526107166&sk=about'>

                        <img 
                            src='src/images/facebook.png'
                            width='30px'
                            height='25px'/>                  
                    </a>
                </div>     

                <div className='image-link'>
                    <a href='https://www.linkedin.com/in/samatva-yoga-12ab7a445 '>

                        <img 
                            src='src/images/linked-in.png'
                            width='25px'
                            height='25px'/>                 
                    </a>
                </div>  
            </div>
            
        </div>
    )
}