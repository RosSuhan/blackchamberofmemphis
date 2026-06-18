import ResourcesPage from '../resources/ResourcesPage'
import style from './sandbox.module.css'


export default async function Sandbox(){
    return(
        <main
            className={style.pageHeroSection}
        >
            <ResourcesPage/>
        </main>
    )
}