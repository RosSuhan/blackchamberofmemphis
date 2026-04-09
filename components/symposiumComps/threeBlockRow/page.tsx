import style from './threeBlockRow.module.css'
export default function ThreeBlockRow(){
    return (
        <section
            className={style.threeBlockSection}
        >
            <div
                className={style.threeBlockRow}
            >
                <div
                    className={style.block}
                    style={{background:"#977A66", color: "#121523"}}
                >
                    <p
                        className={style.blockText}
                    >
                        250+ <br/> Attendees
                    </p>
                </div>
                <div
                    className={style.block}
                    style={{background:'#D8BCA5'}}
                >
                    <p
                        className={style.blockText}
                    >
                        Entrepreneurs <br/> + <br/> Executives
                    </p>
                </div>
                <div
                    className={style.block}
                    style={{background:"#a1995f"}}
                >
                    <p
                        className={style.blockText}
                    >
                        Networking <br/> + <br/> Access
                    </p>
                </div>
            </div>
        </section>
    )
}