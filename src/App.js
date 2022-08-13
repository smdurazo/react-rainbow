import React, { useState } from 'react'
// Make sure to import the component we just built:
import ColorBlock from './ColoBlock'
import ColorForm from './ColorForm'

function App(){
    let colors = [
        'violet', 'blue',
        'lightblue', 'green',
        'greenyellow', 'yellow',
        'orange', 'red'
    ]
    
    let colorMap = colors.map((color, i) => {
        return (
            <ColorBlock color={color} />
        )
    })

    const addColor = (newColor) => {
      setColors([...colors, newColor])
    }

    return (
      <div className="App">
          {colorMap}
          <ColorForm addColor={addColor} />
      </div>
  )

    return (
      <div className="App">
        {colors.map((color, i)=>
          <ColorBlock key={i} color={color} />
          )}
      </div>
    )

}

export default App