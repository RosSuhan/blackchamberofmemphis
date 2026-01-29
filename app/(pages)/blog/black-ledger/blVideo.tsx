import style from '@/styles/blackLedgerStyles/blVideo.module.css'


export default function BlVideo(){
    return (
        <section
            className={style.videoSection}
        >
            <iframe 
                src="https://drive.google.com/file/d/17hpDbE29aZb3gIDZgMfoQQCqYBh-7q32/view?usp=sharing" 
                width="330" 
                height="400" 
                frameBorder="0" 
                allow="local-network-access *; clipboard-read *; clipboard-write *" 
                allowFullScreen 
            ></iframe>
        </section>
    )
}