"use client"
import { motion, MotionValue, useSpring, useTransform } from "framer-motion"

import { useEffect, useState } from "react";

export default function Home() {
  const [timer,settimer]=useState(0)
  return (
    <div className=" flex items-center  justify-center gap-x-8 h-screen w-full">
      <div className=" gap-x-2 flex-1 flex justify-end items-center">
      time:{timer}
      <input value={timer}
      type="number"
      min={0}
      className=" text-black w-20 p-1 rounded-sm"
      onChange={(e)=>settimer(+e.target.value)}
      />
      </div>
      <div className=" flex-1  flex justify-start items-center">
        <Counter value={timer} />
      </div>
    </div>
  );
}

 const Counter = ({value}:{value:number}) => {
  let animateval=useSpring(value)
  useEffect(
    () => {
      animateval.set(value)
    },[animateval,value]
  )
  return <div className=" flex overflow-hidden ring-2 h-6 ring-red-500">
    
    <div className=" w-6 relative">
      {[...Array(10)].map((_,i) => //Array(10)makes an array of 10 elements with value 0
        (<Number place={100} mv={animateval} number={i} key={i}/>))
      }
      </div><div className=" w-6 relative">
      {[...Array(10)].map((_,i) => //Array(10)makes an array of 10 elements with value 0
        (<Number place={10} mv={animateval} number={i} key={i}/>))
      }
      </div>
      <div className=" w-6 relative">
      {[...Array(10)].map((_,i) => //Array(10)makes an array of 10 elements with value 0
        (<Number place={1} mv={animateval} number={i} key={i}/>))
      }
      </div>
      </div>;
}



const Number = ({place,mv,number}:{place:number,mv:MotionValue,number:number})=>{
let y=useTransform(mv,latest=>{
 let height=24
 let placevalue=(latest/place)%10
 let offset=(10+number-placevalue)%10
let memo= offset* height
if(offset>5){
  memo-=10*height
}
return memo
})
  return(
  <motion.div style={{y}} className=" absolute inset-0 flex justify-center items-center">
  {number}
  </motion.div>
)
}