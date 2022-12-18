import React from 'react'
import Excercises from '../Components/Excercise/Excercises'
import MuscleGroup from '../Components/Excercise/MuscleGroup'
import Footer from '../Components/Home/Footer'
import Navbar from '../Components/Home/Navbar'


const Excercise = () => {
  return (
    <div style={{backgroundColor: "rgb(248, 251, 254)"}}>
        <Navbar/>
        <MuscleGroup/>
        <Excercises/>
        <Footer />
    </div>
  )
}

export default Excercise