export function colisionChecker(birdTopPosition, birdLeftPosition, tunnelTopPosition, tunnelLeftPosition, pairTopPoistion, pairLeftPosition){
    
    return (
        //first we are checking the width of tunnel(bottom), then his height. at the second part, we are checking the width of pairTunnel(top) and his height, i needed make this way for most bird-tunnel contact accuracy 
        (((birdLeftPosition >= tunnelLeftPosition - 46 && birdLeftPosition <= tunnelLeftPosition + 55) 
        && birdTopPosition > tunnelTopPosition - 19) 
        || ((birdLeftPosition >= pairLeftPosition - 36 && birdLeftPosition <= pairLeftPosition + 30) &&  
        birdTopPosition < pairTopPoistion -7.5)) || birdTopPosition > 580
    )

}