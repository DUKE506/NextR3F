import Link from 'next/link';
import styles from './Card.module.css'

export interface CardProps {
    title? : string;
    desc? : string;
    url? : string;
}

export const Card = ({title, desc, url} : CardProps) => {

    return(
        <div className={styles.card}>
            <Link href={`/${title}`}>
            <div className={styles.img}>
                이미지 영역
            </div>
            <div className={`${styles.content} ${styles.col}`}>
                <span className={styles.title}>
                    {title}
                </span>
                <span className={styles.desc}>
                    {desc}
                </span>
            </div>
            </Link>
        </div>
    )
}

