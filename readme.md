<style>
    img {
        margin-left: 0;
        width: 50px;
    }
    .title {
        margin: 1rem;
        border: 0px;
        font-size: 25px;
        font-weight: normal;
    }
    p { 
        margin-left: 1rem;
        line-height: normal;
        font-size: 18px;
        font-weight: normal;
    
    }
    div {
        margin: 1rem;
    }
    span {
        font-size: 2rem;
        color: #7EC8E3;
    }
    li div{
        display: flex;
    }
    .img-container img{
        width: 48%;
        height: 48%;
    }
    .downing-bird {
       transform: rotate(45deg)
    }
    .slowdown-bird {
        transform: rotate(-45deg);
    }
</style>

<div>
    <h1>BIRD-BIRD<h1>
    <p>This game was inspired in FlappyBird, but a little more dinamic, with some new mechanics.<p>
</div>
<div>
    <h2 class="title">Purpose</h2>
    <p>Practice and improve domain of Pure Javascript, CSS, and HTML.<p>
</div>
<div style="border-top: solid 1px;">
    <h3 class="title">How To Play</h3>
    <p>Fly between the Tunnels.</p>
    <ul>
        <li>
            <h4><span>SPACE</span><h4>
            <div>
            <p>The Bird will fly.<p>
            <img src="./imgs/normal-bird.png"><img>
            </div>
        </li>
        <li>
            <h4><span>Q</span><h4>
            <div>
            <p>The Bird will Slowdown<p>
            <img src="./imgs/normal-bird.png" class="slowdown-bird"><img>
            </div>
        </li>
        <li>
            <h4><span>E</span><h4>
            <div>
            <p>The Bird will increase the speed of fall and go to front.<p>
            <img class="downing-bird"src="./imgs/downing-bird.png"><img>
            </div>
        </li>
    </ul>
</div>
<h4>Have a Good Game</h4>
<div class="img-container">
    <img src="./imgs/gameplay-start.png">
    <img src="./imgs/gameplay-closed-bird.png">
    <img src="./imgs/gameplay-slowdown-bird.png">
    <img src="./imgs/gameplay-diping-bird.png">
<div>
