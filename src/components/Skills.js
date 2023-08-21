import React from "react";
import { motion } from "framer-motion";


const Skill = ({name, x, y}) =>{
    return (

        <motion.div className="flex items-center justify-center rounded-full font-semibold text-light bg-dark py-3 px-6  shadow-dark cursor-pointer absolute" 
        
        whileHover={{scale: 1.05}}
        initial={{x:0, y:0}}
        whileInView={{x:x, y:y}}
        transition={{duration: 1.5}}
        viewport={{once: true}}
        
        >
    

        {name}
        </motion.div>

    )
}

const Skills  = () => {
    
    return (

        <>

        <h2 className="font-bold text-8xl mt-64 w-full text-center">Skills</h2>


        <div className="w-full h-screen realtive flex items-center justify-center rounded-full  bg-circularLight">

            <motion.div className="flex items-center justify-center rounded-full font-semibold p-8 text-light bg-dark shadow-dark cursor-pointer" whileHover={{scale: 1.05}}>

            
            web
            </motion.div>

            
            <Skill name="ReactJS" x="-5vw" y = "-10vw"/>
            <Skill name="Express" x="-20vw" y = "2vw"/>
            <Skill name="Kuberntes" x="20vw" y = "6vw"/>
            <Skill name="Docker" x="0vw" y = "12vw"/>
            <Skill name="Firebase" x="-20vw" y = "-20vw"/>
            <Skill name="Django" x="15vw" y = "-12vw"/>
            <Skill name="Python" x="32vw" y = "-5vw"/>
            <Skill name="Golang" x="0vw" y = "-20vw"/>
            <Skill name="Javascript" x="-25vw" y = "-8vw"/>
        
            

        </div>

        </>
        

    )

}


export default Skills;