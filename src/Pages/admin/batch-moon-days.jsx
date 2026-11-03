import {useState} from 'react';
import AxiosInstance from '../../utils/axios';
import MyButton from '../../components/widgets/my-button';
import Banner from '../../components/Banner/banner';

export default function BatchMoonDays()
{

    const [allDates, setAllDates]=useState('')

    const sendDates=async()=>{
        try{
            const response=await AxiosInstance.post('calendar/batch-moon-days/', {dates:allDates});
            alert ('batch upload complete');
            setAllDates('')
        }catch(err){
            console.log(err);
            alert('Problem with upload');
        }
    }
    return(
        <div>
            <Banner/>
            <div className='admin-container'>
                <div className='sub-title '>Batch Moon Days Upload</div>
                    <div style={{display:'block'}}>
                        <div style={{display:'flex', justifyContent:'center', height:'100px',width:'100%',}}>
                            <div style={{margin:'0 100px'}}> Enter dates for moon days</div>
                            <textarea 
                                id="moondays" 
                                name="moondays" 
                                rows="1" 
                                cols="15"
                                onChange={e=>setAllDates(e.target.value)}
                                >

                            </textarea>
                        </div>
                    </div>
                    <MyButton
                        button_text='Submit Dates'
                        button_function={sendDates}
                    />
            </div>        
        </div>        
    )
}