
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

G1 F2000 X40.00 Y40.00 Z0.00 E0.00
G1 F2000 X40.00 Y90.00 Z0.00 E1.00
G1 F2000 X45.00 Y90.00 Z0.00 E0.00
G1 F2000 X45.00 Y40.00 Z0.00 E1.00
G1 F2000 X50.00 Y40.00 Z0.00 E0.00
G1 F2000 X50.00 Y90.00 Z0.00 E1.00
G1 F2000 X55.00 Y90.00 Z0.00 E0.00
G1 F2000 X55.00 Y40.00 Z0.00 E1.00
G1 F2000 X60.00 Y40.00 Z0.00 E0.00
G1 F2000 X60.00 Y90.00 Z0.00 E1.00
G1 F2000 X65.00 Y90.00 Z0.00 E0.00
G1 F2000 X65.00 Y40.00 Z0.00 E1.00
G1 F2000 X70.00 Y40.00 Z0.00 E0.00
G1 F2000 X70.00 Y90.00 Z0.00 E1.00
G1 F2000 X75.00 Y90.00 Z0.00 E0.00
G1 F2000 X75.00 Y40.00 Z0.00 E1.00
G1 F2000 X80.00 Y40.00 Z0.00 E0.00
G1 F2000 X80.00 Y90.00 Z0.00 E1.00
G1 F2000 X85.00 Y90.00 Z0.00 E0.00
G1 F2000 X85.00 Y40.00 Z0.00 E1.00
G1 F2000 X90.00 Y40.00 Z0.00 E0.00
G1 F2000 X90.00 Y90.00 Z0.00 E1.00
G1 F2000 X40.00 Y40.00 Z0.10 E0.00
G1 F2000 X90.00 Y40.00 Z0.10 E1.00
G1 F2000 X90.00 Y45.00 Z0.10 E0.00
G1 F2000 X40.00 Y45.00 Z0.10 E1.00
G1 F2000 X40.00 Y50.00 Z0.10 E0.00
G1 F2000 X90.00 Y50.00 Z0.10 E1.00
G1 F2000 X90.00 Y55.00 Z0.10 E0.00
G1 F2000 X40.00 Y55.00 Z0.10 E1.00
G1 F2000 X40.00 Y60.00 Z0.10 E0.00
G1 F2000 X90.00 Y60.00 Z0.10 E1.00
G1 F2000 X90.00 Y65.00 Z0.10 E0.00
G1 F2000 X40.00 Y65.00 Z0.10 E1.00
G1 F2000 X40.00 Y70.00 Z0.10 E0.00
G1 F2000 X90.00 Y70.00 Z0.10 E1.00
G1 F2000 X90.00 Y75.00 Z0.10 E0.00
G1 F2000 X40.00 Y75.00 Z0.10 E1.00
G1 F2000 X40.00 Y80.00 Z0.10 E0.00
G1 F2000 X90.00 Y80.00 Z0.10 E1.00
G1 F2000 X90.00 Y85.00 Z0.10 E0.00
G1 F2000 X40.00 Y85.00 Z0.10 E1.00
G1 F2000 X40.00 Y90.00 Z0.10 E0.00
G1 F2000 X90.00 Y90.00 Z0.10 E1.00
G1 F2000 X90.00 Y90.00 Z0.00 E0.00
G1 F2000 X90.00 Y40.00 Z0.00 E1.00
G1 F2000 X40.00 Y40.00 Z0.00 E1.00
G1 F2000 X40.00 Y90.00 Z0.00 E1.00
G1 F2000 X90.00 Y90.00 Z0.00 E1.00
G1 F2000 X90.00 Y40.00 Z0.12 E1.00
G1 F2000 X40.00 Y40.00 Z0.12 E1.00
G1 F2000 X40.00 Y90.00 Z0.12 E1.00
G1 F2000 X90.00 Y90.00 Z0.12 E1.00
G1 F2000 X90.00 Y40.00 Z0.24 E1.00
G1 F2000 X40.00 Y40.00 Z0.24 E1.00
G1 F2000 X40.00 Y90.00 Z0.24 E1.00
G1 F2000 X90.00 Y90.00 Z0.24 E1.00
G1 F2000 X90.00 Y40.00 Z0.36 E1.00
G1 F2000 X40.00 Y40.00 Z0.36 E1.00
G1 F2000 X40.00 Y90.00 Z0.36 E1.00
G1 F2000 X90.00 Y90.00 Z0.36 E1.00
G1 F2000 X90.00 Y40.00 Z0.48 E1.00
G1 F2000 X40.00 Y40.00 Z0.48 E1.00
G1 F2000 X40.00 Y90.00 Z0.48 E1.00
G1 F2000 X90.00 Y90.00 Z0.48 E1.00
G1 F2000 X90.00 Y40.00 Z0.60 E1.00
G1 F2000 X40.00 Y40.00 Z0.60 E1.00
G1 F2000 X40.00 Y90.00 Z0.60 E1.00
G1 F2000 X90.00 Y90.00 Z0.60 E1.00
G1 F2000 X90.00 Y40.00 Z0.72 E1.00
G1 F2000 X40.00 Y40.00 Z0.72 E1.00
G1 F2000 X40.00 Y90.00 Z0.72 E1.00
G1 F2000 X90.00 Y90.00 Z0.72 E1.00
G1 F2000 X90.00 Y40.00 Z0.84 E1.00
G1 F2000 X40.00 Y40.00 Z0.84 E1.00
G1 F2000 X40.00 Y90.00 Z0.84 E1.00
G1 F2000 X90.00 Y90.00 Z0.84 E1.00
G1 F2000 X90.00 Y40.00 Z0.96 E1.00
G1 F2000 X40.00 Y40.00 Z0.96 E1.00
G1 F2000 X40.00 Y90.00 Z0.96 E1.00
G1 F2000 X90.00 Y90.00 Z0.96 E1.00
G1 F2000 X90.00 Y40.00 Z1.08 E1.00
G1 F2000 X40.00 Y40.00 Z1.08 E1.00
G1 F2000 X40.00 Y90.00 Z1.08 E1.00
G1 F2000 X90.00 Y90.00 Z1.08 E1.00
G1 F2000 X90.00 Y40.00 Z1.20 E1.00
G1 F2000 X40.00 Y40.00 Z1.20 E1.00
G1 F2000 X40.00 Y90.00 Z1.20 E1.00
G1 F2000 X90.00 Y90.00 Z1.20 E1.00
G1 F2000 X90.00 Y40.00 Z1.32 E1.00
G1 F2000 X40.00 Y40.00 Z1.32 E1.00
G1 F2000 X40.00 Y90.00 Z1.32 E1.00
G1 F2000 X90.00 Y90.00 Z1.32 E1.00
G1 F2000 X90.00 Y40.00 Z1.44 E1.00
G1 F2000 X40.00 Y40.00 Z1.44 E1.00
G1 F2000 X40.00 Y90.00 Z1.44 E1.00
G1 F2000 X90.00 Y90.00 Z1.44 E1.00
G1 F2000 X90.00 Y40.00 Z1.56 E1.00
G1 F2000 X40.00 Y40.00 Z1.56 E1.00
G1 F2000 X40.00 Y90.00 Z1.56 E1.00
G1 F2000 X90.00 Y90.00 Z1.56 E1.00
G1 F2000 X90.00 Y40.00 Z1.68 E1.00
G1 F2000 X40.00 Y40.00 Z1.68 E1.00
G1 F2000 X40.00 Y90.00 Z1.68 E1.00
G1 F2000 X90.00 Y90.00 Z1.68 E1.00
G1 F2000 X90.00 Y40.00 Z1.80 E1.00
G1 F2000 X40.00 Y40.00 Z1.80 E1.00
G1 F2000 X40.00 Y90.00 Z1.80 E1.00
G1 F2000 X90.00 Y90.00 Z1.80 E1.00
G1 F2000 X90.00 Y40.00 Z1.92 E1.00
G1 F2000 X40.00 Y40.00 Z1.92 E1.00
G1 F2000 X40.00 Y90.00 Z1.92 E1.00
G1 F2000 X90.00 Y90.00 Z1.92 E1.00
G1 F2000 X90.00 Y40.00 Z2.04 E1.00
G1 F2000 X40.00 Y40.00 Z2.04 E1.00
G1 F2000 X40.00 Y90.00 Z2.04 E1.00
G1 F2000 X90.00 Y90.00 Z2.04 E1.00
G1 F2000 X90.00 Y40.00 Z2.16 E1.00
G1 F2000 X40.00 Y40.00 Z2.16 E1.00
G1 F2000 X40.00 Y90.00 Z2.16 E1.00
G1 F2000 X90.00 Y90.00 Z2.16 E1.00
G1 F2000 X90.00 Y40.00 Z2.28 E1.00
G1 F2000 X40.00 Y40.00 Z2.28 E1.00
G1 F2000 X40.00 Y90.00 Z2.28 E1.00
G1 F2000 X90.00 Y90.00 Z2.28 E1.00
G1 F2000 X90.00 Y40.00 Z2.40 E1.00
G1 F2000 X40.00 Y40.00 Z2.40 E1.00
G1 F2000 X40.00 Y90.00 Z2.40 E1.00
G1 F2000 X90.00 Y90.00 Z2.40 E1.00
G1 F2000 X90.00 Y40.00 Z2.52 E1.00
G1 F2000 X40.00 Y40.00 Z2.52 E1.00
G1 F2000 X40.00 Y90.00 Z2.52 E1.00
G1 F2000 X90.00 Y90.00 Z2.52 E1.00
G1 F2000 X90.00 Y40.00 Z2.64 E1.00
G1 F2000 X40.00 Y40.00 Z2.64 E1.00
G1 F2000 X40.00 Y90.00 Z2.64 E1.00
G1 F2000 X90.00 Y90.00 Z2.64 E1.00
G1 F2000 X90.00 Y40.00 Z2.76 E1.00
G1 F2000 X40.00 Y40.00 Z2.76 E1.00
G1 F2000 X40.00 Y90.00 Z2.76 E1.00
G1 F2000 X90.00 Y90.00 Z2.76 E1.00
G1 F2000 X90.00 Y40.00 Z2.88 E1.00
G1 F2000 X40.00 Y40.00 Z2.88 E1.00
G1 F2000 X40.00 Y90.00 Z2.88 E1.00
G1 F2000 X90.00 Y90.00 Z2.88 E1.00
G1 F2000 X90.00 Y40.00 Z3.00 E1.00
G1 F2000 X40.00 Y40.00 Z3.00 E1.00
G1 F2000 X40.00 Y90.00 Z3.00 E1.00
G1 F2000 X90.00 Y90.00 Z3.00 E1.00
G1 F2000 X90.00 Y40.00 Z3.12 E1.00
G1 F2000 X40.00 Y40.00 Z3.12 E1.00
G1 F2000 X40.00 Y90.00 Z3.12 E1.00
G1 F2000 X90.00 Y90.00 Z3.12 E1.00
G1 F2000 X90.00 Y40.00 Z3.24 E1.00
G1 F2000 X40.00 Y40.00 Z3.24 E1.00
G1 F2000 X40.00 Y90.00 Z3.24 E1.00
G1 F2000 X90.00 Y90.00 Z3.24 E1.00
G1 F2000 X90.00 Y40.00 Z3.36 E1.00
G1 F2000 X40.00 Y40.00 Z3.36 E1.00
G1 F2000 X40.00 Y90.00 Z3.36 E1.00
G1 F2000 X90.00 Y90.00 Z3.36 E1.00
G1 F2000 X90.00 Y40.00 Z3.48 E1.00
G1 F2000 X40.00 Y40.00 Z3.48 E1.00
G1 F2000 X40.00 Y90.00 Z3.48 E1.00
G1 F2000 X90.00 Y90.00 Z3.48 E1.00
G1 F2000 X90.00 Y40.00 Z3.60 E1.00
G1 F2000 X40.00 Y40.00 Z3.60 E1.00
G1 F2000 X40.00 Y90.00 Z3.60 E1.00
G1 F2000 X90.00 Y90.00 Z3.60 E1.00
G1 F2000 X90.00 Y40.00 Z3.72 E1.00
G1 F2000 X40.00 Y40.00 Z3.72 E1.00
G1 F2000 X40.00 Y90.00 Z3.72 E1.00
G1 F2000 X90.00 Y90.00 Z3.72 E1.00
G1 F2000 X90.00 Y40.00 Z3.84 E1.00
G1 F2000 X40.00 Y40.00 Z3.84 E1.00
G1 F2000 X40.00 Y90.00 Z3.84 E1.00
G1 F2000 X90.00 Y90.00 Z3.84 E1.00
G1 F2000 X90.00 Y40.00 Z3.96 E1.00
G1 F2000 X40.00 Y40.00 Z3.96 E1.00
G1 F2000 X40.00 Y90.00 Z3.96 E1.00
G1 F2000 X90.00 Y90.00 Z3.96 E1.00
G1 F2000 X90.00 Y40.00 Z4.08 E1.00
G1 F2000 X40.00 Y40.00 Z4.08 E1.00
G1 F2000 X40.00 Y90.00 Z4.08 E1.00
G1 F2000 X90.00 Y90.00 Z4.08 E1.00
G1 F2000 X90.00 Y40.00 Z4.20 E1.00
G1 F2000 X40.00 Y40.00 Z4.20 E1.00
G1 F2000 X40.00 Y90.00 Z4.20 E1.00
G1 F2000 X90.00 Y90.00 Z4.20 E1.00
G1 F2000 X90.00 Y40.00 Z4.32 E1.00
G1 F2000 X40.00 Y40.00 Z4.32 E1.00
G1 F2000 X40.00 Y90.00 Z4.32 E1.00
G1 F2000 X90.00 Y90.00 Z4.32 E1.00
G1 F2000 X90.00 Y40.00 Z4.44 E1.00
G1 F2000 X40.00 Y40.00 Z4.44 E1.00
G1 F2000 X40.00 Y90.00 Z4.44 E1.00
G1 F2000 X90.00 Y90.00 Z4.44 E1.00
G1 F2000 X90.00 Y40.00 Z4.56 E1.00
G1 F2000 X40.00 Y40.00 Z4.56 E1.00
G1 F2000 X40.00 Y90.00 Z4.56 E1.00
G1 F2000 X90.00 Y90.00 Z4.56 E1.00
G1 F2000 X90.00 Y40.00 Z4.68 E1.00
G1 F2000 X40.00 Y40.00 Z4.68 E1.00
G1 F2000 X40.00 Y90.00 Z4.68 E1.00
G1 F2000 X90.00 Y90.00 Z4.68 E1.00
G1 F2000 X90.00 Y40.00 Z4.80 E1.00
G1 F2000 X40.00 Y40.00 Z4.80 E1.00
G1 F2000 X40.00 Y90.00 Z4.80 E1.00
G1 F2000 X90.00 Y90.00 Z4.80 E1.00
G1 F2000 X90.00 Y40.00 Z4.92 E1.00
G1 F2000 X40.00 Y40.00 Z4.92 E1.00
G1 F2000 X40.00 Y90.00 Z4.92 E1.00
G1 F2000 X90.00 Y90.00 Z4.92 E1.00

G1 F4000 X0 Y200 E-5
