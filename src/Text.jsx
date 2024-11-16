import { motion } from 'framer-motion'
import { useState } from 'react'


const Text = () => {

    const [open, setOpen] = useState(false)

    const variants = {
        visible: (i) => ({
            opacity: 1,
            x: 0,
            transition: { delay: i * 0.3 },
        }),
        hidden: { opacity: 1},
    };

    const items = ['items1', 'items2', 'items3'];

  return (
    <div className="course">
        <motion.ul initial="hidden" 
        variants={variants} transition={{duration:2}} animate='visible'>
            {items.map((item, i) => (
                <motion.li key={item} variants={variants} custom={i}>
                    {item}
                </motion.li>
            ))}
        </motion.ul>
        <button onClick={() => setOpen (prev => !prev)}>Click</button>
    </div>
  )
}

export default Text