import { Outlet } from "react-router";
import Banner from '../../components/Banner/banner';

export default function AboutTeacher(){
    return (
        <div >
            <Banner/>
            <div className='main-content'>
                <div className='sub-title '>About Deepa</div>

                <div className='container'>
                    <img src='/images/deepa.jpg' className='wrap-image-right' width='475x' height='400px'/>
                    <div className='text-block'>
                        <p>
                            I was born into and raised in a family and culture rooted in yogic practices in India. Although I didn’t fully understand it 
                            as a child, I have, in many ways, been a lifelong practitioner of yoga.
                        </p>

                        <p>
                            I received my formal yoga teacher training at the International Sivananda Vedanta Centre at Sivananda Kutir in Netala, Uttarkashi, 
                            India, in the Himalayas, in 2017. The training was a month-long, residential, intensive, full-time program at an ashram. I have 
                            also completed additional teacher training with David Swenson (2019, Eugene, OR) and David Garrigues (2022, Portland, OR).
                        </p>

                        <p>
                            After moving from India to Portland, Oregon, in the summer of 2017, I was delighted—and pleasantly surprised—to discover 
                            that Portland was buzzing with yoga studios! Since then, I have taught yoga in Chennai, India, at Yoga on Yamhill in Portland, 
                            and at Movement Portland, a rock-climbing gym.
                        </p>


                        <p>
                            I am now excited to share Ashtanga Yoga with the Portland community. I warmly welcome you to the Samatva Yoga sangha—our 
                            community of practice!                
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}