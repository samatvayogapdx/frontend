import { Outlet } from 'react-router';
import Banner from '../components/Banner/banner';

export default function HomePage(){
    return (
        <div >
            <Banner/>
                <div className='main-content'>
                    <div className='sub-title '>Welcome to Samatva Yoga</div>
                    <div style={{margin:'auto', width:'100%', display:'flex', justifyContent:'center'}}>
                        <img src='/images/home-page-image.jpg' width='475x' height='450px'/>
                    </div>
                    
                </div>
            <Outlet />
        </div>
    )
}