import Banner from '../../components/Banner/banner';
import {useEffect, useState} from 'react';

export default function AnnualSchedule(){

    const [year, setYear]=useState(new Date().getFullYear()); 
    const [breakSchedule, setBreakSchedule]=useState({
        Spring:'-',
        Summer:'-',
        Fall:'-',
        Winter:'12/22 - 12/31'
    })

    const allBreaks={
        2026:{
            Spring:'-',
            Summer:'-',
            Fall:'-',
            Winter:'12/22 - 12/31'          
        },
        2027:{
            Spring:'3/23 - 3/25',
            Summer:'6/22 - 7/1',
            Fall:'9/21 - 9/23',
            Winter:'12/21 - 12/30'                
        },
        2028:{
            Spring:'3/21 - 3/23',
            Summer:'6/27 - 7/6',
            Fall:'9/19 - 9/21',
            Winter:'12/26 - 1/4'             
        },
    }

    useEffect(()=>{
        let thisYear = Math.min(new Date().getFullYear(),2028);
        setBreakSchedule(allBreaks[thisYear]);
    },[])

    useEffect(()=>{
       setBreakSchedule(allBreaks[year]); 
    },[year])
    
    const changeYear=(direction)=>{
        setYear(Math.max(2026,Math.min(2028,year+direction)));
    }
    
    
    return (
        <div style={{margin:0, padding:0}}>
            <Banner/>
                <div className='main-content'>
                    <div className='sub-title '>Planned Breaks</div> 
                    <div className='annual-schedule-year'>
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
                            
                    <div className='annual-schedule-grid'>
                        <div className='annual-schedule-one-line'>
                            <div className='annual-schedule-one-line-half'>Spring</div>
                            <div className='annual-schedule-one-line-half'>{breakSchedule['Spring']}  </div>
                        </div>
                        <div className='annual-schedule-one-line'>
                            <div className='annual-schedule-one-line-half'>Summer</div>
                            <div className='annual-schedule-one-line-half'>{breakSchedule['Summer']}</div>
                        </div>     
                        <div className='annual-schedule-one-line'>
                            <div className='annual-schedule-one-line-half'>Fall</div>
                            <div className='annual-schedule-one-line-half'>{breakSchedule['Fall']}</div>
                        </div>     
                        <div className='annual-schedule-one-line'>
                            <div className='annual-schedule-one-line-half'>Winter</div>
                            <div className='annual-schedule-one-line-half'>{breakSchedule['Winter']}</div>
                        </div>                                                                        

                    </div>
                </div>            
            

            
        </div>
    )
}