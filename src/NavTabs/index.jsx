import React, { useEffect, useRef, useState } from 'react'
import "./NavTabs.css"

const NavTabs = ({
    tabs, onChange
}) => {

    const [active, setActive] = useState({})
    const elements = useRef(new Array())

    useEffect(() => {
        setActive(elements.current[0].getBoundingClientRect());
        onChange(elements.current[0].innerText)
    }, [elements])
    // console.log("active", active)
    return (
        <nav className='nav__tabs'>
            {
                tabs.map((tab, index) => (
                    <button key={index} ref={el => elements.current[index] = el}

                        onClick={(e) => {
                            // get the position properties of the button
                            setActive(e.target.getBoundingClientRect())
                            onChange(tab)
                        }}>
                        {tab}
                    </button>
                ))
            }

            <span className='indicator' style={{
                left: `${active.left}px`,
                right: `${active.right}px`,
                width: `${active.width}px`,
                height: `${active.height}px`
                //position the cursor to active or clicked tab

            }}>

            </span>
        </nav>
    )
}

export default NavTabs
