import React from 'react'
import { useState } from 'react'
import plan from '../images/plan.png'


const MapView = () => {
    const [selected, setSelected] = useState('')
    const [settings, setSettings] = useState({
        bathroom: {
            lightON: true,
            color: 'white',
            dimness: 100,
            backgroundColor: 'rgba(255,255,200,0.5)'
        },
        bedroom: {
            lightON: true,
            color: 'red',
            dimness: 70,
            backgroundColor: 'rgba(255,0,0,0.3)'
        },
        livingroom: {
            lightON: true,
            color: 'white',
            dimness: 50,
            backgroundColor: 'rgba(255,255,200,0.25)'
        },
    })
    const [selector, setSelector] = useState({
        lightON: true,
        color: 'white',
        dimness: 100,
    })

    const handleSelect = (e) => {
        setSelected(e.target.id)
        setSelector({
            lightON: settings[e.target.id].lightON,
            color: settings[e.target.id].color,
            dimness: settings[e.target.id].dimness,
        })
    }

    const toggleLight = () => {
        setSelector({
            ...selector,
            lightON: !selector.lightON,
        })
        handleSet()
    }
    const handleColor = (e) => {
        setSelector({
            ...selector,
            color: e.target.value
        })
    }
    const handleDimness = (e) => {
        setSelector({
            ...selector,
            dimness: e.target.value
        })
    }

    const handleSet = () => {
        let backColor = ''
        if (selector.lightON === false) {
            backColor = 'rgba(0,0,0,0.5)'
        } else {
            if (selector.color === 'white') {backColor = `rgba(255,255,200,${selector.dimness/100 * 0.5})`}
            if (selector.color === 'red') {backColor = `rgba(200,0,0,${selector.dimness/100 * 0.5})`}
            if (selector.color === 'blue') {backColor = `rgba(0,100,255,${selector.dimness/100 * 0.5})`}
            if (selector.color === 'green') {backColor = `rgba(0,180,0,${selector.dimness/100 * 0.5})`}
        }

        let newSettings = {...settings}
        newSettings[selected] = {
            lightON: selector.lightON,
            color: selector.color,
            dimness: selector.dimness,
            backgroundColor: backColor
        }
        setSettings({
            ...newSettings
        })
    }

    
  return (
    <div>
        <div className='plan-div'>
            <div className='plan-grid'>
                <div className='plan-bathroom room' id='bathroom' onClick={handleSelect} style={{
                    backgroundColor: settings.bathroom.backgroundColor,
                }}></div>
                <div className='plan-bedroom room' id='bedroom' onClick={handleSelect} style={{
                    backgroundColor: settings.bedroom.backgroundColor,
                }}></div>
                <div className='plan-livingroom room' id='livingroom' onClick={handleSelect} style={{
                    backgroundColor: settings.livingroom.backgroundColor,
                }}></div>
            </div>
        </div>

        {selected!=='' && 
                <div className='plan-settings'>
                    Lights ON/OFF :
                    <button onClick={toggleLight}>Switch Lights</button>
                    Dimness :
                    <input type="range" id='dimness' min='0' max='100' onChange={handleDimness} value={selector.dimness}></input>
                    Color :
                    <select onChange={handleColor} value={selector.color}>
                        <option value="white">White</option>
                        <option value="red">Red</option>
                        <option value="blue">Blue</option>
                        <option value="green">Green</option>
                    </select>
                    <button onClick={handleSet}>SET</button>
                </div>
                }
    </div>
  )
}

export default MapView