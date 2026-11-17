

export default function BottomBanner()
{

    return(

                <div className='bottom-banner'>
                    <div style={{margin:'0 2%'}}>Follow us</div>
                    <div className='image-link'>
                        <a href='https://www.instagram.com/samatvayogapdx?cplk=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr'>

                            <img 
                                src='/images/instagram.jpg'
                                width='35vw'
                                height='100%'/>            
                        </a>
                    </div>

                    <div className='image-link'>
                        <a href='https://www.facebook.com/profile.php?fb_profile_edit_entry_point=%7B%22click_point%22%3A%22edit_profile_button%22%2C%22feature%22%3A%22profile_header%22%7D&id=61567526107166&sk=about'>

                            <img 
                                src='/images/facebook.png'
                                width='35vw'
                                height='100%'/>                  
                        </a>
                    </div>     

                    <div className='image-link'>
                        <a href='https://www.linkedin.com/in/samatva-yoga-12ab7a445 '>

                            <img 
                                src='/images/linked-in.png'
                                width='35vw'
                                height='100%'/>                 
                        </a>
                    </div>  
                    <div className='image-link'>
                        <a href='getting-started'>Intake Form</a>
                    </div>                      
                </div>
    )
}