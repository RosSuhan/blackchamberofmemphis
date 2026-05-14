import style from './CategoryContactRow.module.css'

type CategoryContactRowProp = {
    contact? : string
}

export default function CategoryContactRow({}: CategoryContactRowProp){
    return(
        <section
            className={style.categoryContactRowSection}
        >
            <div
                className={style.catRowBlock}
            >
                Category Block
            </div>
            <div
                className={style.contactRowBlock}
            >
                Contact Block
            </div>
        </section>
    )
}