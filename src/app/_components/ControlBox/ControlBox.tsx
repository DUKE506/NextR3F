'use client'
import { useCallback, useState } from "react";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";
import * as THREE from 'three'

interface ControlBoxProps{
    meshes? : THREE.Mesh[]
}

export const ControlBox = ({meshes} : ControlBoxProps) => {
    return (
        <div className={'w-96 bg-gray-700 h-full px-4 overflow-hidden'}>
            <span 
            className="flex justify-center items-center 
            py-4 text-lg font-bold text-white
            ">
                Control Box
            </span>
            {/* grid grid-cols-col-100 */}
            <div className="flex flex-col gap-2 h-full overflow-auto scrollbar-hide py-4">
            {
                meshes?.map((mesh,idx)=>{
                    //material이 배열이 아니라는것을 가정함
                    return <ColorInput 
                    key={idx}
                    mesh={mesh}
                    />
                })
            }
            </div>
        </div>
    )
}


/**
 * 항목명
 * 값 // 최소값 min, 최대값 max, 증가값 step, 현재값 value
 * type : color, number
 */
interface ColorInput{
    mesh : THREE.Mesh
}
const ColorInput = ({mesh} : ColorInput) => {
    const initialHex = mesh && mesh.material instanceof THREE.MeshStandardMaterial
    ? `#${mesh.material.color.getHexString()}`
    : '#000000';
    const [color, setColor] = useColor(initialHex);
    const [pickerActive, setPickerActive] = useState<boolean>(false);

    const handleChanageColor = useCallback((newColor:IColor)=>{
        (mesh.material as THREE.MeshStandardMaterial).color.set(newColor.hex);
        setColor(newColor)
    },[])

    return(
        <>
            <div className="grid grid-cols-item-2 gap-4">
                <span className="flex items-center text-white text-s">
                    {
                    Array.isArray(mesh.material)
                    ?
                    null
                    :
                    mesh.material.name
                    }
                </span>
                <div className="grid grid-cols-item-2 gap-x-2">
                    <div 
                    className='w-full h-full aspect-square rounded-md hover:cursor-pointer' 
                    style={{backgroundColor:color.hex}}
                    onClick={()=>setPickerActive(!pickerActive)}
                    />
                    <input className='bg-gray-400 p-2 rounded-md text-s' value={color.hex} name="color"/>
                </div>
                
            </div>
            {
                pickerActive
                ?
                <div>
                    <ColorPicker
                    height={150} // 높이 px단위로 설정 (디폴트: 200)
                    hideInput={["rgb", "hsv"]}
                    color={color} 
                    onChange={handleChanageColor}/>
                </div>
                
                :
                null
            }
        </>
        
    )
}


interface IColor {
    hex: string
    rgb: IColorRgb
    hsv: IColorHsv
}

interface IColorRgb {
    r: number
    g: number
    b: number
    a: number
}

interface IColorHsv {
    h: number
    s: number
    v: number 
    a: number
}


// const rgbToHsv = (r: number, g: number, b: number): IColorHsv => {
//     const max = Math.max(r, g, b);
//     const min = Math.min(r, g, b);
//     const delta = max - min;

//     let h = 0;
//     let s = max === 0 ? 0 : delta / max;
//     let v = max;

//     if (delta > 0) {
//         if (max === r) {
//         h = ((g - b) / delta) % 6;
//         } else if (max === g) {
//         h = (b - r) / delta + 2;
//         } else {
//         h = (r - g) / delta + 4;
//         }
//         h *= 60;
//         if (h < 0) h += 360;
//     }

//     return {
//         h: Math.round(h),
//         s: parseFloat(s.toFixed(2)),
//         v: parseFloat(v.toFixed(2)),
//         a: 1,
//     };
// };