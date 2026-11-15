import {useEffect, useState} from 'react';
import Banner from '../../components/Banner/banner';
import AxiosInstance from '../../utils/axios';
import {useIsMobile} from '../../utils/is-mobile.jsx';
import '../../styles/moon-day.css';

export default function MoonDays(){
    const isMobile = useIsMobile();  
    const [moonDays, setMoonDays]=useState([]);
    const [moonDaysThisYear, setMoonDaysThisYear]=useState([]);
    const [year, setYear]=useState(new Date().getFullYear())
    useEffect(()=>{
        const getMoonDays = async ()=>{
            try{

                const response = await AxiosInstance.get(`calendar/get-moon-days/`);
                setMoonDays(response.data);
                setMoonDaysThisYear(response.data.filter((oneDay)=>oneDay.start_date.includes(new Date().getFullYear())));
            }catch(err){
                console.log(err);
            }
        }

        getMoonDays();
    },[])

    useEffect(()=>{
        setMoonDaysThisYear(moonDays.filter((oneDay)=>oneDay.start_date.includes(year)));
    },[year])

    const changeYear=(direction)=>{
        setYear(year+direction);
    }

    return (
        <div >
            <Banner/>
            {(!isMobile) ?               
                <div className='main-content'>
                    <div className='sub-title '>Moon Days</div>
                    <div className='moon-day-year'>
                        <div
                            style={{
                                cursor:'pointer'
                            }}
                            onClick={()=>changeYear(-1)}
                        >
                            <img 
                                src='/images/left-cheveron.png'
                                width='50px'
                                height='50px'/>                        
                        </div>                    
                        <div>{year}</div>
                        <div
                            style={{
                                cursor:'pointer'
                            }}
                            onClick={()=>changeYear(1)}
                        >
                            <img 
                                src='/images/right-cheveron.png'
                                width='50px'
                                height='50px'/>                        
                        </div>                        
                        
                    </div>
                    <div className='all-moon-days'>
                        {moonDaysThisYear.map((oneMoonDay)=>(
                            <div className='one-year'>{oneMoonDay.start_date}</div>
                        ))}
                    </div>

                </div>
            :
                <div  className='main-content-mobile'>
                    <div className='sub-title '>Moon Days</div>
                    <div className='moon-day-year-mobile'>
                        <div style={{
                                cursor:'pointer'
                            }}>
                            <img 
                                width='50px'
                                height='50px'
                                src='/images/left-cheveron.png'
                            />
                        </div>
                        <div>{year}</div>
                        <div
                            style={{
                                cursor:'pointer'
                            }}
                            onClick={()=>changeYear(1)}
                        >
                            <img 
                                src='/images/right-cheveron.png'
                                width='50px'
                                height='50px'/>                        
                        </div>
                                      
                    </div>      
                    <div className='all-moon-days-mobile'>
                        {moonDaysThisYear.map((oneMoonDay)=>(
                            <div className='one-year'>{oneMoonDay.start_date}</div>
                        ))}
                    </div>                                     
                </div>
        }
        </div>
    )
}