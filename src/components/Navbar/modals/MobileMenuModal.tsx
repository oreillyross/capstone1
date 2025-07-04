import {useContext} from "react"
import {SessionContext} from "contexts/SessionContext"
import {motion} from "framer-motion"


export const MobileMenuModal = ({onCartOpenClick}: {onCartOpenClick: () => void}) => {

  const {user, signOut} = useContext(SessionContext)
  return (
    <motion.div 
      initial={{translateY: "-100%"}}
      animate={{translateY: 0}}
      transition={{duration: 0.6}}
      className="bg-emerald-800 text-emerald-200 flex flex-col items-start pt-12 pr-12 pb-6 rounded-b-lg shadow-lg">
      <div className="px-8 py-4">
        <i className="mr-2 text-2xl fa-solid fa-user"></i>
        {user?.username}
      </div>
      <button  className="px-8 py-4"
        onClick={signOut}
        >
        <i className="mr-2 text-2xl fa-solid fa-arrow-right-from-bracket"></i>
        Sign out
      </button>
      <button className="px-8 py-4"
        onClick={onCartOpenClick}
        >
        <i className="mr-2 text-2xl fa-solid fa-cart-shopping"></i>
      </button>
    </motion.div>
  )
    
}