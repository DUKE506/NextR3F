import Link from "next/link"
import Box3D from "../_components/Box3D/Box3D"
import styles from './page.module.css'
interface PageProps {
    params:{title:string}
}


const Page = ({params} : PageProps) => {

    return(
        <div className={styles.container}>
            <Link href='/'>
                <div className={styles.btn}>
                    목록
                </div>
            </Link>
            <Box3D fileName={params.title}/>
        </div>
    )
}


export default Page