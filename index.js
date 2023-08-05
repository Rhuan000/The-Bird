import {tunnels} from './scripts/Tunnel.js';
import { bird } from './scripts/Bird.js';
import { birdGravity, tunnelGravity} from './scripts/gravities.js';
import { flyUp, flyNormal, flyDip, flySlowdown as flySlowdown } from './scripts/fly-animation.js';
import { colisionChecker } from './scripts/contact-checker.js';
import { resetPositions, resetStyles } from './scripts/reset.js';


const gameContainer = document.querySelector('.game-container')
const gameInformation = document.querySelector('.information')
const gameNames = document.querySelectorAll('.game-name')
const score = document.querySelector('.score')
const sound = document.querySelector('.sound')

var gameStarted = false 
var scored
var soundState = Boolean

setInterval(() => {
    if(gameStarted){
        birdGravity(bird)
    }
})

setInterval(() => {
        //All 3 Tunnels pairs
        if(gameStarted){
            tunnels.forEach( (tunnel)=> {
                tunnelGravity(tunnel)

                let birdLeftPosition = bird.leftPosition() - 14 // this numbers are just to adjust the area of hit
                let tunnelLeftPosition = tunnel.leftPosition()
                let pairLeftPosition = tunnel.pair.leftPosition()
                
                if(colisionChecker(bird.topPosition(), birdLeftPosition, tunnel.topPosition(), tunnelLeftPosition, tunnel.pair.topPosition(), pairLeftPosition)){//580 == floor 
                   gameStarted = false
                   if(soundState){
                       let endGameAudio = new Audio('./sounds/endgame.mp3')
                       endGameAudio.play()
                   }
                   resetStyles(bird, gameContainer, gameInformation, gameNames)
                } else if(birdLeftPosition >= tunnelLeftPosition - 5 && birdLeftPosition <= tunnelLeftPosition + 5 && !scored) {
                    
                    score.innerHTML = +score.innerHTML + 1
                    if(soundState){
                       let scoreAudio = new Audio('./sounds/score.mp3')
                       scoreAudio.play()
                    }
                    scored = true
                    setTimeout(()=>{
                        scored = false
                    }, 150)
                }   
            })
        }   
    })

document.addEventListener('keydown', (event)=>{
    if(event.code === 'Space'){
        event.preventDefault();
        if(gameStarted){
            flyUp(bird)
        }         
        else if(!gameStarted){
            //preparing game to start 
            score.innerHTML = 0 // I took out this part of resetStyles, because the player almost always want to see his scores
            resetPositions(bird, tunnels, gameContainer, score)
            
            //starting
            gameInformation.classList.add('not-display')
            gameNames.forEach((gameName)=> {
                gameName.style.animationDuration = '2s'
                gameName.style.animationFillMode = 'forwards'
                gameName.style.animationName = 'toZeroOpacity'
            })
            gameStarted = true            
        }

    } else if(event.code === 'KeyE' && gameStarted){
        flyDip(bird)

    } else if(event.code === 'KeyQ' && gameStarted){
        flySlowdown(bird)       
    }
})

//Correcting the Bird after click
document.addEventListener('keyup', (event)=>{
    if((event.code === 'KeyQ' || event.code === 'KeyE') && gameStarted){
        flyNormal(bird)
    }
})

//Controlling Volume Icon
sound.addEventListener('click', () => {
    soundState = !soundState
    if(soundState){
        sound.src = './svgs/volume-high-solid.svg'
    } else {
        sound.src = './svgs/volume-xmark-solid.svg'
    }
    
})


