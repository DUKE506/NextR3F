import Box3D from "./_components/Box3D/Box3D";
import { Card, CardProps } from "./_components/Card/Card";
import {ControlBox} from "./_components/ControlBox/ControlBox";
import styles from './page.module.css'

const CardData:CardProps[] = [
  {
    title : 'House',
    desc : '일반적인 단독주택 구조를 3d형태로 변환하였음',
    url : '',
  },
  {
    title : 'Apartment',
    desc : '아파트 구조를 3d형태로 변환하였음',
    url : '',
  },
  {
    title : 'Keyboard',
    desc : '키보드 형태를 3d형태로 변환하였음',
    url : '',
  },
  {
    title : 'Laptop',
    desc : '노트북 형태를 3d형태로 변환하였음',
    url : '',
  },
  {
    title : 'Mouse',
    desc : '마우스 형태를 3d형태로 변환하였음',
    url : '',
  },
  {
    title : 'SmartPhone',
    desc : '스마트폰 형태를 3d형태로 변환하였음',
    url : '',
  },
  {
    title : 'Tablet',
    desc : '태브릿 형태를 3d형태로 변환하였음',
    url : '',
  },
  {
    title : 'Wallet',
    desc : '지갑 형태를 3d형태로 변환하였음',
    url : '',
  },
  {
    title : 'Tree',
    desc : '나무 형태를 3d형태로 변환하였음',
    url : '',
  },
]

export default function Home() {
  
  return (
    <div className="h-full flex">
      <div className={styles.container}>
        <span className={styles.title}>
          Welcome Next 3D viewer with R3F
        </span>
        <div className={`${styles.grid}`}>
          {
            CardData.map((card,idx) => {
              return(
                <Card
                key={idx}
                title={card.title}
                desc={card.desc}
                url={card.url}
                />
              )
            })
          }
        </div>
      </div>
      <ControlBox/>
    </div>
    
  );
}
