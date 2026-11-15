
import {useIsMobile} from '../../utils/is-mobile.jsx';
import {useNavigate} from 'react-router-dom';
import OneMenu from './one-menu';
import {useState, useEffect} from 'react';

export default function Banner(){
    const navigate=useNavigate();    
    const [test, setTest]=useState('Not Mobile');
    const isMobile = useIsMobile();
    //const isMobile =true;
    const [linkExpanded, setLinkExpanded]=useState(false);

    const [linksToExpand, setLinksToExpand]=useState({
        about:false,
        starting:false,
        yoga:false,
        schedule:false
    })

    const testButton=()=>{console.log(linksToExpand)}
    const changeLinksToShow=(which)=>{
        if (which==='all'){
            if (linkExpanded){
                setLinkExpanded(false);
            } else {
                setLinkExpanded(true);
            }
        } else {
            setLinksToExpand({...linksToExpand, ...{[which]:!linksToExpand[which]}})
        }
    }

    useEffect(()=>{
        if (isMobile) {
            setTest('Is Mobile')
        }
    },[])

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

    const mobileLinks=[
        {
            name:'about',
            label:'+ About',
            links:aboutMenu
        },
        {
            name:'starting',
            label:'+ Getting Started',
            links:gettomgStartedMenu
        },   
        {
            name:'yoga',
            label:'+ Yoga',
            links:yogaMenu
        },              
        {
            name:'schedule',
            label:'+ Schedule',
            links:scheduleMenu
        },   
    ]
    return(

        <>
            {(!isMobile)?
            <div className='banner-main'>
                <div className='top-banner'>
                    <div className='links-div'>
                        <div 
                            style={{cursor:'pointer'}}
                            onClick={()=>navigate('/')}
                            className='home-link'
                        >

                            <img 
                                src='/images/logo.png'
                                width='150vw'
                                height='100%'/>
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
                </div>

                <div className='sub-banner'>
                    <div className='image-link'>
                        <a href='https://www.instagram.com/samatvayogapdx?cplk=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr'>

                            <img 
                                src='/images/instagram.jpg'
                                width='35vw'
                                height='100%'/>            
                        </a>
                    </div>

                    <div className='image-link'>
                        <a href='https://www.facebook.com/profile.php?fb_profile_edit_entry_point=%7B%22click_point%22%3A%22edit_profile_button%22%2C%22feature%22%3A%22profile_header%22%7D&id=61567526107166&sk=about'>

                            <img 
                                src='/images/facebook.png'
                                width='35vw'
                                height='100%'/>                  
                        </a>
                    </div>     

                    <div className='image-link'>
                        <a href='https://www.linkedin.com/in/samatva-yoga-12ab7a445 '>

                            <img 
                                src='/images/linked-in.png'
                                width='35vw'
                                height='100%'/>                 
                        </a>
                    </div>  
                </div>
            </div>
        :
            <div className='mobile-title-bar'>
                <img
                    src='/images/mobile-links-icon.png'
                    height='100%'
                    onClick={()=>changeLinksToShow('all')}
                />
                {(linkExpanded)?
                <>
                    {mobileLinks.map((oneLink)=>
                    <div
                        key={oneLink.name}
                        className='mobile-link-group'
                        onClick={()=>changeLinksToShow(oneLink.name)}
                        >
                        {oneLink.label}
                        {(linksToExpand[oneLink.name])?<>
                        {oneLink.links.map((oneItem)=>
                            <div
                                key={oneItem.title}
                                className='mobile-link'
                            >

                                <a href={oneItem.link}>
   
                                    {oneItem.title}
                                </a>
                            </div>
                            )

                        }
                        </>:<></>}
                    </div>
                )} 
                </>
            :<></>}

            </div>}
          
            
        </>
    )
}