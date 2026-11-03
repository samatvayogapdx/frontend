import { Outlet } from "react-router";
import Banner from '../../components/Banner/banner';

export default function ClassInformation(){
    return (
        <div >
            <Banner/>
            <div className='main-content'>
                <div className='sub-title '>Class Information</div>
                <div className='container-bigger-font'>
                    <p>
                        The Samatva Yoga shala convenes each Tuesday, Wednesday and Thursday mornings at 6:00 a.m. to 7:30 a.m. 
                        There are exceptions to this schedule on <a href='/moon-days'>Moon Days</a> and <a href='/class-schedule'>scheduled breaks.</a>
                    </p> 
                    <p>
                        Classes are held in the upper lobby of the Ecotrust Building
                    </p>
                    <a style={{display:'block'}} href=' https://maps.app.goo.gl/bMohJk5unD7SyHxm7' target='_blank'>
                        <div>721 NW 9th Avenue</div>
                        <div>Portland OR 97209</div>
                    </a>
                    <p>
                        This building has secured access. Street parking is available in the neighborhood. 
                    </p>
                    <div style={{display:'block'}}>
                        <div>About / Pricing:</div>
                        <div>$59.00 monthly membership - all classes</div>
                        <div>$599.00 annual membership - all classes</div>
                    </div>
                </div>
            </div>
        </div>
    )
}