import { Outlet } from "react-router";
import Banner from '../../components/Banner/banner';
import BottomBanner from "../../components/bottom-banner/bottom-banner";

export default function ClassInformation(){
    return (
        <div >
            <Banner/>
            <div className='main-content'>
                <div className='sub-title '>Class Information</div>

                <div style={{
                    margin:'0vh 5vw',
                    fontSize:'25px',
                    textAlign:'center'
                }}>
                    <p style={{fontSize:'35px'}}>Welcome!</p>
                    <p>
                        The Samatava Yoga shala is a community gathering space that offers personalized instruction to support new students and 
                        seasoned practitioners in their Ashtanga yoga practice.  
                    </p>
                    <p>
                        The Samatva Yoga shala convenes each Tuesday, Wednesday and Thursday mornings at 6:00 a.m. to 7:30 a.m. 
                        There are exceptions to this schedule on <a href='/moon-days'>Moon Days</a> and <a href='/class-schedule'>scheduled breaks.</a>
                    </p> 
                    <p>
                        Classes are held in the upper lobby of the <a href=' https://ecotrust.org/portland-spaces/natural-capital-center/'>Jean Vollum Natural Capital Center (EcoTrust)</a>
                    </p>
                    <a style={{display:'block'}} href=' https://maps.app.goo.gl/bMohJk5unD7SyHxm7' target='_blank'>
                        <div>721 NW 9th Avenue</div>
                        <div>Portland OR 97209</div>
                    </a>
                    <p>
                        This building has secured access. Street parking is available in the neighborhood. 
                    </p>

                </div>
                <BottomBanner/>
            </div>
        </div>
    )
}