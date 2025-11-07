import style from '@/styles/stayInformed.module.css'

export default function StayInformedSection(){
    return (
        <section
            className={style.stayInformedSection}
        >   
            <div className={style.stayInformedWhiteBlock}/>
            <form 
                action=""
                className={style.stayInformedForm}
            >
                <h2
                    className={style.stayInformedHeading}
                >
                    Stay Informed
                </h2>
                <p
                    className={style.stayInformedText}
                >
                    We have many great things to come and we want to make sure you are aware of our new offerings.
                </p>
                <p
                    className={style.stayInformedText}
                >
                    Please join to be in the know as we roll out new services, programs, events, and resources.
                </p>

                <input 
                    type="text" 
                    placeholder='First Name'
                    className={style.stayInformedInput}
                />

                <input 
                    type="text" 
                    placeholder='Last Name'
                    className={style.stayInformedInput}
                />

                <input 
                    type="email" 
                    placeholder='Email'
                    className={style.stayInformedInput}
                />

                <button
                    className={style.stayInformedButton}
                >
                    Subscribe
                </button>
            </form>
        </section>
    )
}