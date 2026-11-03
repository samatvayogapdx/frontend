import Banner from '../../components/Banner/banner';

export default function FormSent(){
    return(
        <div >
            <Banner/>
            <div className='main-content'>
                <div className='sub-title '>Intake Form</div>
                <div className='intake-form'>Form has been sent.
                    <p>
                        <a target="_blank" href='https://calendar.app.google/iJjJDKeoaQDnsteG6'>
                            Please visit my calendar to set up your first visit.
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}