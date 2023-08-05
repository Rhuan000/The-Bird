export function resetPositions(bird, tunnels, gameContainer, score) {
    //Returning All Positions to Start
    gameContainer.style.animation = 'none'
    bird.setPositionLeft(0 + 'px')
    bird.setPositionTop(59 + '%')
    tunnels.forEach((tunnel, i) => {
        tunnel.setPositionLeft((i+1) * 40 + '%')
        tunnel.pair.setPositionLeft((i+1) * 40 + '%')
    })
    bird.element.src = './imgs/normal-bird.png'
    bird.element.style.transform = 'rotate(360deg)'

}

export function resetStyles(bird, gameContainer, gameInformation, gameNames) {
    
    bird.element.style.animation = 'none'
    gameContainer.style.animationDuration = '0.1s'
    gameContainer.style.animationName = 'endGame'
    gameInformation.classList.remove('not-display')
    gameNames.forEach((gameName)=> {
        gameName.style.animation = 'none'
    })
    
}