// ─── DATA ───
const STATIC_INSPECTION_DATA = [
    { "pdc": "SD-RT-IBC-PDI-VRP-001-001", "adc": "001-VIN Registration Plate-VRP", "sadc": "VIN Plate", "pldc": "VIN Plate", "picp": "VIN plate presence on chassis", "method": "Visual inspection", "spec": "VIN plate installed at designated location" },
    { "pdc": "SD-RT-IBC-PDI-VRP-001-002", "adc": "001-VIN Registration Plate-VRP", "sadc": "VIN Plate", "pldc": "VIN Plate", "picp": "VIN plate mounting security", "method": "Physical check", "spec": "Plate firmly fixed, no looseness" },
    { "pdc": "SD-RT-IBC-PDI-VRP-001-003", "adc": "001-VIN Registration Plate-VRP", "sadc": "VIN Plate", "pldc": "Rivet/Fastener", "picp": "VIN plate rivet condition", "method": "Visual inspection", "spec": "All rivets properly fixed" },
    { "pdc": "SD-RT-IBC-PDI-VRP-001-004", "adc": "001-VIN Registration Plate-VRP", "sadc": "VIN Plate", "pldc": "VIN Plate", "picp": "VIN plate readability", "method": "Visual inspection", "spec": "Characters clearly readable" },
    { "pdc": "SD-RT-IBC-PDI-VRP-001-005", "adc": "001-VIN Registration Plate-VRP", "sadc": "VIN Plate", "pldc": "VIN Plate", "picp": "VIN number correctness", "method": "Document verification", "spec": "VIN matches manufacturing record" },
    { "pdc": "SD-RT-IBC-PDI-VRP-001-006", "adc": "001-VIN Registration Plate-VRP", "sadc": "VIN Plate", "pldc": "VIN Plate", "picp": "VIN plate alignment", "method": "Visual inspection", "spec": "Plate aligned correctly" },
    { "pdc": "SD-RT-IBC-PDI-VRP-001-007", "adc": "001-VIN Registration Plate-VRP", "sadc": "VIN Plate", "pldc": "VIN Plate", "picp": "VIN plate damage check", "method": "Visual inspection", "spec": "No scratches or deformation" },
    { "pdc": "SD-RT-IBC-PDI-VRP-001-008", "adc": "001-VIN Registration Plate-VRP", "sadc": "VIN Plate", "pldc": "VIN Plate", "picp": "VIN plate corrosion check", "method": "Visual inspection", "spec": "No corrosion present" },
    { "pdc": "SD-RT-IBC-PDI-VRP-001-009", "adc": "001-VIN Registration Plate-VRP", "sadc": "VIN Plate", "pldc": "VIN Plate", "picp": "VIN engraving/etching quality", "method": "Visual inspection", "spec": "Uniform engraving depth" },
    { "pdc": "SD-RT-IBC-PDI-VRP-001-010", "adc": "001-VIN Registration Plate-VRP", "sadc": "VIN Plate", "pldc": "VIN Plate", "picp": "VIN number legibility under lighting", "method": "Visual inspection", "spec": "Readable under normal light" },
    { "pdc": "SD-RT-IBC-PDI-VRP-001-011", "adc": "001-VIN Registration Plate-VRP", "sadc": "VIN Plate", "pldc": "VIN Plate", "picp": "VIN plate location compliance", "method": "Visual inspection", "spec": "Location as per OEM specification" },
    { "pdc": "SD-RT-IBC-PDI-VRP-001-012", "adc": "001-VIN Registration Plate-VRP", "sadc": "VIN Plate", "pldc": "VIN Plate", "picp": "VIN tampering indication", "method": "Visual inspection", "spec": "No signs of tampering" },
    { "pdc": "SD-RT-IBC-PDI-VRP-001-013", "adc": "001-VIN Registration Plate-VRP", "sadc": "VIN Plate", "pldc": "VIN Plate", "picp": "VIN plate vibration during road test", "method": "Road test observation", "spec": "No vibration or rattling" },
    { "pdc": "SD-RT-IBC-PDI-VRP-001-014", "adc": "001-VIN Registration Plate-VRP", "sadc": "VIN Plate", "pldc": "VIN Plate", "picp": "VIN plate noise during driving", "method": "Road test observation", "spec": "No abnormal noise" },
    { "pdc": "SD-RT-IBC-PDI-VRP-001-015", "adc": "001-VIN Registration Plate-VRP", "sadc": "VIN Plate", "pldc": "VIN Plate", "picp": "VIN plate security after road test", "method": "Post road test inspection", "spec": "Plate remains secure" },
    { "pdc": "SD-RT-IBC-PDI-VRP-001-016", "adc": "001-VIN Registration Plate-VRP", "sadc": "VIN Plate", "pldc": "VIN Plate", "picp": "VIN plate visibility after dirt exposure", "method": "Road test observation", "spec": "VIN still readable" },
    { "pdc": "SD-RT-IBC-PDI-VRP-001-017", "adc": "001-VIN Registration Plate-VRP", "sadc": "VIN Plate", "pldc": "VIN Plate", "picp": "VIN plate compliance with regulatory format", "method": "Document verification", "spec": "Format meets regulatory standards" },
    { "pdc": "SD-RT-IBC-PDI-VRP-001-018", "adc": "001-VIN Registration Plate-VRP", "sadc": "VIN Plate", "pldc": "VIN Plate", "picp": "VIN stamping permanence", "method": "Visual inspection", "spec": "Stamping permanent and clear" },
    { "pdc": "SD-RT-IBC-PDI-VRP-001-019", "adc": "001-VIN Registration Plate-VRP", "sadc": "VIN Plate", "pldc": "VIN Plate", "picp": "VIN plate durability check after vibration", "method": "Road test inspection", "spec": "No loosening or deformation" },
    { "pdc": "SD-RT-IBC-PDI-VRP-001-020", "adc": "001-VIN Registration Plate-VRP", "sadc": "VIN Plate", "pldc": "VIN Plate", "picp": "Overall VIN identification compliance", "method": "Inspection verification", "spec": "Fully compliant with OEM requirement" },
    { "pdc": "SD-RT-IBC-PDI-CFS-002-001", "adc": "002-Chassis Frame & Structure-CFS", "sadc": "Main Frame", "pldc": "Side Members", "picp": "Frame alignment during driving", "method": "Road test observation", "spec": "Vehicle runs straight without frame-induced deviation" },
    { "pdc": "SD-RT-IBC-PDI-CFS-002-002", "adc": "002-Chassis Frame & Structure-CFS", "sadc": "Main Frame", "pldc": "Side Members", "picp": "Frame vibration at low speed", "method": "Road test", "spec": "No abnormal vibration felt" },
    { "pdc": "SD-RT-IBC-PDI-CFS-002-003", "adc": "002-Chassis Frame & Structure-CFS", "sadc": "Main Frame", "pldc": "Side Members", "picp": "Frame vibration at high speed", "method": "Road test", "spec": "No abnormal vibration" },
    { "pdc": "SD-RT-IBC-PDI-CFS-002-004", "adc": "002-Chassis Frame & Structure-CFS", "sadc": "Main Frame", "pldc": "Cross Members", "picp": "Cross member noise over bumps", "method": "Road test", "spec": "No rattling or knocking noise" },
    { "pdc": "SD-RT-IBC-PDI-CFS-002-005", "adc": "002-Chassis Frame & Structure-CFS", "sadc": "Main Frame", "pldc": "Cross Members", "picp": "Cross member structural stability", "method": "Road test + post visual", "spec": "No movement or deformation" },
    { "pdc": "SD-RT-IBC-PDI-CFS-002-006", "adc": "002-Chassis Frame & Structure-CFS", "sadc": "Frame Mounting", "pldc": "Body Mount Brackets", "picp": "Mount bracket noise during road test", "method": "Road test", "spec": "No squeak or metal contact noise" },
    { "pdc": "SD-RT-IBC-PDI-CFS-002-007", "adc": "002-Chassis Frame & Structure-CFS", "sadc": "Frame Mounting", "pldc": "Body Mount Brackets", "picp": "Mount bracket looseness", "method": "Road test + inspection", "spec": "All mounts secure" },
    { "pdc": "SD-RT-IBC-PDI-CFS-002-008", "adc": "002-Chassis Frame & Structure-CFS", "sadc": "Frame Structure", "pldc": "Frame Welds", "picp": "Weld integrity under vibration", "method": "Road test + visual inspection", "spec": "No cracks or separation" },
    { "pdc": "SD-RT-IBC-PDI-CFS-002-009", "adc": "002-Chassis Frame & Structure-CFS", "sadc": "Frame Structure", "pldc": "Frame Rails", "picp": "Frame rail torsional response", "method": "Road test on uneven road", "spec": "No excessive twist" },
    { "pdc": "SD-RT-IBC-PDI-CFS-002-010", "adc": "002-Chassis Frame & Structure-CFS", "sadc": "Frame Structure", "pldc": "Frame Rails", "picp": "Frame rail deflection under load", "method": "Road test observation", "spec": "Deflection within OEM limits" },
    { "pdc": "SD-RT-IBC-PDI-CFS-002-011", "adc": "002-Chassis Frame & Structure-CFS", "sadc": "Frame Structure", "pldc": "Rear Overhang", "picp": "Rear frame extension vibration", "method": "Road test", "spec": "No abnormal vibration" },
    { "pdc": "SD-RT-IBC-PDI-CFS-002-012", "adc": "002-Chassis Frame & Structure-CFS", "sadc": "Frame Structure", "pldc": "Front Extension", "picp": "Front frame extension noise", "method": "Road test", "spec": "No abnormal noise" },
    { "pdc": "SD-RT-IBC-PDI-CFS-002-013", "adc": "002-Chassis Frame & Structure-CFS", "sadc": "Frame Structure", "pldc": "Frame Assembly", "picp": "Frame noise while braking", "method": "Road test braking", "spec": "No structural noise" },
    { "pdc": "SD-RT-IBC-PDI-CFS-002-014", "adc": "002-Chassis Frame & Structure-CFS", "sadc": "Frame Structure", "pldc": "Frame Assembly", "picp": "Frame noise while acceleration", "method": "Road test acceleration", "spec": "No abnormal sound" },
    { "pdc": "SD-RT-IBC-PDI-CFS-002-015", "adc": "002-Chassis Frame & Structure-CFS", "sadc": "Frame Structure", "pldc": "Frame Assembly", "picp": "Frame stability during cornering", "method": "Road test turning", "spec": "Frame remains stable" },
    { "pdc": "SD-RT-IBC-PDI-CFS-002-016", "adc": "002-Chassis Frame & Structure-CFS", "sadc": "Frame Structure", "pldc": "Frame Assembly", "picp": "Frame behavior over potholes", "method": "Road test", "spec": "No structural impact noise" },
    { "pdc": "SD-RT-IBC-PDI-CFS-002-017", "adc": "002-Chassis Frame & Structure-CFS", "sadc": "Frame Structure", "pldc": "Frame Assembly", "picp": "Frame behavior over speed breakers", "method": "Road test", "spec": "No excessive flex" },
    { "pdc": "SD-RT-IBC-PDI-CFS-002-018", "adc": "002-Chassis Frame & Structure-CFS", "sadc": "Frame Structure", "pldc": "Frame Assembly", "picp": "Frame resonance at specific speed", "method": "Road test", "spec": "No resonance detected" },
    { "pdc": "SD-RT-IBC-PDI-CFS-002-019", "adc": "002-Chassis Frame & Structure-CFS", "sadc": "Frame Structure", "pldc": "Frame Assembly", "picp": "Frame squeak noise", "method": "Road test", "spec": "No squeaking" },
    { "pdc": "SD-RT-IBC-PDI-CFS-002-020", "adc": "002-Chassis Frame & Structure-CFS", "sadc": "Frame Structure", "pldc": "Frame Assembly", "picp": "Frame contact with drivetrain components", "method": "Road test + visual", "spec": "No interference" },
    { "pdc": "SD-RT-IBC-PDI-CFS-002-021", "adc": "002-Chassis Frame & Structure-CFS", "sadc": "Frame Structure", "pldc": "Frame Assembly", "picp": "Frame contact with suspension components", "method": "Road test + visual", "spec": "Adequate clearance" },
    { "pdc": "SD-RT-IBC-PDI-CFS-002-022", "adc": "002-Chassis Frame & Structure-CFS", "sadc": "Frame Structure", "pldc": "Frame Assembly", "picp": "Frame ground clearance consistency", "method": "Road test measurement", "spec": "Within design specification" },
    { "pdc": "SD-RT-IBC-PDI-CFS-002-023", "adc": "002-Chassis Frame & Structure-CFS", "sadc": "Frame Structure", "pldc": "Frame Assembly", "picp": "Frame twist over uneven terrain", "method": "Road test", "spec": "Within allowable torsion" },
    { "pdc": "SD-RT-IBC-PDI-CFS-002-024", "adc": "002-Chassis Frame & Structure-CFS", "sadc": "Frame Structure", "pldc": "Frame Assembly", "picp": "Frame vibration during braking", "method": "Road test", "spec": "No abnormal vibration" },
    { "pdc": "SD-RT-IBC-PDI-CFS-002-025", "adc": "002-Chassis Frame & Structure-CFS", "sadc": "Frame Structure", "pldc": "Frame Assembly", "picp": "Frame vibration during acceleration", "method": "Road test", "spec": "No abnormal vibration" },
    { "pdc": "SD-RT-IBC-PDI-CFS-002-026", "adc": "002-Chassis Frame & Structure-CFS", "sadc": "Frame Structure", "pldc": "Frame Assembly", "picp": "Frame impact sound over rough road", "method": "Road test", "spec": "No metallic impact noise" },
    { "pdc": "SD-RT-IBC-PDI-CFS-002-027", "adc": "002-Chassis Frame & Structure-CFS", "sadc": "Frame Structure", "pldc": "Frame Assembly", "picp": "Frame stability during emergency maneuver", "method": "Road test", "spec": "Stable chassis response" },
    { "pdc": "SD-RT-IBC-PDI-CFS-002-028", "adc": "002-Chassis Frame & Structure-CFS", "sadc": "Frame Structure", "pldc": "Frame Assembly", "picp": "Frame NVH evaluation", "method": "Road test", "spec": "No excessive noise vibration harshness" },
    { "pdc": "SD-RT-IBC-PDI-CFS-002-029", "adc": "002-Chassis Frame & Structure-CFS", "sadc": "Frame Fasteners", "pldc": "Bolts & Rivets", "picp": "Fastener looseness indication", "method": "Road test + post inspection", "spec": "All fasteners secure" },
    { "pdc": "SD-RT-IBC-PDI-CFS-002-030", "adc": "002-Chassis Frame & Structure-CFS", "sadc": "Frame Protection", "pldc": "Coating / Paint", "picp": "Coating damage after road test", "method": "Visual inspection", "spec": "No major paint peeling" },
    { "pdc": "SD-RT-IBC-PDI-CFS-002-031", "adc": "002-Chassis Frame & Structure-CFS", "sadc": "Frame Structure", "pldc": "Overall Frame", "picp": "Overall structural integrity after road test", "method": "Visual inspection", "spec": "No cracks deformation or looseness" },
    { "pdc": "SD-RT-IBC-PDI-PTA-003-001", "adc": "003-Power Train Assembly-PTA", "sadc": "Engine", "pldc": "Engine Start System", "picp": "Engine start performance", "method": "Road test", "spec": "Engine starts immediately without abnormal noise" },
    { "pdc": "SD-RT-IBC-PDI-PTA-003-002", "adc": "003-Power Train Assembly-PTA", "sadc": "Engine", "pldc": "Idle System", "picp": "Engine idle stability", "method": "Road test", "spec": "Stable idle RPM within OEM limit" },
    { "pdc": "SD-RT-IBC-PDI-PTA-003-003", "adc": "003-Power Train Assembly-PTA", "sadc": "Engine", "pldc": "Engine Mounts", "picp": "Engine vibration at idle", "method": "Road test observation", "spec": "No excessive vibration" },
    { "pdc": "SD-RT-IBC-PDI-PTA-003-004", "adc": "003-Power Train Assembly-PTA", "sadc": "Engine", "pldc": "Fuel Injection System", "picp": "Engine response during acceleration", "method": "Road test acceleration", "spec": "Smooth power delivery" },
    { "pdc": "SD-RT-IBC-PDI-PTA-003-005", "adc": "003-Power Train Assembly-PTA", "sadc": "Engine", "pldc": "Turbocharger", "picp": "Turbo boost response", "method": "Road test", "spec": "Turbo engages smoothly without lag" },
    { "pdc": "SD-RT-IBC-PDI-PTA-003-006", "adc": "003-Power Train Assembly-PTA", "sadc": "Engine", "pldc": "Combustion System", "picp": "Engine knocking under load", "method": "Road test", "spec": "No knocking sound" },
    { "pdc": "SD-RT-IBC-PDI-PTA-003-007", "adc": "003-Power Train Assembly-PTA", "sadc": "Engine", "pldc": "Cooling Interface", "picp": "Engine overheating indication", "method": "Dashboard monitoring", "spec": "Temperature within limit" },
    { "pdc": "SD-RT-IBC-PDI-PTA-003-008", "adc": "003-Power Train Assembly-PTA", "sadc": "Engine", "pldc": "Lubrication System", "picp": "Oil pressure indication", "method": "Dashboard observation", "spec": "Oil pressure normal" },
    { "pdc": "SD-RT-IBC-PDI-PTA-003-009", "adc": "003-Power Train Assembly-PTA", "sadc": "Engine", "pldc": "Exhaust System", "picp": "Exhaust smoke during acceleration", "method": "Road test observation", "spec": "Within emission limit" },
    { "pdc": "SD-RT-IBC-PDI-PTA-003-010", "adc": "003-Power Train Assembly-PTA", "sadc": "Engine", "pldc": "Exhaust System", "picp": "Exhaust abnormal noise", "method": "Road test", "spec": "No abnormal noise" },
    { "pdc": "SD-RT-IBC-PDI-PTA-003-011", "adc": "003-Power Train Assembly-PTA", "sadc": "Clutch System", "pldc": "Clutch Pedal", "picp": "Clutch pedal free play", "method": "Road test observation", "spec": "Within OEM specification" },
    { "pdc": "SD-RT-IBC-PDI-PTA-003-012", "adc": "003-Power Train Assembly-PTA", "sadc": "Clutch System", "pldc": "Clutch Plate", "picp": "Clutch engagement smoothness", "method": "Road test", "spec": "Smooth engagement" },
    { "pdc": "SD-RT-IBC-PDI-PTA-003-013", "adc": "003-Power Train Assembly-PTA", "sadc": "Clutch System", "pldc": "Clutch Plate", "picp": "Clutch slipping under load", "method": "Road test acceleration", "spec": "No slipping" },
    { "pdc": "SD-RT-IBC-PDI-PTA-003-014", "adc": "003-Power Train Assembly-PTA", "sadc": "Clutch System", "pldc": "Release Bearing", "picp": "Clutch noise during operation", "method": "Road test", "spec": "No abnormal noise" },
    { "pdc": "SD-RT-IBC-PDI-PTA-003-015", "adc": "003-Power Train Assembly-PTA", "sadc": "Gearbox", "pldc": "Gear Selector", "picp": "Gear shifting smoothness", "method": "Road test", "spec": "Smooth gear engagement" },
    { "pdc": "SD-RT-IBC-PDI-PTA-003-016", "adc": "003-Power Train Assembly-PTA", "sadc": "Gearbox", "pldc": "Gear Train", "picp": "Gear slipping during load", "method": "Road test", "spec": "Gear holds without slip" },
    { "pdc": "SD-RT-IBC-PDI-PTA-003-017", "adc": "003-Power Train Assembly-PTA", "sadc": "Gearbox", "pldc": "Gearbox Housing", "picp": "Gearbox vibration", "method": "Road test", "spec": "No abnormal vibration" },
    { "pdc": "SD-RT-IBC-PDI-PTA-003-018", "adc": "003-Power Train Assembly-PTA", "sadc": "Gearbox", "pldc": "Gearbox Lubrication", "picp": "Gearbox oil leakage indication", "method": "Post road test inspection", "spec": "No oil leakage" },
    { "pdc": "SD-RT-IBC-PDI-PTA-003-019", "adc": "003-Power Train Assembly-PTA", "sadc": "Gearbox", "pldc": "Synchromesh", "picp": "Gear engagement noise", "method": "Road test", "spec": "No grinding noise" },
    { "pdc": "SD-RT-IBC-PDI-PTA-003-020", "adc": "003-Power Train Assembly-PTA", "sadc": "Gearbox", "pldc": "Gear Train", "picp": "Gear holding during hill climb", "method": "Road test", "spec": "Gear maintains load" },
    { "pdc": "SD-RT-IBC-PDI-PTA-003-021", "adc": "003-Power Train Assembly-PTA", "sadc": "Engine", "pldc": "Throttle System", "picp": "Throttle response", "method": "Road test", "spec": "Immediate engine response" },
    { "pdc": "SD-RT-IBC-PDI-PTA-003-022", "adc": "003-Power Train Assembly-PTA", "sadc": "Engine", "pldc": "Engine Mounts", "picp": "Engine movement during acceleration", "method": "Road test", "spec": "Movement within acceptable limit" },
    { "pdc": "SD-RT-IBC-PDI-PTA-003-023", "adc": "003-Power Train Assembly-PTA", "sadc": "Engine", "pldc": "Engine Mounts", "picp": "Engine movement during braking", "method": "Road test", "spec": "No excessive movement" },
    { "pdc": "SD-RT-IBC-PDI-PTA-003-024", "adc": "003-Power Train Assembly-PTA", "sadc": "Powertrain Integration", "pldc": "Engine + Gearbox", "picp": "Powertrain vibration at low speed", "method": "Road test", "spec": "No abnormal vibration" },
    { "pdc": "SD-RT-IBC-PDI-PTA-003-025", "adc": "003-Power Train Assembly-PTA", "sadc": "Powertrain Integration", "pldc": "Engine + Gearbox", "picp": "Powertrain vibration at high speed", "method": "Road test", "spec": "Within NVH limit" },
    { "pdc": "SD-RT-IBC-PDI-PTA-003-026", "adc": "003-Power Train Assembly-PTA", "sadc": "Powertrain Integration", "pldc": "Engine + Gearbox", "picp": "Powertrain shudder during acceleration", "method": "Road test", "spec": "No shudder" },
    { "pdc": "SD-RT-IBC-PDI-PTA-003-027", "adc": "003-Power Train Assembly-PTA", "sadc": "Powertrain Integration", "pldc": "Engine + Gearbox", "picp": "Powertrain noise during cruising", "method": "Road test", "spec": "No abnormal noise" },
    { "pdc": "SD-RT-IBC-PDI-PTA-003-028", "adc": "003-Power Train Assembly-PTA", "sadc": "Powertrain Integration", "pldc": "Engine + Gearbox", "picp": "Powertrain performance under load", "method": "Road test", "spec": "Smooth and consistent performance" },
    { "pdc": "SD-RT-IBC-PDI-PTA-003-029", "adc": "003-Power Train Assembly-PTA", "sadc": "Powertrain Integration", "pldc": "Engine + Gearbox", "picp": "Powertrain behavior during sudden braking", "method": "Road test", "spec": "Stable without jerk" },
    { "pdc": "SD-RT-IBC-PDI-PTA-003-030", "adc": "003-Power Train Assembly-PTA", "sadc": "Powertrain Integration", "pldc": "Complete System", "picp": "Overall powertrain NVH performance", "method": "Road test", "spec": "Within OEM NVH standard" },
    { "pdc": "SD-RT-IBC-PDI-PTA-003-031", "adc": "003-Power Train Assembly-PTA", "sadc": "Powertrain Integration", "pldc": "Complete System", "picp": "Overall powertrain performance", "method": "Road test", "spec": "Meets OEM performance requirement" },
    { "pdc": "SD-RT-IBC-PDI-DLA-004-001", "adc": "004-Drive line Assembly-DLA", "sadc": "Propeller Shaft", "pldc": "Propeller Shaft Tube", "picp": "Propeller shaft vibration at low speed", "method": "Road test", "spec": "No abnormal vibration felt" },
    { "pdc": "SD-RT-IBC-PDI-DLA-004-002", "adc": "004-Drive line Assembly-DLA", "sadc": "Propeller Shaft", "pldc": "Propeller Shaft Tube", "picp": "Propeller shaft vibration at high speed", "method": "Road test", "spec": "Within OEM NVH limit" },
    { "pdc": "SD-RT-IBC-PDI-DLA-004-003", "adc": "004-Drive line Assembly-DLA", "sadc": "Propeller Shaft", "pldc": "Universal Joint", "picp": "Universal joint noise during acceleration", "method": "Road test", "spec": "No abnormal clicking/knocking" },
    { "pdc": "SD-RT-IBC-PDI-DLA-004-004", "adc": "004-Drive line Assembly-DLA", "sadc": "Propeller Shaft", "pldc": "Universal Joint", "picp": "Universal joint noise during deceleration", "method": "Road test", "spec": "No abnormal noise" },
    { "pdc": "SD-RT-IBC-PDI-DLA-004-005", "adc": "004-Drive line Assembly-DLA", "sadc": "Propeller Shaft", "pldc": "Slip Joint", "picp": "Slip joint smooth movement", "method": "Road test", "spec": "Smooth telescopic movement" },
    { "pdc": "SD-RT-IBC-PDI-DLA-004-006", "adc": "004-Drive line Assembly-DLA", "sadc": "Propeller Shaft", "pldc": "Center Bearing", "picp": "Center bearing noise", "method": "Road test", "spec": "No humming or grinding" },
    { "pdc": "SD-RT-IBC-PDI-DLA-004-007", "adc": "004-Drive line Assembly-DLA", "sadc": "Propeller Shaft", "pldc": "Center Bearing", "picp": "Center bearing vibration", "method": "Road test", "spec": "No abnormal vibration" },
    { "pdc": "SD-RT-IBC-PDI-DLA-004-008", "adc": "004-Drive line Assembly-DLA", "sadc": "Propeller Shaft", "pldc": "Mounting Bracket", "picp": "Center bearing mounting security", "method": "Visual inspection after test", "spec": "Mounting bolts secure" },
    { "pdc": "SD-RT-IBC-PDI-DLA-004-009", "adc": "004-Drive line Assembly-DLA", "sadc": "Driveline Integration", "pldc": "Propeller Shaft", "picp": "Propeller shaft imbalance indication", "method": "Road test", "spec": "No oscillation observed" },
    { "pdc": "SD-RT-IBC-PDI-DLA-004-010", "adc": "004-Drive line Assembly-DLA", "sadc": "Driveline Integration", "pldc": "Propeller Shaft", "picp": "Propeller shaft contact with chassis", "method": "Road test + visual", "spec": "Adequate clearance maintained" },
    { "pdc": "SD-RT-IBC-PDI-DLA-004-011", "adc": "004-Drive line Assembly-DLA", "sadc": "Differential", "pldc": "Differential Gear", "picp": "Differential noise during acceleration", "method": "Road test", "spec": "No whining or grinding" },
    { "pdc": "SD-RT-IBC-PDI-DLA-004-012", "adc": "004-Drive line Assembly-DLA", "sadc": "Differential", "pldc": "Differential Gear", "picp": "Differential noise during deceleration", "method": "Road test", "spec": "No abnormal noise" },
    { "pdc": "SD-RT-IBC-PDI-DLA-004-013", "adc": "004-Drive line Assembly-DLA", "sadc": "Differential", "pldc": "Differential Housing", "picp": "Differential vibration", "method": "Road test", "spec": "Within acceptable NVH limit" },
    { "pdc": "SD-RT-IBC-PDI-DLA-004-014", "adc": "004-Drive line Assembly-DLA", "sadc": "Differential", "pldc": "Differential Housing", "picp": "Differential oil leakage", "method": "Visual inspection after test", "spec": "No oil leakage" },
    { "pdc": "SD-RT-IBC-PDI-DLA-004-015", "adc": "004-Drive line Assembly-DLA", "sadc": "Rear Axle", "pldc": "Axle Shaft", "picp": "Axle shaft vibration", "method": "Road test", "spec": "No abnormal vibration" },
    { "pdc": "SD-RT-IBC-PDI-DLA-004-016", "adc": "004-Drive line Assembly-DLA", "sadc": "Rear Axle", "pldc": "Axle Shaft", "picp": "Axle shaft noise", "method": "Road test", "spec": "No abnormal sound" },
    { "pdc": "SD-RT-IBC-PDI-DLA-004-017", "adc": "004-Drive line Assembly-DLA", "sadc": "Rear Axle", "pldc": "Final Drive", "picp": "Final drive noise at constant speed", "method": "Road test", "spec": "No whining noise" },
    { "pdc": "SD-RT-IBC-PDI-DLA-004-018", "adc": "004-Drive line Assembly-DLA", "sadc": "Rear Axle", "pldc": "Axle Housing", "picp": "Axle housing vibration", "method": "Road test", "spec": "No abnormal vibration" },
    { "pdc": "SD-RT-IBC-PDI-DLA-004-019", "adc": "004-Drive line Assembly-DLA", "sadc": "Rear Axle", "pldc": "Axle Mount", "picp": "Rear axle mounting stability", "method": "Road test + visual", "spec": "Mounting secure" },
    { "pdc": "SD-RT-IBC-PDI-DLA-004-020", "adc": "004-Drive line Assembly-DLA", "sadc": "Driveline Integration", "pldc": "Propeller Shaft + Axle", "picp": "Driveline clunk during gear shift", "method": "Road test", "spec": "No excessive clunk" },
    { "pdc": "SD-RT-IBC-PDI-DLA-004-021", "adc": "004-Drive line Assembly-DLA", "sadc": "Driveline Integration", "pldc": "Propeller Shaft + Axle", "picp": "Driveline backlash during acceleration", "method": "Road test", "spec": "Within acceptable limit" },
    { "pdc": "SD-RT-IBC-PDI-DLA-004-022", "adc": "004-Drive line Assembly-DLA", "sadc": "Driveline Integration", "pldc": "Propeller Shaft + Axle", "picp": "Driveline backlash during deceleration", "method": "Road test", "spec": "No excessive backlash" },
    { "pdc": "SD-RT-IBC-PDI-DLA-004-023", "adc": "004-Drive line Assembly-DLA", "sadc": "Driveline Integration", "pldc": "Complete Driveline", "picp": "Driveline shudder during take-off", "method": "Road test", "spec": "Smooth take-off" },
    { "pdc": "SD-RT-IBC-PDI-DLA-004-024", "adc": "004-Drive line Assembly-DLA", "sadc": "Driveline Integration", "pldc": "Complete Driveline", "picp": "Driveline vibration during cruising", "method": "Road test", "spec": "Within NVH standard" },
    { "pdc": "SD-RT-IBC-PDI-DLA-004-025", "adc": "004-Drive line Assembly-DLA", "sadc": "Driveline Integration", "pldc": "Complete Driveline", "picp": "Driveline noise during turning", "method": "Road test", "spec": "No abnormal noise" },
    { "pdc": "SD-RT-IBC-PDI-DLA-004-026", "adc": "004-Drive line Assembly-DLA", "sadc": "Driveline Integration", "pldc": "Complete Driveline", "picp": "Driveline behavior on rough road", "method": "Road test", "spec": "Stable without abnormal vibration" },
    { "pdc": "SD-RT-IBC-PDI-DLA-004-027", "adc": "004-Drive line Assembly-DLA", "sadc": "Driveline Integration", "pldc": "Complete Driveline", "picp": "Driveline performance during hill climb", "method": "Road test", "spec": "Smooth torque transfer" },
    { "pdc": "SD-RT-IBC-PDI-DLA-004-028", "adc": "004-Drive line Assembly-DLA", "sadc": "Driveline Integration", "pldc": "Complete Driveline", "picp": "Driveline response during sudden acceleration", "method": "Road test", "spec": "No delay or jerk" },
    { "pdc": "SD-RT-IBC-PDI-DLA-004-029", "adc": "004-Drive line Assembly-DLA", "sadc": "Driveline Integration", "pldc": "Complete Driveline", "picp": "Driveline response during sudden braking", "method": "Road test", "spec": "Stable without shock" },
    { "pdc": "SD-RT-IBC-PDI-DLA-004-030", "adc": "004-Drive line Assembly-DLA", "sadc": "Driveline Integration", "pldc": "Complete Driveline", "picp": "Overall driveline NVH performance", "method": "Road test", "spec": "Within OEM NVH limit" },
    { "pdc": "SD-RT-IBC-PDI-DLA-004-031", "adc": "004-Drive line Assembly-DLA", "sadc": "Driveline Integration", "pldc": "Complete Driveline", "picp": "Overall driveline functional performance", "method": "Road test", "spec": "Meets OEM driveline performance requirement" },
    { "pdc": "SD-RT-IBC-PDI-SSR-005-001", "adc": "005-Steering System-RHD-SSR", "sadc": "Steering Wheel", "pldc": "Steering Wheel Rim", "picp": "Steering wheel free play during driving", "method": "Road test", "spec": "Free play within OEM specification" },
    { "pdc": "SD-RT-IBC-PDI-SSR-005-002", "adc": "005-Steering System-RHD-SSR", "sadc": "Steering Wheel", "pldc": "Steering Wheel Hub", "picp": "Steering wheel vibration at low speed", "method": "Road test", "spec": "No abnormal vibration" },
    { "pdc": "SD-RT-IBC-PDI-SSR-005-003", "adc": "005-Steering System-RHD-SSR", "sadc": "Steering Wheel", "pldc": "Steering Wheel Hub", "picp": "Steering wheel vibration at high speed", "method": "Road test", "spec": "Within acceptable NVH limit" },
    { "pdc": "SD-RT-IBC-PDI-SSR-005-004", "adc": "005-Steering System-RHD-SSR", "sadc": "Steering Column", "pldc": "Steering Column Shaft", "picp": "Steering column noise during turning", "method": "Road test", "spec": "No abnormal noise" },
    { "pdc": "SD-RT-IBC-PDI-SSR-005-005", "adc": "005-Steering System-RHD-SSR", "sadc": "Steering Column", "pldc": "Steering Column Mount", "picp": "Steering column mounting stability", "method": "Road test + visual", "spec": "Mounting secure" },
    { "pdc": "SD-RT-IBC-PDI-SSR-005-006", "adc": "005-Steering System-RHD-SSR", "sadc": "Steering Gear", "pldc": "Steering Gearbox", "picp": "Steering gear noise", "method": "Road test", "spec": "No grinding or knocking" },
    { "pdc": "SD-RT-IBC-PDI-SSR-005-007", "adc": "005-Steering System-RHD-SSR", "sadc": "Steering Gear", "pldc": "Steering Gearbox", "picp": "Steering gear backlash", "method": "Road test", "spec": "Within OEM limit" },
    { "pdc": "SD-RT-IBC-PDI-SSR-005-008", "adc": "005-Steering System-RHD-SSR", "sadc": "Power Steering", "pldc": "Power Steering Pump", "picp": "Power steering assist performance", "method": "Road test", "spec": "Smooth steering assist" },
    { "pdc": "SD-RT-IBC-PDI-SSR-005-009", "adc": "005-Steering System-RHD-SSR", "sadc": "Power Steering", "pldc": "Power Steering Pump", "picp": "Power steering pump noise", "method": "Road test", "spec": "No abnormal noise" },
    { "pdc": "SD-RT-IBC-PDI-SSR-005-010", "adc": "005-Steering System-RHD-SSR", "sadc": "Power Steering", "pldc": "Power Steering Lines", "picp": "Power steering fluid leakage", "method": "Visual inspection after test", "spec": "No leakage" },
    { "pdc": "SD-RT-IBC-PDI-SSR-005-011", "adc": "005-Steering System-RHD-SSR", "sadc": "Steering Linkage", "pldc": "Drag Link", "picp": "Drag link noise during turning", "method": "Road test", "spec": "No abnormal noise" },
    { "pdc": "SD-RT-IBC-PDI-SSR-005-012", "adc": "005-Steering System-RHD-SSR", "sadc": "Steering Linkage", "pldc": "Tie Rod End", "picp": "Tie rod end looseness", "method": "Road test + inspection", "spec": "No looseness" },
    { "pdc": "SD-RT-IBC-PDI-SSR-005-013", "adc": "005-Steering System-RHD-SSR", "sadc": "Steering Linkage", "pldc": "Tie Rod", "picp": "Tie rod vibration", "method": "Road test", "spec": "No abnormal vibration" },
    { "pdc": "SD-RT-IBC-PDI-SSR-005-014", "adc": "005-Steering System-RHD-SSR", "sadc": "Steering Knuckle", "pldc": "Steering Knuckle Arm", "picp": "Steering knuckle noise", "method": "Road test", "spec": "No abnormal noise" },
    { "pdc": "SD-RT-IBC-PDI-SSR-005-015", "adc": "005-Steering System-RHD-SSR", "sadc": "Steering Knuckle", "pldc": "Steering Knuckle Arm", "picp": "Steering knuckle vibration", "method": "Road test", "spec": "Within NVH limit" },
    { "pdc": "SD-RT-IBC-PDI-SSR-005-016", "adc": "005-Steering System-RHD-SSR", "sadc": "Steering Integration", "pldc": "Front Wheels", "picp": "Vehicle pulling to left/right", "method": "Road test", "spec": "Vehicle tracks straight" },
    { "pdc": "SD-RT-IBC-PDI-SSR-005-017", "adc": "005-Steering System-RHD-SSR", "sadc": "Steering Integration", "pldc": "Front Wheels", "picp": "Steering response during lane change", "method": "Road test", "spec": "Immediate response" },
    { "pdc": "SD-RT-IBC-PDI-SSR-005-018", "adc": "005-Steering System-RHD-SSR", "sadc": "Steering Integration", "pldc": "Front Wheels", "picp": "Steering response during sharp turns", "method": "Road test", "spec": "Smooth turning" },
    { "pdc": "SD-RT-IBC-PDI-SSR-005-019", "adc": "005-Steering System-RHD-SSR", "sadc": "Steering Integration", "pldc": "Front Wheels", "picp": "Steering returnability after turning", "method": "Road test", "spec": "Steering returns to center" },
    { "pdc": "SD-RT-IBC-PDI-SSR-005-020", "adc": "005-Steering System-RHD-SSR", "sadc": "Steering Integration", "pldc": "Front Wheels", "picp": "Steering effort at low speed", "method": "Road test", "spec": "Effort within design limit" },
    { "pdc": "SD-RT-IBC-PDI-SSR-005-021", "adc": "005-Steering System-RHD-SSR", "sadc": "Steering Integration", "pldc": "Front Wheels", "picp": "Steering effort at high speed", "method": "Road test", "spec": "Stable steering control" },
    { "pdc": "SD-RT-IBC-PDI-SSR-005-022", "adc": "005-Steering System-RHD-SSR", "sadc": "Steering Integration", "pldc": "Front Wheels", "picp": "Steering stability on uneven road", "method": "Road test", "spec": "No steering wobble" },
    { "pdc": "SD-RT-IBC-PDI-SSR-005-023", "adc": "005-Steering System-RHD-SSR", "sadc": "Steering Integration", "pldc": "Front Wheels", "picp": "Steering oscillation (shimmy)", "method": "Road test", "spec": "No oscillation" },
    { "pdc": "SD-RT-IBC-PDI-SSR-005-024", "adc": "005-Steering System-RHD-SSR", "sadc": "Steering Integration", "pldc": "Front Wheels", "picp": "Steering behavior over potholes", "method": "Road test", "spec": "No abnormal steering kickback" },
    { "pdc": "SD-RT-IBC-PDI-SSR-005-025", "adc": "005-Steering System-RHD-SSR", "sadc": "Steering Integration", "pldc": "Front Wheels", "picp": "Steering stability during braking", "method": "Road test", "spec": "Vehicle remains stable" },
    { "pdc": "SD-RT-IBC-PDI-SSR-005-026", "adc": "005-Steering System-RHD-SSR", "sadc": "Steering Integration", "pldc": "Front Wheels", "picp": "Steering stability during acceleration", "method": "Road test", "spec": "Stable directional control" },
    { "pdc": "SD-RT-IBC-PDI-SSR-005-027", "adc": "005-Steering System-RHD-SSR", "sadc": "Steering Integration", "pldc": "Complete System", "picp": "Steering NVH performance", "method": "Road test", "spec": "Within OEM NVH standard" },
    { "pdc": "SD-RT-IBC-PDI-SSR-005-028", "adc": "005-Steering System-RHD-SSR", "sadc": "Steering Integration", "pldc": "Complete System", "picp": "Overall steering system performance", "method": "Road test", "spec": "Meets OEM steering performance requirement" },
    { "pdc": "SD-RT-IBC-PDI-SSC-006-001", "adc": "006-Suspension System Combined-SSC", "sadc": "Front Suspension", "pldc": "Leaf Spring", "picp": "Front suspension noise during driving", "method": "Road test", "spec": "No abnormal noise" },
    { "pdc": "SD-RT-IBC-PDI-SSC-006-002", "adc": "006-Suspension System Combined-SSC", "sadc": "Front Suspension", "pldc": "Leaf Spring", "picp": "Leaf spring alignment", "method": "Visual inspection", "spec": "Proper alignment" },
    { "pdc": "SD-RT-IBC-PDI-SSC-006-003", "adc": "006-Suspension System Combined-SSC", "sadc": "Front Suspension", "pldc": "Leaf Spring Clamp", "picp": "Leaf spring clamp security", "method": "Visual inspection", "spec": "Clamp tight and secure" },
    { "pdc": "SD-RT-IBC-PDI-SSC-006-004", "adc": "006-Suspension System Combined-SSC", "sadc": "Front Suspension", "pldc": "Shackle Pin", "picp": "Shackle pin looseness", "method": "Road test + inspection", "spec": "No looseness" },
    { "pdc": "SD-RT-IBC-PDI-SSC-006-005", "adc": "006-Suspension System Combined-SSC", "sadc": "Front Suspension", "pldc": "Shock Absorber", "picp": "Shock absorber damping", "method": "Road test", "spec": "Smooth damping without bounce" },
    { "pdc": "SD-RT-IBC-PDI-SSC-006-006", "adc": "006-Suspension System Combined-SSC", "sadc": "Front Suspension", "pldc": "Shock Absorber", "picp": "Shock absorber oil leakage", "method": "Visual inspection", "spec": "No oil leakage" },
    { "pdc": "SD-RT-IBC-PDI-SSC-006-007", "adc": "006-Suspension System Combined-SSC", "sadc": "Front Suspension", "pldc": "Suspension Bush", "picp": "Suspension bush wear", "method": "Visual inspection", "spec": "No excessive wear" },
    { "pdc": "SD-RT-IBC-PDI-SSC-006-008", "adc": "006-Suspension System Combined-SSC", "sadc": "Front Suspension", "pldc": "Suspension Mounting", "picp": "Suspension mounting bolts", "method": "Visual inspection", "spec": "Bolts tightened to spec" },
    { "pdc": "SD-RT-IBC-PDI-SSC-006-009", "adc": "006-Suspension System Combined-SSC", "sadc": "Rear Suspension", "pldc": "Leaf Spring", "picp": "Rear suspension noise", "method": "Road test", "spec": "No abnormal noise" },
    { "pdc": "SD-RT-IBC-PDI-SSC-006-010", "adc": "006-Suspension System Combined-SSC", "sadc": "Rear Suspension", "pldc": "Leaf Spring", "picp": "Leaf spring deflection under load", "method": "Road test", "spec": "Within OEM limits" },
    { "pdc": "SD-RT-IBC-PDI-SSC-006-011", "adc": "006-Suspension System Combined-SSC", "sadc": "Rear Suspension", "pldc": "Shackle", "picp": "Rear shackle movement", "method": "Road test observation", "spec": "Smooth articulation" },
    { "pdc": "SD-RT-IBC-PDI-SSC-006-012", "adc": "006-Suspension System Combined-SSC", "sadc": "Rear Suspension", "pldc": "Shock Absorber", "picp": "Rear shock absorber performance", "method": "Road test", "spec": "Stable damping" },
    { "pdc": "SD-RT-IBC-PDI-SSC-006-013", "adc": "006-Suspension System Combined-SSC", "sadc": "Rear Suspension", "pldc": "Shock Absorber", "picp": "Shock absorber mounting", "method": "Visual inspection", "spec": "Mount secure" },
    { "pdc": "SD-RT-IBC-PDI-SSC-006-014", "adc": "006-Suspension System Combined-SSC", "sadc": "Rear Suspension", "pldc": "Air Suspension (if equipped)", "picp": "Air suspension leveling", "method": "Road test", "spec": "Vehicle level maintained" },
    { "pdc": "SD-RT-IBC-PDI-SSC-006-015", "adc": "006-Suspension System Combined-SSC", "sadc": "Rear Suspension", "pldc": "Air Suspension (if equipped)", "picp": "Air bag leakage", "method": "Visual inspection", "spec": "No air leakage" },
    { "pdc": "SD-RT-IBC-PDI-SSC-006-016", "adc": "006-Suspension System Combined-SSC", "sadc": "Suspension Integration", "pldc": "Front Axle", "picp": "Vehicle stability during cornering", "method": "Road test", "spec": "Stable handling" },
    { "pdc": "SD-RT-IBC-PDI-SSC-006-017", "adc": "006-Suspension System Combined-SSC", "sadc": "Suspension Integration", "pldc": "Rear Axle", "picp": "Vehicle stability on rough road", "method": "Road test", "spec": "No excessive bounce" },
    { "pdc": "SD-RT-IBC-PDI-SSC-006-018", "adc": "006-Suspension System Combined-SSC", "sadc": "Suspension Integration", "pldc": "Complete Suspension", "picp": "Vehicle body roll", "method": "Road test", "spec": "Within design limits" },
    { "pdc": "SD-RT-IBC-PDI-SSC-006-019", "adc": "006-Suspension System Combined-SSC", "sadc": "Suspension Integration", "pldc": "Complete Suspension", "picp": "Suspension vibration", "method": "Road test", "spec": "Within NVH limits" },
    { "pdc": "SD-RT-IBC-PDI-SSC-006-020", "adc": "006-Suspension System Combined-SSC", "sadc": "Suspension Integration", "pldc": "Complete Suspension", "picp": "Suspension response over speed breakers", "method": "Road test", "spec": "Smooth response" },
    { "pdc": "SD-RT-IBC-PDI-SSC-006-021", "adc": "006-Suspension System Combined-SSC", "sadc": "Suspension Integration", "pldc": "Complete Suspension", "picp": "Suspension response over potholes", "method": "Road test", "spec": "No abnormal impact" },
    { "pdc": "SD-RT-IBC-PDI-SSC-006-022", "adc": "006-Suspension System Combined-SSC", "sadc": "Suspension Integration", "pldc": "Complete Suspension", "picp": "Ride comfort evaluation", "method": "Road test", "spec": "Comfort within OEM standard" },
    { "pdc": "SD-RT-IBC-PDI-SSC-006-023", "adc": "006-Suspension System Combined-SSC", "sadc": "Suspension Integration", "pldc": "Complete Suspension", "picp": "Suspension articulation on uneven terrain", "method": "Road test", "spec": "Proper articulation" },
    { "pdc": "SD-RT-IBC-PDI-SSC-006-024", "adc": "006-Suspension System Combined-SSC", "sadc": "Suspension Integration", "pldc": "Complete Suspension", "picp": "Vehicle pitching during braking", "method": "Road test", "spec": "Within acceptable range" },
    { "pdc": "SD-RT-IBC-PDI-SSC-006-025", "adc": "006-Suspension System Combined-SSC", "sadc": "Suspension Integration", "pldc": "Complete Suspension", "picp": "Overall suspension system performance", "method": "Road test", "spec": "Meets OEM specification" },
    { "pdc": "SD-RT-IBC-PDI-BSA-007-001", "adc": "007-Braking  System Assembly-BSA", "sadc": "Service Brake", "pldc": "Brake Pedal", "picp": "Brake pedal response during driving", "method": "Road test", "spec": "Pedal response immediate, no lag" },
    { "pdc": "SD-RT-IBC-PDI-BSA-007-002", "adc": "007-Braking  System Assembly-BSA", "sadc": "Service Brake", "pldc": "Brake Pedal", "picp": "Brake pedal free play", "method": "Road test observation", "spec": "Within manufacturer limit" },
    { "pdc": "SD-RT-IBC-PDI-BSA-007-003", "adc": "007-Braking  System Assembly-BSA", "sadc": "Service Brake", "pldc": "Brake Pedal", "picp": "Brake pedal vibration during braking", "method": "Road test", "spec": "No abnormal vibration" },
    { "pdc": "SD-RT-IBC-PDI-BSA-007-004", "adc": "007-Braking  System Assembly-BSA", "sadc": "Service Brake", "pldc": "Brake Pedal", "picp": "Pedal return after braking", "method": "Road test", "spec": "Smooth return, no sticking" },
    { "pdc": "SD-RT-IBC-PDI-BSA-007-005", "adc": "007-Braking  System Assembly-BSA", "sadc": "Service Brake", "pldc": "Air Brake System", "picp": "Brake application time", "method": "Road test", "spec": "Brake engages without delay" },
    { "pdc": "SD-RT-IBC-PDI-BSA-007-006", "adc": "007-Braking  System Assembly-BSA", "sadc": "Service Brake", "pldc": "Air Pressure", "picp": "Air pressure build-up during driving", "method": "Dashboard observation", "spec": "Within specified PSI range" },
    { "pdc": "SD-RT-IBC-PDI-BSA-007-007", "adc": "007-Braking  System Assembly-BSA", "sadc": "Service Brake", "pldc": "Air Pressure", "picp": "Air pressure drop during braking", "method": "Road test", "spec": "No abnormal pressure drop" },
    { "pdc": "SD-RT-IBC-PDI-BSA-007-008", "adc": "007-Braking  System Assembly-BSA", "sadc": "Service Brake", "pldc": "Brake Chamber", "picp": "Brake chamber response", "method": "Road test", "spec": "Uniform brake application" },
    { "pdc": "SD-RT-IBC-PDI-BSA-007-009", "adc": "007-Braking  System Assembly-BSA", "sadc": "Service Brake", "pldc": "Brake Lining", "picp": "Brake lining performance", "method": "Road test braking", "spec": "Adequate braking without fade" },
    { "pdc": "SD-RT-IBC-PDI-BSA-007-010", "adc": "007-Braking  System Assembly-BSA", "sadc": "Service Brake", "pldc": "Brake Drum/Disc", "picp": "Brake noise during braking", "method": "Road test", "spec": "No abnormal squeal/grinding" },
    { "pdc": "SD-RT-IBC-PDI-BSA-007-011", "adc": "007-Braking  System Assembly-BSA", "sadc": "Service Brake", "pldc": "Brake Drum/Disc", "picp": "Brake vibration during braking", "method": "Road test", "spec": "No judder" },
    { "pdc": "SD-RT-IBC-PDI-BSA-007-012", "adc": "007-Braking  System Assembly-BSA", "sadc": "Service Brake", "pldc": "Brake Drum/Disc", "picp": "Brake effectiveness at low speed", "method": "Road test", "spec": "Vehicle stops smoothly" },
    { "pdc": "SD-RT-IBC-PDI-BSA-007-013", "adc": "007-Braking  System Assembly-BSA", "sadc": "Service Brake", "pldc": "Brake Drum/Disc", "picp": "Brake effectiveness at high speed", "method": "Road test", "spec": "Vehicle stops within safe distance" },
    { "pdc": "SD-RT-IBC-PDI-BSA-007-014", "adc": "007-Braking  System Assembly-BSA", "sadc": "Service Brake", "pldc": "Brake Drum/Disc", "picp": "Brake pull left/right", "method": "Road test", "spec": "Vehicle remains straight" },
    { "pdc": "SD-RT-IBC-PDI-BSA-007-015", "adc": "007-Braking  System Assembly-BSA", "sadc": "Service Brake", "pldc": "Brake Balance", "picp": "Front-rear brake balance", "method": "Road test", "spec": "Balanced braking" },
    { "pdc": "SD-RT-IBC-PDI-BSA-007-016", "adc": "007-Braking  System Assembly-BSA", "sadc": "Parking Brake", "pldc": "Parking Brake Lever", "picp": "Parking brake engagement", "method": "Road test", "spec": "Vehicle held on incline" },
    { "pdc": "SD-RT-IBC-PDI-BSA-007-017", "adc": "007-Braking  System Assembly-BSA", "sadc": "Parking Brake", "pldc": "Parking Brake Lever", "picp": "Parking brake release", "method": "Road test", "spec": "Smooth release" },
    { "pdc": "SD-RT-IBC-PDI-BSA-007-018", "adc": "007-Braking  System Assembly-BSA", "sadc": "Parking Brake", "pldc": "Parking Brake Cable", "picp": "Parking brake cable performance", "method": "Road test", "spec": "No slack or drag" },
    { "pdc": "SD-RT-IBC-PDI-BSA-007-019", "adc": "007-Braking  System Assembly-BSA", "sadc": "Emergency Brake", "pldc": "Emergency Brake", "picp": "Emergency braking performance", "method": "Controlled road test", "spec": "Vehicle controlled stop" },
    { "pdc": "SD-RT-IBC-PDI-BSA-007-020", "adc": "007-Braking  System Assembly-BSA", "sadc": "ABS System", "pldc": "ABS ECU", "picp": "ABS activation during hard braking", "method": "Road test", "spec": "ABS engages correctly" },
    { "pdc": "SD-RT-IBC-PDI-BSA-007-021", "adc": "007-Braking  System Assembly-BSA", "sadc": "ABS System", "pldc": "ABS Sensor", "picp": "Wheel lock prevention", "method": "Road test", "spec": "No wheel lock" },
    { "pdc": "SD-RT-IBC-PDI-BSA-007-022", "adc": "007-Braking  System Assembly-BSA", "sadc": "ABS System", "pldc": "ABS Warning Lamp", "picp": "ABS warning lamp check", "method": "Dashboard observation", "spec": "Lamp OFF during normal operation" },
    { "pdc": "SD-RT-IBC-PDI-BSA-007-023", "adc": "007-Braking  System Assembly-BSA", "sadc": "Air Brake System", "pldc": "Air Compressor", "picp": "Air compressor noise", "method": "Road test", "spec": "No abnormal noise" },
    { "pdc": "SD-RT-IBC-PDI-BSA-007-024", "adc": "007-Braking  System Assembly-BSA", "sadc": "Air Brake System", "pldc": "Air Tanks", "picp": "Air tank pressure stability", "method": "Dashboard observation", "spec": "Pressure stable" },
    { "pdc": "SD-RT-IBC-PDI-BSA-007-025", "adc": "007-Braking  System Assembly-BSA", "sadc": "Air Brake System", "pldc": "Air Lines", "picp": "Air leakage during operation", "method": "Audible inspection", "spec": "No leakage" },
    { "pdc": "SD-RT-IBC-PDI-BSA-007-026", "adc": "007-Braking  System Assembly-BSA", "sadc": "Air Brake System", "pldc": "Relay Valve", "picp": "Relay valve response", "method": "Road test", "spec": "Immediate response" },
    { "pdc": "SD-RT-IBC-PDI-BSA-007-027", "adc": "007-Braking  System Assembly-BSA", "sadc": "Air Brake System", "pldc": "Brake Lines", "picp": "Brake line vibration", "method": "Road test", "spec": "No abnormal vibration" },
    { "pdc": "SD-RT-IBC-PDI-BSA-007-028", "adc": "007-Braking  System Assembly-BSA", "sadc": "Air Brake System", "pldc": "Brake Hoses", "picp": "Brake hose condition during driving", "method": "Visual check after test", "spec": "No damage/leak" },
    { "pdc": "SD-RT-IBC-PDI-BSA-007-029", "adc": "007-Braking  System Assembly-BSA", "sadc": "Retarder (if equipped)", "pldc": "Retarder System", "picp": "Retarder activation", "method": "Road test", "spec": "Smooth deceleration" },
    { "pdc": "SD-RT-IBC-PDI-BSA-007-030", "adc": "007-Braking  System Assembly-BSA", "sadc": "Retarder (if equipped)", "pldc": "Retarder Control", "picp": "Retarder response", "method": "Road test", "spec": "Proper operation" },
    { "pdc": "SD-RT-IBC-PDI-BSA-007-031", "adc": "007-Braking  System Assembly-BSA", "sadc": "Retarder (if equipped)", "pldc": "Retarder Noise", "picp": "Retarder abnormal noise", "method": "Road test", "spec": "No abnormal noise" },
    { "pdc": "SD-RT-IBC-PDI-BSA-007-032", "adc": "007-Braking  System Assembly-BSA", "sadc": "Brake Performance", "pldc": "Overall Brake System", "picp": "Vehicle stopping distance", "method": "Road test measurement", "spec": "Within OEM limit" },
    { "pdc": "SD-RT-IBC-PDI-BSA-007-033", "adc": "007-Braking  System Assembly-BSA", "sadc": "Brake Performance", "pldc": "Overall Brake System", "picp": "Brake fade during repeated braking", "method": "Road test", "spec": "No brake fade" },
    { "pdc": "SD-RT-IBC-PDI-BSA-007-034", "adc": "007-Braking  System Assembly-BSA", "sadc": "Brake Performance", "pldc": "Overall Brake System", "picp": "Brake performance on downhill", "method": "Road test", "spec": "Controlled braking" },
    { "pdc": "SD-RT-IBC-PDI-BSA-007-035", "adc": "007-Braking  System Assembly-BSA", "sadc": "Brake Performance", "pldc": "Overall Brake System", "picp": "Brake performance with load", "method": "Road test", "spec": "Stable braking" },
    { "pdc": "SD-RT-IBC-PDI-BSA-007-036", "adc": "007-Braking  System Assembly-BSA", "sadc": "Brake Performance", "pldc": "Overall Brake System", "picp": "Brake performance during emergency maneuver", "method": "Road test", "spec": "Vehicle stable" },
    { "pdc": "SD-RT-IBC-PDI-BSA-007-037", "adc": "007-Braking  System Assembly-BSA", "sadc": "Brake Performance", "pldc": "Overall Brake System", "picp": "Brake performance during wet road simulation", "method": "Road test", "spec": "No loss of control" },
    { "pdc": "SD-RT-IBC-PDI-BSA-007-038", "adc": "007-Braking  System Assembly-BSA", "sadc": "Brake Performance", "pldc": "Overall Brake System", "picp": "Overall braking NVH performance", "method": "Road test", "spec": "No abnormal noise/vibration" },
    { "pdc": "SD-RT-IBC-PDI-BSA-007-039", "adc": "007-Braking  System Assembly-BSA", "sadc": "Service Brake", "pldc": "Brake Pedal", "picp": "Brake pedal response", "method": "Road test", "spec": "Immediate response without delay" },
    { "pdc": "SD-RT-IBC-PDI-BSA-007-040", "adc": "007-Braking  System Assembly-BSA", "sadc": "Service Brake", "pldc": "Brake Pedal", "picp": "Brake pedal free play", "method": "Road test observation", "spec": "Within OEM specification" },
    { "pdc": "SD-RT-IBC-PDI-BSA-007-041", "adc": "007-Braking  System Assembly-BSA", "sadc": "Service Brake", "pldc": "Brake Pedal", "picp": "Brake pedal vibration during braking", "method": "Road test", "spec": "No abnormal vibration" },
    { "pdc": "SD-RT-IBC-PDI-BSA-007-042", "adc": "007-Braking  System Assembly-BSA", "sadc": "Service Brake", "pldc": "Brake Pedal", "picp": "Pedal return after braking", "method": "Road test", "spec": "Pedal returns smoothly" },
    { "pdc": "SD-RT-IBC-PDI-BSA-007-043", "adc": "007-Braking  System Assembly-BSA", "sadc": "Service Brake", "pldc": "Brake Drum/Disc", "picp": "Brake noise during application", "method": "Road test", "spec": "No squeal or grinding" },
    { "pdc": "SD-RT-IBC-PDI-BSA-007-044", "adc": "007-Braking  System Assembly-BSA", "sadc": "Service Brake", "pldc": "Brake Drum/Disc", "picp": "Brake judder during braking", "method": "Road test", "spec": "No vibration or judder" },
    { "pdc": "SD-RT-IBC-PDI-BSA-007-045", "adc": "007-Braking  System Assembly-BSA", "sadc": "Service Brake", "pldc": "Brake Drum/Disc", "picp": "Brake effectiveness at low speed", "method": "Road test", "spec": "Vehicle stops smoothly" },
    { "pdc": "SD-RT-IBC-PDI-BSA-007-046", "adc": "007-Braking  System Assembly-BSA", "sadc": "Service Brake", "pldc": "Brake Drum/Disc", "picp": "Brake effectiveness at high speed", "method": "Road test", "spec": "Stopping distance within OEM limit" },
    { "pdc": "SD-RT-IBC-PDI-BSA-007-047", "adc": "007-Braking  System Assembly-BSA", "sadc": "Service Brake", "pldc": "Brake Drum/Disc", "picp": "Brake pull left/right", "method": "Road test", "spec": "Vehicle remains straight" },
    { "pdc": "SD-RT-IBC-PDI-BSA-007-048", "adc": "007-Braking  System Assembly-BSA", "sadc": "Service Brake", "pldc": "Brake Lining", "picp": "Brake fade during repeated braking", "method": "Road test", "spec": "No brake fade observed" },
    { "pdc": "SD-RT-IBC-PDI-BSA-007-049", "adc": "007-Braking  System Assembly-BSA", "sadc": "Air Brake System", "pldc": "Air Compressor", "picp": "Air pressure build-up", "method": "Dashboard observation", "spec": "Within specified PSI range" },
    { "pdc": "SD-RT-IBC-PDI-BSA-007-050", "adc": "007-Braking  System Assembly-BSA", "sadc": "Air Brake System", "pldc": "Air Tanks", "picp": "Air pressure stability", "method": "Dashboard observation", "spec": "Pressure stable" },
    { "pdc": "SD-RT-IBC-PDI-BSA-007-051", "adc": "007-Braking  System Assembly-BSA", "sadc": "Air Brake System", "pldc": "Air Lines", "picp": "Air leakage", "method": "Audible + visual check", "spec": "No air leakage" },
    { "pdc": "SD-RT-IBC-PDI-BSA-007-052", "adc": "007-Braking  System Assembly-BSA", "sadc": "Air Brake System", "pldc": "Brake Chamber", "picp": "Brake chamber response", "method": "Road test", "spec": "Uniform brake application" },
    { "pdc": "SD-RT-IBC-PDI-BSA-007-053", "adc": "007-Braking  System Assembly-BSA", "sadc": "Air Brake System", "pldc": "Relay Valve", "picp": "Relay valve response", "method": "Road test", "spec": "Immediate response" },
    { "pdc": "SD-RT-IBC-PDI-BSA-007-054", "adc": "007-Braking  System Assembly-BSA", "sadc": "Parking Brake", "pldc": "Parking Brake Lever", "picp": "Parking brake engagement", "method": "Road test", "spec": "Vehicle held on incline" },
    { "pdc": "SD-RT-IBC-PDI-BSA-007-055", "adc": "007-Braking  System Assembly-BSA", "sadc": "Parking Brake", "pldc": "Parking Brake Lever", "picp": "Parking brake release", "method": "Road test", "spec": "Smooth release" },
    { "pdc": "SD-RT-IBC-PDI-BSA-007-056", "adc": "007-Braking  System Assembly-BSA", "sadc": "Parking Brake", "pldc": "Parking Brake Cable", "picp": "Parking brake cable condition", "method": "Visual inspection", "spec": "No damage or slack" },
    { "pdc": "SD-RT-IBC-PDI-BSA-007-057", "adc": "007-Braking  System Assembly-BSA", "sadc": "ABS System", "pldc": "ABS ECU", "picp": "ABS activation during hard braking", "method": "Road test", "spec": "ABS engages correctly" },
    { "pdc": "SD-RT-IBC-PDI-BSA-007-058", "adc": "007-Braking  System Assembly-BSA", "sadc": "ABS System", "pldc": "Wheel Speed Sensor", "picp": "Wheel lock prevention", "method": "Road test", "spec": "No wheel lock" },
    { "pdc": "SD-RT-IBC-PDI-BSA-007-059", "adc": "007-Braking  System Assembly-BSA", "sadc": "ABS System", "pldc": "ABS Warning Lamp", "picp": "ABS warning lamp status", "method": "Dashboard observation", "spec": "Lamp OFF in normal condition" },
    { "pdc": "SD-RT-IBC-PDI-BSA-007-060", "adc": "007-Braking  System Assembly-BSA", "sadc": "Retarder System", "pldc": "Retarder Unit", "picp": "Retarder activation", "method": "Road test", "spec": "Smooth deceleration" },
    { "pdc": "SD-RT-IBC-PDI-BSA-007-061", "adc": "007-Braking  System Assembly-BSA", "sadc": "Retarder System", "pldc": "Retarder Control", "picp": "Retarder response", "method": "Road test", "spec": "Proper operation" },
    { "pdc": "SD-RT-IBC-PDI-BSA-007-062", "adc": "007-Braking  System Assembly-BSA", "sadc": "Brake Integration", "pldc": "Front & Rear Brakes", "picp": "Brake balance front/rear", "method": "Road test", "spec": "Balanced braking" },
    { "pdc": "SD-RT-IBC-PDI-BSA-007-063", "adc": "007-Braking  System Assembly-BSA", "sadc": "Brake Integration", "pldc": "Complete System", "picp": "Emergency braking performance", "method": "Controlled road test", "spec": "Vehicle stops safely" },
    { "pdc": "SD-RT-IBC-PDI-BSA-007-064", "adc": "007-Braking  System Assembly-BSA", "sadc": "Brake Integration", "pldc": "Complete System", "picp": "Braking performance on downhill", "method": "Road test", "spec": "Stable braking" },
    { "pdc": "SD-RT-IBC-PDI-BSA-007-065", "adc": "007-Braking  System Assembly-BSA", "sadc": "Brake Integration", "pldc": "Complete System", "picp": "Braking performance with load", "method": "Road test", "spec": "Consistent braking" },
    { "pdc": "SD-RT-IBC-PDI-BSA-007-066", "adc": "007-Braking  System Assembly-BSA", "sadc": "Brake Integration", "pldc": "Complete System", "picp": "Brake noise on rough road", "method": "Road test", "spec": "No abnormal noise" },
    { "pdc": "SD-RT-IBC-PDI-BSA-007-067", "adc": "007-Braking  System Assembly-BSA", "sadc": "Brake Integration", "pldc": "Complete System", "picp": "Brake system NVH performance", "method": "Road test", "spec": "Within OEM NVH limit" },
    { "pdc": "SD-RT-IBC-PDI-BSA-007-068", "adc": "007-Braking  System Assembly-BSA", "sadc": "Brake Integration", "pldc": "Complete System", "picp": "Overall braking system performance", "method": "Road test", "spec": "Meets OEM braking requirements" },
    { "pdc": "SD-RT-IBC-PDI-FES-008-001", "adc": "008-Fuel & Emissions System-FES", "sadc": "Fuel Tank", "pldc": "Fuel Tank Shell", "picp": "Fuel tank mounting stability", "method": "Road test + visual", "spec": "Tank securely mounted, no movement" },
    { "pdc": "SD-RT-IBC-PDI-FES-008-002", "adc": "008-Fuel & Emissions System-FES", "sadc": "Fuel Tank", "pldc": "Fuel Tank Shell", "picp": "Fuel tank vibration during driving", "method": "Road test", "spec": "No abnormal vibration" },
    { "pdc": "SD-RT-IBC-PDI-FES-008-003", "adc": "008-Fuel & Emissions System-FES", "sadc": "Fuel Tank", "pldc": "Fuel Filler Neck", "picp": "Fuel filler neck leakage", "method": "Visual inspection", "spec": "No fuel leakage" },
    { "pdc": "SD-RT-IBC-PDI-FES-008-004", "adc": "008-Fuel & Emissions System-FES", "sadc": "Fuel Tank", "pldc": "Fuel Cap", "picp": "Fuel cap sealing", "method": "Visual inspection", "spec": "Cap sealed properly" },
    { "pdc": "SD-RT-IBC-PDI-FES-008-005", "adc": "008-Fuel & Emissions System-FES", "sadc": "Fuel Lines", "pldc": "Fuel Supply Line", "picp": "Fuel line vibration", "method": "Road test", "spec": "No excessive vibration" },
    { "pdc": "SD-RT-IBC-PDI-FES-008-006", "adc": "008-Fuel & Emissions System-FES", "sadc": "Fuel Lines", "pldc": "Fuel Supply Line", "picp": "Fuel leakage from lines", "method": "Visual inspection after test", "spec": "No leakage" },
    { "pdc": "SD-RT-IBC-PDI-FES-008-007", "adc": "008-Fuel & Emissions System-FES", "sadc": "Fuel Lines", "pldc": "Fuel Return Line", "picp": "Fuel return flow performance", "method": "Road test observation", "spec": "Smooth return flow" },
    { "pdc": "SD-RT-IBC-PDI-FES-008-008", "adc": "008-Fuel & Emissions System-FES", "sadc": "Fuel Pump", "pldc": "Fuel Lift Pump", "picp": "Fuel pump noise", "method": "Road test", "spec": "No abnormal noise" },
    { "pdc": "SD-RT-IBC-PDI-FES-008-009", "adc": "008-Fuel & Emissions System-FES", "sadc": "Fuel Pump", "pldc": "Fuel Lift Pump", "picp": "Fuel supply stability", "method": "Road test", "spec": "Consistent fuel supply" },
    { "pdc": "SD-RT-IBC-PDI-FES-008-010", "adc": "008-Fuel & Emissions System-FES", "sadc": "Fuel Injection", "pldc": "Fuel Injector", "picp": "Injector performance during acceleration", "method": "Road test", "spec": "Smooth engine response" },
    { "pdc": "SD-RT-IBC-PDI-FES-008-011", "adc": "008-Fuel & Emissions System-FES", "sadc": "Fuel Injection", "pldc": "Fuel Injector", "picp": "Injector knocking noise", "method": "Road test", "spec": "No abnormal knock" },
    { "pdc": "SD-RT-IBC-PDI-FES-008-012", "adc": "008-Fuel & Emissions System-FES", "sadc": "Fuel Filter", "pldc": "Fuel Filter Element", "picp": "Fuel filter blockage indication", "method": "Road test observation", "spec": "No restriction" },
    { "pdc": "SD-RT-IBC-PDI-FES-008-013", "adc": "008-Fuel & Emissions System-FES", "sadc": "Fuel Filter", "pldc": "Fuel Filter Housing", "picp": "Fuel filter leakage", "method": "Visual inspection", "spec": "No leakage" },
    { "pdc": "SD-RT-IBC-PDI-FES-008-014", "adc": "008-Fuel & Emissions System-FES", "sadc": "Emission Control", "pldc": "EGR Valve", "picp": "EGR operation", "method": "Road test observation", "spec": "Smooth operation" },
    { "pdc": "SD-RT-IBC-PDI-FES-008-015", "adc": "008-Fuel & Emissions System-FES", "sadc": "Emission Control", "pldc": "EGR Cooler", "picp": "EGR cooler leakage", "method": "Visual inspection", "spec": "No coolant leakage" },
    { "pdc": "SD-RT-IBC-PDI-FES-008-016", "adc": "008-Fuel & Emissions System-FES", "sadc": "Emission Control", "pldc": "DOC", "picp": "Diesel oxidation catalyst performance", "method": "Road test", "spec": "Normal operation" },
    { "pdc": "SD-RT-IBC-PDI-FES-008-017", "adc": "008-Fuel & Emissions System-FES", "sadc": "Emission Control", "pldc": "DPF", "picp": "DPF regeneration status", "method": "Dashboard monitoring", "spec": "Within normal parameters" },
    { "pdc": "SD-RT-IBC-PDI-FES-008-018", "adc": "008-Fuel & Emissions System-FES", "sadc": "Emission Control", "pldc": "SCR System", "picp": "SCR dosing performance", "method": "Road test", "spec": "Correct DEF dosing" },
    { "pdc": "SD-RT-IBC-PDI-FES-008-019", "adc": "008-Fuel & Emissions System-FES", "sadc": "Emission Control", "pldc": "DEF Tank", "picp": "DEF tank leakage", "method": "Visual inspection", "spec": "No leakage" },
    { "pdc": "SD-RT-IBC-PDI-FES-008-020", "adc": "008-Fuel & Emissions System-FES", "sadc": "Emission Control", "pldc": "DEF Lines", "picp": "DEF line condition", "method": "Visual inspection", "spec": "No damage or leakage" },
    { "pdc": "SD-RT-IBC-PDI-FES-008-021", "adc": "008-Fuel & Emissions System-FES", "sadc": "Emission Control", "pldc": "NOx Sensor", "picp": "NOx sensor signal monitoring", "method": "Diagnostic check", "spec": "Signal within range" },
    { "pdc": "SD-RT-IBC-PDI-FES-008-022", "adc": "008-Fuel & Emissions System-FES", "sadc": "Exhaust System", "pldc": "Exhaust Pipe", "picp": "Exhaust smoke level", "method": "Road test observation", "spec": "Within emission limit" },
    { "pdc": "SD-RT-IBC-PDI-FES-008-023", "adc": "008-Fuel & Emissions System-FES", "sadc": "Exhaust System", "pldc": "Exhaust Pipe", "picp": "Exhaust noise level", "method": "Road test", "spec": "Within OEM NVH limit" },
    { "pdc": "SD-RT-IBC-PDI-FES-008-024", "adc": "008-Fuel & Emissions System-FES", "sadc": "Exhaust System", "pldc": "Exhaust Mount", "picp": "Exhaust mounting stability", "method": "Road test + visual", "spec": "Mountings secure" },
    { "pdc": "SD-RT-IBC-PDI-FES-008-025", "adc": "008-Fuel & Emissions System-FES", "sadc": "Exhaust System", "pldc": "Exhaust Pipe", "picp": "Exhaust vibration", "method": "Road test", "spec": "No abnormal vibration" },
    { "pdc": "SD-RT-IBC-PDI-FES-008-026", "adc": "008-Fuel & Emissions System-FES", "sadc": "Emission Monitoring", "pldc": "OBD System", "picp": "Emission fault codes", "method": "Diagnostic scan", "spec": "No active fault codes" },
    { "pdc": "SD-RT-IBC-PDI-FES-008-027", "adc": "008-Fuel & Emissions System-FES", "sadc": "Emission Monitoring", "pldc": "Dashboard Warning", "picp": "Emission warning lamp status", "method": "Dashboard observation", "spec": "Lamp OFF" },
    { "pdc": "SD-RT-IBC-PDI-FES-008-028", "adc": "008-Fuel & Emissions System-FES", "sadc": "System Integration", "pldc": "Complete System", "picp": "Fuel consumption behavior", "method": "Road test", "spec": "Within expected range" },
    { "pdc": "SD-RT-IBC-PDI-FES-008-029", "adc": "008-Fuel & Emissions System-FES", "sadc": "System Integration", "pldc": "Complete System", "picp": "Engine smoke during acceleration", "method": "Road test observation", "spec": "Minimal visible smoke" },
    { "pdc": "SD-RT-IBC-PDI-FES-008-030", "adc": "008-Fuel & Emissions System-FES", "sadc": "System Integration", "pldc": "Complete System", "picp": "Overall fuel & emissions system performance", "method": "Road test", "spec": "Meets OEM performance standard" },
    { "pdc": "SD-RT-IBC-PDI-CHA-009-001", "adc": "009-Cooling & HVAC-CHA", "sadc": "Engine Cooling", "pldc": "Radiator", "picp": "Radiator cooling efficiency during driving", "method": "Road test + temp monitoring", "spec": "Engine temperature within OEM limit" },
    { "pdc": "SD-RT-IBC-PDI-CHA-009-002", "adc": "009-Cooling & HVAC-CHA", "sadc": "Engine Cooling", "pldc": "Radiator", "picp": "Radiator leakage check", "method": "Visual inspection after test", "spec": "No coolant leakage" },
    { "pdc": "SD-RT-IBC-PDI-CHA-009-003", "adc": "009-Cooling & HVAC-CHA", "sadc": "Engine Cooling", "pldc": "Radiator Fan", "picp": "Cooling fan operation", "method": "Road test observation", "spec": "Fan engages at specified temperature" },
    { "pdc": "SD-RT-IBC-PDI-CHA-009-004", "adc": "009-Cooling & HVAC-CHA", "sadc": "Engine Cooling", "pldc": "Fan Belt", "picp": "Fan belt noise", "method": "Road test", "spec": "No abnormal noise" },
    { "pdc": "SD-RT-IBC-PDI-CHA-009-005", "adc": "009-Cooling & HVAC-CHA", "sadc": "Engine Cooling", "pldc": "Coolant Pump", "picp": "Water pump operation", "method": "Road test observation", "spec": "Smooth operation" },
    { "pdc": "SD-RT-IBC-PDI-CHA-009-006", "adc": "009-Cooling & HVAC-CHA", "sadc": "Engine Cooling", "pldc": "Coolant Pump", "picp": "Coolant pump leakage", "method": "Visual inspection", "spec": "No coolant leakage" },
    { "pdc": "SD-RT-IBC-PDI-CHA-009-007", "adc": "009-Cooling & HVAC-CHA", "sadc": "Engine Cooling", "pldc": "Coolant Hoses", "picp": "Coolant hose leakage", "method": "Visual inspection", "spec": "No leakage or cracks" },
    { "pdc": "SD-RT-IBC-PDI-CHA-009-008", "adc": "009-Cooling & HVAC-CHA", "sadc": "Engine Cooling", "pldc": "Coolant Hoses", "picp": "Coolant hose vibration", "method": "Road test", "spec": "No excessive vibration" },
    { "pdc": "SD-RT-IBC-PDI-CHA-009-009", "adc": "009-Cooling & HVAC-CHA", "sadc": "Engine Cooling", "pldc": "Thermostat", "picp": "Thermostat operation", "method": "Temperature monitoring", "spec": "Correct opening temperature" },
    { "pdc": "SD-RT-IBC-PDI-CHA-009-010", "adc": "009-Cooling & HVAC-CHA", "sadc": "Engine Cooling", "pldc": "Expansion Tank", "picp": "Coolant level stability", "method": "Visual inspection", "spec": "Coolant level stable" },
    { "pdc": "SD-RT-IBC-PDI-CHA-009-011", "adc": "009-Cooling & HVAC-CHA", "sadc": "Engine Cooling", "pldc": "Expansion Tank", "picp": "Expansion tank leakage", "method": "Visual inspection", "spec": "No leakage" },
    { "pdc": "SD-RT-IBC-PDI-CHA-009-012", "adc": "009-Cooling & HVAC-CHA", "sadc": "Engine Cooling", "pldc": "Temperature Sensor", "picp": "Engine temperature indication", "method": "Dashboard monitoring", "spec": "Within specified range" },
    { "pdc": "SD-RT-IBC-PDI-CHA-009-013", "adc": "009-Cooling & HVAC-CHA", "sadc": "HVAC System", "pldc": "HVAC Compressor", "picp": "Compressor engagement", "method": "Road test", "spec": "Compressor engages smoothly" },
    { "pdc": "SD-RT-IBC-PDI-CHA-009-014", "adc": "009-Cooling & HVAC-CHA", "sadc": "HVAC System", "pldc": "HVAC Compressor", "picp": "Compressor noise", "method": "Road test", "spec": "No abnormal noise" },
    { "pdc": "SD-RT-IBC-PDI-CHA-009-015", "adc": "009-Cooling & HVAC-CHA", "sadc": "HVAC System", "pldc": "Condenser", "picp": "Condenser heat dissipation", "method": "Road test observation", "spec": "Effective heat dissipation" },
    { "pdc": "SD-RT-IBC-PDI-CHA-009-016", "adc": "009-Cooling & HVAC-CHA", "sadc": "HVAC System", "pldc": "Evaporator", "picp": "Cooling efficiency", "method": "Road test", "spec": "Cabin cooling within design spec" },
    { "pdc": "SD-RT-IBC-PDI-CHA-009-017", "adc": "009-Cooling & HVAC-CHA", "sadc": "HVAC System", "pldc": "Blower Motor", "picp": "Blower motor operation", "method": "Functional test", "spec": "Smooth airflow" },
    { "pdc": "SD-RT-IBC-PDI-CHA-009-018", "adc": "009-Cooling & HVAC-CHA", "sadc": "HVAC System", "pldc": "Blower Motor", "picp": "Blower motor noise", "method": "Road test", "spec": "No abnormal noise" },
    { "pdc": "SD-RT-IBC-PDI-CHA-009-019", "adc": "009-Cooling & HVAC-CHA", "sadc": "HVAC System", "pldc": "Air Ducts", "picp": "Air duct leakage", "method": "Functional test", "spec": "No air leakage" },
    { "pdc": "SD-RT-IBC-PDI-CHA-009-020", "adc": "009-Cooling & HVAC-CHA", "sadc": "HVAC System", "pldc": "Air Vents", "picp": "Air distribution", "method": "Functional test", "spec": "Uniform airflow" },
    { "pdc": "SD-RT-IBC-PDI-CHA-009-021", "adc": "009-Cooling & HVAC-CHA", "sadc": "HVAC System", "pldc": "HVAC Controls", "picp": "HVAC control response", "method": "Functional test", "spec": "Controls respond correctly" },
    { "pdc": "SD-RT-IBC-PDI-CHA-009-022", "adc": "009-Cooling & HVAC-CHA", "sadc": "HVAC System", "pldc": "Refrigerant Lines", "picp": "Refrigerant leakage", "method": "Visual inspection", "spec": "No leakage" },
    { "pdc": "SD-RT-IBC-PDI-CHA-009-023", "adc": "009-Cooling & HVAC-CHA", "sadc": "HVAC System", "pldc": "Cabin Temperature Sensor", "picp": "Temperature sensing accuracy", "method": "Diagnostic check", "spec": "Sensor within tolerance" },
    { "pdc": "SD-RT-IBC-PDI-CHA-009-024", "adc": "009-Cooling & HVAC-CHA", "sadc": "HVAC System", "pldc": "HVAC Mountings", "picp": "HVAC unit mounting stability", "method": "Road test + visual", "spec": "Mounting secure" },
    { "pdc": "SD-RT-IBC-PDI-CHA-009-025", "adc": "009-Cooling & HVAC-CHA", "sadc": "HVAC System", "pldc": "HVAC Assembly", "picp": "HVAC vibration during driving", "method": "Road test", "spec": "No abnormal vibration" },
    { "pdc": "SD-RT-IBC-PDI-CHA-009-026", "adc": "009-Cooling & HVAC-CHA", "sadc": "HVAC System", "pldc": "HVAC Assembly", "picp": "HVAC noise during operation", "method": "Road test", "spec": "Within OEM NVH limit" },
    { "pdc": "SD-RT-IBC-PDI-CHA-009-027", "adc": "009-Cooling & HVAC-CHA", "sadc": "System Integration", "pldc": "Cooling + HVAC", "picp": "Engine cooling during high load", "method": "Road test under load", "spec": "Temperature stable" },
    { "pdc": "SD-RT-IBC-PDI-CHA-009-028", "adc": "009-Cooling & HVAC-CHA", "sadc": "System Integration", "pldc": "Cooling + HVAC", "picp": "Cooling performance in traffic conditions", "method": "Road simulation", "spec": "No overheating" },
    { "pdc": "SD-RT-IBC-PDI-CHA-009-029", "adc": "009-Cooling & HVAC-CHA", "sadc": "System Integration", "pldc": "Cooling + HVAC", "picp": "HVAC performance during long drive", "method": "Road test", "spec": "Stable cooling performance" },
    { "pdc": "SD-RT-IBC-PDI-CHA-009-030", "adc": "009-Cooling & HVAC-CHA", "sadc": "System Integration", "pldc": "Complete System", "picp": "Overall cooling & HVAC system performance", "method": "Road test", "spec": "Meets OEM specification" },
    { "pdc": "SD-RT-IBC-PDI-EES-010-001", "adc": "010-Electrical & Electronics System-EES", "sadc": "Battery System", "pldc": "Battery", "picp": "Battery mounting security", "method": "Visual + road observation", "spec": "Battery firmly mounted" },
    { "pdc": "SD-RT-IBC-PDI-EES-010-002", "adc": "010-Electrical & Electronics System-EES", "sadc": "Battery System", "pldc": "Battery", "picp": "Battery voltage during operation", "method": "Multimeter / dashboard", "spec": "Voltage within OEM limit" },
    { "pdc": "SD-RT-IBC-PDI-EES-010-003", "adc": "010-Electrical & Electronics System-EES", "sadc": "Battery System", "pldc": "Battery Terminals", "picp": "Terminal tightness", "method": "Visual inspection", "spec": "No loose terminals" },
    { "pdc": "SD-RT-IBC-PDI-EES-010-004", "adc": "010-Electrical & Electronics System-EES", "sadc": "Charging System", "pldc": "Alternator", "picp": "Alternator charging performance", "method": "Dashboard / multimeter", "spec": "Charging voltage within range" },
    { "pdc": "SD-RT-IBC-PDI-EES-010-005", "adc": "010-Electrical & Electronics System-EES", "sadc": "Charging System", "pldc": "Alternator Belt", "picp": "Alternator belt noise", "method": "Road test", "spec": "No abnormal noise" },
    { "pdc": "SD-RT-IBC-PDI-EES-010-006", "adc": "010-Electrical & Electronics System-EES", "sadc": "Starting System", "pldc": "Starter Motor", "picp": "Starter engagement", "method": "Functional test", "spec": "Engine starts without delay" },
    { "pdc": "SD-RT-IBC-PDI-EES-010-007", "adc": "010-Electrical & Electronics System-EES", "sadc": "Lighting System", "pldc": "Head Lamps", "picp": "Headlamp operation during driving", "method": "Functional test", "spec": "Proper illumination" },
    { "pdc": "SD-RT-IBC-PDI-EES-010-008", "adc": "010-Electrical & Electronics System-EES", "sadc": "Lighting System", "pldc": "Tail Lamps", "picp": "Tail lamp operation", "method": "Functional test", "spec": "Working properly" },
    { "pdc": "SD-RT-IBC-PDI-EES-010-009", "adc": "010-Electrical & Electronics System-EES", "sadc": "Lighting System", "pldc": "Brake Lamps", "picp": "Brake lamp activation", "method": "Brake test", "spec": "Lamp ON during braking" },
    { "pdc": "SD-RT-IBC-PDI-EES-010-010", "adc": "010-Electrical & Electronics System-EES", "sadc": "Lighting System", "pldc": "Turn Indicators", "picp": "Indicator flashing", "method": "Functional test", "spec": "Correct flashing rate" },
    { "pdc": "SD-RT-IBC-PDI-EES-010-011", "adc": "010-Electrical & Electronics System-EES", "sadc": "Lighting System", "pldc": "Hazard Lamps", "picp": "Hazard lamp operation", "method": "Functional test", "spec": "All lamps flash correctly" },
    { "pdc": "SD-RT-IBC-PDI-EES-010-012", "adc": "010-Electrical & Electronics System-EES", "sadc": "Instrument System", "pldc": "Instrument Cluster", "picp": "Speedometer accuracy", "method": "Road test comparison", "spec": "Within tolerance" },
    { "pdc": "SD-RT-IBC-PDI-EES-010-013", "adc": "010-Electrical & Electronics System-EES", "sadc": "Instrument System", "pldc": "Instrument Cluster", "picp": "Warning lamp status", "method": "Dashboard observation", "spec": "No unexpected warning" },
    { "pdc": "SD-RT-IBC-PDI-EES-010-014", "adc": "010-Electrical & Electronics System-EES", "sadc": "Instrument System", "pldc": "Dashboard Display", "picp": "Display readability", "method": "Visual check", "spec": "Clear visibility" },
    { "pdc": "SD-RT-IBC-PDI-EES-010-015", "adc": "010-Electrical & Electronics System-EES", "sadc": "Sensors", "pldc": "Speed Sensor", "picp": "Speed sensor signal", "method": "Diagnostic scan", "spec": "Signal within specification" },
    { "pdc": "SD-RT-IBC-PDI-EES-010-016", "adc": "010-Electrical & Electronics System-EES", "sadc": "Sensors", "pldc": "Temperature Sensor", "picp": "Temperature sensor reading", "method": "Dashboard monitoring", "spec": "Reading accurate" },
    { "pdc": "SD-RT-IBC-PDI-EES-010-017", "adc": "010-Electrical & Electronics System-EES", "sadc": "Control System", "pldc": "ECU", "picp": "ECU fault codes", "method": "Diagnostic scan", "spec": "No active faults" },
    { "pdc": "SD-RT-IBC-PDI-EES-010-018", "adc": "010-Electrical & Electronics System-EES", "sadc": "Control System", "pldc": "Wiring Harness", "picp": "Harness vibration during driving", "method": "Road test observation", "spec": "No abnormal movement" },
    { "pdc": "SD-RT-IBC-PDI-EES-010-019", "adc": "010-Electrical & Electronics System-EES", "sadc": "Control System", "pldc": "Wiring Harness", "picp": "Harness insulation condition", "method": "Visual inspection", "spec": "No damage" },
    { "pdc": "SD-RT-IBC-PDI-EES-010-020", "adc": "010-Electrical & Electronics System-EES", "sadc": "Control System", "pldc": "Connectors", "picp": "Connector locking", "method": "Visual inspection", "spec": "All connectors secure" },
    { "pdc": "SD-RT-IBC-PDI-EES-010-021", "adc": "010-Electrical & Electronics System-EES", "sadc": "Auxiliary Electrical", "pldc": "Horn", "picp": "Horn operation", "method": "Functional test", "spec": "Horn audible" },
    { "pdc": "SD-RT-IBC-PDI-EES-010-022", "adc": "010-Electrical & Electronics System-EES", "sadc": "Auxiliary Electrical", "pldc": "Wiper Motor", "picp": "Wiper operation", "method": "Functional test", "spec": "Smooth operation" },
    { "pdc": "SD-RT-IBC-PDI-EES-010-023", "adc": "010-Electrical & Electronics System-EES", "sadc": "Auxiliary Electrical", "pldc": "Washer Pump", "picp": "Washer pump operation", "method": "Functional test", "spec": "Washer spray working" },
    { "pdc": "SD-RT-IBC-PDI-EES-010-024", "adc": "010-Electrical & Electronics System-EES", "sadc": "Telematics", "pldc": "GPS Unit", "picp": "GPS communication", "method": "Diagnostic test", "spec": "Signal received" },
    { "pdc": "SD-RT-IBC-PDI-EES-010-025", "adc": "010-Electrical & Electronics System-EES", "sadc": "Telematics", "pldc": "Communication Module", "picp": "Data communication status", "method": "Diagnostic check", "spec": "Communication active" },
    { "pdc": "SD-RT-IBC-PDI-EES-010-026", "adc": "010-Electrical & Electronics System-EES", "sadc": "System Integration", "pldc": "Electrical Network", "picp": "Electrical load stability", "method": "Road test", "spec": "System stable under load" },
    { "pdc": "SD-RT-IBC-PDI-EES-010-027", "adc": "010-Electrical & Electronics System-EES", "sadc": "System Integration", "pldc": "Complete System", "picp": "Electrical noise / interference", "method": "Road test", "spec": "No interference detected" },
    { "pdc": "SD-RT-IBC-PDI-EES-010-028", "adc": "010-Electrical & Electronics System-EES", "sadc": "System Integration", "pldc": "Complete System", "picp": "Electrical system NVH", "method": "Road test", "spec": "No abnormal electrical noise" },
    { "pdc": "SD-RT-IBC-PDI-EES-010-029", "adc": "010-Electrical & Electronics System-EES", "sadc": "System Integration", "pldc": "Complete System", "picp": "Electrical system performance during road test", "method": "Road test", "spec": "Meets OEM specification" },
    { "pdc": "SD-RT-IBC-PDI-EMS-011-001", "adc": "011-Exhaust & Muffler System-EMS", "sadc": "Exhaust Manifold", "pldc": "Manifold Housing", "picp": "Exhaust manifold leakage", "method": "Visual + road test observation", "spec": "No exhaust gas leakage" },
    { "pdc": "SD-RT-IBC-PDI-EMS-011-002", "adc": "011-Exhaust & Muffler System-EMS", "sadc": "Exhaust Manifold", "pldc": "Manifold Mounting", "picp": "Manifold mounting security", "method": "Visual inspection", "spec": "All bolts secure" },
    { "pdc": "SD-RT-IBC-PDI-EMS-011-003", "adc": "011-Exhaust & Muffler System-EMS", "sadc": "Exhaust Piping", "pldc": "Exhaust Pipe", "picp": "Exhaust pipe vibration during driving", "method": "Road test", "spec": "No abnormal vibration" },
    { "pdc": "SD-RT-IBC-PDI-EMS-011-004", "adc": "011-Exhaust & Muffler System-EMS", "sadc": "Exhaust Piping", "pldc": "Exhaust Pipe", "picp": "Exhaust pipe leakage", "method": "Visual inspection after road test", "spec": "No gas leakage" },
    { "pdc": "SD-RT-IBC-PDI-EMS-011-005", "adc": "011-Exhaust & Muffler System-EMS", "sadc": "Exhaust Piping", "pldc": "Flexible Joint", "picp": "Flex pipe movement", "method": "Road test observation", "spec": "Normal movement without cracks" },
    { "pdc": "SD-RT-IBC-PDI-EMS-011-006", "adc": "011-Exhaust & Muffler System-EMS", "sadc": "Exhaust Piping", "pldc": "Flexible Joint", "picp": "Flex pipe noise", "method": "Road test", "spec": "No abnormal noise" },
    { "pdc": "SD-RT-IBC-PDI-EMS-011-007", "adc": "011-Exhaust & Muffler System-EMS", "sadc": "Muffler Assembly", "pldc": "Muffler Body", "picp": "Muffler noise level", "method": "Road test", "spec": "Noise within OEM NVH limit" },
    { "pdc": "SD-RT-IBC-PDI-EMS-011-008", "adc": "011-Exhaust & Muffler System-EMS", "sadc": "Muffler Assembly", "pldc": "Muffler Body", "picp": "Muffler vibration", "method": "Road test", "spec": "No excessive vibration" },
    { "pdc": "SD-RT-IBC-PDI-EMS-011-009", "adc": "011-Exhaust & Muffler System-EMS", "sadc": "Muffler Assembly", "pldc": "Muffler Mount", "picp": "Muffler mounting security", "method": "Visual inspection", "spec": "Mountings secure" },
    { "pdc": "SD-RT-IBC-PDI-EMS-011-010", "adc": "011-Exhaust & Muffler System-EMS", "sadc": "Muffler Assembly", "pldc": "Heat Shield", "picp": "Heat shield looseness", "method": "Road test + visual", "spec": "No rattling" },
    { "pdc": "SD-RT-IBC-PDI-EMS-011-011", "adc": "011-Exhaust & Muffler System-EMS", "sadc": "Emission Components", "pldc": "Catalytic Converter", "picp": "Catalyst performance", "method": "Road test observation", "spec": "Normal operation" },
    { "pdc": "SD-RT-IBC-PDI-EMS-011-012", "adc": "011-Exhaust & Muffler System-EMS", "sadc": "Emission Components", "pldc": "DOC/DPF", "picp": "DPF noise during operation", "method": "Road test", "spec": "No abnormal sound" },
    { "pdc": "SD-RT-IBC-PDI-EMS-011-013", "adc": "011-Exhaust & Muffler System-EMS", "sadc": "Emission Components", "pldc": "DPF Housing", "picp": "DPF mounting security", "method": "Visual inspection", "spec": "Secure mounting" },
    { "pdc": "SD-RT-IBC-PDI-EMS-011-014", "adc": "011-Exhaust & Muffler System-EMS", "sadc": "Emission Components", "pldc": "Sensors", "picp": "Exhaust temperature sensor signal", "method": "Diagnostic check", "spec": "Signal within range" },
    { "pdc": "SD-RT-IBC-PDI-EMS-011-015", "adc": "011-Exhaust & Muffler System-EMS", "sadc": "Emission Components", "pldc": "Sensors", "picp": "NOx sensor signal", "method": "Diagnostic check", "spec": "Within OEM specification" },
    { "pdc": "SD-RT-IBC-PDI-EMS-011-016", "adc": "011-Exhaust & Muffler System-EMS", "sadc": "Tail Pipe", "pldc": "Tail Pipe Outlet", "picp": "Exhaust smoke observation", "method": "Road test", "spec": "Within emission limits" },
    { "pdc": "SD-RT-IBC-PDI-EMS-011-017", "adc": "011-Exhaust & Muffler System-EMS", "sadc": "Tail Pipe", "pldc": "Tail Pipe Outlet", "picp": "Tail pipe alignment", "method": "Visual inspection", "spec": "Proper alignment" },
    { "pdc": "SD-RT-IBC-PDI-EMS-011-018", "adc": "011-Exhaust & Muffler System-EMS", "sadc": "Tail Pipe", "pldc": "Tail Pipe Outlet", "picp": "Tail pipe vibration", "method": "Road test", "spec": "No abnormal vibration" },
    { "pdc": "SD-RT-IBC-PDI-EMS-011-019", "adc": "011-Exhaust & Muffler System-EMS", "sadc": "Mounting System", "pldc": "Rubber Hangers", "picp": "Rubber hanger condition", "method": "Visual inspection", "spec": "No cracks or damage" },
    { "pdc": "SD-RT-IBC-PDI-EMS-011-020", "adc": "011-Exhaust & Muffler System-EMS", "sadc": "Mounting System", "pldc": "Brackets", "picp": "Bracket looseness", "method": "Visual inspection", "spec": "All brackets secure" },
    { "pdc": "SD-RT-IBC-PDI-EMS-011-021", "adc": "011-Exhaust & Muffler System-EMS", "sadc": "System Integration", "pldc": "Complete Exhaust System", "picp": "Exhaust noise during acceleration", "method": "Road test", "spec": "Within NVH limit" },
    { "pdc": "SD-RT-IBC-PDI-EMS-011-022", "adc": "011-Exhaust & Muffler System-EMS", "sadc": "System Integration", "pldc": "Complete Exhaust System", "picp": "Exhaust noise during deceleration", "method": "Road test", "spec": "No abnormal noise" },
    { "pdc": "SD-RT-IBC-PDI-EMS-011-023", "adc": "011-Exhaust & Muffler System-EMS", "sadc": "System Integration", "pldc": "Complete Exhaust System", "picp": "Exhaust contact with chassis", "method": "Road test + visual", "spec": "Adequate clearance maintained" },
    { "pdc": "SD-RT-IBC-PDI-EMS-011-024", "adc": "011-Exhaust & Muffler System-EMS", "sadc": "System Integration", "pldc": "Complete Exhaust System", "picp": "Exhaust vibration on rough road", "method": "Road test", "spec": "Within acceptable limit" },
    { "pdc": "SD-RT-IBC-PDI-EMS-011-025", "adc": "011-Exhaust & Muffler System-EMS", "sadc": "System Integration", "pldc": "Complete Exhaust System", "picp": "Overall exhaust system performance", "method": "Road test", "spec": "Meets OEM specification" },
    { "pdc": "SD-RT-IBC-PDI-APS-012-001", "adc": "012-Auxiliary & Pneumatic Systems-APS", "sadc": "Air Compressor", "pldc": "Compressor Unit", "picp": "Air compressor operation during driving", "method": "Road test observation", "spec": "Compressor cycles normally" },
    { "pdc": "SD-RT-IBC-PDI-APS-012-002", "adc": "012-Auxiliary & Pneumatic Systems-APS", "sadc": "Air Compressor", "pldc": "Compressor Unit", "picp": "Compressor abnormal noise", "method": "Road test", "spec": "No abnormal knocking/whine" },
    { "pdc": "SD-RT-IBC-PDI-APS-012-003", "adc": "012-Auxiliary & Pneumatic Systems-APS", "sadc": "Air Compressor", "pldc": "Drive Belt", "picp": "Compressor belt noise", "method": "Road test", "spec": "No abnormal belt noise" },
    { "pdc": "SD-RT-IBC-PDI-APS-012-004", "adc": "012-Auxiliary & Pneumatic Systems-APS", "sadc": "Air Supply", "pldc": "Air Dryer", "picp": "Air dryer moisture removal", "method": "Road test + inspection", "spec": "No excessive moisture in system" },
    { "pdc": "SD-RT-IBC-PDI-APS-012-005", "adc": "012-Auxiliary & Pneumatic Systems-APS", "sadc": "Air Supply", "pldc": "Air Dryer", "picp": "Air dryer leakage", "method": "Visual inspection", "spec": "No air leakage" },
    { "pdc": "SD-RT-IBC-PDI-APS-012-006", "adc": "012-Auxiliary & Pneumatic Systems-APS", "sadc": "Air Storage", "pldc": "Air Tank", "picp": "Air tank pressure stability", "method": "Dashboard observation", "spec": "Pressure within OEM range" },
    { "pdc": "SD-RT-IBC-PDI-APS-012-007", "adc": "012-Auxiliary & Pneumatic Systems-APS", "sadc": "Air Storage", "pldc": "Air Tank", "picp": "Air tank mounting security", "method": "Visual inspection", "spec": "Tank firmly mounted" },
    { "pdc": "SD-RT-IBC-PDI-APS-012-008", "adc": "012-Auxiliary & Pneumatic Systems-APS", "sadc": "Air Lines", "pldc": "Pneumatic Lines", "picp": "Air line leakage", "method": "Audible + soap test", "spec": "No leakage detected" },
    { "pdc": "SD-RT-IBC-PDI-APS-012-009", "adc": "012-Auxiliary & Pneumatic Systems-APS", "sadc": "Air Lines", "pldc": "Pneumatic Lines", "picp": "Air line vibration", "method": "Road test", "spec": "No excessive vibration" },
    { "pdc": "SD-RT-IBC-PDI-APS-012-010", "adc": "012-Auxiliary & Pneumatic Systems-APS", "sadc": "Air Valves", "pldc": "Relay Valve", "picp": "Relay valve response", "method": "Road test", "spec": "Immediate valve actuation" },
    { "pdc": "SD-RT-IBC-PDI-APS-012-011", "adc": "012-Auxiliary & Pneumatic Systems-APS", "sadc": "Air Valves", "pldc": "Pressure Regulator", "picp": "Pressure regulation performance", "method": "Road test observation", "spec": "Pressure stable within limits" },
    { "pdc": "SD-RT-IBC-PDI-APS-012-012", "adc": "012-Auxiliary & Pneumatic Systems-APS", "sadc": "Air Valves", "pldc": "Safety Valve", "picp": "Safety valve operation", "method": "Functional check", "spec": "Valve releases at set pressure" },
    { "pdc": "SD-RT-IBC-PDI-APS-012-013", "adc": "012-Auxiliary & Pneumatic Systems-APS", "sadc": "Auxiliary Systems", "pldc": "Horn Pneumatic", "picp": "Air horn operation", "method": "Functional test", "spec": "Horn loud and clear" },
    { "pdc": "SD-RT-IBC-PDI-APS-012-014", "adc": "012-Auxiliary & Pneumatic Systems-APS", "sadc": "Auxiliary Systems", "pldc": "Door Pneumatic Actuator", "picp": "Door pneumatic actuator response", "method": "Functional test", "spec": "Smooth opening/closing" },
    { "pdc": "SD-RT-IBC-PDI-APS-012-015", "adc": "012-Auxiliary & Pneumatic Systems-APS", "sadc": "Auxiliary Systems", "pldc": "Seat Suspension", "picp": "Driver seat air suspension operation", "method": "Functional test", "spec": "Smooth air suspension function" },
    { "pdc": "SD-RT-IBC-PDI-APS-012-016", "adc": "012-Auxiliary & Pneumatic Systems-APS", "sadc": "Auxiliary Systems", "pldc": "Pneumatic Cylinder", "picp": "Cylinder leakage", "method": "Visual inspection", "spec": "No air leakage" },
    { "pdc": "SD-RT-IBC-PDI-APS-012-017", "adc": "012-Auxiliary & Pneumatic Systems-APS", "sadc": "Auxiliary Systems", "pldc": "Pressure Gauge", "picp": "Air pressure gauge accuracy", "method": "Dashboard monitoring", "spec": "Gauge reading correct" },
    { "pdc": "SD-RT-IBC-PDI-APS-012-018", "adc": "012-Auxiliary & Pneumatic Systems-APS", "sadc": "Auxiliary Systems", "pldc": "Air Pressure Warning", "picp": "Low air pressure warning lamp", "method": "Dashboard check", "spec": "Lamp activates at low pressure" },
    { "pdc": "SD-RT-IBC-PDI-APS-012-019", "adc": "012-Auxiliary & Pneumatic Systems-APS", "sadc": "Auxiliary Systems", "pldc": "Air Pressure Alarm", "picp": "Low air pressure buzzer", "method": "Functional test", "spec": "Alarm audible" },
    { "pdc": "SD-RT-IBC-PDI-APS-012-020", "adc": "012-Auxiliary & Pneumatic Systems-APS", "sadc": "System Integration", "pldc": "Complete Pneumatic System", "picp": "Air pressure build-up time", "method": "Road test", "spec": "Within OEM specified time" },
    { "pdc": "SD-RT-IBC-PDI-APS-012-021", "adc": "012-Auxiliary & Pneumatic Systems-APS", "sadc": "System Integration", "pldc": "Complete Pneumatic System", "picp": "Air pressure drop during operation", "method": "Road test", "spec": "No abnormal pressure drop" },
    { "pdc": "SD-RT-IBC-PDI-APS-012-022", "adc": "012-Auxiliary & Pneumatic Systems-APS", "sadc": "System Integration", "pldc": "Complete Pneumatic System", "picp": "Pneumatic system vibration", "method": "Road test", "spec": "Within acceptable NVH limit" },
    { "pdc": "SD-RT-IBC-PDI-APS-012-023", "adc": "012-Auxiliary & Pneumatic Systems-APS", "sadc": "System Integration", "pldc": "Complete Pneumatic System", "picp": "Pneumatic noise during operation", "method": "Road test", "spec": "No abnormal noise" },
    { "pdc": "SD-RT-IBC-PDI-APS-012-024", "adc": "012-Auxiliary & Pneumatic Systems-APS", "sadc": "System Integration", "pldc": "Complete Pneumatic System", "picp": "Air system performance under load", "method": "Road test", "spec": "Stable pressure maintained" },
    { "pdc": "SD-RT-IBC-PDI-APS-012-025", "adc": "012-Auxiliary & Pneumatic Systems-APS", "sadc": "System Integration", "pldc": "Complete Pneumatic System", "picp": "Overall auxiliary & pneumatic system performance", "method": "Road test", "spec": "Meets OEM specification" },
    { "pdc": "SD-RT-IBC-PDI-WTH-013-001", "adc": "013-Wheels  Tires & Hubs-WTH", "sadc": "Wheel Assembly", "pldc": "Wheel Rim", "picp": "Wheel rim visual damage", "method": "Visual inspection", "spec": "No cracks, bends or deformation" },
    { "pdc": "SD-RT-IBC-PDI-WTH-013-002", "adc": "013-Wheels  Tires & Hubs-WTH", "sadc": "Wheel Assembly", "pldc": "Wheel Rim", "picp": "Wheel rim vibration during driving", "method": "Road test", "spec": "No abnormal vibration" },
    { "pdc": "SD-RT-IBC-PDI-WTH-013-003", "adc": "013-Wheels  Tires & Hubs-WTH", "sadc": "Wheel Assembly", "pldc": "Wheel Nuts", "picp": "Wheel nut tightness", "method": "Torque check / visual", "spec": "All nuts tightened to OEM torque" },
    { "pdc": "SD-RT-IBC-PDI-WTH-013-004", "adc": "013-Wheels  Tires & Hubs-WTH", "sadc": "Wheel Assembly", "pldc": "Wheel Studs", "picp": "Wheel stud condition", "method": "Visual inspection", "spec": "No damaged studs" },
    { "pdc": "SD-RT-IBC-PDI-WTH-013-005", "adc": "013-Wheels  Tires & Hubs-WTH", "sadc": "Tire Assembly", "pldc": "Tire Tread", "picp": "Tire tread condition", "method": "Visual inspection", "spec": "Uniform tread, no abnormal wear" },
    { "pdc": "SD-RT-IBC-PDI-WTH-013-006", "adc": "013-Wheels  Tires & Hubs-WTH", "sadc": "Tire Assembly", "pldc": "Tire Pressure", "picp": "Tire pressure during driving", "method": "Pressure gauge", "spec": "Within OEM specification" },
    { "pdc": "SD-RT-IBC-PDI-WTH-013-007", "adc": "013-Wheels  Tires & Hubs-WTH", "sadc": "Tire Assembly", "pldc": "Tire Sidewall", "picp": "Tire sidewall damage", "method": "Visual inspection", "spec": "No cuts or bulges" },
    { "pdc": "SD-RT-IBC-PDI-WTH-013-008", "adc": "013-Wheels  Tires & Hubs-WTH", "sadc": "Tire Assembly", "pldc": "Tire Balance", "picp": "Wheel imbalance during driving", "method": "Road test", "spec": "No steering or chassis vibration" },
    { "pdc": "SD-RT-IBC-PDI-WTH-013-009", "adc": "013-Wheels  Tires & Hubs-WTH", "sadc": "Tire Assembly", "pldc": "Tire Alignment", "picp": "Vehicle pulling due to tire alignment", "method": "Road test", "spec": "Vehicle runs straight" },
    { "pdc": "SD-RT-IBC-PDI-WTH-013-010", "adc": "013-Wheels  Tires & Hubs-WTH", "sadc": "Hub Assembly", "pldc": "Wheel Hub", "picp": "Hub noise during driving", "method": "Road test", "spec": "No humming or grinding" },
    { "pdc": "SD-RT-IBC-PDI-WTH-013-011", "adc": "013-Wheels  Tires & Hubs-WTH", "sadc": "Hub Assembly", "pldc": "Wheel Bearings", "picp": "Bearing noise", "method": "Road test", "spec": "No abnormal noise" },
    { "pdc": "SD-RT-IBC-PDI-WTH-013-012", "adc": "013-Wheels  Tires & Hubs-WTH", "sadc": "Hub Assembly", "pldc": "Wheel Bearings", "picp": "Bearing overheating", "method": "Post road test inspection", "spec": "Temperature within limit" },
    { "pdc": "SD-RT-IBC-PDI-WTH-013-013", "adc": "013-Wheels  Tires & Hubs-WTH", "sadc": "Hub Assembly", "pldc": "Hub Seal", "picp": "Hub oil leakage", "method": "Visual inspection", "spec": "No oil leakage" },
    { "pdc": "SD-RT-IBC-PDI-WTH-013-014", "adc": "013-Wheels  Tires & Hubs-WTH", "sadc": "Hub Assembly", "pldc": "Hub Mounting", "picp": "Hub mounting stability", "method": "Visual inspection", "spec": "Mounting secure" },
    { "pdc": "SD-RT-IBC-PDI-WTH-013-015", "adc": "013-Wheels  Tires & Hubs-WTH", "sadc": "System Integration", "pldc": "Front Wheels", "picp": "Steering vibration due to wheels", "method": "Road test", "spec": "No vibration" },
    { "pdc": "SD-RT-IBC-PDI-WTH-013-016", "adc": "013-Wheels  Tires & Hubs-WTH", "sadc": "System Integration", "pldc": "Rear Wheels", "picp": "Rear wheel vibration", "method": "Road test", "spec": "Within NVH limit" },
    { "pdc": "SD-RT-IBC-PDI-WTH-013-017", "adc": "013-Wheels  Tires & Hubs-WTH", "sadc": "System Integration", "pldc": "Complete Wheel System", "picp": "Wheel performance over potholes", "method": "Road test", "spec": "No abnormal noise" },
    { "pdc": "SD-RT-IBC-PDI-WTH-013-018", "adc": "013-Wheels  Tires & Hubs-WTH", "sadc": "System Integration", "pldc": "Complete Wheel System", "picp": "Wheel stability at high speed", "method": "Road test", "spec": "Stable operation" },
    { "pdc": "SD-RT-IBC-PDI-WTH-013-019", "adc": "013-Wheels  Tires & Hubs-WTH", "sadc": "System Integration", "pldc": "Complete Wheel System", "picp": "Wheel noise during turning", "method": "Road test", "spec": "No abnormal noise" },
    { "pdc": "SD-RT-IBC-PDI-WTH-013-020", "adc": "013-Wheels  Tires & Hubs-WTH", "sadc": "System Integration", "pldc": "Complete Wheel System", "picp": "Wheel hub temperature after road test", "method": "Temperature check", "spec": "Within OEM limit" },
    { "pdc": "SD-RT-IBC-PDI-WTH-013-021", "adc": "013-Wheels  Tires & Hubs-WTH", "sadc": "System Integration", "pldc": "Complete Wheel System", "picp": "Overall wheel system NVH", "method": "Road test", "spec": "Within acceptable limit" },
    { "pdc": "SD-RT-IBC-PDI-WTH-013-022", "adc": "013-Wheels  Tires & Hubs-WTH", "sadc": "System Integration", "pldc": "Complete Wheel System", "picp": "Overall wheels tires hubs performance", "method": "Road test", "spec": "Meets OEM specification" },
    { "pdc": "SD-RT-IBC-PDI-SCS-014-001", "adc": "014-Safety & Control Systems-SCS", "sadc": "Driver Controls", "pldc": "Accelerator Pedal", "picp": "Accelerator pedal response", "method": "Road test", "spec": "Smooth response without sticking" },
    { "pdc": "SD-RT-IBC-PDI-SCS-014-002", "adc": "014-Safety & Control Systems-SCS", "sadc": "Driver Controls", "pldc": "Accelerator Pedal", "picp": "Accelerator pedal free play", "method": "Physical check", "spec": "Within OEM limit" },
    { "pdc": "SD-RT-IBC-PDI-SCS-014-003", "adc": "014-Safety & Control Systems-SCS", "sadc": "Driver Controls", "pldc": "Brake Pedal Switch", "picp": "Brake pedal switch activation", "method": "Functional test", "spec": "Brake light activates correctly" },
    { "pdc": "SD-RT-IBC-PDI-SCS-014-004", "adc": "014-Safety & Control Systems-SCS", "sadc": "Driver Controls", "pldc": "Clutch Pedal Switch", "picp": "Clutch switch response", "method": "Functional test", "spec": "Switch activates correctly" },
    { "pdc": "SD-RT-IBC-PDI-SCS-014-005", "adc": "014-Safety & Control Systems-SCS", "sadc": "Driver Controls", "pldc": "Parking Brake Control", "picp": "Parking brake warning signal", "method": "Dashboard check", "spec": "Warning lamp active when engaged" },
    { "pdc": "SD-RT-IBC-PDI-SCS-014-006", "adc": "014-Safety & Control Systems-SCS", "sadc": "Control Electronics", "pldc": "ABS Controller", "picp": "ABS system response during braking", "method": "Road test", "spec": "ABS operates correctly" },
    { "pdc": "SD-RT-IBC-PDI-SCS-014-007", "adc": "014-Safety & Control Systems-SCS", "sadc": "Control Electronics", "pldc": "Traction Control", "picp": "Traction control response", "method": "Road test", "spec": "No uncontrolled wheel slip" },
    { "pdc": "SD-RT-IBC-PDI-SCS-014-008", "adc": "014-Safety & Control Systems-SCS", "sadc": "Control Electronics", "pldc": "ECU", "picp": "ECU diagnostic status", "method": "Diagnostic scan", "spec": "No active fault codes" },
    { "pdc": "SD-RT-IBC-PDI-SCS-014-009", "adc": "014-Safety & Control Systems-SCS", "sadc": "Warning Systems", "pldc": "Dashboard Warning Lamps", "picp": "Warning lamp operation", "method": "Dashboard observation", "spec": "All lamps operate correctly" },
    { "pdc": "SD-RT-IBC-PDI-SCS-014-010", "adc": "014-Safety & Control Systems-SCS", "sadc": "Warning Systems", "pldc": "Audible Alarm", "picp": "Warning buzzer operation", "method": "Functional test", "spec": "Alarm audible" },
    { "pdc": "SD-RT-IBC-PDI-SCS-014-011", "adc": "014-Safety & Control Systems-SCS", "sadc": "Safety Sensors", "pldc": "Speed Sensor", "picp": "Speed sensor signal integrity", "method": "Diagnostic check", "spec": "Signal within specification" },
    { "pdc": "SD-RT-IBC-PDI-SCS-014-012", "adc": "014-Safety & Control Systems-SCS", "sadc": "Safety Sensors", "pldc": "Brake Sensor", "picp": "Brake sensor signal", "method": "Diagnostic check", "spec": "Signal normal" },
    { "pdc": "SD-RT-IBC-PDI-SCS-014-013", "adc": "014-Safety & Control Systems-SCS", "sadc": "Safety Sensors", "pldc": "Air Pressure Sensor", "picp": "Air pressure sensor reading", "method": "Dashboard monitoring", "spec": "Within OEM range" },
    { "pdc": "SD-RT-IBC-PDI-SCS-014-014", "adc": "014-Safety & Control Systems-SCS", "sadc": "Safety Sensors", "pldc": "Temperature Sensor", "picp": "Engine temperature warning trigger", "method": "Road test monitoring", "spec": "Activates within limit" },
    { "pdc": "SD-RT-IBC-PDI-SCS-014-015", "adc": "014-Safety & Control Systems-SCS", "sadc": "Emergency Controls", "pldc": "Emergency Stop Control", "picp": "Emergency stop functionality", "method": "Functional test", "spec": "Engine stops safely" },
    { "pdc": "SD-RT-IBC-PDI-SCS-014-016", "adc": "014-Safety & Control Systems-SCS", "sadc": "Emergency Controls", "pldc": "Emergency Exit Alarm", "picp": "Emergency alarm function", "method": "Functional test", "spec": "Alarm activates correctly" },
    { "pdc": "SD-RT-IBC-PDI-SCS-014-017", "adc": "014-Safety & Control Systems-SCS", "sadc": "Driver Monitoring", "pldc": "Seat Belt Warning", "picp": "Seat belt warning indicator", "method": "Dashboard check", "spec": "Warning activates correctly" },
    { "pdc": "SD-RT-IBC-PDI-SCS-014-018", "adc": "014-Safety & Control Systems-SCS", "sadc": "Driver Monitoring", "pldc": "Door Safety Interlock", "picp": "Door interlock response", "method": "Functional test", "spec": "Vehicle movement restricted when open" },
    { "pdc": "SD-RT-IBC-PDI-SCS-014-019", "adc": "014-Safety & Control Systems-SCS", "sadc": "System Integration", "pldc": "Complete Control System", "picp": "Control response during acceleration", "method": "Road test", "spec": "Vehicle responds smoothly" },
    { "pdc": "SD-RT-IBC-PDI-SCS-014-020", "adc": "014-Safety & Control Systems-SCS", "sadc": "System Integration", "pldc": "Complete Control System", "picp": "Control response during braking", "method": "Road test", "spec": "Stable vehicle control" },
    { "pdc": "SD-RT-IBC-PDI-SCS-014-021", "adc": "014-Safety & Control Systems-SCS", "sadc": "System Integration", "pldc": "Complete Control System", "picp": "System response on rough road", "method": "Road test", "spec": "No malfunction detected" },
    { "pdc": "SD-RT-IBC-PDI-SCS-014-022", "adc": "014-Safety & Control Systems-SCS", "sadc": "System Integration", "pldc": "Complete Control System", "picp": "Warning system behavior during faults", "method": "Diagnostic simulation", "spec": "Correct warning indication" },
    { "pdc": "SD-RT-IBC-PDI-SCS-014-023", "adc": "014-Safety & Control Systems-SCS", "sadc": "System Integration", "pldc": "Complete Control System", "picp": "Safety system NVH behavior", "method": "Road test", "spec": "No abnormal noise" },
    { "pdc": "SD-RT-IBC-PDI-SCS-014-024", "adc": "014-Safety & Control Systems-SCS", "sadc": "System Integration", "pldc": "Complete Control System", "picp": "Overall safety & control system performance", "method": "Road test", "spec": "Meets OEM specification" },
    { "pdc": "SD-RT-IBC-PDI-TCE-015-001", "adc": "015-Telematics & Comfort Electronics-TCE", "sadc": "Telematics Unit", "pldc": "GPS Module", "picp": "GPS signal reception", "method": "Diagnostic check", "spec": "GPS signal stable and accurate" },
    { "pdc": "SD-RT-IBC-PDI-TCE-015-002", "adc": "015-Telematics & Comfort Electronics-TCE", "sadc": "Telematics Unit", "pldc": "Communication Module", "picp": "Network connectivity", "method": "Diagnostic check", "spec": "Stable communication with server" },
    { "pdc": "SD-RT-IBC-PDI-TCE-015-003", "adc": "015-Telematics & Comfort Electronics-TCE", "sadc": "Telematics Unit", "pldc": "Antenna", "picp": "Antenna mounting security", "method": "Visual inspection", "spec": "Antenna firmly mounted" },
    { "pdc": "SD-RT-IBC-PDI-TCE-015-004", "adc": "015-Telematics & Comfort Electronics-TCE", "sadc": "Telematics Unit", "pldc": "Antenna", "picp": "Signal strength during driving", "method": "Road test monitoring", "spec": "Signal within operational range" },
    { "pdc": "SD-RT-IBC-PDI-TCE-015-005", "adc": "015-Telematics & Comfort Electronics-TCE", "sadc": "Driver Information", "pldc": "Display Unit", "picp": "Driver display readability", "method": "Visual inspection", "spec": "Display clearly visible" },
    { "pdc": "SD-RT-IBC-PDI-TCE-015-006", "adc": "015-Telematics & Comfort Electronics-TCE", "sadc": "Driver Information", "pldc": "Display Unit", "picp": "Display response to inputs", "method": "Functional test", "spec": "Immediate response" },
    { "pdc": "SD-RT-IBC-PDI-TCE-015-007", "adc": "015-Telematics & Comfort Electronics-TCE", "sadc": "Driver Information", "pldc": "Control Buttons", "picp": "Button operation", "method": "Functional test", "spec": "Buttons operate correctly" },
    { "pdc": "SD-RT-IBC-PDI-TCE-015-008", "adc": "015-Telematics & Comfort Electronics-TCE", "sadc": "Comfort Electronics", "pldc": "Cabin Lighting", "picp": "Cabin light operation", "method": "Functional test", "spec": "Lights functioning normally" },
    { "pdc": "SD-RT-IBC-PDI-TCE-015-009", "adc": "015-Telematics & Comfort Electronics-TCE", "sadc": "Comfort Electronics", "pldc": "Cabin Lighting", "picp": "Lighting vibration during driving", "method": "Road test", "spec": "No flickering or vibration" },
    { "pdc": "SD-RT-IBC-PDI-TCE-015-010", "adc": "015-Telematics & Comfort Electronics-TCE", "sadc": "Comfort Electronics", "pldc": "USB Charger", "picp": "USB charging port function", "method": "Functional test", "spec": "Charging output available" },
    { "pdc": "SD-RT-IBC-PDI-TCE-015-011", "adc": "015-Telematics & Comfort Electronics-TCE", "sadc": "Comfort Electronics", "pldc": "Audio System", "picp": "Audio system operation", "method": "Functional test", "spec": "Clear sound output" },
    { "pdc": "SD-RT-IBC-PDI-TCE-015-012", "adc": "015-Telematics & Comfort Electronics-TCE", "sadc": "Comfort Electronics", "pldc": "Speaker Unit", "picp": "Speaker vibration/noise", "method": "Road test", "spec": "No abnormal noise" },
    { "pdc": "SD-RT-IBC-PDI-TCE-015-013", "adc": "015-Telematics & Comfort Electronics-TCE", "sadc": "Comfort Electronics", "pldc": "Control Panel", "picp": "Comfort control panel response", "method": "Functional test", "spec": "Controls respond correctly" },
    { "pdc": "SD-RT-IBC-PDI-TCE-015-014", "adc": "015-Telematics & Comfort Electronics-TCE", "sadc": "Comfort Electronics", "pldc": "Cabin Sensors", "picp": "Cabin sensor signal", "method": "Diagnostic check", "spec": "Sensor readings normal" },
    { "pdc": "SD-RT-IBC-PDI-TCE-015-015", "adc": "015-Telematics & Comfort Electronics-TCE", "sadc": "Comfort Electronics", "pldc": "Interior Display", "picp": "Interior display vibration", "method": "Road test", "spec": "No abnormal vibration" },
    { "pdc": "SD-RT-IBC-PDI-TCE-015-016", "adc": "015-Telematics & Comfort Electronics-TCE", "sadc": "Connectivity", "pldc": "Bluetooth Module", "picp": "Bluetooth connectivity", "method": "Functional test", "spec": "Devices connect successfully" },
    { "pdc": "SD-RT-IBC-PDI-TCE-015-017", "adc": "015-Telematics & Comfort Electronics-TCE", "sadc": "Connectivity", "pldc": "WiFi Module", "picp": "WiFi connectivity", "method": "Functional test", "spec": "Stable connection" },
    { "pdc": "SD-RT-IBC-PDI-TCE-015-018", "adc": "015-Telematics & Comfort Electronics-TCE", "sadc": "Connectivity", "pldc": "Data Logger", "picp": "Vehicle data logging", "method": "Diagnostic check", "spec": "Data logged correctly" },
    { "pdc": "SD-RT-IBC-PDI-TCE-015-019", "adc": "015-Telematics & Comfort Electronics-TCE", "sadc": "System Integration", "pldc": "Complete Telematics System", "picp": "Telematics data transmission", "method": "Diagnostic monitoring", "spec": "Data transmitted without loss" },
    { "pdc": "SD-RT-IBC-PDI-TCE-015-020", "adc": "015-Telematics & Comfort Electronics-TCE", "sadc": "System Integration", "pldc": "Complete Comfort Electronics", "picp": "Comfort system performance during driving", "method": "Road test", "spec": "All systems operate normally" },
    { "pdc": "SD-RT-IBC-PDI-TCE-015-021", "adc": "015-Telematics & Comfort Electronics-TCE", "sadc": "System Integration", "pldc": "Complete System", "picp": "Electrical noise interference", "method": "Road test", "spec": "No interference detected" },
    { "pdc": "SD-RT-IBC-PDI-TCE-015-022", "adc": "015-Telematics & Comfort Electronics-TCE", "sadc": "System Integration", "pldc": "Complete System", "picp": "System vibration during rough road", "method": "Road test", "spec": "No abnormal vibration" },
    { "pdc": "SD-RT-IBC-PDI-TCE-015-023", "adc": "015-Telematics & Comfort Electronics-TCE", "sadc": "System Integration", "pldc": "Complete System", "picp": "Overall telematics & comfort electronics performance", "method": "Road test", "spec": "Meets OEM specification" }
];

// ─── STATE ───
let inspectionItems = [];
let currentFilter = 'all';
let searchQuery = '';
let currentlyOpenGroup = null;
let autoAdvanceEnabled = true;
let modalPreviouslyFocused = null;

let inspectorSigPad = null;
let supervisorSigPad = null;
let signatures = {
    inspector: null,
    supervisor: null,
    signedAt: null
};

let qrStream = null;

// ─── INSPECTION METADATA ───
let inspectionMeta = {
    inspectionId: '',
    registration: '',
    vin: '',
    model: '',
    customer: '',
    inspector: '',
    date: '',
    location: ''
};

const auditLog = InspectionEngine.createAuditLog('pdi-audit-log');
const timer = InspectionEngine.createTimer({
    storageKey: 'pdi-timer-state',
    mode: 'countdown',
    durationSeconds: 7200, // 2-hour standard PDI window
    onTick: ({ displayMs, expired }) => {
        updateTimerDisplay(displayMs);
        if (expired) handleTimerExpiry();
    }
});

function generateInspectionId() {
    const now = new Date();
    const dateStr = now.getFullYear().toString() +
        String(now.getMonth() + 1).padStart(2, '0') +
        String(now.getDate()).padStart(2, '0');
    const seq = String(Math.floor(Math.random() * 999) + 1).padStart(3, '0');
    return 'PDI-' + dateStr + '-' + seq;
}

// ─── META PERSISTENCE ───
function loadInspectionMeta() {
    const saved = InspectionEngine.safeGetJSON('pdi-inspection-meta', null);
    if (saved && typeof saved === 'object') {
        inspectionMeta = { ...inspectionMeta, ...saved };
    }
    if (!inspectionMeta.inspectionId) inspectionMeta.inspectionId = generateInspectionId();
    if (!inspectionMeta.date) inspectionMeta.date = new Date().toISOString().slice(0, 10);
    populateMetaFields();
}

function populateMetaFields() {
    const fields = {
        'infoInspectionId': 'inspectionId',
        'infoRegNumber': 'registration',
        'infoVin': 'vin',
        'infoModel': 'model',
        'infoCustomer': 'customer',
        'infoInspector': 'inspector',
        'infoDate': 'date',
        'infoLocation': 'location'
    };
    for (const [elId, key] of Object.entries(fields)) {
        const el = document.getElementById(elId);
        if (el) el.value = inspectionMeta[key] || '';
    }
}

function saveInspectionMeta() {
    const fields = {
        'infoRegNumber': 'registration',
        'infoVin': 'vin',
        'infoModel': 'model',
        'infoCustomer': 'customer',
        'infoInspector': 'inspector',
        'infoDate': 'date',
        'infoLocation': 'location'
    };
    for (const [elId, key] of Object.entries(fields)) {
        const el = document.getElementById(elId);
        if (el) inspectionMeta[key] = el.value;
    }
    InspectionEngine.safeSetJSON('pdi-inspection-meta', inspectionMeta);
}

function setupMetaListeners() {
    document.querySelectorAll('#inspectionInfoBody input').forEach((input) => {
        input.addEventListener('change', saveInspectionMeta);
        input.addEventListener('blur', saveInspectionMeta);
    });
}

let inspectionInfoOpen = false;
function toggleInspectionInfo() {
    inspectionInfoOpen = !inspectionInfoOpen;
    const body = document.getElementById('inspectionInfoBody');
    const toggle = document.getElementById('inspectionInfoToggle');
    if (body) {
        if (inspectionInfoOpen) body.classList.remove('collapsed');
        else body.classList.add('collapsed');
    }
    if (toggle) {
        if (inspectionInfoOpen) toggle.classList.add('open');
        else toggle.classList.remove('open');
    }
}

// ─── LOCAL STORAGE ───
function saveToLocalStorage() {
    InspectionEngine.safeSetJSON('pdi-inspection-items', inspectionItems, () => {
        showToast('⚠️ Storage quota warning - some photos may be large', 'error');
    });
}

function compressImage(file, callback) {
    InspectionEngine.compressImage(file, { maxDimension: 1024, quality: 0.7 }, callback);
}

// ─── INITIALIZATION ───
function init() {
    initTheme();
    setupEventListeners();
    setupMetaListeners();
    loadInspectionMeta();

    const savedAutoAdvance = localStorage.getItem('pdi-auto-advance');
    if (savedAutoAdvance !== null) {
        autoAdvanceEnabled = savedAutoAdvance === 'true';
        updateAutoAdvanceButton();
    }

    const savedSignatures = InspectionEngine.safeGetJSON('pdi-signatures', null);
    if (savedSignatures) signatures = savedSignatures;

    const savedItems = InspectionEngine.safeGetJSON('pdi-inspection-items', null);
    if (Array.isArray(savedItems) && savedItems.length > 0) {
        // Pause timer while waiting for user response
        timer.pause();
        openModal('Resume Session?', `
            <p>We found an in-progress PDI inspection from your previous session.</p>
            <p style="margin-top:8px;color:var(--text-secondary);">Would you like to <strong>Resume</strong> or <strong>Start Fresh</strong>?</p>
        `, () => {
            inspectionItems = savedItems;
            renderGroups();
            updateStats();
            timer.resume();
            showToast('📂 Previous session resumed', 'success');
        }, {
            confirmText: 'Resume Session',
            cancelText: 'Start Fresh',
            onCancel: () => startFreshSession()
        });
        return;
    }

    startFreshSession();
}

function startFreshSession() {
    inspectionItems = STATIC_INSPECTION_DATA.map((item, index) => ({
        ...item,
        id: index,
        status: '',
        photo: null,
        remarks: '',
        history: []
    }));
    inspectionMeta = {
        inspectionId: generateInspectionId(),
        registration: '',
        vin: '',
        model: '',
        customer: '',
        inspector: '',
        date: new Date().toISOString().slice(0, 10),
        location: ''
    };
    signatures = { inspector: null, supervisor: null, signedAt: null };
    localStorage.removeItem('pdi-signatures');
    localStorage.removeItem('pdi-pause-logs');
    populateMetaFields();
    saveInspectionMeta();
    timer.resetTimer();
    timer.start();
    saveToLocalStorage();
    renderGroups();
    updateStats();
    auditLog.clear();
    auditLog.push('SESSION_START', { inspectionId: inspectionMeta.inspectionId });
}

function confirmReset() {
    openModal('Reset Inspection?', `
        <p>Are you sure you want to reset all inspection checkpoints, photos, and remarks?</p>
        <p style="color:var(--danger);margin-top:8px;font-weight:600;">⚠️ This action cannot be undone.</p>
    `, () => {
        startFreshSession();
        showToast('↩️ Inspection reset to fresh session', 'info');
    }, { confirmText: 'Reset All', cancelText: 'Cancel' });
}

// ─── GROUP DATA ───
function buildGroups() {
    return InspectionEngine.buildGroups(inspectionItems, 'adc');
}

function getFilteredGroups() {
    const groups = buildGroups();
    return InspectionEngine.getFilteredGroups(groups, currentFilter, searchQuery, ['picp', 'pdc', 'sadc', 'pldc', 'method', 'spec']);
}

function escapeHtml(value = '') {
    return InspectionEngine.escapeHtml(value);
}

// ─── RENDER GROUPS ───
function renderGroups() {
    const container = document.getElementById('groupList');
    const groups = getFilteredGroups();

    if (groups.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-layer-group"></i>
                <h3>No assemblies match criteria</h3>
                <p>Try adjusting your search query or filter tab.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = groups.map((group) => {
        const total = group.items.length;
        const pct = total > 0 ? Math.round((group.passCount / total) * 100) : 0;
        let fgClass = 'fg';
        if (pct === 100) fgClass += '';
        else if (group.failCount > 0) fgClass += ' fg-fail';
        else fgClass += ' fg-partial';

        const circumference = 2 * Math.PI * 18;
        const offset = circumference - (pct / 100) * circumference;
        const isOpen = currentlyOpenGroup === group.adc;

        const itemsHtml = isOpen ? group.items.map((item) => {
            const isPass = item.status === 'PASS';
            const isFail = item.status === 'FAIL';
            const showEvidence = isFail || item.photo || item.remarks;

            return `
                <div class="item-row" id="item-row-${item.id}">
                    <div class="item-info">
                        <div class="item-id">${escapeHtml(item.pdc)} · <span style="color:var(--text-secondary)">${escapeHtml(item.sadc)}</span></div>
                        <div class="item-title">${escapeHtml(item.picp)}</div>
                        <div class="item-spec"><i class="fas fa-bullseye" style="font-size:0.75rem;opacity:0.7;"></i> ${escapeHtml(item.spec)}</div>
                        <div class="item-evidence ${showEvidence ? 'visible' : ''}">
                            <div class="photo-fail-area">
                                <label for="photo-${item.id}" title="Capture or upload photo">
                                    <i class="fas fa-camera"></i>
                                    <span>${item.photo ? 'Retake Photo' : 'Add Photo'}</span>
                                </label>
                                <input type="file" id="photo-${item.id}" accept="image/*" capture="environment" onchange="handlePhoto(${item.id}, this)" />
                                <img class="photo-preview-fail ${item.photo ? 'visible' : ''}" id="preview-${item.id}" src="${item.photo || ''}" alt="Evidence photo" />
                            </div>
                            <div class="evidence-remarks-wrap">
                                <textarea class="evidence-remarks" id="remarks-${item.id}" placeholder="Add defect notes or observations..." oninput="updateRemarks(${item.id}, this.value)">${escapeHtml(item.remarks || '')}</textarea>
                                <button type="button" class="btn-mic-inline" title="Dictate notes with speech" onclick="dictateForRemarks(${item.id})">
                                    <i class="fas fa-microphone"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="item-actions">
                        <button type="button" class="status-btn btn-pass ${isPass ? 'active' : ''}" onclick="setStatus(${item.id}, 'PASS')" aria-pressed="${isPass}" aria-label="Mark ${escapeHtml(item.picp)} as pass">
                            <i class="fas fa-check"></i>
                        </button>
                        <button type="button" class="status-btn btn-fail ${isFail ? 'active' : ''}" onclick="setStatus(${item.id}, 'FAIL')" aria-pressed="${isFail}" aria-label="Mark ${escapeHtml(item.picp)} as fail">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                </div>
            `;
        }).join('') : '';

        return `
            <div class="group-card" id="group-card-${escapeHtml(group.adc).replace(/[^a-zA-Z0-9_-]/g, '-')}">
                <div class="group-header" role="button" tabindex="0" onclick="toggleGroup('${escapeHtml(group.adc)}')">
                    <div class="group-info">
                        <div class="group-title">
                            ${escapeHtml(group.adc)}
                            <span class="badge">${group.items.length} checks</span>
                        </div>
                        <div class="group-meta">
                            <span class="stat-chip pass-chip"><i class="fas fa-check-circle"></i> ${group.passCount}</span>
                            <span class="stat-chip fail-chip"><i class="fas fa-times-circle"></i> ${group.failCount}</span>
                            <span class="stat-chip pend-chip"><i class="fas fa-circle-notch"></i> ${group.pendCount}</span>
                        </div>
                    </div>
                    <div class="group-progress">
                        <svg viewBox="0 0 44 44">
                            <circle class="bg" cx="22" cy="22" r="18" />
                            <circle class="${fgClass}" cx="22" cy="22" r="18" stroke-dasharray="${circumference}" stroke-dashoffset="${offset}" />
                        </svg>
                        <div class="progress-text">${pct}%</div>
                    </div>
                    <i class="fas fa-chevron-down group-toggle ${isOpen ? 'open' : ''}"></i>
                </div>
                <div class="group-content ${isOpen ? 'open' : ''}">
                    ${itemsHtml}
                </div>
            </div>
        `;
    }).join('');
}

function toggleGroup(adc) {
    currentlyOpenGroup = (currentlyOpenGroup === adc) ? null : adc;
    renderGroups();
}

// ─── STATUS UPDATES & GUIDED FLOW ───
function setStatus(id, targetStatus) {
    const item = inspectionItems.find(i => i.id === id);
    if (!item) return;

    if (targetStatus === 'FAIL' && item.status !== 'FAIL') {
        openFailModal(item);
        return;
    }

    // RANDOM EVIDENCE CHECK FOR PASS
    if (targetStatus === 'PASS' && item.status !== 'PASS' && !item.photo) {
        // 5% chance to force photo evidence
        if (Math.random() < 0.05) {
            openModal('Random Quality Check', `
                <p>This checkpoint has been randomly selected for a quality audit.</p>
                <p>Please provide photo evidence to pass this checkpoint.</p>
                <div style="margin-top:12px;">
                    <label class="photo-fail-area">
                        <label for="auditPhotoInput" style="cursor:pointer;">
                            <i class="fas fa-camera"></i> Capture Audit Photo
                        </label>
                        <input type="file" id="auditPhotoInput" accept="image/*" capture="environment" />
                    </label>
                    <img id="auditPhotoPreview" class="photo-preview-fail" style="display:none;margin-top:8px;max-width:180px;height:auto;" alt="Audit preview" />
                </div>
            `, () => {
                const preview = document.getElementById('auditPhotoPreview');
                if (preview && preview.src && preview.style.display === 'block') {
                    item.photo = preview.src;
                    applyStatus(item, 'PASS');
                } else {
                    showToast('Photo evidence is required for this audit.', 'error');
                }
            }, {
                confirmText: 'Submit Evidence',
                cancelText: 'Cancel'
            });

            setTimeout(() => {
                const photoInput = document.getElementById('auditPhotoInput');
                const preview = document.getElementById('auditPhotoPreview');
                if (photoInput) {
                    photoInput.addEventListener('change', (e) => {
                        const file = e.target.files[0];
                        if (!file) return;
                        compressImage(file, (base64) => {
                            if (preview) {
                                preview.src = base64;
                                preview.style.display = 'block';
                            }
                        });
                    });
                }
            }, 50);

            return; // Wait for modal action
        }
    }

    let nextStatus = targetStatus;
    if (item.status === targetStatus) nextStatus = ''; // Toggle off

    applyStatus(item, nextStatus);
}

function applyStatus(item, status) {
    item.status = status;
    saveToLocalStorage();
    renderGroups();
    updateStats();



    if (status === 'PASS') {
        showToast(`✅ Passed: ${item.picp}`, 'success');
        if (autoAdvanceEnabled) advanceToNextPending(item.id);
    } else if (status === 'FAIL') {
        showToast(`❌ Failed: ${item.picp}`, 'error');
        if (autoAdvanceEnabled) advanceToNextPending(item.id);
    } else {
        showToast('↩️ Status cleared', 'info');
    }
}

function openFailModal(item) {
    let pendingPhoto = null;
    const defectTagsHtml = InspectionEngine.COMMON_DEFECT_TAGS.map(tag =>
        `<button type="button" class="defect-tag-pill" onclick="appendDefectTag('${escapeHtml(tag)}')">${escapeHtml(tag)}</button>`
    ).join('');

    const modalContent = `
        <div style="font-size:0.95rem;margin-bottom:8px;">
            Checkpoint: <strong>${escapeHtml(item.picp)}</strong> (<span style="font-family:monospace">${escapeHtml(item.pdc)}</span>)
        </div>
        <div style="font-size:0.8rem;color:var(--text-secondary);margin-bottom:10px;">
            Spec: ${escapeHtml(item.spec)}
        </div>

        <div style="margin-top:10px;position:relative;">
            <label for="modalFailRemarks" style="font-size:0.82rem;font-weight:700;color:var(--text-secondary);text-transform:uppercase;">Defect Details &amp; Observations:</label>
            <div style="position:relative;margin-top:4px;">
                <textarea id="modalFailRemarks" class="evidence-remarks" style="min-height:75px;" placeholder="Describe the defect or reason for failure...">${escapeHtml(item.remarks || '')}</textarea>
                <button type="button" class="btn-mic-inline" id="modalMicBtn" title="Voice dictation" onclick="dictateForModal()">
                    <i class="fas fa-microphone"></i>
                </button>
            </div>
        </div>

        <div style="margin-top:12px;">
            <label class="photo-fail-area">
                <label for="modalPhotoInput" style="cursor:pointer;">
                    <i class="fas fa-camera"></i> Capture Defect Photo
                </label>
                <input type="file" id="modalPhotoInput" accept="image/*" capture="environment" />
            </label>
            <img id="modalPhotoPreview" class="photo-preview-fail" style="display:none;margin-top:8px;max-width:180px;height:auto;" alt="Defect preview" />
        </div>
    `;

    openModal('Record Inspection Defect', modalContent, () => {
        const remarksEl = document.getElementById('modalFailRemarks');
        if (remarksEl) item.remarks = remarksEl.value;
        if (pendingPhoto) item.photo = pendingPhoto;
        applyStatus(item, 'FAIL');
    }, {
        confirmText: 'Confirm Defect (FAIL)',
        cancelText: 'Cancel'
    });

    // Wire up modal photo input
    setTimeout(() => {
        const photoInput = document.getElementById('modalPhotoInput');
        const preview = document.getElementById('modalPhotoPreview');
        if (photoInput) {
            photoInput.addEventListener('change', (e) => {
                const file = e.target.files[0];
                if (!file) return;
                compressImage(file, (base64) => {
                    pendingPhoto = base64;
                    if (preview) {
                        preview.src = base64;
                        preview.style.display = 'block';
                    }
                });
            });
        }
    }, 50);
}

function appendDefectTag(tag) {
    const textarea = document.getElementById('modalFailRemarks');
    if (!textarea) return;
    if (textarea.value.trim().length > 0) {
        textarea.value = textarea.value.trim() + '; ' + tag;
    } else {
        textarea.value = tag;
    }
}

// ─── AUTO-ADVANCE & NEXT PENDING ───
function toggleAutoAdvance() {
    autoAdvanceEnabled = !autoAdvanceEnabled;
    localStorage.setItem('pdi-auto-advance', autoAdvanceEnabled ? 'true' : 'false');
    updateAutoAdvanceButton();
    showToast(autoAdvanceEnabled ? '⏩ Auto-advance enabled' : '⏸️ Auto-advance disabled', 'info');
}

function updateAutoAdvanceButton() {
    const btn = document.getElementById('btnAutoAdvance');
    if (!btn) return;
    if (autoAdvanceEnabled) {
        btn.classList.add('active');
        btn.innerHTML = '<i class="fas fa-step-forward"></i> Auto-Advance (ON)';
    } else {
        btn.classList.remove('active');
        btn.innerHTML = '<i class="fas fa-pause"></i> Auto-Advance (OFF)';
    }
}

function advanceToNextPending(currentId) {
    const nextItem = InspectionEngine.findNextPendingItem(inspectionItems, currentId);
    if (!nextItem) {
        showToast('🎉 All checkpoints verified!', 'success');
        return;
    }
    currentlyOpenGroup = nextItem.adc;
    renderGroups();
    setTimeout(() => {
        const row = document.getElementById(`item-row-${nextItem.id}`);
        if (row) {
            row.scrollIntoView({ behavior: 'smooth', block: 'center' });
            row.classList.add('focused');
            setTimeout(() => row.classList.remove('focused'), 1800);
        }
    }, 80);
}

function jumpToNextPending() {
    const nextItem = InspectionEngine.findNextPendingItem(inspectionItems, null);
    if (!nextItem) {
        showToast('✨ All checkpoints completed! Ready for sign-off.', 'success');
        return;
    }
    currentlyOpenGroup = nextItem.adc;
    renderGroups();
    setTimeout(() => {
        const row = document.getElementById(`item-row-${nextItem.id}`);
        if (row) {
            row.scrollIntoView({ behavior: 'smooth', block: 'center' });
            row.classList.add('focused');
            setTimeout(() => row.classList.remove('focused'), 2000);
        }
    }, 100);
}

// ─── CATEGORY JUMP DRAWER ───
function openCategoryDrawer() {
    renderCategoryDrawer();
    document.getElementById('drawerOverlay').classList.add('open');
    document.getElementById('categoryDrawer').classList.add('open');
}

function closeCategoryDrawer() {
    document.getElementById('drawerOverlay').classList.remove('open');
    document.getElementById('categoryDrawer').classList.remove('open');
}

function renderCategoryDrawer() {
    const body = document.getElementById('drawerBody');
    const groups = buildGroups();
    body.innerHTML = groups.map((g) => {
        const total = g.items.length;
        const done = g.passCount + g.failCount;
        const pct = Math.round((done / total) * 100);
        return `
            <div class="drawer-item" onclick="jumpToGroup('${escapeHtml(g.adc)}')">
                <div>
                    <div class="drawer-item-title">${escapeHtml(g.adc)}</div>
                    <div style="font-size:0.75rem;color:var(--text-muted);margin-top:2px;">
                        ${g.passCount} Pass · ${g.failCount} Fail · ${g.pendCount} Pending
                    </div>
                </div>
                <div style="font-weight:700;font-size:0.85rem;color:${pct === 100 ? 'var(--success)' : 'var(--primary)'}">${pct}%</div>
            </div>
        `;
    }).join('');
}

function jumpToGroup(adc) {
    currentlyOpenGroup = adc;
    closeCategoryDrawer();
    renderGroups();
    setTimeout(() => {
        const groupEl = document.getElementById(`group-card-${adc.replace(/[^a-zA-Z0-9_-]/g, '-')}`);
        if (groupEl) groupEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
}

// ─── PHOTO & REMARKS ───
function handlePhoto(id, input) {
    const file = input.files[0];
    if (!file) return;
    compressImage(file, (compressedBase64) => {
        const item = inspectionItems.find(i => i.id === id);
        if (!item) return;
        item.photo = compressedBase64;
        saveToLocalStorage();
        renderGroups();
        showToast('📸 Photo evidence attached', 'success');

    });
}

function updateRemarks(id, val) {
    const item = inspectionItems.find(i => i.id === id);
    if (!item) return;
    item.remarks = val;
    saveToLocalStorage();
}

// ─── VOICE DICTATION ───
let inlineVoiceDictation = null;
function dictateForRemarks(id) {
    const textarea = document.getElementById(`remarks-${id}`);
    if (!textarea) return;

    if (!inlineVoiceDictation) {
        inlineVoiceDictation = InspectionEngine.createVoiceDictation({
            onResult: (text) => {
                textarea.value = (textarea.value.trim() ? textarea.value.trim() + ' ' : '') + text;
                updateRemarks(id, textarea.value);
            },
            onError: (err) => showToast(`Speech error: ${err}`, 'error')
        });
    }

    if (!inlineVoiceDictation.isSupported) {
        showToast('Microphone dictation not supported in this browser.', 'error');
        return;
    }
    inlineVoiceDictation.toggle();
    showToast('🎙️ Speak your inspection notes...', 'info');
}

let modalVoiceDictation = null;
function dictateForModal() {
    const textarea = document.getElementById('modalFailRemarks');
    const micBtn = document.getElementById('modalMicBtn');
    if (!textarea) return;

    if (!modalVoiceDictation) {
        modalVoiceDictation = InspectionEngine.createVoiceDictation({
            onResult: (text) => {
                textarea.value = (textarea.value.trim() ? textarea.value.trim() + ' ' : '') + text;
            },
            onStateChange: (isListening) => {
                if (micBtn) {
                    if (isListening) micBtn.classList.add('recording');
                    else micBtn.classList.remove('recording');
                }
            },
            onError: (err) => showToast(`Speech error: ${err}`, 'error')
        });
    }

    if (!modalVoiceDictation.isSupported) {
        showToast('Microphone dictation not supported.', 'error');
        return;
    }
    modalVoiceDictation.toggle();
}

// ─── STATS & LIVE HUD ───
function updateStats() {
    const counters = InspectionEngine.computeCounters(inspectionItems);
    document.getElementById('totalCount').textContent = counters.total;
    document.getElementById('passedCount').textContent = counters.passed;
    document.getElementById('failedCount').textContent = counters.failed;
    document.getElementById('pendingCount').textContent = counters.pending;

    const fill = document.getElementById('overallProgressFill');
    if (fill) {
        const pct = counters.total > 0 ? ((counters.completed / counters.total) * 100).toFixed(1) : 0;
        fill.style.width = `${pct}%`;
    }
}

// ─── DIGITAL SIGNATURES ───
function openSignOffModal() {
    saveInspectionMeta();
    document.getElementById('signOffModalOverlay').classList.add('open');
    setTimeout(() => {
        if (!inspectorSigPad) {
            const inspCanvas = document.getElementById('inspectorSigCanvas');
            inspectorSigPad = InspectionEngine.createSignaturePad(inspCanvas);
        }
        if (!supervisorSigPad) {
            const supCanvas = document.getElementById('supervisorSigCanvas');
            supervisorSigPad = InspectionEngine.createSignaturePad(supCanvas);
        }
        if (inspectorSigPad) inspectorSigPad.resize();
        if (supervisorSigPad) supervisorSigPad.resize();
    }, 100);
}

function closeSignOffModal() {
    document.getElementById('signOffModalOverlay').classList.remove('open');
}

function clearInspectorSignature() {
    if (inspectorSigPad) inspectorSigPad.clear();
}

function clearSupervisorSignature() {
    if (supervisorSigPad) supervisorSigPad.clear();
}

function saveSignaturesAndExport() {
    const inspData = inspectorSigPad ? inspectorSigPad.toDataURL() : null;
    const supData = supervisorSigPad ? supervisorSigPad.toDataURL() : null;

    signatures = {
        inspector: inspData,
        supervisor: supData,
        signedAt: new Date().toISOString()
    };
    InspectionEngine.safeSetJSON('pdi-signatures', signatures);
    closeSignOffModal();
    showToast('✍️ Signatures recorded', 'success');
    exportPDF();
}

// ─── CAMERA QR / BARCODE SCANNER ───
function openQrScanner() {
    document.getElementById('qrScannerModalOverlay').classList.add('open');
    const video = document.getElementById('qrVideo');
    const status = document.getElementById('qrScannerStatus');

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
            .then((stream) => {
                qrStream = stream;
                video.srcObject = stream;
                video.play();
                status.textContent = 'Camera active. Point at barcode/QR code.';
            })
            .catch(() => {
                status.textContent = 'Camera unavailable. Use manual input below.';
            });
    } else {
        status.textContent = 'Camera access not supported on this device.';
    }
}

function closeQrScanner() {
    if (qrStream) {
        qrStream.getTracks().forEach(track => track.stop());
        qrStream = null;
    }
    document.getElementById('qrScannerModalOverlay').classList.remove('open');
}

function applyManualVin() {
    const input = document.getElementById('manualVinInput');
    if (!input || !input.value.trim()) return;
    const val = input.value.trim();
    inspectionMeta.vin = val;
    populateMetaFields();
    saveInspectionMeta();
    closeQrScanner();
    showToast(`🚘 VIN recorded: ${val}`, 'success');
}

// ─── PDF PRINT REPORT GENERATION ───
function exportPDF() {
    saveInspectionMeta();
    if (!inspectionMeta.inspectionId || !inspectionMeta.vin || !inspectionMeta.registration) {
        showToast('⚠️ Please ensure Inspection ID, VIN, and Registration are entered', 'error');
        openInspectionInfoIfNeeded();
        return;
    }

    const reportContainer = document.getElementById('printReport');
    reportContainer.innerHTML = generatePrintReport();

    // Trigger native browser print which formats to multi-page PDF
    window.print();
    showToast('📄 PDF print dialog launched', 'info');
}

function generatePrintReport() {
    const allGroups = buildGroups();
    const counters = InspectionEngine.computeCounters(inspectionItems);
    const failedItems = inspectionItems.filter(i => i.status === 'FAIL');

    let finalResult = 'PASS';
    let finalResultClass = 'pass';
    if (counters.failed > 0) {
        finalResult = 'DEFECTS DETECTED (FAIL)';
        finalResultClass = 'fail';
    } else if (counters.pending > 0) {
        finalResult = 'INCOMPLETE INSPECTION';
        finalResultClass = 'pending';
    }

    const now = new Date();
    const dateStr = now.toLocaleDateString('en-AU', { day: '2-digit', month: 'short', year: 'numeric' });
    const timeStr = now.toLocaleTimeString('en-AU', { hour: '2-digit', minute: '2-digit' });

    let metaItemsHtml = '';
    if (inspectionMeta.inspectionId) metaItemsHtml += `<div class="report-meta-item"><span>Inspection ID:</span><strong>${escapeHtml(inspectionMeta.inspectionId)}</strong></div>`;
    if (inspectionMeta.registration) metaItemsHtml += `<div class="report-meta-item"><span>Registration No:</span><strong>${escapeHtml(inspectionMeta.registration)}</strong></div>`;
    if (inspectionMeta.vin) metaItemsHtml += `<div class="report-meta-item"><span>VIN / Chassis:</span><strong>${escapeHtml(inspectionMeta.vin)}</strong></div>`;
    if (inspectionMeta.model) metaItemsHtml += `<div class="report-meta-item"><span>Vehicle Model:</span><strong>${escapeHtml(inspectionMeta.model)}</strong></div>`;
    if (inspectionMeta.customer) metaItemsHtml += `<div class="report-meta-item"><span>Customer / Fleet:</span><strong>${escapeHtml(inspectionMeta.customer)}</strong></div>`;
    if (inspectionMeta.inspector) metaItemsHtml += `<div class="report-meta-item"><span>Inspector:</span><strong>${escapeHtml(inspectionMeta.inspector)}</strong></div>`;
    metaItemsHtml += `<div class="report-meta-item"><span>Date &amp; Time:</span><strong>${escapeHtml(inspectionMeta.date || dateStr)} ${timeStr}</strong></div>`;
    if (inspectionMeta.location) metaItemsHtml += `<div class="report-meta-item"><span>Location / Depot:</span><strong>${escapeHtml(inspectionMeta.location)}</strong></div>`;

    // Calculate Active Time
    const timerState = timer.load() || { startedAt: Date.now(), pausedAccumMs: 0 };
    const totalActiveSecs = Math.floor((Date.now() - timerState.startedAt - (timerState.pausedAccumMs || 0)) / 1000);
    const activeMins = Math.floor(totalActiveSecs / 60);
    const activeSecs = totalActiveSecs % 60;
    metaItemsHtml += `<div class="report-meta-item"><span>Total Active Time:</span><strong>${activeMins}m ${activeSecs}s</strong></div>`;

    let html = `
        <div class="report-page">
            <!-- Header Block -->
            <div class="report-header-block">
                <div class="report-header-text">
                    <h1>BUSTECH ENGINEERING · PDI INSPECTION REPORT</h1>
                    <p>Static Chassis &amp; Systems Pre-Delivery Quality Verification</p>
                </div>
                <img src="../bustech-logo.png" alt="BusTech Logo" class="report-logo" style="mix-blend-mode:multiply;"/>
            </div>

            <!-- Vehicle & Meta Information -->
            <div class="report-meta-grid">
                ${metaItemsHtml}
            </div>

            <!-- Summary Scorecard -->
            <div class="report-summary-bar">
                <div class="report-summary-card">Total Checkpoints: <strong>${counters.total}</strong></div>
                <div class="report-summary-card pass">PASSED: <strong>${counters.passed}</strong></div>
                <div class="report-summary-card fail">FAILED: <strong>${counters.failed}</strong></div>
                <div class="report-summary-card">OVERALL: <strong style="color:${finalResultClass === 'pass' ? '#10B981' : '#EF4444'}">${finalResult}</strong></div>
            </div>
    `;

    // High-Priority Failure Defect Box
    if (failedItems.length > 0) {
        html += `
            <div class="report-defect-box">
                <h3>⚠️ DEFECT HIGHLIGHT SUMMARY (${failedItems.length} Faults Requiring Rectification)</h3>
                <table class="report-table">
                    <thead>
                        <tr>
                            <th>Item Code</th>
                            <th>Assembly</th>
                            <th>Checkpoint Description</th>
                            <th>Observations / Remarks</th>
                        </tr>
                    </thead>
                    <tbody>
        `;
        failedItems.forEach((f) => {
            html += `
                <tr>
                    <td style="font-family:monospace;font-weight:700;">${escapeHtml(f.pdc)}</td>
                    <td>${escapeHtml(f.adc)}</td>
                    <td><strong>${escapeHtml(f.picp)}</strong></td>
                    <td style="color:#B91C1C;font-weight:600;">${escapeHtml(f.remarks || 'No remarks recorded')}</td>
                </tr>
            `;
        });
        html += `</tbody></table></div>`;
    }

    // Full Inspection Checklist Breakdown
    html += `<div class="report-section-title">Comprehensive Inspection Checklist</div>`;
    for (const group of allGroups) {
        html += `
            <div style="margin-bottom:10px;page-break-inside:avoid;">
                <div style="font-weight:700;font-size:8.5pt;background:#F1F5F9;padding:4px 8px;border:1px solid #CBD5E1;border-bottom:none;">
                    ${escapeHtml(group.adc)} (${group.passCount} Pass / ${group.failCount} Fail / ${group.pendCount} Pending)
                </div>
                <table class="report-table" style="margin-bottom:8px;">
                    <thead>
                        <tr>
                            <th style="width:18%;">Code</th>
                            <th style="width:38%;">Checkpoint &amp; Spec</th>
                            <th style="width:12%;">Method</th>
                            <th style="width:10%;">Status</th>
                            <th style="width:22%;">Remarks</th>
                        </tr>
                    </thead>
                    <tbody>
        `;
        for (const item of group.items) {
            const st = item.status || 'PENDING';
            const badgeClass = item.status === 'PASS' ? 'pass' : (item.status === 'FAIL' ? 'fail' : 'pending');
            html += `
                <tr>
                    <td style="font-family:monospace;">${escapeHtml(item.pdc)}</td>
                    <td><strong>${escapeHtml(item.picp)}</strong><br/><span style="color:#64748B;">Spec: ${escapeHtml(item.spec)}</span></td>
                    <td>${escapeHtml(item.method)}</td>
                    <td><span class="report-badge ${badgeClass}">${st}</span></td>
                    <td>${escapeHtml(item.remarks || '-')}</td>
                </tr>
            `;
        }
        html += `</tbody></table></div>`;
    }

    // Photo Evidence Gallery
    const itemsWithPhotos = inspectionItems.filter(i => i.photo);
    if (itemsWithPhotos.length > 0) {
        html += `
            <div class="report-section-title" style="page-break-before:always;">Photographic Evidence Gallery</div>
            <div class="report-evidence-grid">
        `;
        for (const item of itemsWithPhotos) {
            html += `
                <div class="report-evidence-card">
                    <img src="${item.photo}" alt="Evidence for ${escapeHtml(item.picp)}" />
                    <div style="font-size:8pt;">
                        <strong>${escapeHtml(item.pdc)}</strong>: ${escapeHtml(item.picp)}
                        <br/>
                        <span class="report-badge ${item.status === 'FAIL' ? 'fail' : 'pass'}">${item.status}</span>
                        ${item.remarks ? `<br/><em>${escapeHtml(item.remarks)}</em>` : ''}
                    </div>
                </div>
            `;
        }
        html += `</div>`;
    }

    // Session Activity Logs
    const pauseLogs = InspectionEngine.safeGetJSON('pdi-pause-logs', []);
    if (pauseLogs.length > 0) {
        html += `<div class="report-section-title">Session Activity &amp; Pause Logs</div>`;
        html += `<table class="report-table" style="width:100%;max-width:500px;margin-bottom:12px;">
                    <thead><tr><th>Time</th><th>Action / Event</th></tr></thead>
                    <tbody>`;
        pauseLogs.forEach(log => {
            html += `<tr><td>${log.timestamp}</td><td>${log.action}</td></tr>`;
        });
        html += `</tbody></table>`;
    }

    // Electronic Signatures Block
    html += `
        <div class="report-signatures" style="display:flex;align-items:flex-end;justify-content:space-between;border-top:2px solid #E2E8F0;padding-top:16px;">
            <div style="display:flex;gap:40px;">
                <div class="report-signature-block">
                    ${signatures.inspector ? `<img src="${signatures.inspector}" alt="Inspector Signature" />` : '<div style="height:50px;"></div>'}
                    <div><strong>Inspector Sign-Off:</strong> ${escapeHtml(inspectionMeta.inspector || 'Certified Inspector')}</div>
                    <div style="font-size:7.5pt;color:#64748B;">I hereby certify that all static checkpoints have been individually evaluated.</div>
                </div>
                <div class="report-signature-block">
                    ${signatures.supervisor ? `<img src="${signatures.supervisor}" alt="Supervisor Signature" />` : '<div style="height:50px;"></div>'}
                    <div><strong>Quality Assurance / Supervisor:</strong> Authorized Signatory</div>
                    <div style="font-size:7.5pt;color:#64748B;">Inspection report verified and archived in quality audit records.</div>
                </div>
            </div>
            <div class="report-signature-brand">
                <img src="../bustech-logo.png" alt="BusTech Engineering" style="height:50px;mix-blend-mode:multiply;" />
            </div>
        </div>
    `;

    html += `</div>`;
    return html;
}

// ─── EVENTS ───
function setupEventListeners() {
    const searchInput = document.getElementById('searchInput');
    const debouncedRender = InspectionEngine.debounce(renderGroups, 200);
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        debouncedRender();
    });

    document.querySelectorAll('.filter-tabs .tab').forEach((tab) => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.filter-tabs .tab').forEach((t) => {
                t.classList.remove('active');
                t.setAttribute('aria-pressed', 'false');
            });
            tab.classList.add('active');
            tab.setAttribute('aria-pressed', 'true');
            currentFilter = tab.getAttribute('data-filter') || 'all';
            renderGroups();
        });
    });
}

// ─── TOAST ───
function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    const icons = { success: 'fa-check-circle', error: 'fa-exclamation-circle', info: 'fa-info-circle' };
    toast.innerHTML = `
        <i class="fas ${icons[type] || icons.info}"></i>
        <span>${message}</span>
        <button class="toast-close" onclick="this.parentElement.remove()">&times;</button>
    `;
    container.appendChild(toast);
    setTimeout(() => {
        if (toast.parentElement) toast.remove();
    }, 4500);
}

// ─── MODAL ───
let modalCallback = null;
function openModal(title, message, onConfirm, options = {}) {
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalMessage').innerHTML = message;
    document.getElementById('modalOverlay').classList.add('open');
    modalCallback = onConfirm;
    modalPreviouslyFocused = document.activeElement;

    const confirmBtn = document.getElementById('modalConfirmBtn');
    const cancelBtn = document.querySelector('#modalOverlay .modal-actions .btn-outline');

    confirmBtn.textContent = options.confirmText || 'Confirm';
    cancelBtn.textContent = options.cancelText || 'Cancel';

    confirmBtn.onclick = () => {
        closeModal();
        if (modalCallback) modalCallback();
    };
    cancelBtn.onclick = () => {
        closeModal();
        if (options.onCancel) options.onCancel();
    };
    document.addEventListener('keydown', handleModalKeydown);
    confirmBtn.focus();
}

function closeModal() {
    document.getElementById('modalOverlay').classList.remove('open');
    modalCallback = null;
    document.removeEventListener('keydown', handleModalKeydown);
    if (modalPreviouslyFocused && modalPreviouslyFocused.focus) modalPreviouslyFocused.focus();
}

function handleModalKeydown(event) {
    if (event.key === 'Escape') {
        event.preventDefault();
        closeModal();
    }
}

// ─── THEME ───
function getStoredTheme() {
    return localStorage.getItem('pdi-theme') || 'light';
}

function applyTheme(theme) {
    const isDark = theme === 'dark';
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
    localStorage.setItem('pdi-theme', theme);
    const icon = document.querySelector('.app-header .header-actions button[title="Theme"] i');
    if (icon) icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
}

function toggleDarkMode() {
    const next = document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    renderGroups();
    showToast(next === 'dark' ? '🌙 Dark mode enabled' : '☀️ Light mode enabled', 'info');
}

function initTheme() {
    applyTheme(getStoredTheme());
}

// ─── TIMER CONTROLS ───
function updateTimerDisplay(displayMs) {
    const totalSecs = Math.floor(displayMs / 1000);
    const hrs = Math.floor(totalSecs / 3600);
    const mins = Math.floor((totalSecs % 3600) / 60);
    const secs = totalSecs % 60;
    const str = `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

    const displayEl = document.getElementById('timerDisplay');
    if (displayEl) displayEl.textContent = str;

    const timerWidget = document.getElementById('headerTimer');
    if (timerWidget) {
        if (totalSecs <= 0) timerWidget.className = 'header-timer danger';
        else if (totalSecs < 900) timerWidget.className = 'header-timer warning';
        else timerWidget.className = 'header-timer';
    }
}

function toggleTimer() {
    const state = timer.load();
    const controlBtn = document.getElementById('timerControlBtn');
    if (!state || state.pausedAt) {
        timer.resume();
        if (controlBtn) controlBtn.innerHTML = '<i class="fas fa-pause"></i>';
        showToast('▶️ Timer running', 'info');
        
        // Log Resume Event
        const logs = InspectionEngine.safeGetJSON('pdi-pause-logs', []);
        logs.push({ action: 'Resumed Inspection', timestamp: new Date().toLocaleTimeString() });
        InspectionEngine.safeSetJSON('pdi-pause-logs', logs);
    } else {
        timer.pause();
        if (controlBtn) controlBtn.innerHTML = '<i class="fas fa-play"></i>';
        showToast('⏸️ Timer paused', 'info');
        
        // Log Pause Event
        const logs = InspectionEngine.safeGetJSON('pdi-pause-logs', []);
        logs.push({ action: 'Paused Inspection', timestamp: new Date().toLocaleTimeString() });
        InspectionEngine.safeSetJSON('pdi-pause-logs', logs);
    }
}

function resetTimer() {
    timer.resetTimer();
    timer.start();
    const controlBtn = document.getElementById('timerControlBtn');
    if (controlBtn) controlBtn.innerHTML = '<i class="fas fa-pause"></i>';
}

function handleTimerExpiry() {
    showToast('🚨 PDI inspection time has expired!', 'error');
}

// ─── START ───
document.addEventListener('DOMContentLoaded', init);