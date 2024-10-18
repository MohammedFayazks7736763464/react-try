import React from 'react'
import { Button } from 'react-bootstrap'
import'./Home.css'




function Home() {
  return (
    <div className='rono'>
    <div className='main mt-5  '>
        <div className='write'>
            <h4 className='  cc text-warning font-weight-bold '>Hello I'am MOHAMMED FAYAZ</h4>
            <h3 className='text'>I'am a FRONT-END DEVELOPER</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.   <br />
                
                 optio expedita. Veritatis, provident delectus! Culpa, soluta aliquid?
                 optio expedita. Veritatis, provident delectus! Culpa, soluta aliquid?</p>
                 <Button variant="primary" size="lg">
          More Info
        </Button>{' '}
       
                 <Button variant="primary" size="lg">
          HIRE ME
        </Button>{' '}
    

        </div>

        <div className='pic'>
            <img  className='pics' src="https://static.vecteezy.com/system/resources/previews/019/879/186/large_2x/user-icon-on-transparent-background-free-png.png" alt="" />


        </div>




      </div>
      </div>
  )
}

export default Home
