import { Outlet } from "react-router";
import Banner from '../../components/Banner/banner';

export default function ClassTypes(){
    return (
        <div >
            <Banner/>
            <div className='main-content'>
                <div className='sub-title '>Class Types</div>
                <div className='container-bigger-font'>
                    <p>
                        A <strong>self-guided practice</strong> is a silent group experience where each student moves through the sequence at 
                        their own pace. The teacher offers individual instruction and guidance in a community setting. The 
                        sequence is taught one asana at a time at a rate of progression that can be sustained by the student 
                        for sequence memorization and physical stability at their own level of ability.
                    </p>

                    <p>
                        At Samatva Yoga, self-guided practice classes are held on Tuesdays and Thursdays, except on Moon days, holidays, 
                        and scheduled breaks.
                    </p>

                    <p>A <strong>led primary</strong> class is a teacher-led group experience. The ‘Yog Chikitsa’ or the ‘Primary Series’ sequence of 
                        asanas is practiced by the group to Sanskrit Vinyasa counting by the teacher at an even pace. The student is 
                        expected to be familiar with the asana sequence and Sanskrit names of the asanas, and everyone in the group 
                        moves together in sync.
                    </p>

                    <p>At Samatva Yoga, led primary classes are held on Wednesdays, except on Moon days, holidays, and scheduled breaks.</p>
                    
                    <p>
                        On <strong>Moon Days</strong>, per tradition, there are no regular classes. Occasionally, there may be special classes on offer, 
                        see class schedule.
                    </p>

                </div>                
                    
            </div>
        </div>
    )
}