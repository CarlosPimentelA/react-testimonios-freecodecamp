import './App.css'
import TestimonioCard from './components/Testimonio.Card'
import ShawnImg from './imgs/Shawn-img.png'
import SarahImg from './imgs/Sarah-img.png'
import EmmaImg from './imgs/Emma-img.png'

function App() {
 return (
    <section className='testimonios'>

  <TestimonioCard 
  name="Shawn Wang" 
  country="Singapore" 
  img={ShawnImg}
  job="Amazon"
  text="It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life."/> 

  <TestimonioCard 
  name="Sarah Chima" 
  country="Nigeria" 
  img={SarahImg}
  job="ChatDesk"
  text="freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company."/>

  <TestimonioCard 
  name="Emma Bostian" 
  country="Sweden" 
  img={EmmaImg}
  job="Spotify"
  text="I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."/>  

    </section>
  )
}

export default App
