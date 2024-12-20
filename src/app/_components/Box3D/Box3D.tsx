'use client'
import { Environment, OrbitControls, useGLTF } from "@react-three/drei"
import { Canvas} from "@react-three/fiber"
import { Dispatch, SetStateAction, Suspense, useEffect, useState } from "react"
import * as THREE from 'three'
import { ControlBox } from "../ControlBox/ControlBox"
import React from "react"
interface Box3DProps{
    fileName : string
}


const Model = ({fileName, setCubes}:{fileName: string; setCubes:Dispatch<SetStateAction<THREE.Mesh[]>>})  => {
    const [fileExists, setFileExists] = useState<boolean | null>(null)
    useEffect(() => {
        const checkFileExists = async () => {
          try {
            // 파일이 존재하는지 확인
            const response = await fetch(`/models/${fileName}.glb`)
            if (response.ok) {
                console.log('파일존재')
              setFileExists(true)  // 파일이 존재하면 true
            } else {
                console.log('파일존재X')
              setFileExists(false)  // 파일이 존재하지 않으면 false
            }
          } catch (error) {
            console.error("Error checking file:", error)
            setFileExists(false)  // 네트워크 오류 등으로 파일을 체크할 수 없을 경우 false 처리
          }
        }
    
        checkFileExists()
      }, [fileName])
    const { scene } = useGLTF(`/models/${fileName}.glb`)

    useEffect(()=>{
        //모델 객체 순회하면서 3dObject반환
        scene.traverse((obj)=>{
            //mesh Object만 state에 담음
            if(obj instanceof THREE.Mesh){
                setCubes(prev => ([...prev,obj]))
            }
        })
    },[scene])

    return scene ? <primitive object={scene} /> : null
}



const Box3D = ({fileName }: Box3DProps) => {
    const [cubes, setCubes] = useState<THREE.Mesh[]>([])

    // const gltf = useLoader(GLTFLoader, `/models/${fileName}.glb`)

    // useEffect(()=>{
    //     //모델 객체 순회하면서 3dObject반환
    //     gltf.scene.traverse((obj)=>{
    //         //mesh Object만 state에 담음
    //         if(obj instanceof THREE.Mesh){
    //             setCubes(prev => ([...prev,obj]))
    //         }
    //     })
    // },[gltf.scene])

    return(
        <>
            <div className="flex w-full h-screen">
            {/* <ErrorBoundary fallback={<div>Error loading 3D model</div>}> */}
                <Suspense fallback={'Loading....'}>
                    <Canvas 
                    camera={{ position: [0, 5, 20] }}>
                        
                            <OrbitControls/>
                            <Environment preset="sunset"/>
                            <Model fileName={fileName} setCubes={setCubes}/>
                            <axesHelper scale={30}/>
                        
                    </Canvas>
                </Suspense>
                {/* </ErrorBoundary> */}
                <ControlBox meshes={cubes}/>
            </div>

        </>
        
    )
}


// ErrorBoundary 컴포넌트 추가
// class ErrorBoundary extends React.Component<{children: React.ReactNode, fallback: React.ReactNode}> {
//     state = { hasError: false }
    
//     static getDerivedStateFromError(error: any) {
//         console.log(error)
//         return { hasError: true }
//     }
    
//     componentDidCatch(error: any, errorInfo: any) {
//         console.log(error)
//         console.error('Error loading 3D model:', error, errorInfo)
//     }
    
//     render() {
//         if (this.state.hasError) {
//             return this.props.fallback
//         }
//         return this.props.children
//     }
// }


export default Box3D