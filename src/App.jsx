import './App.css'
import First from './components/First'
import Two from './components/Two'
import Three from './components/Three'
import SliderWithSixVisible from './components/Four'
import navRasm from './assets/images/logo/img 1.svg'
import Five from './components/Five'
import Six from './components/Six'
import Seven from './components/Seven'
import Eight from './components/Eight' 
import Nine from './components/Nine'
import Ten from './components/Ten'
import Footer from './components/Footer'

const App = () => {

  return (

    <div className='appJsx'>

        <div className='navRasm' style={{backgroundImage: 'url(' + navRasm + ')'}}>
        <First />

        <Two />
        </div>

        <Three />
        <SliderWithSixVisible />
        <Five />
        <Six />
        <Seven />
        <Eight />
        <Nine />
        <Ten />
        <Footer/>

    </div>

  )
}

export default App
