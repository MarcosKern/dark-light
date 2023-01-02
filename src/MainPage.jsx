import React, { useState } from 'react'
import './mainpage.css'

export default function MainPage() {
  const [toggle, setToggle] = useState(true);
  return (
    <div
      className={ `main-page ${toggle ? 'light-mode' : 'dark-mode'}` }
    >
      <button
        onClick={ () => setToggle(!toggle) }
      >
        Click
      </button>
      <section>
        <p className='title'>Simple dark/light togle button.</p>
        <span></span>
        <p className='text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium aspernatur distinctio, et modi at eligendi reprehenderit ut earum itaque quasi porro quo mollitia delectus obcaecati nisi unde animi quia laborum!
        </p>
      </section>
    </div>
  )
}
