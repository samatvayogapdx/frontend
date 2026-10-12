import { Outlet } from "react-router";
import Banner from '../../components/Banner/banner';

export default function AboutTeacher(){
    return (
        <div >
            <Banner/>
            <div className='main-content'>
                <div className='sub-title '>About Deepa</div>
            </div>
        </div>
    )
}