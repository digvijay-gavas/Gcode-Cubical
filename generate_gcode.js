let GCODE_FILE="E:\\CE3_99.gcode"
let GCODE_FILE_CONTENT=`
G90
M82
M106 S0                      ; set fan speed zero
M104 S230 T0                 ; set nozzle temp
M109 S230 T0                 ; wait nozzle temp
G28                          ; Home
G92 E0                       ; Reset Extruder

M83                          ; E relative

G1 F1200 X10 Y10 Z0 E0
G1 F1200 X10 Y110 Z0 E5
G1 F1200 X12 Y110 Z0 E0
G1 F1200 X12 Y10 Z0 E10

`
let E_AXIS_DEBT=0;

function drawVertical(x, y, zStart, zStop)
{

    GCODE_FILE_CONTENT+="G1 F1200 X" + x + " Y" + y + " Z" + zStart         + " E0"+"\n";
    GCODE_FILE_CONTENT+="G1 E"+E_AXIS_DEBT+" F2000\n"; E_AXIS_DEBT=5
    GCODE_FILE_CONTENT+="G1 F1200 X" + x + " Y" + y + " Z" + zStop          + " E" + (zStop - zStart) * 0.08+"\n";
    GCODE_FILE_CONTENT+="G1 E-5 F2000\n"; E_AXIS_DEBT=5
    GCODE_FILE_CONTENT+="G4 S1\n";
    GCODE_FILE_CONTENT+="G1 F1200 X" + x + " Y" + y + " Z" + (zStop + 5)    + " E0 ; retract\n\n";
    //GCODE_FILE_CONTENT+="G1 F1200 X" + x + " Y" + y + " Z" + (zStop + 5)    + " E-5" +"\n";
    //GCODE_FILE_CONTENT+="G1 F1200 X" + x + " Y" + y + " Z" + (zStop + 10)   + " E10"+ "\n\n";

    //console.log("G1 F1200 X" + x + " Y" + y + " Z" + zStart + " E0");
    //console.log("G1 F1200 X" + x + " Y" + y + " Z" + zStop + " E" + (zStop - zStart) * 0.05);
}

function drawHorizontal(x, y, xEnd, yEnd)
{

    GCODE_FILE_CONTENT+="; -------------------\n";
    GCODE_FILE_CONTENT+="G1 F1200 X" + x + " Y" + y + " Z0"          + " E0"+"\n";
    GCODE_FILE_CONTENT+="G1 F1200 X" + xEnd + " Y" + yEnd + " Z0"          + " E" + Math.abs(x - xEnd) * 0.1+"\n\n";

    //console.log("G1 F1200 X" + x + " Y" + y + " Z" + zStart + " E0");
    //console.log("G1 F1200 X" + x + " Y" + y + " Z" + zStop + " E" + (zStop - zStart) * 0.05);
}

let HEIGHT=5
let Y=100
drawHorizontal(10,Y,100,Y)
for(let x=10;x<100;x=x+5)
{
    drawVertical(x,Y,0,HEIGHT)
}

HEIGHT=5
Y=110
drawHorizontal(10,Y,100,Y)
for(let x=10;x<100;x=x+5)
{
    drawVertical(x,Y,0,HEIGHT)
}

HEIGHT=5
Y=120
drawHorizontal(10,Y,100,Y)
for(let x=10;x<100;x=x+5)
{
    drawVertical(x,Y,0,HEIGHT)
}




let fs = require('fs');
fs.writeFile(GCODE_FILE, GCODE_FILE_CONTENT, function (err) {
  if (err) return console.log(err);
  console.log('Hello World > helloworld.txt');
});