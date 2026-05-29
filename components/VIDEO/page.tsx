import style from './video.module.css'

export default function VideoBlock(){
    return (
        <div
            className={style.videoBlock}
        >
            <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/ThCocbBHMM8?si=mVDMApVnyXkw91oK" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                className={style.video}
                ></iframe>
        </div>
    )
}