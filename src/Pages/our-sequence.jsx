import { Outlet } from 'react-router';
import Banner from '../components/Banner/banner';

export default function OurSequence(){
    return (
        <div >
            <Banner/>
                <div className='main-content'>
                    <div className='sub-title '>Primary Series</div>

                    <div className='container'>

                        <div className='text-block'>
                            <ol style={{listStyleType:'none'}}>
                                <li style={{marginTop:'10px'}}>Sun Salutations 
                                    <ol style={{listStyleType:'disc'}}>
                                        <li>Sūrya Namaskāra A  - Sun Salutation A</li>
                                        <li>Sūrya Namaskāra B  - Sun Salutation B</li>
                                    </ol>
                                </li>
                                <li  style={{marginTop:'10px'}}>Standing Postures
                                    <ol style={{listStyleType:'disc'}}>
                                        <li>Padāṅguṣṭhāsana (पादाङ्गुष्ठासन) - Big Toe Pose</li> 
                                        <li>Padahastāsana (पादहस्तासन) -Hands Under Feet Pose</li> 
                                        <li>Utthita Trikoṇāsana (उत्थित त्रिकोणासन) -Extended Triangle Pose</li> 
                                        <li>Parivṛtta Trikoṇāsana (परिवृत्त त्रिकोणासन) -Revolved Triangle Pose</li> 
                                        <li>Utthita Pārśvakoṇāsana (उत्थित पार्श्वकोणासन) -Extended Side Angle Pose</li> 
                                        <li>Parivṛtta Pārśvakoṇāsana (परिवृत्त पार्श्वकोणासन) -Revolved Side Angle Pose</li> 
                                        <li>Prasarita Pādottānāsana (प्रसारित पादोत्तासन) A, B, C, D -Wide-Legged Forward Bend</li> 
                                        <li>Utthita Hasta Padāṅguṣṭhāsana (उत्थित हस्त पादाङ्गुष्ठासन) A, B, C, D -Extended Hand to Big Toe Pose</li> 
                                        <li>Ardha Baddha Padmottānāsana (अर्ध बद्ध पद्मोत्तासन) -Half Bound Lotus Forward Bend</li> 
                                        <li>Utkaṭāsana (उत्कटासन) -Chair Pose</li> 
                                        <li>Vīrabhadrāsana (वीरभद्रासन) A & B -Warrior Pose I and II [1]</li> 
                                    </ol>
                                   
                                </li>

                                <li  style={{marginTop:'10px'}}>Seated Postures
                                    <ol style={{listStyleType:'disc'}}>
                                        <li>Daṇḍāsana (दण्डासन) -Staff Pose</li> 
                                        <li>Paścimottānāsana (पश्चिमोत्तासन) A, B, C -Seated Forward Bend</li> 
                                        <li>Pūrvottānāsana (पूर्वोत्तासन) -Intense East Stretch Pose</li> 
                                        <li>Ardha Baddha Padma Paścimottānāsana (अर्ध बद्ध पद्म पश्चिमोत्तासन) -Half Bound Lotus Forward Bend</li> 
                                        <li>Tiraṅga Mukha Eka Pāda Paścimottānāsana (तिरङ्ग मुख एक पाद पश्चिमोत्तासन) -One-Legged Forward Bend</li> 
                                        <li>Jānu Śīrṣāsana (जानु शीर्षासन) A, B, C -Head-to-Knee Pose</li> 
                                        <li>PMarīcāsana (मरीचासन) A, B, C, D -Sage Marichi Pose</li> 
                                        <li>Navāsana (नावासन) -Boat Pose</li> 
                                        <li>Bhuja Pīḍāsana (भुज पीडासन) -Shoulder Pressure Pose</li> 
                                        <li>Kūrmāsana (कूर्मासन) -Tortoise Pose</li> 
                                        <li>Supta Kūrmāsana (सुप्त कूर्मासन) -Sleeping Tortoise Pose</li> 
                                        <li>Garbha Piṇḍāsana (गर्भ पिण्डासन) -Embryo in the Womb Pose</li> 
                                        <li>KuKKuṭāsana (कुक्कुटासन) -Rooster Pose</li> 
                                        <li>Baddha Koṇāsana (बद्ध कोणासन) A & B -Bound Angle Pose</li> 
                                        <li>Upaviṣṭha Koṇāsana (उपविष्ठ कोणासन) A & B -Seated Wide Angle Pose</li> 
                                        <li>Supta Koṇāsana (सुप्त कोणासन) -Reclining Angle Pose</li>  
                                        <li>Supta Padāṅguṣṭhāsana (सुप्त पादाङ्गुष्ठासन) -Reclining Hand-to-Big-Toe Pose</li> 
                                        <li>Ubhaya Padāṅguṣṭhāsana (उभय पादाङ्गुष्ठासन) -Both Big Toes Pose</li> 
                                        <li>Ūrdhva Mukha Paścimottānāsana (ऊर्ध्व मुख पश्चिमोत्तासन) -Upward-Facing Forward Bend</li> 
                                        <li>Setu Bandhāsana (सेतु बन्धासन) -Bridge Pose </li>                                                                                 
                                    </ol>
                                </li>

                                <li  style={{marginTop:'10px'}}>Finishing Sequence
                                    <ol style={{listStyleType:'disc'}}>
                                        <li>Ūrdhva Dhanurāsana (ऊर्ध्व धनुरासन) -Wheel / Bow Pose</li> 
                                        <li>Sālamba Sarvāṅgāsana (सालम्ब सर्वाङ्गासन) -Supported Shoulderstand</li> 
                                        <li>Halāsana (हलासन) -Plow Pose</li> 
                                        <li>Karṇapiḍāsana (कर्णपीडासन) -Ear Pressure Pose</li> 
                                        <li>Ūrdhva Padmāsana (ऊर्ध्व पद्मासन) -Upward Lotus Pose</li> 
                                        <li>Piṇḍāsana (पिण्डासन) -Embryo in Lotus Pose</li> 
                                        <li>Matsyāsana (मत्स्यासन) -Fish Pose</li> 
                                        <li>Uttāna Pādāsana (उत्तान पादासन) -Extended Leg Pose</li> 
                                        <li>Śīrṣāsana (शीर्षासन) A & B -Headstand</li> 
                                        <li>Baddha Padmāsana (बद्ध पद्मासन) -Bound Lotus Pose</li> 
                                        <li>Yoga Mudrā (योग मुद्रा) -Psychic Union Pose</li> 
                                        <li>Padmāsana (पद्मासन) -Lotus Pose</li> 
                                        <li>Utplutiḥ (उत्प्लुतिः) -Lifted Lotus / Scale Pose</li> 
                                        <li>Śavāsana (शवासन) -Corpse Pose</li> 
                                                                               
                                    </ol>                                    
                                   
                                </li> 

                            </ol>
                        
                        </div>                    
                    </div>
                </div>
            <Outlet />
        </div>
    )
}