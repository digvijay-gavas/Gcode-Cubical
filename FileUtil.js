const fs = require('fs')

let GCODE_FILE_CONTENT_HEADER=`
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

let GCODE_FILE_CONTENT_FOOTER=`
G1 F4000 X0 Y200 E-5

`

exports.writeFile=function (gcodes)
{

    let content='';
    gcodes.map(gcode=>{
        content+='G1 F'+gcode.feed+' X'+gcode.x.toFixed(2)+' Y'+gcode.y.toFixed(2)+' Z'+gcode.z.toFixed(2)+' E'+gcode.e.toFixed(2)+'\n'
    })

    fs.writeFile('out.gcode', GCODE_FILE_CONTENT_HEADER+content+GCODE_FILE_CONTENT_FOOTER, err => {
        if (err) {
          console.error(err)
          return
        }
      })

}
