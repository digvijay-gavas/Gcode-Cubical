let data=require('./data')

let gcodes = []
let ptr = 0

let XOFFSET = 40;
let YOFFSET = 40;
let XMIN = 0, XMAX = 80;
let YMIN = 0, YMAX = 80;
let GRIDSTEP = 4, ZLAYERSTEP = 0.12, XYRESOLUTION = 0.24;
let MATERIALFEEDPERMM = 0.015;


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
        materialFeed = e*distance(gcodes[ptr], gcodes[ptr - 1]) * MATERIALFEEDPERMM
    }
    gcodes[ptr].e = materialFeed;
    ptr++
}

function fill(x, y, startX, startY) {
    let materialFeedCoe=1
    if (startX == x && startY == y)
    /*
    .o------
     |      |
     |      |
      ------
     */ 
    {
        for (let m = 0; m < GRIDSTEP / 2; m += XYRESOLUTION) {
            add(x + m            , y + GRIDSTEP - m , 0, materialFeedCoe, 2000, '----2');
            add(x + GRIDSTEP - m , y + GRIDSTEP - m , 0, materialFeedCoe, 2000, '----3');
            add(x + GRIDSTEP - m , y + m            , 0, materialFeedCoe, 2000, '----0');
            add(x + m            , y + m            , 0, materialFeedCoe, 2000, '----1');
        }
    }
    /*
      o-----.
     |      |
     |      |
      ------
     */
    else if (startX > x && startY == y) {
        for (let m = 0; m < GRIDSTEP / 2; m += XYRESOLUTION) {
            add(x + m            , y + m            , 0, materialFeedCoe, 2000, '----1');
            add(x + m            , y + GRIDSTEP - m , 0, materialFeedCoe, 2000, '----2');
            add(x + GRIDSTEP - m , y + GRIDSTEP - m , 0, materialFeedCoe, 2000, '----3');
            add(x + GRIDSTEP - m , y + m            , 0, materialFeedCoe, 2000, '----0');
        }
    }
    /*
     o------
     |      |
     |      |
     '------
     */
    else if (startX == x && startY > y) {
        for (let m = 0; m < GRIDSTEP / 2; m += XYRESOLUTION) {
            add(x + GRIDSTEP - m , y + GRIDSTEP - m , 0, materialFeedCoe, 2000, '----3');
            add(x + GRIDSTEP - m , y + m            , 0, materialFeedCoe, 2000, '----0');
            add(x + m            , y + m            , 0, materialFeedCoe, 2000, '----1');
            add(x + m            , y + GRIDSTEP - m , 0, materialFeedCoe, 2000, '----2');
        }

    }
    /*
     o------
     |      |
     |      |
      ------'
     */
    else if (startX > x && startY > y) {
        for (let m = 0; m < GRIDSTEP / 2; m += XYRESOLUTION) {
            add(x + GRIDSTEP - m , y + m            , 0, materialFeedCoe, 2000, '----0');
            add(x + m            , y + m            , 0, materialFeedCoe, 2000, '----1');
            add(x + m            , y + GRIDSTEP - m , 0, materialFeedCoe, 2000, '----2');
            add(x + GRIDSTEP - m , y + GRIDSTEP - m , 0, materialFeedCoe, 2000, '----3');
        }
    }
    /*
    //____________________________________________________________________________
      ______.
     |      |
     |      |
     o------
     |      |
     |      |
      ------'
     */
    else if (startX > x && startY < y) {
        for (let m = 0; m < GRIDSTEP / 2; m += XYRESOLUTION) {
            add(x + GRIDSTEP - m , y + m            , 0, materialFeedCoe, 2000, '----0');
            add(x + m            , y + m            , 0, materialFeedCoe, 2000, '----1');
            add(x + m            , y + GRIDSTEP - m , 0, materialFeedCoe, 2000, '----2');
            add(x + GRIDSTEP - m , y + GRIDSTEP - m , 0, materialFeedCoe, 2000, '----3');
        }
        /*for (let m = 0; m < GRIDSTEP / 2; m += XYRESOLUTION) {
            add(x - m            , y - GRIDSTEP + m , 0, 4, 2000, '----0');
            add(x - m            , y - m            , 0, 4, 2000, '----1');
            add(x - GRIDSTEP + m , y - m            , 0, 4, 2000, '----2');
            add(x - GRIDSTEP + m , y - GRIDSTEP + m , 0, 4, 2000, '----3');
        }*/
    }
    /*
     .______
     |      |
     |      |
     o------
     |      |
     |      |
      ------'
     */
    else if (startX == x && startY < y) {
        for (let m = 0; m < GRIDSTEP / 2; m += XYRESOLUTION) {
            add(x - m            , y - m            , 0, materialFeedCoe, 2000, '----1');
            add(x - GRIDSTEP + m , y - m            , 0, materialFeedCoe, 2000, '----2');
            add(x - GRIDSTEP + m , y - GRIDSTEP + m , 0, materialFeedCoe, 2000, '----3');
            add(x - m            , y - GRIDSTEP + m , 0, materialFeedCoe, 2000, '----0');
        }
    }
}

add(0, 0, 0, 0, 2000);

let startFromTop = true
for (let i = 0; i < (XMAX - XMIN) / GRIDSTEP; i++) {
    x = XMIN + i * GRIDSTEP;
    if (startFromTop) {
        startFromTop = false;
        let startFromLeft = true;
        for (let j = 0; j < (YMAX - YMIN) / GRIDSTEP; j++) {
            y = YMIN + j * GRIDSTEP
            if (startFromLeft) {
                add(x + GRIDSTEP, y, 0, 4, 2000, 'true');
                add(x + GRIDSTEP, y + GRIDSTEP, 0, 4, 2000);
                if (data.get(i,j,0)>2) {
                    fill(x, y, x + GRIDSTEP, y + GRIDSTEP)
                }
                startFromLeft = false;
            }
            else {
                add(x, y, 0, 4, 2000, 'false');
                add(x, y + GRIDSTEP, 0, 4, 2000);
                if (data.get(i,j,0)>2) {
                    fill(x, y, x , y + GRIDSTEP)
                }
                startFromLeft = true;
            }

            /*if(i==4 && j==4)
            {
                for(let m=0;m<GRIDSTEP/2;m+=XYRESOLUTION)
                {
                    add(x+m, y+m, 0, 4, 2000, '----0');
                    add(x+m, y+GRIDSTEP-m, 0, 4, 2000, '----1');
                    add(x+GRIDSTEP-m, y+GRIDSTEP-m, 0, 4, 2000, '----2');
                    add(x+GRIDSTEP-m, y+m, 0, 4, 2000, '----3');
                }
            }*/
        }
    }
    else {
        startFromTop = true;
        let startFromLeft = false;
        for (let j = (YMAX - YMIN) / GRIDSTEP - 1; j >= 0; j--) {

            y = YMIN + j * GRIDSTEP

            /*if (i == 5 && j == 5) {
                for (let m = 0; m < GRIDSTEP / 2; m += XYRESOLUTION) {
                    add(x + m, y + m, 0, 4, 2000, '----0');
                    add(x + m, y + GRIDSTEP - m, 0, 4, 2000, '----1');
                    add(x + GRIDSTEP - m, y + GRIDSTEP - m, 0, 4, 2000, '----2');
                    add(x + GRIDSTEP - m, y + m, 0, 4, 2000, '----3');
                }
            }*/

            if (startFromLeft) {
                add(x + GRIDSTEP, y + GRIDSTEP, 0, 4, 2000, 'true');
                add(x + GRIDSTEP, y , 0, 4, 2000);
                if (data.get(i,j,0)>2) {
                    fill(x, y, x + GRIDSTEP, y)
                }
                console.log('i'+i+' j'+j)
                startFromLeft = false;
            }
            else {
                add(x, y + GRIDSTEP, 0, 4, 2000, 'false');
                add(x, y , 0, 4, 2000);
                if (data.get(i,j,0)>2) {
                    fill(x, y, x , y )
                }
                
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