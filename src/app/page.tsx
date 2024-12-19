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
    title : 'Monitor',
    desc : '모니터 형태를 3d형태로 변환하였음',
    url : '',
  },
  {
    title : 'Benz',
    desc : '벤츠 형태를 3d형태로 변환하였음',
    url : '',
  },
  {
    title : 'Office',
    desc : '마우스 형태를 3d형태로 변환하였음',
    url : '',
  },
  {
    title : 'Forge',
    desc : '대장간 형태를 3d형태로 변환하였음',
    url : '',
  },
  {
    title : 'Alien',
    desc : '에일리언 형태를 3d형태로 변환하였음',
    url : '',
  },
  {
    title : 'Buffet',
    desc : '선반 형태를 3d형태로 변환하였음',
    url : '',
  },
]

export default function Home() {
  
  return (
    <div className="h-full">
      <div className='h-full flex flex-col gap-8 items-center p-8'>
        <span className='font-bold text-green-900 text-2xl'>
          Welcome to Next 3D viewer with R3F
        </span>
        <div className={styles.grid}>
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
    </div>
    
  );
}
