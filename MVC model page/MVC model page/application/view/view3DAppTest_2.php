<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<title>3D model</title>
<link rel="stylesheet" href="css/x3dom.css" type="text/css">
<script type="text/javascript" src="scripts/js/x3dom.js"></script>

        <style>
        h1 {
            color:red;
            margin-left: 5px;
        }
        h2 {
            color:blue;
            margin: 5px;
        }
        p {
            color:green;
            margin-left: 5px;
        }
        .imgBox {
            padding: 0.25rem;
            margin-top: 5px;
            margin-bottom: 5px;
            border: 1px solid #dee2e6;
            border-radius: 0.25rem;
            width: 300px;
        }

    .model3D  {
        background-color: rgba(255, 255, 255, 0.0); /* Adjust the transparency to bring the color forward */
        border-radius: 5px;
        border: 0px solid rgba(0, 0, 0, 1.0);
        padding: 2px;
        height: 250px;
    }

    X3D, x3d {
        background-color: rgba(255, 255, 255, 0.0); /* Adjust the transparency to bring the color forward */
        border-radius: 5px;
        border: 0px solid rgba(255, 0, 0, 1.0);
        width: 100%;
        height: 100%
        
    }
    X3D, x3d {
  position:relative;    /* in order to be able to position stat-div within X3D */
  float:left;           /* float the element so it has the same size like the canvas */
  cursor:pointer;
  margin: 0;
  padding: 0;
  border: 1px solid #000;
}

X3D:hover, 
x3d:hover, 
.x3dom-canvas:hover {
  -webkit-user-select: none;
  -webkit-touch-callout: none;
}

.x3dom-canvas {
  border:none;
  cursor:pointer;
  cursor:-webkit-grab;
  cursor:grab;
  width:100%;
  height:100%;
  float:left;
}

.x3dom-canvas-mousedown {
  cursor:-webkit-grabbing;
  cursor:grabbing;
}

.x3dom-canvas:focus {
    outline:none; 
}
.x3dom-progress {
    margin: 0;
    padding: 6px 8px 0px 26px;
    left: 0px;
    top: 0px;
    position: absolute;
    color: #0f0;
    font-family: Helvetica, sans-serif;
    line-height:10px;
    font-size: 10px;
    min-width: 45px;
    min-height: 20px;
    border: 0px;
    background-position: 4px 4px;
    background-repeat: no-repeat;
    background-color: #333;
    background-color: rgba(51, 51, 51, 0.9);
    z-index: 100;
    background-image: url('data:image/gif;base64,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');
}
.card-body {
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    min-height: 300px;
    padding: 1.25rem;
    border-width: 2px;
}
    </style>

</head>
<body>
    <h1>3D model </h1>

<div class="card-body">
    <div class="model3D">
               <x3d>
                     <h2><?php echo $model_1 ?></h2>
                                  <scene>
                                      <inline nameSpaceName="model" mapDEFToID="true" onclick="animateModel();" url="application/assets/x3d/<?php echo $image3D_1?>.x3d" > </inline>
                                  </scene>
               </x3d>
    </div> 
</div>
<div class="card-body">
    <div class="model3D">
               <x3d>
                     <h2><?php echo $model_2 ?></h2>
                                  <scene>
                                      <inline nameSpaceName="model" mapDEFToID="true" onclick="animateModel();" url="application/assets/x3d/<?php echo $image3D_2?>.x3d" > </inline>
                                  </scene>
               </x3d>
    </div> 
</div>
 <div class="card-body">       
    <div class="model3D">
               <x3d>
                     <h2><?php echo $model_3 ?></h2>
                                  <scene>
                                      <inline nameSpaceName="model" mapDEFToID="true" onclick="animateModel();" url="application/assets/x3d/<?php echo $image3D_3?>.x3d" > </inline>
                                  </scene>
               </x3d>
    </div> 
 </div>     
 <div class="card-body">
    <div class="model3D">
               <x3d>
                     <h2><?php echo $model_4 ?></h2>
                                  <scene>
                                      <inline nameSpaceName="model" mapDEFToID="true" onclick="animateModel();" url="assets/x3d/<?php echo $image3D_4?>.x3d" > </inline>
                                  </scene>
               </x3d>
    </div> 
</div>

</body>
</html>