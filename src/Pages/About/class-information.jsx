import { Outlet } from "react-router";
import Banner from '../../components/Banner/banner';

export default function ClassInformation(){
    return (
        <div >
            <Banner/>
            <div className='main-content'>
                <div className='sub-title '>Class Information</div>
            </div>
        </div>
    )
}