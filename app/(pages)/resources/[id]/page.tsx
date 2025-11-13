'use client'
import style from '@/styles/resourceIndPage.module.css'
import { useParams } from 'next/navigation'
import { resources } from '@/lib/resources'

export default function ResourceBlogPage(){
    const params = useParams();
    const id = params?.id as string;

    const selectedBlog = resources.find(i => i.id === id);

    if(!id) return null;
    if(!selectedBlog) {return <p>No Blog Found.</p>}
    return(
        <main
            className={style.resourceBlogPage}
        >
            <iframe 
                src={selectedBlog.file} 
                frameBorder="0"
                width={"80%"}
                className={style.blogFile}
            />
        </main>
    )
}