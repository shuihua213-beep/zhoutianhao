<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Block Blaster</title>
  <link rel="stylesheet" href="style.css">

</head>
<body>
<div class="game">
  <div class="canvas-holder">
    <p>Score: <span id="score">0</span><br>Best Score: <span id="best-score">0</span></p>
    <canvas id="canvas" width="600" height="600"></canvas>
  </div> 
   <div class="extra-screen" id="load-title">
    <div class="content-hold">
      <h1>Block Blaster</h1>
      <p>
       Left and right arrow keys to move side to side<br>Up arrow key to shoot<br> Don't let the orange blocks hit the ground<br> Destroy orange blocks to get points<br>Blocks move faster as time goes on
      </p>
      <p>Press any key to begin</p>
    </div>
  </div>

  <div class="extra-screen hide" id="levelup-title">
    <div class="content-hold">
      <h1>Level Up!</h1>
    </div>
  </div>

  <div class="extra-screen hide" id="lose-title">
    <div class="content-hold">
      <h1>Game Over :( <br><span id="new-record" class="hide">New Record!!<span></h1>
      <p>Press any key to play again</p>
    </div>
  </div>
</div>
  <script src="script.js"></script>
</body>
</html>