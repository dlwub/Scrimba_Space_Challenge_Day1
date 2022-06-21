const solarSystem = document.getElementById("solarSystem")
const planets = [
    {
    "name": "Mercury",
    "diameter": 4879,
    "color": "grey"
    },
    {
    "name": "Venus",
    "diameter": 12104,
    "color": "yellow"
    },
    {
    "name": "Earth",
    "diameter": 12742,
    "color": "green"
    },
    {
    "name": "Mars",
    "diameter": 6779,
    "color": "pink"
    },
    {
    "name": "Jupiter",
    "diameter": 139822,
    "color": "yellow"
    },
    {
    "name": "Saturn",
    "diameter": 116464,
    "color": "orange"
    },
    {
    "name": "Uranus",
    "diameter": 50724,
    "color": "grey"
    },
    {
    "name": "Neptune",
    "diameter": 49244,
    "color": "blue"
    }
]
const planetDiv = document.createElement('div');

for(let i=0; i < planets.length; i++){
    const spn = document.createElement('span');    
    spn.style.height = `${planets[i].diameter}`/1000+'px';
    spn.style.width = `${planets[i].diameter}`/1000 +'px';
    spn.style.background =  'conic-gradient( black 0deg 180deg,' + `${planets[i].color} ` + '180deg 360deg)';
    spn.style.borderRadius = '50%';
    spn.style.display = 'inline-block'; 
    spn.style.position = 'relative';
    const toolTip = document.createElement('span');    
    toolTip.style.position = 'absolute'; 
    toolTip.style.top = '180%';
    toolTip.style.background = 'pink';
    toolTip.style.textAlign = 'center';
    toolTip.style.color = 'black';
    toolTip.style.fontWeight = 'bold';
    toolTip.style.borderRadius = '5px';
    toolTip.style.width = '120px';
    spn.style.zIndex = 0;
    toolTip.style.zIndex = 1;       
    spn.onmouseover = function(){
        
               toolTip.innerHTML = `
                                    ☝️
                                    ${planets[i].name}
                                    ${planets[i].diameter} km
                                    ${planets[i].color} 
                                        `;                  
          
        spn.appendChild(toolTip);                    
    }
        
    spn.onmouseleave = function(){        
        spn.removeChild(toolTip);                    
    }
    planetDiv.appendChild(spn)
    
    solarSystem.appendChild(planetDiv)
}