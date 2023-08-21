import { transform } from "framer-motion"
import Link from "next/link"
import React from "react"
import Logo from "./Logo"
import {TwitterIcon, GithubIcon, LinkedInIcon} from "./Icons"
import {motion} from "framer-motion";
import { useRouter } from "next/router";



const CustomLink = ({href, className, title}) =>{

    const router = useRouter();
    return (
        <Link href={href} className={`${className} relative group`}>
            
            {title}

            <span className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? "w-full" : "w-0" }`}>
                &nbsp;
            </span>
        
        </Link>      
    );

};

const NavBar = () =>{
    return (
    
        <header className='w-full px-32 py-8 font-medium flex items-center justify-between'
        >

            <nav>
                <CustomLink href="/" className="mr-4" title="Home"/>
                <CustomLink href="/about" className="mx-4" title="About"/>
                <CustomLink href="/projects" className="mx-4" title="Projects"/>
                <CustomLink href="/articles" className="ml-4" title="Articles"/>
            </nav>
        
            
            <nav className="flex items-center justify-center flex-wrap">
                <motion.a href="https://twitter.com/" target={"_blank"}
                className="w-6 mr-3"
                whileHover={{y: -2}}
                whileTap={{scale: 0.9}}
                
                >
                    <TwitterIcon />
                </motion.a>

                <motion.a href="https://twitter.com/" target={"_blank"}
                className="w-6 mr-3"
                whileHover={{y: -2}}
                whileTap={{scale: 0.9}}>
                    <GithubIcon />
                </motion.a>

                <motion.a href="https://twitter.com/" target={"_blank"}
                className="w-6 mr-3"
                whileHover={{y: -2}}
                whileTap={{scale: 0.9}}>
                    <LinkedInIcon />
                </motion.a>
                
            </nav>

            <div className="absolute left-[50%] top-2 translate-x-[-50%]">
                <Logo/>

            </div>
        </header>
    )
}

export default NavBar;