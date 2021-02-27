let gcodes = []
let ptr = 0

let XOFFSET = 40;
let YOFFSET = 40;
let XMIN = 0, XMAX = 50;
let YMIN = 0, YMAX = 50;
let GRIDSTEP = 5, ZLAYERSTEP = 0.12;
let MATERIALFEEDPERMM = 0.02;

function distance(p1, p2) {
    return Math.sqrt((p1.x - p2.x) * (p1.x - p2.x) + (p1.y - p2.y) * (p1.y - p2.y) + (p1.z - p2.z) * (p1.z - p2.z))
}

function add(x, y, z, e, feed, comment) {


    gcodes[ptr] = {}
    gcodes[ptr].x = XOFFSET + x;
    gcodes[ptr].y = YOFFSET + y;
    gcodes[ptr].z = z;
    gcodes[ptr].feed = feed;
    gcodes[ptr].comment = comment;

    materialFeed = 0;
    if (e != 0) {
        materialFeed = distance(gcodes[ptr], gcodes[ptr - 1]) * MATERIALFEEDPERMM
    }
    gcodes[ptr].e = materialFeed;
    ptr++
}

add(0, 0, 0, 0, 2000);

let startFromTop = true
for (let x = XMIN; x < XMAX; x += GRIDSTEP) {

    if (startFromTop) {
        startFromTop=false;
        let startFromLeft = true;
        for (let y = YMIN; y < YMAX; y += GRIDSTEP) {
            if (startFromLeft) {
                add(x + GRIDSTEP, y, 0, 4, 2000, 'true');
                add(x + GRIDSTEP, y + GRIDSTEP, 0, 4, 2000);
                startFromLeft = false;
            }
            else {
                add(x, y, 0, 4, 2000, 'false');
                add(x, y + GRIDSTEP, 0, 4, 2000);
                startFromLeft = true;
            }
        }
    }
    else
    {
        startFromTop=true;
        let startFromLeft = false;
        for (let y = YMAX; y > YMIN; y -= GRIDSTEP) {
            if (startFromLeft) {
                add(x + GRIDSTEP, y, 0, 4, 2000, 'true');
                add(x + GRIDSTEP, y-GRIDSTEP, 0, 4, 2000);
                startFromLeft = false;
            }
            else {
                add(x, y, 0, 4, 2000, 'false');
                add(x, y-GRIDSTEP, 0, 4, 2000);
                startFromLeft = true;
            }
        }
    }
    //break;
}

add(XMAX, YMAX, 0, 0, 2000);
for (let z = 0; z <= GRIDSTEP; z += ZLAYERSTEP) {
    //add(XMAX, YMAX, z, 1, 2000);
    add(XMAX, YMIN, z, 1, 2000);
    add(XMIN, YMIN, z, 1, 2000);
    add(XMIN, YMAX, z, 1, 2000);
    add(XMAX, YMAX, z, 1, 2000);
}


fileUtil = require('./FileUtil');

fileUtil.writeFile(gcodes)