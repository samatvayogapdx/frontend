import { Outlet } from "react-router";
import Banner from '../../components/Banner/banner';

export default function ClassVenue(){
    return (
        <div >
            <Banner/>
            <div className='main-content'>
                <div className='sub-title '>The Ecotrust Building: A Landmark of Sustainability</div>
                    <div className='container'>
                        <img src='public/images/ECO-trust.jpg' className='wrap-image-right' width='475x' height='375px'/>
                        <div className='text-block'>
                            <p>
                                The Ecotrust Building, officially known as the Jean Vollum Natural Capital Center, is a landmark of sustainable 
                                architecture in Portland’s Pearl District. Originally constructed in 1895 as a warehouse, the historic brick building 
                                was renovated in 2001 to become a center for environmental sustainability, community engagement, and responsible 
                                business practices.

                            </p>
                            <p>
                                The renovation preserved much of the building’s historic character while incorporating environmentally conscious 
                                features, including reclaimed materials, energy-efficient systems, natural lighting, solar panels, and a green roof. 
                                It became one of the first historic renovations in the United States to receive LEED Gold certification, recognizing 
                                its commitment to sustainable design.                                
                            </p>
                            <p>
                                Today, the building houses organizations and businesses dedicated to environmental stewardship, social equity, 
                                and economic sustainability. Its gathering spaces and event venues encourage collaboration, education, and community 
                                involvement.                                
                            </p>                                                       

                            <p>
                                The Ecotrust Building demonstrates how historic structures can be adapted to meet contemporary needs while reducing 
                                environmental impact. By combining architectural preservation with innovative sustainable practices, it reflects 
                                Portland’s commitment to environmental responsibility and community well-being. More than a renovated warehouse, 
                                it stands as an example of how thoughtful design can create a healthier, more sustainable urban future.                
                            </p>

                        </div>
                    </div>
            </div>
        </div>
    )
}