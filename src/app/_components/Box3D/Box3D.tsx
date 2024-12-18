'use client'
import { Environment, OrbitControls, useGLTF } from "@react-three/drei"
import { Canvas, useLoader } from "@react-three/fiber"
import { Suspense, useEffect, useState } from "react"
import { GLTFLoader } from "three/examples/jsm/Addons.js"
import styles from './Box3D.module.css'

interface Box3DProps{
    fileName : string
}

const Box3D = ({fileName }: Box3DProps) => {
    
    const gltf = useLoader(GLTFLoader, `./${fileName}.glb`)
    

    return(
        <>
        {
            gltf ? 
            <Suspense fallback={'Loading....'}>
            <Canvas 
            camera={{ position: [0, 5, 20] }}>
                
                    <OrbitControls/>
                    <Environment preset="sunset"/>
                    <primitive object={gltf.scene} />
                    <axesHelper scale={30}/>
                
            </Canvas>
        </Suspense>
        :
            <span>
                파일이 존재하지 않습니다.
            </span>
        }
            
        </>
        
    )
}

export default Box3D