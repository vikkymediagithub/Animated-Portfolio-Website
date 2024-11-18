import './hero.scss'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='wrapper'>
        <div className='textContainer'>
         <h2>Victor Joseph</h2>
        </div>
        <h1>Web developer and a UI designer</h1>
        <div className='buttons'>
            <button>See the latest work</button>
            <button>Contact Me</button>
        </div>
        <img src="/src/assets/scroll.png" alt="" />
        </div>
        <div className='imageContainer'>
            <img src="/src/assets/hero.png" alt="" />
        </div>
    </div>
  )
}

export default Hero