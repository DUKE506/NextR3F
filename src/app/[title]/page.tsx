'use client'
import Link from "next/link"
import styles from './page.module.css'
import dynamic from 'next/dynamic'
import { ReactNode } from "react"

interface PageProps {
    params:{title:string}
}

// 동적 임포트로 변경됨
const Box3D = dynamic(() => import('../_components/Box3D/Box3D'), {
    ssr: false,
    loading: () => <div>Loading 3D Model...</div>
  })



const Page = ({params} : PageProps) => {
    console.log(params.title)
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