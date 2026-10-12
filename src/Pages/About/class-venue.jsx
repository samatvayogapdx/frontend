import { Outlet } from "react-router";
import Banner from '../../components/Banner/banner';

export default function ClassVenue(){
    return (
        <div >
            <Banner/>
            <div className='main-content'>
                <div className='sub-title '>Class Venue</div>
            </div>
        </div>
    )
}