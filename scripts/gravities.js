export function tunnelGravity(tunnel){
    //Main Gravity  part Atracting to Left side
    tunnel.setPositionLeft(tunnel.leftPosition() - 2 + 'px')
    tunnel.pair.setPositionLeft(tunnel.pair.leftPosition() - 2 + 'px')  
        
    if(tunnel.leftPosition() <= -80){
        //Putting at the  right side of screen (hidden)
        tunnel.setPositionLeft(120 + '%')
        tunnel.pair.setPositionLeft(120 + '%')             
        
        //Creating a Random Sized Tunnel and his pair(Tunnel top)
        let randomHeight = Math.random() * (500 - 1) + 1;
        tunnel.setStyleHeight(randomHeight + 'px')
        tunnel.pair.setStyleHeight(600 - randomHeight - 100 + 'px')          
    }
}
export function birdGravity(bird){
    //Atracting Bird to Bottom
    bird.setPositionTop(bird.topPosition() + 2 + 'px')  
    bird.leftPosition()
}