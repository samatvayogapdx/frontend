
import Banner from '../../components/Banner/banner';
import '../../styles/admin.css';
import {useEffect, useState} from 'react';

import AxiosInstance from '../../utils/axios';
import OneCalendarEntry from './one-calendar-entry';
import RepeatingEntry from './repeating-entry';
import InputDiv from './inputs';
import MyButton from '../../components/widgets/my-button';
import {useNavigate} from 'react-router-dom';

export default function Admin ()
{

    const navigate=useNavigate();   
    const [currentRepeatingEntry, setCurrentRepeatingEntry]=useState({
        type:'Repeating',
        start_date:'2000-01-01',
        title:'class',
        color:'Black',
        which_days_list:[],
        id:-1
    });

    const [calendarEntries, setCalendarEntries]=useState([]);


    const test=()=>{console.log(currentRepeatingEntry)}

    const deleteRecord=async(id)=>{
        try{
            const response=await AxiosInstance.delete(`calendar/delete-entry/${id}/`);
            getRecords();

        }catch(err){
            alert('Not able to delete records');
        }       
    }

    const getRecords = async ()=>{
        try{
            const response=await AxiosInstance.get('calendar/get-all-calendar-entries/');
            console.log(response.data)
            setCalendarEntries(response.data);

        }catch(err){
            alert('Not able to get records');
        }        
        try{
            const response=await AxiosInstance.get('calendar/get-repeating-calendar/');

            if (response.data.title!=='$$$$')
                setCurrentRepeatingEntry(response.data);
            else
                setCurrentRepeatingEntry({
                    type:'Repeating',
                        start_date:'2000-01-01',
                        title:'class',
                        color:'Black',
                        which_days_list:[]
                });

        }catch(err){
            alert('Not able to get records');
        }            
    }
    useEffect(()=>{
        getRecords();
    },[])



    return (
        <div>
            <Banner/>
            <div className='admin-container'>
            
                <div className='sub-title '>Admin</div>
                <InputDiv
                    getRecords={getRecords}
                />
                <div className='all-entries-containter'>
                    <div className='sub-title '>Current Calendar Entries</div>
                    <div className='repeating-entry'>
                        {(currentRepeatingEntry.id==-1)?<></>:
                            <RepeatingEntry 
                                currentRepeatingEntry={currentRepeatingEntry}
                                deleteRecord={deleteRecord}
                            />                        
                        }

                    </div>
                        {calendarEntries.map((oneCalendarEntry)=>(
                            <div key={oneCalendarEntry.id}>
                                <OneCalendarEntry
                                    thisEntry={oneCalendarEntry}
                                    deleteRecord={deleteRecord}
                                />
                            </div>
                        ))}
                </div>
                <MyButton
                    button_text='Batch Moon Days Upload'
                    button_function={()=>navigate('/batch-moon-days')}
                />
            </div>

        </div>
    )
}