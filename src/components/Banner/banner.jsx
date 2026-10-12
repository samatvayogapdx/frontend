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
        title:'Class Venue',
        link:'/class-venue'
        },                 
    ]   
    
    const gettomgStartedMenu=[
        {
        title:'Intake Form',
        link:'/intake-form'
        },
        {
        title:'Information Sheet',
        link:'/information sheet'
        },   
        {
        title:'Waiver',
        link:'/waiver'
        },
        {
        title:'Schedule Meet And Greet',
        link:'/schedule-meet-and-greet'
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
            <div 
                style={{cursor:'pointer'}}
                onClick={()=>navigate('/')}
                className='home-link'
            >

                <img 
                    src='src/images/logo.png'
                    width='50px'
                    height='50px'/>
                <div>Deepa's Ashtanga Yoga</div>

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
                    menuName='Schedule'
                    menuList={scheduleMenu}
                />                                           
                {/* <NavLink
                to="/"
                className='nav-link'
                >
                    <div className='banner-menu-item'>Home</div>
                </NavLink>  

                <NavLink
                to="/about"
                className='nav-link'
                >
                    <div className='banner-menu-item'>About</div>
                </NavLink>     

                
                <NavLink
                    to="/class-schedule"
                    className='nav-link'
                 >
                    <div className='banner-menu-item'>Class Schedule</div>
                </NavLink>       
                
                <NavLink
                    to="/getting-started"
                    className='nav-link'
                 >
                    <div className='banner-menu-item'>Getting Started</div>
                </NavLink>                   
                <NavLink
                    to="/ashtanga"
                    className='nav-link'
                 >
                    <div className='banner-menu-item'>What Is Ashtanga</div>
                </NavLink>                       
                <NavLink
                    to="/new-to-ashtanga"
                    className='nav-link'
                 >
                    <div className='banner-menu-item'>New To Ashtanga</div>
                </NavLink>                        */}
                
            </div>
            
        </div>
    )
}