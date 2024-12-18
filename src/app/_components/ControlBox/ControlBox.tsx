'use client'
import { useEffect, useState } from "react";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";

export const ControlBox = () => {
    return (
        <div className={'w-1/4 bg-gray-700 h-full px-4'}>
            <span className="flex justify-center items-center py-4 text-lg font-bold text-white">
                Control Box
            </span>
            <ColorInput title="test" value="#000000"/>
            <ColorInput title="test" value="#000000"/>
        </div>
    )
}


/**
 * 항목명
 * 값 // 최소값 min, 최대값 max, 증가값 step, 현재값 value
 * type : color, number
 */
interface ColorInput{
    title : string;
    value : string;
}
const ColorInput = ({title, value} : ColorInput) => {

    const [color, setColor] = useColor(value);
    const [pickerActive, setPickerActive] = useState<boolean>(false);
    

    //색상 변경
    const handleColorInput = (e : React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
    }

    return(
        <>
            <div className="flex p-4 gap-4 items-center">
                <span className="flex justify-center items-center text-white text-sm">
                    {title}
                </span>
                <div 
                className='w-10 h-10 aspect-square rounded-lg hover:cursor-pointer' 
                style={{backgroundColor:color.hex}}
                onClick={()=>setPickerActive(!pickerActive)}
                />
                <input className='bg-gray-400 p-2 rounded-md text-sm' value={color.hex} name="color" onChange={(e)=>handleColorInput(e)}/>
            </div>
            {
                pickerActive
                ?
                <div>
                    <ColorPicker 
                    height={150} // 높이 px단위로 설정 (디폴트: 200)
                    hideInput={["rgb", "hsv"]}
                    color={color} 
                    onChange={setColor}/>
                </div>
                
                :
                null
            }
        </>
        
    )
}