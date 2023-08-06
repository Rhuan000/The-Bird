export function flyUp(bird){
    //Logic Barrier to not let the Bird fly higher than virtual Roof (top side of game-container).
    let sizeOfJump = 85
    let birdAchieveRoof = 20 + bird.topPosition()
    if(birdAchieveRoof < sizeOfJump){
        sizeOfJump = birdAchieveRoof
    }

    //Fly Up Animation Main part 
    bird.element.src = './imgs/closed-bird.png'
    bird.element.style.animation = 'none';
    document.documentElement.style.setProperty('--left', bird.leftPosition() + 'px')
    document.documentElement.style.setProperty('--to-f', bird.leftPosition() + 'px')
    document.documentElement.style.setProperty('--from', bird.topPosition() + 'px')
    document.documentElement.style.setProperty('--to',  bird.topPosition() - sizeOfJump + 'px')
    bird.element.style.animationName = 'wingsFlied'
    bird.element.style.animationDuration = '0.45s'
    bird.element.style.animationTimeDuration = 'linear'
    
    // Reset the bird's img after the animation ends, Spread wings effect.
    setTimeout(() => {
        bird.element.src = './imgs/normal-bird.png'
    }, 100); 
}

export function flyNormal(bird){
    bird.element.src = './imgs/normal-bird.png'
    bird.element.style.transform = 'rotate(360deg)'
}

export function flyDip(bird){
    bird.element.src = './imgs/downing-bird.png'
    bird.element.style.transform = 'rotate(45deg)'
    bird.setPositionLeft(bird.leftPosition() + 5 + 'px')
    bird.setPositionTop(bird.topPosition() + 3 + 'px')
}

export function flySlowdown(bird){
    bird.element.src = './imgs/normal-bird.png'
    bird.element.style.transform = 'rotate(-45deg)'
    if(bird.leftPosition() > 10){
        bird.setPositionLeft(bird.leftPosition() - 2 + 'px' )  
        bird.setPositionTop(bird.topPosition() + 1 + 'px' ) 
    } 
}