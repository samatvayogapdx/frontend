import MyInput from '../../components/widgets/my-input';
import MyButton from '../../components/widgets/my-button';
import MyDropdownText from '../../components/widgets/my-dropdown-text';
import MyCheckBoxes from '../../components/widgets/my-checkboxes';
import MyRadio from '../../components/widgets/my-radiobutton';
import {useEffect, useState} from 'react';
import {Months,weekDays} from '../../constants/all-date-info';
import AxiosInstance from '../../utils/axios';

export default function InputDiv({
    getRecords
})
{
    const [whichDay, setWhichDay]=useState('1');
    const [whichYear, setWhichYear]=useState(2026);
    const [yearsAvailable, setYearsAvailable]=useState([2026,2027,2028,2029])
    const [daysOfMonth, setDaysOfMonth]=useState([]);
    const [textOne, setTextOne]=useState('');
    const [textTwo, setTextTwo]=useState('');
    const [textThree, setTextThree]=useState('');
    const [webLink, setWebLink]=useState('');    
    const [oneColor, setOneColor]=useState('Black');
    const [oneBGColor, setOneBGColor]=useState('White')
    const [oneType, setOneType]=useState('One Time');
    const [daysOfWeek, setDaysOfWeek]=useState([]);
    const [whichMonth, setWhichMonth]=useState('January');

    const oneWidgetStyle ={
        padding:'0 2%',
        height:'100px'
    }
    const Logout=()=>{
        localStorage.setItem(ACCESS_TOKEN, '');
        localStorage.setItem(REFRESH_TOKEN, '');         
        localStorage.setItem(USER_NAME, '');     
        navigate('/')
    }

    useEffect(()=>{
        setDefaults()
    },[])

    useEffect(()=>{
        setDaysOfMonth(Array.from(
            { length: Months.find((one_month)=>one_month.month_name===whichMonth).number_days }
            , (_, index) => index + 1));
    },[whichMonth])

    const setDefaults=()=>{
        let dayOne = new Date();
        setWhichMonth(dayOne.toLocaleString('default', { month: 'long' }));
        setWhichDay(dayOne.getDate());
        setYearsAvailable(Array.from({length:4},(_,index)=>index+dayOne.getFullYear()));
        setWhichYear(dayOne.getFullYear());
        setOneColor('Black');
        setOneType('One Time');
        setDaysOfWeek([]);
    }

    const addNewRecord =async ()=>{

        let weekDaysNumber=0;
        let powerOfTwo=1;
        weekDays.map((oneWeekDay)=>{
            if (daysOfWeek.includes(oneWeekDay)) weekDaysNumber = weekDaysNumber+powerOfTwo;

            powerOfTwo=powerOfTwo*2
        })

        let dataToSend={
            type:oneType,
            start_date:`${whichYear}-${Months.findIndex(oneMonth=>oneMonth.month_name===whichMonth)+1}-${whichDay}`,
            line_one:textOne,
            line_two:textTwo,
            line_three:textThree,
            link:webLink,
            color:oneColor,
            bg_color:oneBGColor,
            which_days:weekDaysNumber
        }

        

        if (oneType==='Moon Day') {
            dataToSend.line_one='Moon Day'
            dataToSend.color='gray'
        } else if (oneType==='Canceled'){
            dataToSend.line_one='Canceled'
            dataToSend.color='red'
        }

        console.log(dataToSend)

        try{
            const response=await AxiosInstance.post('calendar/new-calendar-entry/', dataToSend);
            setDefaults();
            getRecords();
        }catch(err){
            console.log(err);
            alert('Not able to create record');
        }
    }

    return(
        <div >
            <div className='new-entry-container'>
                <MyDropdownText
                    optionsList={Months.map((oneMonth)=>oneMonth.month_name)}
                    setSelectedOption={setWhichMonth}
                    selection={whichMonth}
                    disable={false}
                    style={oneWidgetStyle}
                />
                <MyDropdownText
                    optionsList={daysOfMonth}
                    setSelectedOption={setWhichDay}
                    selection={whichDay}
                    disable={false}
                    style={oneWidgetStyle}
                /> 

                <MyDropdownText
                    optionsList={yearsAvailable}
                    setSelectedOption={setWhichYear}
                    selection={whichYear}
                    disable={false}
                    style={oneWidgetStyle}
                />  
                <div>
                    <MyInput
                        labelText='Line one'
                        handleChange={e=>setTextOne(e.target.value)}
                        inputValue={textOne}
                        inputName='textOne'
                        inputType='text' 
                        inputStyle={{display:'flex', justifyContent:'space-around',alignItems:'top',width:'300px', marginBottom:'15px'}}

                        inputFieldStyle={{width:'50%', height:'20px', fontSize:'15px'}}               
                    />
                    <MyInput
                        labelText='Line two'
                        handleChange={e=>setTextTwo(e.target.value)}
                        inputValue={textTwo}
                        inputName='textTwo'
                        inputType='text' 
                        inputStyle={{display:'flex', justifyContent:'space-around',alignItems:'top',width:'300px', marginBottom:'15px'}}

                        inputFieldStyle={{width:'50%', height:'20px', fontSize:'15px'}}               
                    />
                    <MyInput
                        labelText='Line three'
                        handleChange={e=>setTextThree(e.target.value)}
                        inputValue={textThree}
                        inputName='textThree'
                        inputType='text' 
                        inputStyle={{display:'flex', justifyContent:'space-around',alignItems:'top',width:'300px', marginBottom:'15px'}}

                        inputFieldStyle={{width:'50%', height:'20px', fontSize:'15px'}}               
                    /> 
                    <MyInput
                        labelText='Web link'
                        handleChange={e=>setWebLink(e.target.value)}
                        inputValue={webLink}
                        inputName='webLink'
                        inputType='text' 
                        inputStyle={{display:'flex', justifyContent:'space-around',alignItems:'top',width:'300px', marginBottom:'15px'}}

                        inputFieldStyle={{width:'50%', height:'20px', fontSize:'15px'}}               
                    /> 
                                                         
                </div>
                <div >
                    <div  style={{display:'flex'}}>
                        <MyInput
                            labelText='Color'
                            handleChange={e=>setOneColor(e.target.value)}
                            inputValue={oneColor}
                            inputName='title'
                            inputType='text' 
                            inputStyle={{display:'flex', justifyContent:'space-around',alignItems:'top',width:'300px'}}

                            inputFieldStyle={{width:'50%', height:'20px', fontSize:'15px'}}               
                        />       
                        <MyInput
                            labelText='Background Color'
                            handleChange={e=>setOneBGColor(e.target.value)}
                            inputValue={oneBGColor}
                            inputName='title'
                            inputType='text' 
                            inputStyle={{display:'flex', justifyContent:'space-around',alignItems:'top',width:'300px'}}

                            inputFieldStyle={{width:'50%', height:'20px', fontSize:'15px'}}     
                        />     
                    </div>
                    <MyRadio
                        options={['Repeating', 'One Time','Moon Day', 'Canceled']}
                        optionsSelected={setOneType}
                        selection={oneType}
                        radioStyle={{height:'40px', margin:'0',marginBottom:'20px'}}
                    />

                    <MyCheckBoxes
                        options={weekDays}
                        setSelections={setDaysOfWeek}
                        selections={daysOfWeek}
                    />
                </div> 
            </div>
            <div  className='button-container'>
                <MyButton
                    button_function={addNewRecord}
                    button_text='Add New Record'
                />
                <MyButton
                    button_function={Logout}
                    button_text='Logout'
                />                                 
            </div>
        </div>
    )
}