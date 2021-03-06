

  var stage = new Konva.Stage({
    container:'container',
    width:500,
    height:300
    });
  
  var layer = new Konva.Layer();
  
  var triangle_1 = new Konva.RegularPolygon({
    x:50,
    y:50,
    sides:3,
    radius:50,
    fill:'green'
  });
  
  var triangle_2 = new Konva.RegularPolygon({
    x:50,
    y:80,
    sides:3,
    radius:50,
    fill:'green'
  });
  
  var triangle_3 = new Konva.RegularPolygon({
    x:50,
    y:110,
    sides:3,
    radius:50,
    fill:'green'
  });
  
  
  var rect = new Konva.Rect({
    x:40,
    y:135, 
    width:20,
    height:50,
    fill:'brown'
  });
  
  layer.add(triangle_1);
  layer.add(triangle_2);
  layer.add(triangle_3);
  layer.add(rect);
  stage.add(layer);
  layer.draw();
  