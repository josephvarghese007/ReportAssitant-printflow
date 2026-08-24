// ─── DATA ───
// const STATIC_INSPECTION_DATA = [
//     {"pdc":"IMG-1-1","adc":"1.0 Front section","sadc":"Front Panel / Bonnet","pldc":"Front Panel / Bonnet","picp":"Front Panel / Bonnet (open/close operation & alignment, fitment)","method":"Visual inspection","spec":"Satisfactory"},
//     {"pdc":"IMG-1-2","adc":"1.0 Front section","sadc":"Front Headlamps, Fog lamps, Indicators","pldc":"Front Headlamps, Fog lamps, Indicators","picp":"Front Headlamps, Fog lamps, Indicators (Mounting & Operations, LH / RH side check visually any damage & moisture)","method":"Visual inspection","spec":"Satisfactory"},
//     {"pdc":"IMG-1-3","adc":"1.0 Front section","sadc":"Windshield Glass","pldc":"Windshield Glass","picp":"Windshield Glass (Check for cracks / chipping/ Scratch / Rubber seal mounting)","method":"Visual inspection","spec":"Satisfactory"},
//     {"pdc":"IMG-1-4","adc":"1.0 Front section","sadc":"Wiper blade, Motor, Arm","pldc":"Wiper blade, Motor, Arm","picp":"Wiper blade, Wiper Motor, Wiper Arm (Check operations visually)","method":"Visual inspection","spec":"Satisfactory"},
//     {"pdc":"IMG-2-1","adc":"2.0 Front / Rear Axle / Suspension / Steering","sadc":"Front Axle, King pin, Wheel Bearings","pldc":"Front Axle, King pin, Wheel Bearings","picp":"Front Axle, King pin, Wheel Bearings (Check operations visually & noise)","method":"Visual inspection","spec":"Satisfactory"},
//     {"pdc":"IMG-2-2","adc":"2.0 Front / Rear Axle / Suspension / Steering","sadc":"Suspension Springs / Air Bellows, Shock absorber","pldc":"Suspension Springs / Air Bellows, Shock absorber","picp":"Suspension Springs / Air Bellows, Shock absorber (Check visually for damage / leakage / loose mounting)","method":"Visual inspection","spec":"Satisfactory"},
//     {"pdc":"IMG-2-3","adc":"2.0 Front / Rear Axle / Suspension / Steering","sadc":"Steering gear box / Linkage / Propeller Shaft","pldc":"Steering gear box / Linkage / Propeller Shaft","picp":"Steering gear box / Linkage / Propeller Shaft (Visual check for leak, looseness)","method":"Visual inspection","spec":"Satisfactory"},
//     {"pdc":"IMG-2-4","adc":"2.0 Front / Rear Axle / Suspension / Steering","sadc":"Wheel Hubs / Tyres / Mudguards","pldc":"Wheel Hubs / Tyres / Mudguards","picp":"Wheel Hubs / Tyres / Mudguards (Check condition / pressure visually, 10 Wheel Nuts Torque Value) - Front & Rear","method":"Visual inspection","spec":"Satisfactory"},
//     {"pdc":"IMG-3-1","adc":"3.0 Air / Brake System","sadc":"Air Compressor / Air Dryer","pldc":"Air Compressor / Air Dryer","picp":"Air Compressor / Air Dryer (Check for mounting visually, leaks, unloader valve operation)","method":"Visual inspection","spec":"Satisfactory"}
// ];

// IBC Level-2 PDI Static & Road Test Checklist Data
// Source: LEVEL-2-ST1-IBC-PDI-STATIC-CHECKLIST-REV 001-dt 05032026(4).xlsx
//         LEVEL-2-RT1-IBC-PDI-ROAD-CHECKLIST-REV 001-dt 05032026(3).xlsx
// Generated: 2026-08-24
// Total Static Items: 429
// Total Road Test Items: 442

const staticChecklist = [
    {
        "pdc": "SD-S1-IBC-PDI-VRP-001-001",
        "adc": "001-VIN Registration Plate-VRP",
        "sadc": "Vehicle Identification",
        "pldc": "VIN Plate",
        "picp": "Verify VIN plate presence on chassis",
        "method": "Visual",
        "spec": "VIN plate present and securely fixed"
    },
    {
        "pdc": "SD-S1-IBC-PDI-VRP-001-002",
        "adc": "001-VIN Registration Plate-VRP",
        "sadc": "Vehicle Identification",
        "pldc": "VIN Stamping on Frame",
        "picp": "Check VIN stamping on chassis frame",
        "method": "Visual",
        "spec": "VIN clearly stamped and legible"
    },
    {
        "pdc": "SD-S1-IBC-PDI-VRP-001-003",
        "adc": "001-VIN Registration Plate-VRP",
        "sadc": "Vehicle Identification",
        "pldc": "VIN Plate Rivets",
        "picp": "Check rivet integrity",
        "method": "Visual",
        "spec": "Rivets intact and not tampered"
    },
    {
        "pdc": "SD-S1-IBC-PDI-VRP-001-004",
        "adc": "001-VIN Registration Plate-VRP",
        "sadc": "VIN Verification",
        "pldc": "VIN Number Match",
        "picp": "Match VIN plate with chassis stamped VIN",
        "method": "Visual + Record Check",
        "spec": "Both VIN numbers identical"
    },
    {
        "pdc": "SD-S1-IBC-PDI-VRP-001-005",
        "adc": "001-VIN Registration Plate-VRP",
        "sadc": "VIN Verification",
        "pldc": "VIN Documentation",
        "picp": "Verify VIN with delivery documents",
        "method": "Document Check",
        "spec": "VIN matches OEM documentation"
    },
    {
        "pdc": "SD-S1-IBC-PDI-VRP-001-006",
        "adc": "001-VIN Registration Plate-VRP",
        "sadc": "VIN Verification",
        "pldc": "VIN Database Entry",
        "picp": "Check VIN entry into factory system",
        "method": "System Check",
        "spec": "VIN recorded correctly"
    },
    {
        "pdc": "SD-S1-IBC-PDI-VRP-001-007",
        "adc": "001-VIN Registration Plate-VRP",
        "sadc": "Manufacturer Details",
        "pldc": "Manufacturer Name Plate",
        "picp": "Check manufacturer plate presence",
        "method": "Visual",
        "spec": "Plate present and legible"
    },
    {
        "pdc": "SD-S1-IBC-PDI-VRP-001-008",
        "adc": "001-VIN Registration Plate-VRP",
        "sadc": "Manufacturer Details",
        "pldc": "Model Identification",
        "picp": "Verify chassis model code",
        "method": "Visual + Document",
        "spec": "Model matches purchase order"
    },
    {
        "pdc": "SD-S1-IBC-PDI-VRP-001-009",
        "adc": "001-VIN Registration Plate-VRP",
        "sadc": "Manufacturer Details",
        "pldc": "Manufacturing Date Plate",
        "picp": "Check manufacturing date marking",
        "method": "Visual",
        "spec": "Date plate legible"
    },
    {
        "pdc": "SD-S1-IBC-PDI-VRP-001-010",
        "adc": "001-VIN Registration Plate-VRP",
        "sadc": "Regulatory Compliance",
        "pldc": "Homologation Plate",
        "picp": "Check regulatory certification plate",
        "method": "Visual",
        "spec": "Plate present"
    },
    {
        "pdc": "SD-S1-IBC-PDI-VRP-001-011",
        "adc": "001-VIN Registration Plate-VRP",
        "sadc": "Regulatory Compliance",
        "pldc": "Emission Compliance Label",
        "picp": "Verify emission compliance label",
        "method": "Visual",
        "spec": "Label present and readable"
    },
    {
        "pdc": "SD-S1-IBC-PDI-VRP-001-012",
        "adc": "001-VIN Registration Plate-VRP",
        "sadc": "Barcode / QR Identification",
        "pldc": "VIN Barcode Label",
        "picp": "Check barcode label presence",
        "method": "Visual",
        "spec": "Barcode label present"
    },
    {
        "pdc": "SD-S1-IBC-PDI-VRP-001-013",
        "adc": "001-VIN Registration Plate-VRP",
        "sadc": "Barcode / QR Identification",
        "pldc": "Barcode Scan Test",
        "picp": "Scan VIN barcode",
        "method": "Scanner Test",
        "spec": "Barcode readable and correct"
    },
    {
        "pdc": "SD-S1-IBC-PDI-VRP-001-014",
        "adc": "001-VIN Registration Plate-VRP",
        "sadc": "Barcode / QR Identification",
        "pldc": "QR Code Verification",
        "picp": "Verify QR code information",
        "method": "Scanner Test",
        "spec": "QR code readable"
    },
    {
        "pdc": "SD-S1-IBC-PDI-VRP-001-015",
        "adc": "001-VIN Registration Plate-VRP",
        "sadc": "Chassis Identification",
        "pldc": "Chassis Serial Number",
        "picp": "Verify chassis serial number marking",
        "method": "Visual",
        "spec": "Serial number legible"
    },
    {
        "pdc": "SD-S1-IBC-PDI-VRP-001-016",
        "adc": "001-VIN Registration Plate-VRP",
        "sadc": "Chassis Identification",
        "pldc": "Engine Serial Number",
        "picp": "Check engine serial number against VIN record",
        "method": "Visual + Document",
        "spec": "Matches documentation"
    },
    {
        "pdc": "SD-S1-IBC-PDI-VRP-001-017",
        "adc": "001-VIN Registration Plate-VRP",
        "sadc": "Chassis Identification",
        "pldc": "Axle Serial Numbers",
        "picp": "Verify axle serial numbers",
        "method": "Visual + Document",
        "spec": "Matches documentation"
    },
    {
        "pdc": "SD-S1-IBC-PDI-VRP-001-018",
        "adc": "001-VIN Registration Plate-VRP",
        "sadc": "Digital Records",
        "pldc": "Factory ERP Entry",
        "picp": "Verify VIN entry in ERP system",
        "method": "System Check",
        "spec": "VIN stored in ERP"
    },
    {
        "pdc": "SD-S1-IBC-PDI-VRP-001-019",
        "adc": "001-VIN Registration Plate-VRP",
        "sadc": "Digital Records",
        "pldc": "Inspection System Entry",
        "picp": "Check VIN registered in inspection system",
        "method": "System Check",
        "spec": "VIN recorded correctly"
    },
    {
        "pdc": "SD-S1-IBC-PDI-VRP-001-020",
        "adc": "001-VIN Registration Plate-VRP",
        "sadc": "Security Checks",
        "pldc": "VIN Tampering Check",
        "picp": "Inspect for tampering signs",
        "method": "Visual",
        "spec": "No tampering evidence"
    },
    {
        "pdc": "SD-S1-IBC-PDI-VRP-001-021",
        "adc": "001-VIN Registration Plate-VRP",
        "sadc": "Security Checks",
        "pldc": "Plate Damage",
        "picp": "Inspect VIN plate damage",
        "method": "Visual",
        "spec": "Plate undamaged"
    },
    {
        "pdc": "SD-S1-IBC-PDI-VRP-001-022",
        "adc": "001-VIN Registration Plate-VRP",
        "sadc": "Final Registration",
        "pldc": "VIN Inspection Approval",
        "picp": "Inspector approval for VIN verification",
        "method": "Inspector Sign-off",
        "spec": "All VIN checks passed"
    },
    {
        "pdc": "SD-S1-IBC-PDI-VRP-001-023",
        "adc": "001-VIN Registration Plate-VRP",
        "sadc": "Final Registration",
        "pldc": "Chassis Release Tag",
        "picp": "Attach inspection tag",
        "method": "Visual",
        "spec": "Tag attached"
    },
    {
        "pdc": "SD-S1-IBC-PDI-CFS-002-001",
        "adc": "002-Chassis Frame & Structure-CFS",
        "sadc": "Main Frame",
        "pldc": "Left Longitudinal Member",
        "picp": "Visual check for cracks or deformation",
        "method": "Visual",
        "spec": "No cracks / bends allowed"
    },
    {
        "pdc": "SD-S1-IBC-PDI-CFS-002-002",
        "adc": "002-Chassis Frame & Structure-CFS",
        "sadc": "Main Frame",
        "pldc": "Right Longitudinal Member",
        "picp": "Visual check for cracks or deformation",
        "method": "Visual",
        "spec": "No cracks / bends allowed"
    },
    {
        "pdc": "SD-S1-IBC-PDI-CFS-002-003",
        "adc": "002-Chassis Frame & Structure-CFS",
        "sadc": "Main Frame",
        "pldc": "Longitudinal Members",
        "picp": "Frame straightness verification",
        "method": "Laser alignment",
        "spec": "Tolerance ±3 mm"
    },
    {
        "pdc": "SD-S1-IBC-PDI-CFS-002-004",
        "adc": "002-Chassis Frame & Structure-CFS",
        "sadc": "Cross Members",
        "pldc": "Front Cross Member",
        "picp": "Weld integrity inspection",
        "method": "Visual + dye penetrant",
        "spec": "No porosity / cracks"
    },
    {
        "pdc": "SD-S1-IBC-PDI-CFS-002-005",
        "adc": "002-Chassis Frame & Structure-CFS",
        "sadc": "Cross Members",
        "pldc": "Rear Cross Member",
        "picp": "Cross member alignment",
        "method": "Measurement jig",
        "spec": "Tolerance ±2 mm"
    },
    {
        "pdc": "SD-S1-IBC-PDI-CFS-002-006",
        "adc": "002-Chassis Frame & Structure-CFS",
        "sadc": "Cross Members",
        "pldc": "Intermediate Cross Member",
        "picp": "Bolt torque verification",
        "method": "Torque wrench",
        "spec": "As per OEM torque spec"
    },
    {
        "pdc": "SD-S1-IBC-PDI-CFS-002-007",
        "adc": "002-Chassis Frame & Structure-CFS",
        "sadc": "Body Mounting Structure",
        "pldc": "Body Mount Brackets",
        "picp": "Bracket weld inspection",
        "method": "Visual",
        "spec": "Continuous weld bead"
    },
    {
        "pdc": "SD-S1-IBC-PDI-CFS-002-008",
        "adc": "002-Chassis Frame & Structure-CFS",
        "sadc": "Body Mounting Structure",
        "pldc": "Body Mount Bush Housing",
        "picp": "Dimensional verification",
        "method": "Vernier / jig",
        "spec": "Within OEM tolerance"
    },
    {
        "pdc": "SD-S1-IBC-PDI-CFS-002-009",
        "adc": "002-Chassis Frame & Structure-CFS",
        "sadc": "Suspension Mounting",
        "pldc": "Front Leaf Spring Hanger",
        "picp": "Bracket weld inspection",
        "method": "Visual",
        "spec": "No weld cracks"
    },
    {
        "pdc": "SD-S1-IBC-PDI-CFS-002-010",
        "adc": "002-Chassis Frame & Structure-CFS",
        "sadc": "Suspension Mounting",
        "pldc": "Rear Leaf Spring Hanger",
        "picp": "Bracket alignment check",
        "method": "Measurement",
        "spec": "Tolerance ±2 mm"
    },
    {
        "pdc": "SD-S1-IBC-PDI-CFS-002-011",
        "adc": "002-Chassis Frame & Structure-CFS",
        "sadc": "Suspension Mounting",
        "pldc": "Shock Absorber Mount",
        "picp": "Mount integrity check",
        "method": "Visual",
        "spec": "No deformation"
    },
    {
        "pdc": "SD-S1-IBC-PDI-CFS-002-012",
        "adc": "002-Chassis Frame & Structure-CFS",
        "sadc": "Engine Mounting Structure",
        "pldc": "Engine Mount Bracket LH",
        "picp": "Weld inspection",
        "method": "Visual",
        "spec": "No cracks"
    },
    {
        "pdc": "SD-S1-IBC-PDI-CFS-002-013",
        "adc": "002-Chassis Frame & Structure-CFS",
        "sadc": "Engine Mounting Structure",
        "pldc": "Engine Mount Bracket RH",
        "picp": "Bolt torque verification",
        "method": "Torque wrench",
        "spec": "OEM torque spec"
    },
    {
        "pdc": "SD-S1-IBC-PDI-CFS-002-014",
        "adc": "002-Chassis Frame & Structure-CFS",
        "sadc": "Transmission Mounting",
        "pldc": "Transmission Cross Member",
        "picp": "Mount alignment verification",
        "method": "Measurement jig",
        "spec": "Tolerance ±2 mm"
    },
    {
        "pdc": "SD-S1-IBC-PDI-CFS-002-015",
        "adc": "002-Chassis Frame & Structure-CFS",
        "sadc": "Fuel Tank Mounting",
        "pldc": "Fuel Tank Bracket",
        "picp": "Bracket weld inspection",
        "method": "Visual",
        "spec": "No weld defect"
    },
    {
        "pdc": "SD-S1-IBC-PDI-CFS-002-016",
        "adc": "002-Chassis Frame & Structure-CFS",
        "sadc": "Fuel Tank Mounting",
        "pldc": "Fuel Tank Strap Mount",
        "picp": "Fastener torque check",
        "method": "Torque wrench",
        "spec": "OEM torque spec"
    },
    {
        "pdc": "SD-S1-IBC-PDI-CFS-002-017",
        "adc": "002-Chassis Frame & Structure-CFS",
        "sadc": "Steering Mounting",
        "pldc": "Steering Gearbox Bracket",
        "picp": "Bracket weld integrity",
        "method": "Visual",
        "spec": "No crack"
    },
    {
        "pdc": "SD-S1-IBC-PDI-CFS-002-018",
        "adc": "002-Chassis Frame & Structure-CFS",
        "sadc": "Steering Mounting",
        "pldc": "Steering Column Support",
        "picp": "Mount rigidity check",
        "method": "Manual force",
        "spec": "No play allowed"
    },
    {
        "pdc": "SD-S1-IBC-PDI-CFS-002-019",
        "adc": "002-Chassis Frame & Structure-CFS",
        "sadc": "Brake System Mounting",
        "pldc": "Air Tank Bracket",
        "picp": "Bracket weld inspection",
        "method": "Visual",
        "spec": "No crack"
    },
    {
        "pdc": "SD-S1-IBC-PDI-CFS-002-020",
        "adc": "002-Chassis Frame & Structure-CFS",
        "sadc": "Brake System Mounting",
        "pldc": "Brake Valve Mount",
        "picp": "Mounting bolt torque",
        "method": "Torque wrench",
        "spec": "OEM torque spec"
    },
    {
        "pdc": "SD-S1-IBC-PDI-CFS-002-021",
        "adc": "002-Chassis Frame & Structure-CFS",
        "sadc": "Electrical Mounting",
        "pldc": "Battery Box Mount",
        "picp": "Bracket weld inspection",
        "method": "Visual",
        "spec": "No crack"
    },
    {
        "pdc": "SD-S1-IBC-PDI-CFS-002-022",
        "adc": "002-Chassis Frame & Structure-CFS",
        "sadc": "Electrical Mounting",
        "pldc": "Harness Routing Brackets",
        "picp": "Bracket positioning check",
        "method": "Visual",
        "spec": "Correct routing path"
    },
    {
        "pdc": "SD-S1-IBC-PDI-CFS-002-023",
        "adc": "002-Chassis Frame & Structure-CFS",
        "sadc": "Corrosion Protection",
        "pldc": "Frame Surface",
        "picp": "Paint / coating inspection",
        "method": "Visual",
        "spec": "Uniform coating"
    },
    {
        "pdc": "SD-S1-IBC-PDI-CFS-002-024",
        "adc": "002-Chassis Frame & Structure-CFS",
        "sadc": "Corrosion Protection",
        "pldc": "Underbody Protection",
        "picp": "Coating thickness verification",
        "method": "Gauge",
        "spec": "OEM spec"
    },
    {
        "pdc": "SD-S1-IBC-PDI-CFS-002-025",
        "adc": "002-Chassis Frame & Structure-CFS",
        "sadc": "Frame Geometry",
        "pldc": "Diagonal Measurement",
        "picp": "Frame squareness check",
        "method": "Tape / laser",
        "spec": "Difference <5 mm"
    },
    {
        "pdc": "SD-S1-IBC-PDI-CFS-002-026",
        "adc": "002-Chassis Frame & Structure-CFS",
        "sadc": "Frame Geometry",
        "pldc": "Wheelbase Distance",
        "picp": "Wheelbase verification",
        "method": "Measurement",
        "spec": "OEM spec"
    },
    {
        "pdc": "SD-S1-IBC-PDI-PTA-003-001",
        "adc": "003-Power Train Assembly-PTA",
        "sadc": "Engine Assembly",
        "pldc": "Engine Block",
        "picp": "Check for cracks, damage, oil leakage",
        "method": "Visual",
        "spec": "No visible cracks or oil leakage"
    },
    {
        "pdc": "SD-S1-IBC-PDI-PTA-003-002",
        "adc": "003-Power Train Assembly-PTA",
        "sadc": "Engine Assembly",
        "pldc": "Cylinder Head",
        "picp": "Check head gasket area for leakage",
        "method": "Visual",
        "spec": "No coolant or oil seepage"
    },
    {
        "pdc": "SD-S1-IBC-PDI-PTA-003-003",
        "adc": "003-Power Train Assembly-PTA",
        "sadc": "Engine Assembly",
        "pldc": "Engine Mount LH",
        "picp": "Mount bracket weld and integrity",
        "method": "Visual",
        "spec": "No cracks or deformation"
    },
    {
        "pdc": "SD-S1-IBC-PDI-PTA-003-004",
        "adc": "003-Power Train Assembly-PTA",
        "sadc": "Engine Assembly",
        "pldc": "Engine Mount RH",
        "picp": "Bolt torque verification",
        "method": "Torque wrench",
        "spec": "As per OEM torque spec"
    },
    {
        "pdc": "SD-S1-IBC-PDI-PTA-003-005",
        "adc": "003-Power Train Assembly-PTA",
        "sadc": "Engine Assembly",
        "pldc": "Engine Mounting Bolts",
        "picp": "Torque verification",
        "method": "Torque wrench",
        "spec": "OEM specified torque"
    },
    {
        "pdc": "SD-S1-IBC-PDI-PTA-003-006",
        "adc": "003-Power Train Assembly-PTA",
        "sadc": "Air Intake System",
        "pldc": "Air Filter Housing",
        "picp": "Housing damage / secure mounting",
        "method": "Visual",
        "spec": "No cracks, properly mounted"
    },
    {
        "pdc": "SD-S1-IBC-PDI-PTA-003-007",
        "adc": "003-Power Train Assembly-PTA",
        "sadc": "Air Intake System",
        "pldc": "Air Filter Element",
        "picp": "Check clogging or contamination",
        "method": "Visual",
        "spec": "Element clean and properly seated"
    },
    {
        "pdc": "SD-S1-IBC-PDI-PTA-003-008",
        "adc": "003-Power Train Assembly-PTA",
        "sadc": "Air Intake System",
        "pldc": "Intake Duct",
        "picp": "Duct leakage or loose clamps",
        "method": "Visual",
        "spec": "No leakage, clamps tight"
    },
    {
        "pdc": "SD-S1-IBC-PDI-PTA-003-009",
        "adc": "003-Power Train Assembly-PTA",
        "sadc": "Fuel System",
        "pldc": "Fuel Injection Pump",
        "picp": "Check leakage and mounting",
        "method": "Visual",
        "spec": "No fuel leakage"
    },
    {
        "pdc": "SD-S1-IBC-PDI-PTA-003-010",
        "adc": "003-Power Train Assembly-PTA",
        "sadc": "Fuel System",
        "pldc": "Fuel Injectors",
        "picp": "Injector mounting integrity",
        "method": "Visual",
        "spec": "Proper seating and no leakage"
    },
    {
        "pdc": "SD-S1-IBC-PDI-PTA-003-011",
        "adc": "003-Power Train Assembly-PTA",
        "sadc": "Fuel System",
        "pldc": "Fuel Lines",
        "picp": "Check for leakage or damage",
        "method": "Visual",
        "spec": "No cracks or fuel leakage"
    },
    {
        "pdc": "SD-S1-IBC-PDI-PTA-003-012",
        "adc": "003-Power Train Assembly-PTA",
        "sadc": "Fuel System",
        "pldc": "Fuel Filter Assembly",
        "picp": "Check mounting and filter condition",
        "method": "Visual",
        "spec": "Secure and clean"
    },
    {
        "pdc": "SD-S1-IBC-PDI-PTA-003-013",
        "adc": "003-Power Train Assembly-PTA",
        "sadc": "Cooling System",
        "pldc": "Radiator",
        "picp": "Check radiator core damage",
        "method": "Visual",
        "spec": "No bent fins or leaks"
    },
    {
        "pdc": "SD-S1-IBC-PDI-PTA-003-014",
        "adc": "003-Power Train Assembly-PTA",
        "sadc": "Cooling System",
        "pldc": "Coolant Hoses",
        "picp": "Hose cracks or looseness",
        "method": "Visual",
        "spec": "No cracks, clamps secure"
    },
    {
        "pdc": "SD-S1-IBC-PDI-PTA-003-015",
        "adc": "003-Power Train Assembly-PTA",
        "sadc": "Cooling System",
        "pldc": "Water Pump",
        "picp": "Check mounting and leakage",
        "method": "Visual",
        "spec": "No coolant leakage"
    },
    {
        "pdc": "SD-S1-IBC-PDI-PTA-003-016",
        "adc": "003-Power Train Assembly-PTA",
        "sadc": "Cooling System",
        "pldc": "Cooling Fan",
        "picp": "Fan blade damage and rotation",
        "method": "Manual rotation",
        "spec": "Smooth rotation"
    },
    {
        "pdc": "SD-S1-IBC-PDI-PTA-003-017",
        "adc": "003-Power Train Assembly-PTA",
        "sadc": "Lubrication System",
        "pldc": "Engine Oil Filter",
        "picp": "Check mounting and leakage",
        "method": "Visual",
        "spec": "No oil leakage"
    },
    {
        "pdc": "SD-S1-IBC-PDI-PTA-003-018",
        "adc": "003-Power Train Assembly-PTA",
        "sadc": "Lubrication System",
        "pldc": "Oil Lines",
        "picp": "Check cracks or loose fittings",
        "method": "Visual",
        "spec": "No leakage"
    },
    {
        "pdc": "SD-S1-IBC-PDI-PTA-003-019",
        "adc": "003-Power Train Assembly-PTA",
        "sadc": "Lubrication System",
        "pldc": "Oil Sump",
        "picp": "Check dent or oil leakage",
        "method": "Visual",
        "spec": "No dents or leakage"
    },
    {
        "pdc": "SD-S1-IBC-PDI-PTA-003-020",
        "adc": "003-Power Train Assembly-PTA",
        "sadc": "Exhaust System",
        "pldc": "Exhaust Manifold",
        "picp": "Check cracks and mounting",
        "method": "Visual",
        "spec": "No cracks"
    },
    {
        "pdc": "SD-S1-IBC-PDI-PTA-003-021",
        "adc": "003-Power Train Assembly-PTA",
        "sadc": "Exhaust System",
        "pldc": "Turbocharger",
        "picp": "Check oil leakage and mounting",
        "method": "Visual",
        "spec": "No oil leakage"
    },
    {
        "pdc": "SD-S1-IBC-PDI-PTA-003-022",
        "adc": "003-Power Train Assembly-PTA",
        "sadc": "Exhaust System",
        "pldc": "Exhaust Pipe",
        "picp": "Pipe alignment and leakage",
        "method": "Visual",
        "spec": "No leakage"
    },
    {
        "pdc": "SD-S1-IBC-PDI-PTA-003-023",
        "adc": "003-Power Train Assembly-PTA",
        "sadc": "Exhaust System",
        "pldc": "Silencer / Muffler",
        "picp": "Check mounting bracket integrity",
        "method": "Visual",
        "spec": "Secure mounting"
    },
    {
        "pdc": "SD-S1-IBC-PDI-PTA-003-024",
        "adc": "003-Power Train Assembly-PTA",
        "sadc": "Engine Electricals",
        "pldc": "Starter Motor",
        "picp": "Mounting and cable connection",
        "method": "Visual",
        "spec": "Secure mounting"
    },
    {
        "pdc": "SD-S1-IBC-PDI-PTA-003-025",
        "adc": "003-Power Train Assembly-PTA",
        "sadc": "Engine Electricals",
        "pldc": "Alternator",
        "picp": "Mounting bolt torque",
        "method": "Torque wrench",
        "spec": "OEM torque spec"
    },
    {
        "pdc": "SD-S1-IBC-PDI-PTA-003-026",
        "adc": "003-Power Train Assembly-PTA",
        "sadc": "Engine Electricals",
        "pldc": "Engine Wiring Harness",
        "picp": "Check routing and insulation",
        "method": "Visual",
        "spec": "No damage"
    },
    {
        "pdc": "SD-S1-IBC-PDI-PTA-003-027",
        "adc": "003-Power Train Assembly-PTA",
        "sadc": "Engine Sensors",
        "pldc": "Temperature Sensor",
        "picp": "Check wiring and mounting",
        "method": "Visual",
        "spec": "Secure connection"
    },
    {
        "pdc": "SD-S1-IBC-PDI-PTA-003-028",
        "adc": "003-Power Train Assembly-PTA",
        "sadc": "Engine Sensors",
        "pldc": "Oil Pressure Sensor",
        "picp": "Check oil leakage",
        "method": "Visual",
        "spec": "No leakage"
    },
    {
        "pdc": "SD-S1-IBC-PDI-PTA-003-029",
        "adc": "003-Power Train Assembly-PTA",
        "sadc": "Engine Sensors",
        "pldc": "Crank Position Sensor",
        "picp": "Sensor wiring inspection",
        "method": "Visual",
        "spec": "No loose connection"
    },
    {
        "pdc": "SD-S1-IBC-PDI-PTA-003-030",
        "adc": "003-Power Train Assembly-PTA",
        "sadc": "Powertrain Alignment",
        "pldc": "Engine Alignment",
        "picp": "Engine alignment with chassis",
        "method": "Measurement jig",
        "spec": "Within OEM tolerance"
    },
    {
        "pdc": "SD-S1-IBC-PDI-PTA-003-031",
        "adc": "003-Power Train Assembly-PTA",
        "sadc": "Powertrain Alignment",
        "pldc": "Engine Vibration Mounts",
        "picp": "Check rubber mount condition",
        "method": "Visual",
        "spec": "No cracks or wear"
    },
    {
        "pdc": "SD-S1-IBC-PDI-PTA-003-032",
        "adc": "003-Power Train Assembly-PTA",
        "sadc": "Final Inspection",
        "pldc": "Engine Idle Check",
        "picp": "Engine vibration and noise",
        "method": "Operational",
        "spec": "Within normal limits"
    },
    {
        "pdc": "SD-S1-IBC-PDI-PTA-003-033",
        "adc": "003-Power Train Assembly-PTA",
        "sadc": "Final Inspection",
        "pldc": "Fluid Level Check",
        "picp": "Check oil and coolant levels",
        "method": "Visual / dipstick",
        "spec": "Within OEM level"
    },
    {
        "pdc": "SD-S1-IBC-PDI-DLA-004-001",
        "adc": "004-Drive line Assembly-DLA",
        "sadc": "Propeller Shaft Assembly",
        "pldc": "Front Propeller Shaft",
        "picp": "Check shaft for bends or damage",
        "method": "Visual",
        "spec": "No deformation"
    },
    {
        "pdc": "SD-S1-IBC-PDI-DLA-004-002",
        "adc": "004-Drive line Assembly-DLA",
        "sadc": "Propeller Shaft Assembly",
        "pldc": "Rear Propeller Shaft",
        "picp": "Surface damage / dents inspection",
        "method": "Visual",
        "spec": "No dents or cracks"
    },
    {
        "pdc": "SD-S1-IBC-PDI-DLA-004-003",
        "adc": "004-Drive line Assembly-DLA",
        "sadc": "Propeller Shaft Assembly",
        "pldc": "Slip Joint",
        "picp": "Check smooth sliding movement",
        "method": "Manual movement",
        "spec": "Free movement without binding"
    },
    {
        "pdc": "SD-S1-IBC-PDI-DLA-004-004",
        "adc": "004-Drive line Assembly-DLA",
        "sadc": "Propeller Shaft Assembly",
        "pldc": "Propeller Shaft Tube",
        "picp": "Check tube weld integrity",
        "method": "Visual",
        "spec": "No cracks in weld seam"
    },
    {
        "pdc": "SD-S1-IBC-PDI-DLA-004-005",
        "adc": "004-Drive line Assembly-DLA",
        "sadc": "Universal Joint Assembly",
        "pldc": "Front Universal Joint",
        "picp": "Check joint play or looseness",
        "method": "Manual",
        "spec": "No excessive play"
    },
    {
        "pdc": "SD-S1-IBC-PDI-DLA-004-006",
        "adc": "004-Drive line Assembly-DLA",
        "sadc": "Universal Joint Assembly",
        "pldc": "Rear Universal Joint",
        "picp": "Lubrication condition inspection",
        "method": "Visual",
        "spec": "Grease present"
    },
    {
        "pdc": "SD-S1-IBC-PDI-DLA-004-007",
        "adc": "004-Drive line Assembly-DLA",
        "sadc": "Universal Joint Assembly",
        "pldc": "U‑Joint Bearing Caps",
        "picp": "Check bearing cap tightness",
        "method": "Visual",
        "spec": "Secure fit"
    },
    {
        "pdc": "SD-S1-IBC-PDI-DLA-004-008",
        "adc": "004-Drive line Assembly-DLA",
        "sadc": "Universal Joint Assembly",
        "pldc": "U‑Joint Grease Nipples",
        "picp": "Check grease nipple presence",
        "method": "Visual",
        "spec": "Nipple installed and accessible"
    },
    {
        "pdc": "SD-S1-IBC-PDI-DLA-004-009",
        "adc": "004-Drive line Assembly-DLA",
        "sadc": "Center Bearing Assembly",
        "pldc": "Center Bearing Housing",
        "picp": "Check bracket integrity",
        "method": "Visual",
        "spec": "No cracks or deformation"
    },
    {
        "pdc": "SD-S1-IBC-PDI-DLA-004-010",
        "adc": "004-Drive line Assembly-DLA",
        "sadc": "Center Bearing Assembly",
        "pldc": "Center Bearing Rubber Mount",
        "picp": "Check rubber deterioration",
        "method": "Visual",
        "spec": "No cracks / wear"
    },
    {
        "pdc": "SD-S1-IBC-PDI-DLA-004-011",
        "adc": "004-Drive line Assembly-DLA",
        "sadc": "Center Bearing Assembly",
        "pldc": "Center Bearing Bolts",
        "picp": "Torque verification",
        "method": "Torque wrench",
        "spec": "OEM torque spec"
    },
    {
        "pdc": "SD-S1-IBC-PDI-DLA-004-012",
        "adc": "004-Drive line Assembly-DLA",
        "sadc": "Differential Assembly",
        "pldc": "Differential Housing",
        "picp": "Check cracks or oil leakage",
        "method": "Visual",
        "spec": "No leakage"
    },
    {
        "pdc": "SD-S1-IBC-PDI-DLA-004-013",
        "adc": "004-Drive line Assembly-DLA",
        "sadc": "Differential Assembly",
        "pldc": "Pinion Flange",
        "picp": "Check flange alignment",
        "method": "Visual",
        "spec": "No misalignment"
    },
    {
        "pdc": "SD-S1-IBC-PDI-DLA-004-014",
        "adc": "004-Drive line Assembly-DLA",
        "sadc": "Differential Assembly",
        "pldc": "Differential Mount Brackets",
        "picp": "Bracket weld inspection",
        "method": "Visual",
        "spec": "No cracks"
    },
    {
        "pdc": "SD-S1-IBC-PDI-DLA-004-015",
        "adc": "004-Drive line Assembly-DLA",
        "sadc": "Differential Assembly",
        "pldc": "Differential Mount Bolts",
        "picp": "Torque verification",
        "method": "Torque wrench",
        "spec": "OEM torque spec"
    },
    {
        "pdc": "SD-S1-IBC-PDI-DLA-004-016",
        "adc": "004-Drive line Assembly-DLA",
        "sadc": "Axle Input Connection",
        "pldc": "Propeller Shaft Flange",
        "picp": "Flange bolt tightness",
        "method": "Torque wrench",
        "spec": "OEM torque spec"
    },
    {
        "pdc": "SD-S1-IBC-PDI-DLA-004-017",
        "adc": "004-Drive line Assembly-DLA",
        "sadc": "Axle Input Connection",
        "pldc": "Flange Bolts",
        "picp": "Check bolt presence and torque",
        "method": "Visual + torque",
        "spec": "All bolts present and tightened"
    },
    {
        "pdc": "SD-S1-IBC-PDI-DLA-004-018",
        "adc": "004-Drive line Assembly-DLA",
        "sadc": "Driveline Alignment",
        "pldc": "Propeller Shaft Alignment",
        "picp": "Check driveline angular alignment",
        "method": "Measurement jig",
        "spec": "Within OEM tolerance"
    },
    {
        "pdc": "SD-S1-IBC-PDI-DLA-004-019",
        "adc": "004-Drive line Assembly-DLA",
        "sadc": "Driveline Alignment",
        "pldc": "Center Bearing Alignment",
        "picp": "Check alignment with chassis",
        "method": "Measurement",
        "spec": "Tolerance within spec"
    },
    {
        "pdc": "SD-S1-IBC-PDI-DLA-004-020",
        "adc": "004-Drive line Assembly-DLA",
        "sadc": "Lubrication",
        "pldc": "Universal Joint Greasing",
        "picp": "Verify lubrication condition",
        "method": "Visual",
        "spec": "Adequate grease"
    },
    {
        "pdc": "SD-S1-IBC-PDI-DLA-004-021",
        "adc": "004-Drive line Assembly-DLA",
        "sadc": "Lubrication",
        "pldc": "Slip Joint Greasing",
        "picp": "Check grease presence",
        "method": "Visual",
        "spec": "Grease visible"
    },
    {
        "pdc": "SD-S1-IBC-PDI-DLA-004-022",
        "adc": "004-Drive line Assembly-DLA",
        "sadc": "Vibration Inspection",
        "pldc": "Propeller Shaft Balance Weights",
        "picp": "Check weight presence",
        "method": "Visual",
        "spec": "Weights intact"
    },
    {
        "pdc": "SD-S1-IBC-PDI-DLA-004-023",
        "adc": "004-Drive line Assembly-DLA",
        "sadc": "Vibration Inspection",
        "pldc": "Driveline Rotation",
        "picp": "Manual rotation check",
        "method": "Manual",
        "spec": "Smooth rotation"
    },
    {
        "pdc": "SD-S1-IBC-PDI-DLA-004-024",
        "adc": "004-Drive line Assembly-DLA",
        "sadc": "Safety Inspection",
        "pldc": "Propeller Shaft Guard",
        "picp": "Guard installation verification",
        "method": "Visual",
        "spec": "Guard installed"
    },
    {
        "pdc": "SD-S1-IBC-PDI-DLA-004-025",
        "adc": "004-Drive line Assembly-DLA",
        "sadc": "Safety Inspection",
        "pldc": "Fastener Locking",
        "picp": "Check locking devices",
        "method": "Visual",
        "spec": "Lock nuts / cotter pins installed"
    },
    {
        "pdc": "SD-S1-IBC-PDI-DLA-004-026",
        "adc": "004-Drive line Assembly-DLA",
        "sadc": "Final Inspection",
        "pldc": "Noise Check",
        "picp": "Check abnormal noise during rotation",
        "method": "Operational",
        "spec": "No abnormal noise"
    },
    {
        "pdc": "SD-S1-IBC-PDI-DLA-004-027",
        "adc": "004-Drive line Assembly-DLA",
        "sadc": "Final Inspection",
        "pldc": "Overall Driveline Integrity",
        "picp": "General visual inspection",
        "method": "Visual",
        "spec": "No defects observed"
    },
    {
        "pdc": "SD-S1-IBC-PDI-SSR-005-001",
        "adc": "005-Steering System-RHD-SSR",
        "sadc": "Steering Gear Assembly",
        "pldc": "Steering Gearbox",
        "picp": "Check gearbox housing for cracks or oil leakage",
        "method": "Visual",
        "spec": "No cracks or oil leakage"
    },
    {
        "pdc": "SD-S1-IBC-PDI-SSR-005-002",
        "adc": "005-Steering System-RHD-SSR",
        "sadc": "Steering Gear Assembly",
        "pldc": "Gearbox Mounting Bracket",
        "picp": "Inspect bracket weld integrity",
        "method": "Visual",
        "spec": "No weld cracks"
    },
    {
        "pdc": "SD-S1-IBC-PDI-SSR-005-003",
        "adc": "005-Steering System-RHD-SSR",
        "sadc": "Steering Gear Assembly",
        "pldc": "Gearbox Mounting Bolts",
        "picp": "Verify bolt torque",
        "method": "Torque wrench",
        "spec": "OEM torque specification"
    },
    {
        "pdc": "SD-S1-IBC-PDI-SSR-005-004",
        "adc": "005-Steering System-RHD-SSR",
        "sadc": "Steering Column Assembly",
        "pldc": "Steering Column Shaft",
        "picp": "Check shaft damage or bending",
        "method": "Visual",
        "spec": "No bending or deformation"
    },
    {
        "pdc": "SD-S1-IBC-PDI-SSR-005-005",
        "adc": "005-Steering System-RHD-SSR",
        "sadc": "Steering Column Assembly",
        "pldc": "Steering Column Universal Joint",
        "picp": "Check play and smooth movement",
        "method": "Manual rotation",
        "spec": "No excessive play"
    },
    {
        "pdc": "SD-S1-IBC-PDI-SSR-005-006",
        "adc": "005-Steering System-RHD-SSR",
        "sadc": "Steering Column Assembly",
        "pldc": "Steering Column Mount Bracket",
        "picp": "Inspect mounting bracket integrity",
        "method": "Visual",
        "spec": "No cracks or looseness"
    },
    {
        "pdc": "SD-S1-IBC-PDI-SSR-005-007",
        "adc": "005-Steering System-RHD-SSR",
        "sadc": "Steering Wheel Interface",
        "pldc": "Steering Wheel Hub",
        "picp": "Check hub mounting and alignment",
        "method": "Visual",
        "spec": "Proper fitment"
    },
    {
        "pdc": "SD-S1-IBC-PDI-SSR-005-008",
        "adc": "005-Steering System-RHD-SSR",
        "sadc": "Steering Wheel Interface",
        "pldc": "Steering Wheel Nut",
        "picp": "Verify nut torque",
        "method": "Torque wrench",
        "spec": "OEM torque spec"
    },
    {
        "pdc": "SD-S1-IBC-PDI-SSR-005-009",
        "adc": "005-Steering System-RHD-SSR",
        "sadc": "Pitman Arm Assembly",
        "pldc": "Pitman Arm",
        "picp": "Inspect arm for cracks or deformation",
        "method": "Visual",
        "spec": "No cracks"
    },
    {
        "pdc": "SD-S1-IBC-PDI-SSR-005-010",
        "adc": "005-Steering System-RHD-SSR",
        "sadc": "Pitman Arm Assembly",
        "pldc": "Pitman Arm Nut",
        "picp": "Check locking and torque",
        "method": "Torque wrench",
        "spec": "OEM torque spec"
    },
    {
        "pdc": "SD-S1-IBC-PDI-SSR-005-011",
        "adc": "005-Steering System-RHD-SSR",
        "sadc": "Drag Link Assembly",
        "pldc": "Drag Link Rod",
        "picp": "Check rod straightness",
        "method": "Visual",
        "spec": "No bending"
    },
    {
        "pdc": "SD-S1-IBC-PDI-SSR-005-012",
        "adc": "005-Steering System-RHD-SSR",
        "sadc": "Drag Link Assembly",
        "pldc": "Drag Link Ball Joint",
        "picp": "Check ball joint play",
        "method": "Manual",
        "spec": "No excessive play"
    },
    {
        "pdc": "SD-S1-IBC-PDI-SSR-005-013",
        "adc": "005-Steering System-RHD-SSR",
        "sadc": "Drag Link Assembly",
        "pldc": "Drag Link Fasteners",
        "picp": "Verify fastener torque",
        "method": "Torque wrench",
        "spec": "OEM torque spec"
    },
    {
        "pdc": "SD-S1-IBC-PDI-SSR-005-014",
        "adc": "005-Steering System-RHD-SSR",
        "sadc": "Tie Rod Assembly",
        "pldc": "Tie Rod",
        "picp": "Inspect rod damage",
        "method": "Visual",
        "spec": "No bends"
    },
    {
        "pdc": "SD-S1-IBC-PDI-SSR-005-015",
        "adc": "005-Steering System-RHD-SSR",
        "sadc": "Tie Rod Assembly",
        "pldc": "Tie Rod End Ball Joint",
        "picp": "Check joint play",
        "method": "Manual",
        "spec": "No excessive play"
    },
    {
        "pdc": "SD-S1-IBC-PDI-SSR-005-016",
        "adc": "005-Steering System-RHD-SSR",
        "sadc": "Tie Rod Assembly",
        "pldc": "Tie Rod Lock Nuts",
        "picp": "Check nut locking condition",
        "method": "Visual",
        "spec": "Secure locking"
    },
    {
        "pdc": "SD-S1-IBC-PDI-SSR-005-017",
        "adc": "005-Steering System-RHD-SSR",
        "sadc": "Power Steering System",
        "pldc": "Power Steering Pump",
        "picp": "Check pump mounting",
        "method": "Visual",
        "spec": "Secure mounting"
    },
    {
        "pdc": "SD-S1-IBC-PDI-SSR-005-018",
        "adc": "005-Steering System-RHD-SSR",
        "sadc": "Power Steering System",
        "pldc": "Power Steering Hoses",
        "picp": "Check hose leakage or cracks",
        "method": "Visual",
        "spec": "No leakage"
    },
    {
        "pdc": "SD-S1-IBC-PDI-SSR-005-019",
        "adc": "005-Steering System-RHD-SSR",
        "sadc": "Power Steering System",
        "pldc": "Power Steering Reservoir",
        "picp": "Check reservoir mounting and level",
        "method": "Visual",
        "spec": "Secure mounting"
    },
    {
        "pdc": "SD-S1-IBC-PDI-SSR-005-020",
        "adc": "005-Steering System-RHD-SSR",
        "sadc": "Steering Linkage Alignment",
        "pldc": "Steering Linkage",
        "picp": "Check linkage alignment",
        "method": "Measurement",
        "spec": "Within OEM tolerance"
    },
    {
        "pdc": "SD-S1-IBC-PDI-SSR-005-021",
        "adc": "005-Steering System-RHD-SSR",
        "sadc": "Steering Linkage Alignment",
        "pldc": "Steering Stops",
        "picp": "Check stop bolts adjustment",
        "method": "Visual",
        "spec": "Correct adjustment"
    },
    {
        "pdc": "SD-S1-IBC-PDI-SSR-005-022",
        "adc": "005-Steering System-RHD-SSR",
        "sadc": "Safety Checks",
        "pldc": "Cotter Pins",
        "picp": "Verify cotter pin installation",
        "method": "Visual",
        "spec": "All cotter pins present"
    },
    {
        "pdc": "SD-S1-IBC-PDI-SSR-005-023",
        "adc": "005-Steering System-RHD-SSR",
        "sadc": "Safety Checks",
        "pldc": "Fastener Locking",
        "picp": "Verify lock nuts / locking plates",
        "method": "Visual",
        "spec": "Installed correctly"
    },
    {
        "pdc": "SD-S1-IBC-PDI-SSR-005-024",
        "adc": "005-Steering System-RHD-SSR",
        "sadc": "Operational Check",
        "pldc": "Steering Rotation",
        "picp": "Check smooth steering movement",
        "method": "Manual",
        "spec": "Smooth rotation"
    },
    {
        "pdc": "SD-S1-IBC-PDI-SSR-005-025",
        "adc": "005-Steering System-RHD-SSR",
        "sadc": "Operational Check",
        "pldc": "Steering Free Play",
        "picp": "Check steering wheel free play",
        "method": "Measurement",
        "spec": "Within OEM spec"
    },
    {
        "pdc": "SD-S1-IBC-PDI-SSR-005-026",
        "adc": "005-Steering System-RHD-SSR",
        "sadc": "Final Inspection",
        "pldc": "Steering Noise Check",
        "picp": "Check abnormal noise",
        "method": "Operational",
        "spec": "No abnormal noise"
    },
    {
        "pdc": "SD-S1-IBC-PDI-SSR-005-027",
        "adc": "005-Steering System-RHD-SSR",
        "sadc": "Final Inspection",
        "pldc": "Overall Steering Integrity",
        "picp": "General visual inspection",
        "method": "Visual",
        "spec": "No defects"
    },
    {
        "pdc": "SD-S1-IBC-PDI-SSC-006-001",
        "adc": "006-Suspension System Combined-SSC",
        "sadc": "Front Suspension",
        "pldc": "Front Leaf Spring",
        "picp": "Check leaf spring cracks or deformation",
        "method": "Visual",
        "spec": "No cracks or broken leaves"
    },
    {
        "pdc": "SD-S1-IBC-PDI-SSC-006-002",
        "adc": "006-Suspension System Combined-SSC",
        "sadc": "Front Suspension",
        "pldc": "Front Leaf Spring Center Bolt",
        "picp": "Verify center bolt condition",
        "method": "Visual",
        "spec": "Bolt intact and tight"
    },
    {
        "pdc": "SD-S1-IBC-PDI-SSC-006-003",
        "adc": "006-Suspension System Combined-SSC",
        "sadc": "Front Suspension",
        "pldc": "Front Spring Eye Bush",
        "picp": "Check bush wear or damage",
        "method": "Visual",
        "spec": "No excessive wear"
    },
    {
        "pdc": "SD-S1-IBC-PDI-SSC-006-004",
        "adc": "006-Suspension System Combined-SSC",
        "sadc": "Front Suspension",
        "pldc": "Front Spring Hanger Bracket",
        "picp": "Inspect bracket weld integrity",
        "method": "Visual",
        "spec": "No weld cracks"
    },
    {
        "pdc": "SD-S1-IBC-PDI-SSC-006-005",
        "adc": "006-Suspension System Combined-SSC",
        "sadc": "Front Suspension",
        "pldc": "Front Shackle Assembly",
        "picp": "Check shackle movement and wear",
        "method": "Manual",
        "spec": "Smooth movement"
    },
    {
        "pdc": "SD-S1-IBC-PDI-SSC-006-006",
        "adc": "006-Suspension System Combined-SSC",
        "sadc": "Front Suspension",
        "pldc": "Front U-Bolts",
        "picp": "Verify U-bolt torque",
        "method": "Torque wrench",
        "spec": "OEM torque spec"
    },
    {
        "pdc": "SD-S1-IBC-PDI-SSC-006-007",
        "adc": "006-Suspension System Combined-SSC",
        "sadc": "Front Suspension",
        "pldc": "Front Shock Absorber",
        "picp": "Inspect shock absorber leakage",
        "method": "Visual",
        "spec": "No oil leakage"
    },
    {
        "pdc": "SD-S1-IBC-PDI-SSC-006-008",
        "adc": "006-Suspension System Combined-SSC",
        "sadc": "Front Suspension",
        "pldc": "Front Shock Mounting Bolts",
        "picp": "Check mounting bolt torque",
        "method": "Torque wrench",
        "spec": "OEM torque spec"
    },
    {
        "pdc": "SD-S1-IBC-PDI-SSC-006-009",
        "adc": "006-Suspension System Combined-SSC",
        "sadc": "Rear Suspension",
        "pldc": "Rear Leaf Spring",
        "picp": "Check spring pack cracks or damage",
        "method": "Visual",
        "spec": "No broken leaves"
    },
    {
        "pdc": "SD-S1-IBC-PDI-SSC-006-010",
        "adc": "006-Suspension System Combined-SSC",
        "sadc": "Rear Suspension",
        "pldc": "Rear Leaf Spring Center Bolt",
        "picp": "Check bolt condition",
        "method": "Visual",
        "spec": "Secure and intact"
    },
    {
        "pdc": "SD-S1-IBC-PDI-SSC-006-011",
        "adc": "006-Suspension System Combined-SSC",
        "sadc": "Rear Suspension",
        "pldc": "Rear Spring Eye Bush",
        "picp": "Inspect bush wear",
        "method": "Visual",
        "spec": "No excessive wear"
    },
    {
        "pdc": "SD-S1-IBC-PDI-SSC-006-012",
        "adc": "006-Suspension System Combined-SSC",
        "sadc": "Rear Suspension",
        "pldc": "Rear Spring Hanger Bracket",
        "picp": "Bracket weld inspection",
        "method": "Visual",
        "spec": "No cracks"
    },
    {
        "pdc": "SD-S1-IBC-PDI-SSC-006-013",
        "adc": "006-Suspension System Combined-SSC",
        "sadc": "Rear Suspension",
        "pldc": "Rear Shackle Assembly",
        "picp": "Check shackle play",
        "method": "Manual",
        "spec": "No excessive play"
    },
    {
        "pdc": "SD-S1-IBC-PDI-SSC-006-014",
        "adc": "006-Suspension System Combined-SSC",
        "sadc": "Rear Suspension",
        "pldc": "Rear U-Bolts",
        "picp": "Verify U-bolt torque",
        "method": "Torque wrench",
        "spec": "OEM torque spec"
    },
    {
        "pdc": "SD-S1-IBC-PDI-SSC-006-015",
        "adc": "006-Suspension System Combined-SSC",
        "sadc": "Rear Suspension",
        "pldc": "Rear Shock Absorber",
        "picp": "Inspect oil leakage or damage",
        "method": "Visual",
        "spec": "No leakage"
    },
    {
        "pdc": "SD-S1-IBC-PDI-SSC-006-016",
        "adc": "006-Suspension System Combined-SSC",
        "sadc": "Rear Suspension",
        "pldc": "Rear Shock Mounting Bolts",
        "picp": "Check mounting bolt torque",
        "method": "Torque wrench",
        "spec": "OEM torque spec"
    },
    {
        "pdc": "SD-S1-IBC-PDI-SSC-006-017",
        "adc": "006-Suspension System Combined-SSC",
        "sadc": "Air Suspension (if equipped)",
        "pldc": "Air Spring / Air Bag",
        "picp": "Inspect air bag cracks or leakage",
        "method": "Visual",
        "spec": "No air leakage"
    },
    {
        "pdc": "SD-S1-IBC-PDI-SSC-006-018",
        "adc": "006-Suspension System Combined-SSC",
        "sadc": "Air Suspension (if equipped)",
        "pldc": "Air Suspension Brackets",
        "picp": "Bracket weld inspection",
        "method": "Visual",
        "spec": "No cracks"
    },
    {
        "pdc": "SD-S1-IBC-PDI-SSC-006-019",
        "adc": "006-Suspension System Combined-SSC",
        "sadc": "Air Suspension (if equipped)",
        "pldc": "Air Lines",
        "picp": "Check air line leakage",
        "method": "Visual",
        "spec": "No leakage"
    },
    {
        "pdc": "SD-S1-IBC-PDI-SSC-006-020",
        "adc": "006-Suspension System Combined-SSC",
        "sadc": "Air Suspension (if equipped)",
        "pldc": "Height Control Valve",
        "picp": "Check mounting and linkage",
        "method": "Visual",
        "spec": "Secure mounting"
    },
    {
        "pdc": "SD-S1-IBC-PDI-SSC-006-021",
        "adc": "006-Suspension System Combined-SSC",
        "sadc": "Axle Interface",
        "pldc": "Front Axle Seat",
        "picp": "Check axle seating on springs",
        "method": "Visual",
        "spec": "Proper seating"
    },
    {
        "pdc": "SD-S1-IBC-PDI-SSC-006-022",
        "adc": "006-Suspension System Combined-SSC",
        "sadc": "Axle Interface",
        "pldc": "Rear Axle Seat",
        "picp": "Inspect axle seat alignment",
        "method": "Visual",
        "spec": "Correct alignment"
    },
    {
        "pdc": "SD-S1-IBC-PDI-SSC-006-023",
        "adc": "006-Suspension System Combined-SSC",
        "sadc": "Axle Interface",
        "pldc": "Axle U-Bolt Plate",
        "picp": "Inspect plate condition",
        "method": "Visual",
        "spec": "No cracks or deformation"
    },
    {
        "pdc": "SD-S1-IBC-PDI-SSC-006-024",
        "adc": "006-Suspension System Combined-SSC",
        "sadc": "Stabilizer System",
        "pldc": "Front Stabilizer Bar",
        "picp": "Check bar damage",
        "method": "Visual",
        "spec": "No bends"
    },
    {
        "pdc": "SD-S1-IBC-PDI-SSC-006-025",
        "adc": "006-Suspension System Combined-SSC",
        "sadc": "Stabilizer System",
        "pldc": "Stabilizer Link Rod",
        "picp": "Check link rod joints",
        "method": "Manual",
        "spec": "No excessive play"
    },
    {
        "pdc": "SD-S1-IBC-PDI-SSC-006-026",
        "adc": "006-Suspension System Combined-SSC",
        "sadc": "Stabilizer System",
        "pldc": "Stabilizer Bush",
        "picp": "Check bush wear",
        "method": "Visual",
        "spec": "No excessive wear"
    },
    {
        "pdc": "SD-S1-IBC-PDI-SSC-006-027",
        "adc": "006-Suspension System Combined-SSC",
        "sadc": "Alignment Check",
        "pldc": "Front Axle Alignment",
        "picp": "Check axle alignment",
        "method": "Measurement jig",
        "spec": "Within OEM tolerance"
    },
    {
        "pdc": "SD-S1-IBC-PDI-SSC-006-028",
        "adc": "006-Suspension System Combined-SSC",
        "sadc": "Alignment Check",
        "pldc": "Rear Axle Alignment",
        "picp": "Verify axle parallelism",
        "method": "Measurement jig",
        "spec": "Within tolerance"
    },
    {
        "pdc": "SD-S1-IBC-PDI-SSC-006-029",
        "adc": "006-Suspension System Combined-SSC",
        "sadc": "Safety Checks",
        "pldc": "Suspension Fasteners",
        "picp": "Verify locking devices",
        "method": "Visual",
        "spec": "Lock nuts / cotter pins installed"
    },
    {
        "pdc": "SD-S1-IBC-PDI-SSC-006-030",
        "adc": "006-Suspension System Combined-SSC",
        "sadc": "Safety Checks",
        "pldc": "Bracket Integrity",
        "picp": "Inspect all suspension brackets",
        "method": "Visual",
        "spec": "No cracks"
    },
    {
        "pdc": "SD-S1-IBC-PDI-SSC-006-031",
        "adc": "006-Suspension System Combined-SSC",
        "sadc": "Final Inspection",
        "pldc": "Suspension Movement",
        "picp": "Check free movement",
        "method": "Manual",
        "spec": "No binding"
    },
    {
        "pdc": "SD-S1-IBC-PDI-SSC-006-032",
        "adc": "006-Suspension System Combined-SSC",
        "sadc": "Final Inspection",
        "pldc": "Overall Suspension Integrity",
        "picp": "General inspection",
        "method": "Visual",
        "spec": "No visible defects"
    },
    {
        "pdc": "SD-S1-IBC-PDI-BSA-007-001",
        "adc": "007-Braking  System Assembly-BSA",
        "sadc": "Air Supply System",
        "pldc": "Air Compressor",
        "picp": "Check mounting integrity and leakage",
        "method": "Visual",
        "spec": "No air or oil leakage"
    },
    {
        "pdc": "SD-S1-IBC-PDI-BSA-007-002",
        "adc": "007-Braking  System Assembly-BSA",
        "sadc": "Air Supply System",
        "pldc": "Compressor Drive Belt",
        "picp": "Check belt tension and wear",
        "method": "Visual",
        "spec": "Within OEM tension spec"
    },
    {
        "pdc": "SD-S1-IBC-PDI-BSA-007-003",
        "adc": "007-Braking  System Assembly-BSA",
        "sadc": "Air Supply System",
        "pldc": "Air Dryer",
        "picp": "Check mounting and connections",
        "method": "Visual",
        "spec": "Secure mounting"
    },
    {
        "pdc": "SD-S1-IBC-PDI-BSA-007-004",
        "adc": "007-Braking  System Assembly-BSA",
        "sadc": "Air Supply System",
        "pldc": "Air Dryer Cartridge",
        "picp": "Check service condition",
        "method": "Visual",
        "spec": "Cartridge properly installed"
    },
    {
        "pdc": "SD-S1-IBC-PDI-BSA-007-005",
        "adc": "007-Braking  System Assembly-BSA",
        "sadc": "Air Reservoir System",
        "pldc": "Primary Air Tank",
        "picp": "Check tank corrosion or leakage",
        "method": "Visual",
        "spec": "No leakage or heavy corrosion"
    },
    {
        "pdc": "SD-S1-IBC-PDI-BSA-007-006",
        "adc": "007-Braking  System Assembly-BSA",
        "sadc": "Air Reservoir System",
        "pldc": "Secondary Air Tank",
        "picp": "Check mounting brackets",
        "method": "Visual",
        "spec": "Secure mounting"
    },
    {
        "pdc": "SD-S1-IBC-PDI-BSA-007-007",
        "adc": "007-Braking  System Assembly-BSA",
        "sadc": "Air Reservoir System",
        "pldc": "Drain Valve",
        "picp": "Check valve operation",
        "method": "Manual",
        "spec": "Smooth operation"
    },
    {
        "pdc": "SD-S1-IBC-PDI-BSA-007-008",
        "adc": "007-Braking  System Assembly-BSA",
        "sadc": "Air Reservoir System",
        "pldc": "Air Tank Mounting Bolts",
        "picp": "Verify bolt torque",
        "method": "Torque wrench",
        "spec": "OEM torque specification"
    },
    {
        "pdc": "SD-S1-IBC-PDI-BSA-007-009",
        "adc": "007-Braking  System Assembly-BSA",
        "sadc": "Air Lines",
        "pldc": "Main Air Lines",
        "picp": "Check air line routing",
        "method": "Visual",
        "spec": "Proper routing and clamps"
    },
    {
        "pdc": "SD-S1-IBC-PDI-BSA-007-010",
        "adc": "007-Braking  System Assembly-BSA",
        "sadc": "Air Lines",
        "pldc": "Air Line Connectors",
        "picp": "Check leakage at connectors",
        "method": "Visual",
        "spec": "No air leakage"
    },
    {
        "pdc": "SD-S1-IBC-PDI-BSA-007-011",
        "adc": "007-Braking  System Assembly-BSA",
        "sadc": "Air Lines",
        "pldc": "Air Line Clamps",
        "picp": "Check clamp security",
        "method": "Visual",
        "spec": "Clamps tight"
    },
    {
        "pdc": "SD-S1-IBC-PDI-BSA-007-012",
        "adc": "007-Braking  System Assembly-BSA",
        "sadc": "Brake Control System",
        "pldc": "Foot Brake Valve",
        "picp": "Check mounting and connections",
        "method": "Visual",
        "spec": "Secure mounting"
    },
    {
        "pdc": "SD-S1-IBC-PDI-BSA-007-013",
        "adc": "007-Braking  System Assembly-BSA",
        "sadc": "Brake Control System",
        "pldc": "Relay Valve",
        "picp": "Check valve connections",
        "method": "Visual",
        "spec": "No leakage"
    },
    {
        "pdc": "SD-S1-IBC-PDI-BSA-007-014",
        "adc": "007-Braking  System Assembly-BSA",
        "sadc": "Brake Control System",
        "pldc": "Quick Release Valve",
        "picp": "Check valve operation",
        "method": "Manual",
        "spec": "Smooth operation"
    },
    {
        "pdc": "SD-S1-IBC-PDI-BSA-007-015",
        "adc": "007-Braking  System Assembly-BSA",
        "sadc": "Foundation Brakes",
        "pldc": "Front Brake Drum",
        "picp": "Check drum surface wear",
        "method": "Visual",
        "spec": "Within wear limit"
    },
    {
        "pdc": "SD-S1-IBC-PDI-BSA-007-016",
        "adc": "007-Braking  System Assembly-BSA",
        "sadc": "Foundation Brakes",
        "pldc": "Rear Brake Drum",
        "picp": "Check drum cracks or damage",
        "method": "Visual",
        "spec": "No cracks"
    },
    {
        "pdc": "SD-S1-IBC-PDI-BSA-007-017",
        "adc": "007-Braking  System Assembly-BSA",
        "sadc": "Foundation Brakes",
        "pldc": "Brake Shoes",
        "picp": "Check lining wear",
        "method": "Visual",
        "spec": "Above minimum thickness"
    },
    {
        "pdc": "SD-S1-IBC-PDI-BSA-007-018",
        "adc": "007-Braking  System Assembly-BSA",
        "sadc": "Foundation Brakes",
        "pldc": "Brake Shoe Return Springs",
        "picp": "Check spring integrity",
        "method": "Visual",
        "spec": "No damage"
    },
    {
        "pdc": "SD-S1-IBC-PDI-BSA-007-019",
        "adc": "007-Braking  System Assembly-BSA",
        "sadc": "Brake Actuation",
        "pldc": "Brake Chamber Front",
        "picp": "Check chamber leakage",
        "method": "Visual",
        "spec": "No air leakage"
    },
    {
        "pdc": "SD-S1-IBC-PDI-BSA-007-020",
        "adc": "007-Braking  System Assembly-BSA",
        "sadc": "Brake Actuation",
        "pldc": "Brake Chamber Rear",
        "picp": "Check chamber mounting",
        "method": "Visual",
        "spec": "Secure mounting"
    },
    {
        "pdc": "SD-S1-IBC-PDI-BSA-007-021",
        "adc": "007-Braking  System Assembly-BSA",
        "sadc": "Brake Actuation",
        "pldc": "Push Rod",
        "picp": "Check rod alignment",
        "method": "Visual",
        "spec": "Straight and free movement"
    },
    {
        "pdc": "SD-S1-IBC-PDI-BSA-007-022",
        "adc": "007-Braking  System Assembly-BSA",
        "sadc": "Slack Adjuster System",
        "pldc": "Front Slack Adjuster",
        "picp": "Check adjuster movement",
        "method": "Manual",
        "spec": "Smooth movement"
    },
    {
        "pdc": "SD-S1-IBC-PDI-BSA-007-023",
        "adc": "007-Braking  System Assembly-BSA",
        "sadc": "Slack Adjuster System",
        "pldc": "Rear Slack Adjuster",
        "picp": "Check automatic adjustment",
        "method": "Operational",
        "spec": "Within adjustment spec"
    },
    {
        "pdc": "SD-S1-IBC-PDI-BSA-007-024",
        "adc": "007-Braking  System Assembly-BSA",
        "sadc": "Slack Adjuster System",
        "pldc": "Slack Adjuster Bolts",
        "picp": "Verify torque",
        "method": "Torque wrench",
        "spec": "OEM torque spec"
    },
    {
        "pdc": "SD-S1-IBC-PDI-BSA-007-025",
        "adc": "007-Braking  System Assembly-BSA",
        "sadc": "Parking Brake System",
        "pldc": "Spring Brake Chamber",
        "picp": "Check air leakage",
        "method": "Visual",
        "spec": "No leakage"
    },
    {
        "pdc": "SD-S1-IBC-PDI-BSA-007-026",
        "adc": "007-Braking  System Assembly-BSA",
        "sadc": "Parking Brake System",
        "pldc": "Parking Brake Valve",
        "picp": "Check valve operation",
        "method": "Manual",
        "spec": "Smooth operation"
    },
    {
        "pdc": "SD-S1-IBC-PDI-BSA-007-027",
        "adc": "007-Braking  System Assembly-BSA",
        "sadc": "Parking Brake System",
        "pldc": "Parking Brake Linkage",
        "picp": "Check linkage movement",
        "method": "Manual",
        "spec": "Free movement"
    },
    {
        "pdc": "SD-S1-IBC-PDI-BSA-007-028",
        "adc": "007-Braking  System Assembly-BSA",
        "sadc": "ABS System",
        "pldc": "ABS ECU",
        "picp": "Check ECU mounting",
        "method": "Visual",
        "spec": "Secure mounting"
    },
    {
        "pdc": "SD-S1-IBC-PDI-BSA-007-029",
        "adc": "007-Braking  System Assembly-BSA",
        "sadc": "ABS System",
        "pldc": "Wheel Speed Sensors",
        "picp": "Check sensor wiring",
        "method": "Visual",
        "spec": "No damage"
    },
    {
        "pdc": "SD-S1-IBC-PDI-BSA-007-030",
        "adc": "007-Braking  System Assembly-BSA",
        "sadc": "ABS System",
        "pldc": "ABS Tone Ring",
        "picp": "Check ring damage",
        "method": "Visual",
        "spec": "No broken teeth"
    },
    {
        "pdc": "SD-S1-IBC-PDI-BSA-007-031",
        "adc": "007-Braking  System Assembly-BSA",
        "sadc": "Safety Checks",
        "pldc": "Brake Fasteners",
        "picp": "Verify locking devices",
        "method": "Visual",
        "spec": "Cotter pins / lock nuts present"
    },
    {
        "pdc": "SD-S1-IBC-PDI-BSA-007-032",
        "adc": "007-Braking  System Assembly-BSA",
        "sadc": "Safety Checks",
        "pldc": "Brake Hose Routing",
        "picp": "Check hose clearance",
        "method": "Visual",
        "spec": "No rubbing"
    },
    {
        "pdc": "SD-S1-IBC-PDI-BSA-007-033",
        "adc": "007-Braking  System Assembly-BSA",
        "sadc": "Operational Test",
        "pldc": "Air Pressure Build Up",
        "picp": "Check compressor build-up time",
        "method": "Measurement",
        "spec": "Within OEM specification"
    },
    {
        "pdc": "SD-S1-IBC-PDI-BSA-007-034",
        "adc": "007-Braking  System Assembly-BSA",
        "sadc": "Operational Test",
        "pldc": "Brake Application Test",
        "picp": "Check brake response",
        "method": "Operational",
        "spec": "Uniform braking response"
    },
    {
        "pdc": "SD-S1-IBC-PDI-BSA-007-035",
        "adc": "007-Braking  System Assembly-BSA",
        "sadc": "Operational Test",
        "pldc": "Air Leakage Test",
        "picp": "Check system leakage",
        "method": "Measurement",
        "spec": "Leakage within limit"
    },
    {
        "pdc": "SD-S1-IBC-PDI-BSA-007-036",
        "adc": "007-Braking  System Assembly-BSA",
        "sadc": "Final Inspection",
        "pldc": "Overall Brake System Integrity",
        "picp": "General inspection",
        "method": "Visual",
        "spec": "No visible defects"
    },
    {
        "pdc": "SD-S1-IBC-PDI-FES-008-001",
        "adc": "008-Fuel & Emissions System-FES",
        "sadc": "Fuel Storage",
        "pldc": "Fuel Tank",
        "picp": "Check tank body for dents, corrosion or leakage",
        "method": "Visual",
        "spec": "No dents causing deformation, no leakage"
    },
    {
        "pdc": "SD-S1-IBC-PDI-FES-008-002",
        "adc": "008-Fuel & Emissions System-FES",
        "sadc": "Fuel Storage",
        "pldc": "Fuel Tank Mounting Brackets",
        "picp": "Inspect bracket welds and mounting integrity",
        "method": "Visual",
        "spec": "No cracks, secure mounting"
    },
    {
        "pdc": "SD-S1-IBC-PDI-FES-008-003",
        "adc": "008-Fuel & Emissions System-FES",
        "sadc": "Fuel Storage",
        "pldc": "Fuel Tank Straps",
        "picp": "Check strap tightness and condition",
        "method": "Visual",
        "spec": "Straps secure and undamaged"
    },
    {
        "pdc": "SD-S1-IBC-PDI-FES-008-004",
        "adc": "008-Fuel & Emissions System-FES",
        "sadc": "Fuel Storage",
        "pldc": "Fuel Tank Cap",
        "picp": "Check cap sealing and locking",
        "method": "Manual",
        "spec": "Cap seals properly"
    },
    {
        "pdc": "SD-S1-IBC-PDI-FES-008-005",
        "adc": "008-Fuel & Emissions System-FES",
        "sadc": "Fuel Supply System",
        "pldc": "Fuel Feed Line",
        "picp": "Inspect line routing and leakage",
        "method": "Visual",
        "spec": "No leakage, proper routing"
    },
    {
        "pdc": "SD-S1-IBC-PDI-FES-008-006",
        "adc": "008-Fuel & Emissions System-FES",
        "sadc": "Fuel Supply System",
        "pldc": "Fuel Return Line",
        "picp": "Inspect line condition and connections",
        "method": "Visual",
        "spec": "No cracks or leakage"
    },
    {
        "pdc": "SD-S1-IBC-PDI-FES-008-007",
        "adc": "008-Fuel & Emissions System-FES",
        "sadc": "Fuel Supply System",
        "pldc": "Fuel Line Clamps",
        "picp": "Check clamp security",
        "method": "Visual",
        "spec": "All clamps tight"
    },
    {
        "pdc": "SD-S1-IBC-PDI-FES-008-008",
        "adc": "008-Fuel & Emissions System-FES",
        "sadc": "Fuel Supply System",
        "pldc": "Fuel Filter Assembly",
        "picp": "Inspect filter mounting and connections",
        "method": "Visual",
        "spec": "Secure mounting"
    },
    {
        "pdc": "SD-S1-IBC-PDI-FES-008-009",
        "adc": "008-Fuel & Emissions System-FES",
        "sadc": "Fuel Pump System",
        "pldc": "Fuel Pump",
        "picp": "Check pump mounting and leakage",
        "method": "Visual",
        "spec": "No leakage, secure mounting"
    },
    {
        "pdc": "SD-S1-IBC-PDI-FES-008-010",
        "adc": "008-Fuel & Emissions System-FES",
        "sadc": "Fuel Pump System",
        "pldc": "Fuel Pump Electrical Connector",
        "picp": "Inspect connector integrity",
        "method": "Visual",
        "spec": "Connector properly seated"
    },
    {
        "pdc": "SD-S1-IBC-PDI-FES-008-011",
        "adc": "008-Fuel & Emissions System-FES",
        "sadc": "Fuel Injection System",
        "pldc": "High Pressure Fuel Line",
        "picp": "Check line integrity",
        "method": "Visual",
        "spec": "No cracks or leakage"
    },
    {
        "pdc": "SD-S1-IBC-PDI-FES-008-012",
        "adc": "008-Fuel & Emissions System-FES",
        "sadc": "Fuel Injection System",
        "pldc": "Fuel Injectors",
        "picp": "Check mounting and leakage",
        "method": "Visual",
        "spec": "No fuel leakage"
    },
    {
        "pdc": "SD-S1-IBC-PDI-FES-008-013",
        "adc": "008-Fuel & Emissions System-FES",
        "sadc": "Fuel Injection System",
        "pldc": "Injector Harness",
        "picp": "Inspect wiring insulation",
        "method": "Visual",
        "spec": "No damaged insulation"
    },
    {
        "pdc": "SD-S1-IBC-PDI-FES-008-014",
        "adc": "008-Fuel & Emissions System-FES",
        "sadc": "Emission Control",
        "pldc": "Exhaust Manifold",
        "picp": "Check cracks or leakage",
        "method": "Visual",
        "spec": "No cracks"
    },
    {
        "pdc": "SD-S1-IBC-PDI-FES-008-015",
        "adc": "008-Fuel & Emissions System-FES",
        "sadc": "Emission Control",
        "pldc": "Turbocharger",
        "picp": "Inspect mounting and oil leakage",
        "method": "Visual",
        "spec": "No oil leakage"
    },
    {
        "pdc": "SD-S1-IBC-PDI-FES-008-016",
        "adc": "008-Fuel & Emissions System-FES",
        "sadc": "Emission Control",
        "pldc": "Exhaust Pipes",
        "picp": "Check pipe alignment and leakage",
        "method": "Visual",
        "spec": "No exhaust leakage"
    },
    {
        "pdc": "SD-S1-IBC-PDI-FES-008-017",
        "adc": "008-Fuel & Emissions System-FES",
        "sadc": "Emission Control",
        "pldc": "Muffler / Silencer",
        "picp": "Inspect mounting brackets",
        "method": "Visual",
        "spec": "Secure mounting"
    },
    {
        "pdc": "SD-S1-IBC-PDI-FES-008-018",
        "adc": "008-Fuel & Emissions System-FES",
        "sadc": "After-Treatment System",
        "pldc": "Diesel Oxidation Catalyst (DOC)",
        "picp": "Check unit mounting and connections",
        "method": "Visual",
        "spec": "Secure mounting"
    },
    {
        "pdc": "SD-S1-IBC-PDI-FES-008-019",
        "adc": "008-Fuel & Emissions System-FES",
        "sadc": "After-Treatment System",
        "pldc": "Diesel Particulate Filter (DPF)",
        "picp": "Inspect filter housing integrity",
        "method": "Visual",
        "spec": "No cracks or leakage"
    },
    {
        "pdc": "SD-S1-IBC-PDI-FES-008-020",
        "adc": "008-Fuel & Emissions System-FES",
        "sadc": "After-Treatment System",
        "pldc": "Selective Catalytic Reduction (SCR) Unit",
        "picp": "Inspect mounting brackets",
        "method": "Visual",
        "spec": "Secure mounting"
    },
    {
        "pdc": "SD-S1-IBC-PDI-FES-008-021",
        "adc": "008-Fuel & Emissions System-FES",
        "sadc": "DEF System",
        "pldc": "DEF Tank",
        "picp": "Check tank leakage and mounting",
        "method": "Visual",
        "spec": "No leakage"
    },
    {
        "pdc": "SD-S1-IBC-PDI-FES-008-022",
        "adc": "008-Fuel & Emissions System-FES",
        "sadc": "DEF System",
        "pldc": "DEF Pump",
        "picp": "Inspect pump mounting",
        "method": "Visual",
        "spec": "Secure mounting"
    },
    {
        "pdc": "SD-S1-IBC-PDI-FES-008-023",
        "adc": "008-Fuel & Emissions System-FES",
        "sadc": "DEF System",
        "pldc": "DEF Lines",
        "picp": "Check DEF line routing and leakage",
        "method": "Visual",
        "spec": "No leakage"
    },
    {
        "pdc": "SD-S1-IBC-PDI-FES-008-024",
        "adc": "008-Fuel & Emissions System-FES",
        "sadc": "DEF System",
        "pldc": "DEF Injector",
        "picp": "Check injector mounting",
        "method": "Visual",
        "spec": "Secure mounting"
    },
    {
        "pdc": "SD-S1-IBC-PDI-FES-008-025",
        "adc": "008-Fuel & Emissions System-FES",
        "sadc": "Emission Sensors",
        "pldc": "NOx Sensor",
        "picp": "Check sensor wiring and mounting",
        "method": "Visual",
        "spec": "Secure connection"
    },
    {
        "pdc": "SD-S1-IBC-PDI-FES-008-026",
        "adc": "008-Fuel & Emissions System-FES",
        "sadc": "Emission Sensors",
        "pldc": "Temperature Sensor",
        "picp": "Inspect sensor connector",
        "method": "Visual",
        "spec": "No loose connection"
    },
    {
        "pdc": "SD-S1-IBC-PDI-FES-008-027",
        "adc": "008-Fuel & Emissions System-FES",
        "sadc": "Emission Sensors",
        "pldc": "Pressure Sensor",
        "picp": "Check wiring integrity",
        "method": "Visual",
        "spec": "No damage"
    },
    {
        "pdc": "SD-S1-IBC-PDI-FES-008-028",
        "adc": "008-Fuel & Emissions System-FES",
        "sadc": "Safety Checks",
        "pldc": "Fuel System Fasteners",
        "picp": "Verify locking devices",
        "method": "Visual",
        "spec": "Lock nuts / clips installed"
    },
    {
        "pdc": "SD-S1-IBC-PDI-FES-008-029",
        "adc": "008-Fuel & Emissions System-FES",
        "sadc": "Safety Checks",
        "pldc": "Fuel Line Clearance",
        "picp": "Check clearance from heat sources",
        "method": "Visual",
        "spec": "Adequate clearance"
    },
    {
        "pdc": "SD-S1-IBC-PDI-FES-008-030",
        "adc": "008-Fuel & Emissions System-FES",
        "sadc": "Operational Check",
        "pldc": "Fuel Leakage Test",
        "picp": "Check entire system for leakage",
        "method": "Visual",
        "spec": "No fuel leakage"
    },
    {
        "pdc": "SD-S1-IBC-PDI-FES-008-031",
        "adc": "008-Fuel & Emissions System-FES",
        "sadc": "Operational Check",
        "pldc": "Emission System Mounting",
        "picp": "Verify after-treatment mounting integrity",
        "method": "Visual",
        "spec": "Secure mounting"
    },
    {
        "pdc": "SD-S1-IBC-PDI-FES-008-032",
        "adc": "008-Fuel & Emissions System-FES",
        "sadc": "Final Inspection",
        "pldc": "Overall Fuel & Emission System Integrity",
        "picp": "General inspection",
        "method": "Visual",
        "spec": "No visible defects"
    },
    {
        "pdc": "SD-S1-IBC-PDI-CHA-009-001",
        "adc": "009-Cooling & HVAC-CHA",
        "sadc": "Engine Cooling System",
        "pldc": "Radiator",
        "picp": "Inspect radiator core for damage or leakage",
        "method": "Visual",
        "spec": "No bent fins or coolant leakage"
    },
    {
        "pdc": "SD-S1-IBC-PDI-CHA-009-002",
        "adc": "009-Cooling & HVAC-CHA",
        "sadc": "Engine Cooling System",
        "pldc": "Radiator Mounting Brackets",
        "picp": "Check bracket welds and mounting",
        "method": "Visual",
        "spec": "Secure mounting, no cracks"
    },
    {
        "pdc": "SD-S1-IBC-PDI-CHA-009-003",
        "adc": "009-Cooling & HVAC-CHA",
        "sadc": "Engine Cooling System",
        "pldc": "Radiator Hoses (Upper)",
        "picp": "Check hose cracks or leakage",
        "method": "Visual",
        "spec": "No cracks, clamps tight"
    },
    {
        "pdc": "SD-S1-IBC-PDI-CHA-009-004",
        "adc": "009-Cooling & HVAC-CHA",
        "sadc": "Engine Cooling System",
        "pldc": "Radiator Hoses (Lower)",
        "picp": "Check hose condition",
        "method": "Visual",
        "spec": "No swelling or leakage"
    },
    {
        "pdc": "SD-S1-IBC-PDI-CHA-009-005",
        "adc": "009-Cooling & HVAC-CHA",
        "sadc": "Engine Cooling System",
        "pldc": "Hose Clamps",
        "picp": "Check clamp tightness",
        "method": "Visual",
        "spec": "All clamps secure"
    },
    {
        "pdc": "SD-S1-IBC-PDI-CHA-009-006",
        "adc": "009-Cooling & HVAC-CHA",
        "sadc": "Coolant Circulation",
        "pldc": "Water Pump",
        "picp": "Inspect mounting and leakage",
        "method": "Visual",
        "spec": "No coolant leakage"
    },
    {
        "pdc": "SD-S1-IBC-PDI-CHA-009-007",
        "adc": "009-Cooling & HVAC-CHA",
        "sadc": "Coolant Circulation",
        "pldc": "Coolant Pipes",
        "picp": "Check routing and leakage",
        "method": "Visual",
        "spec": "No leakage"
    },
    {
        "pdc": "SD-S1-IBC-PDI-CHA-009-008",
        "adc": "009-Cooling & HVAC-CHA",
        "sadc": "Coolant Circulation",
        "pldc": "Thermostat Housing",
        "picp": "Inspect housing cracks or leaks",
        "method": "Visual",
        "spec": "No cracks or leakage"
    },
    {
        "pdc": "SD-S1-IBC-PDI-CHA-009-009",
        "adc": "009-Cooling & HVAC-CHA",
        "sadc": "Coolant Circulation",
        "pldc": "Coolant Reservoir / Expansion Tank",
        "picp": "Check tank condition and mounting",
        "method": "Visual",
        "spec": "No cracks, secure mounting"
    },
    {
        "pdc": "SD-S1-IBC-PDI-CHA-009-010",
        "adc": "009-Cooling & HVAC-CHA",
        "sadc": "Coolant Circulation",
        "pldc": "Coolant Level Sensor",
        "picp": "Check wiring connection",
        "method": "Visual",
        "spec": "Connector secure"
    },
    {
        "pdc": "SD-S1-IBC-PDI-CHA-009-011",
        "adc": "009-Cooling & HVAC-CHA",
        "sadc": "Cooling Fan System",
        "pldc": "Engine Cooling Fan",
        "picp": "Check fan blade damage",
        "method": "Visual",
        "spec": "No cracks or deformation"
    },
    {
        "pdc": "SD-S1-IBC-PDI-CHA-009-012",
        "adc": "009-Cooling & HVAC-CHA",
        "sadc": "Cooling Fan System",
        "pldc": "Fan Clutch",
        "picp": "Check clutch operation",
        "method": "Manual rotation",
        "spec": "Smooth operation"
    },
    {
        "pdc": "SD-S1-IBC-PDI-CHA-009-013",
        "adc": "009-Cooling & HVAC-CHA",
        "sadc": "Cooling Fan System",
        "pldc": "Fan Shroud",
        "picp": "Inspect shroud mounting",
        "method": "Visual",
        "spec": "Proper alignment"
    },
    {
        "pdc": "SD-S1-IBC-PDI-CHA-009-014",
        "adc": "009-Cooling & HVAC-CHA",
        "sadc": "Cooling Fan System",
        "pldc": "Fan Drive Belt",
        "picp": "Check belt wear and tension",
        "method": "Visual",
        "spec": "Within OEM specification"
    },
    {
        "pdc": "SD-S1-IBC-PDI-CHA-009-015",
        "adc": "009-Cooling & HVAC-CHA",
        "sadc": "HVAC Compressor System",
        "pldc": "AC Compressor",
        "picp": "Inspect compressor mounting",
        "method": "Visual",
        "spec": "Secure mounting"
    },
    {
        "pdc": "SD-S1-IBC-PDI-CHA-009-016",
        "adc": "009-Cooling & HVAC-CHA",
        "sadc": "HVAC Compressor System",
        "pldc": "Compressor Drive Belt",
        "picp": "Check belt tension",
        "method": "Visual",
        "spec": "Within OEM tension spec"
    },
    {
        "pdc": "SD-S1-IBC-PDI-CHA-009-017",
        "adc": "009-Cooling & HVAC-CHA",
        "sadc": "HVAC Compressor System",
        "pldc": "Compressor Electrical Connector",
        "picp": "Inspect connector condition",
        "method": "Visual",
        "spec": "No loose connection"
    },
    {
        "pdc": "SD-S1-IBC-PDI-CHA-009-018",
        "adc": "009-Cooling & HVAC-CHA",
        "sadc": "HVAC Refrigerant Circuit",
        "pldc": "AC High Pressure Line",
        "picp": "Check pipe damage or leakage",
        "method": "Visual",
        "spec": "No refrigerant leakage"
    },
    {
        "pdc": "SD-S1-IBC-PDI-CHA-009-019",
        "adc": "009-Cooling & HVAC-CHA",
        "sadc": "HVAC Refrigerant Circuit",
        "pldc": "AC Low Pressure Line",
        "picp": "Inspect pipe routing",
        "method": "Visual",
        "spec": "Proper routing"
    },
    {
        "pdc": "SD-S1-IBC-PDI-CHA-009-020",
        "adc": "009-Cooling & HVAC-CHA",
        "sadc": "HVAC Refrigerant Circuit",
        "pldc": "AC Hose Clamps",
        "picp": "Check clamp security",
        "method": "Visual",
        "spec": "All clamps tight"
    },
    {
        "pdc": "SD-S1-IBC-PDI-CHA-009-021",
        "adc": "009-Cooling & HVAC-CHA",
        "sadc": "HVAC Condenser",
        "pldc": "AC Condenser",
        "picp": "Inspect condenser fins and mounting",
        "method": "Visual",
        "spec": "No bent fins, secure mounting"
    },
    {
        "pdc": "SD-S1-IBC-PDI-CHA-009-022",
        "adc": "009-Cooling & HVAC-CHA",
        "sadc": "HVAC Condenser",
        "pldc": "Condenser Fan",
        "picp": "Check fan rotation",
        "method": "Manual",
        "spec": "Smooth rotation"
    },
    {
        "pdc": "SD-S1-IBC-PDI-CHA-009-023",
        "adc": "009-Cooling & HVAC-CHA",
        "sadc": "HVAC Condenser",
        "pldc": "Condenser Brackets",
        "picp": "Inspect bracket welds",
        "method": "Visual",
        "spec": "No cracks"
    },
    {
        "pdc": "SD-S1-IBC-PDI-CHA-009-024",
        "adc": "009-Cooling & HVAC-CHA",
        "sadc": "HVAC Evaporator",
        "pldc": "Evaporator Unit",
        "picp": "Check evaporator mounting",
        "method": "Visual",
        "spec": "Secure mounting"
    },
    {
        "pdc": "SD-S1-IBC-PDI-CHA-009-025",
        "adc": "009-Cooling & HVAC-CHA",
        "sadc": "HVAC Evaporator",
        "pldc": "Evaporator Blower Motor",
        "picp": "Check blower motor operation",
        "method": "Operational",
        "spec": "Smooth rotation"
    },
    {
        "pdc": "SD-S1-IBC-PDI-CHA-009-026",
        "adc": "009-Cooling & HVAC-CHA",
        "sadc": "HVAC Evaporator",
        "pldc": "Evaporator Drain Line",
        "picp": "Inspect drainage path",
        "method": "Visual",
        "spec": "Clear drainage"
    },
    {
        "pdc": "SD-S1-IBC-PDI-CHA-009-027",
        "adc": "009-Cooling & HVAC-CHA",
        "sadc": "HVAC Control System",
        "pldc": "Temperature Control Sensor",
        "picp": "Check sensor wiring",
        "method": "Visual",
        "spec": "Connector secure"
    },
    {
        "pdc": "SD-S1-IBC-PDI-CHA-009-028",
        "adc": "009-Cooling & HVAC-CHA",
        "sadc": "HVAC Control System",
        "pldc": "HVAC Wiring Harness",
        "picp": "Inspect harness routing",
        "method": "Visual",
        "spec": "No insulation damage"
    },
    {
        "pdc": "SD-S1-IBC-PDI-CHA-009-029",
        "adc": "009-Cooling & HVAC-CHA",
        "sadc": "Safety Checks",
        "pldc": "Cooling System Fasteners",
        "picp": "Verify fastener locking",
        "method": "Visual",
        "spec": "Lock nuts present"
    },
    {
        "pdc": "SD-S1-IBC-PDI-CHA-009-030",
        "adc": "009-Cooling & HVAC-CHA",
        "sadc": "Safety Checks",
        "pldc": "Hose Clearance",
        "picp": "Check hoses clear of moving parts",
        "method": "Visual",
        "spec": "Adequate clearance"
    },
    {
        "pdc": "SD-S1-IBC-PDI-CHA-009-031",
        "adc": "009-Cooling & HVAC-CHA",
        "sadc": "Operational Check",
        "pldc": "Coolant Leakage Test",
        "picp": "Check system leakage",
        "method": "Visual",
        "spec": "No coolant leakage"
    },
    {
        "pdc": "SD-S1-IBC-PDI-CHA-009-032",
        "adc": "009-Cooling & HVAC-CHA",
        "sadc": "Operational Check",
        "pldc": "HVAC Compressor Engagement",
        "picp": "Check compressor clutch engagement",
        "method": "Operational",
        "spec": "Normal engagement"
    },
    {
        "pdc": "SD-S1-IBC-PDI-CHA-009-033",
        "adc": "009-Cooling & HVAC-CHA",
        "sadc": "Final Inspection",
        "pldc": "Overall Cooling & HVAC Integrity",
        "picp": "General inspection",
        "method": "Visual",
        "spec": "No visible defects"
    },
    {
        "pdc": "SD-S1-IBC-PDI-EES-010-001",
        "adc": "010-Electrical & Electronics System-EES",
        "sadc": "Battery System",
        "pldc": "Battery",
        "picp": "Check battery casing damage or leakage",
        "method": "Visual",
        "spec": "No cracks or leakage"
    },
    {
        "pdc": "SD-S1-IBC-PDI-EES-010-002",
        "adc": "010-Electrical & Electronics System-EES",
        "sadc": "Battery System",
        "pldc": "Battery Mounting Tray",
        "picp": "Inspect tray integrity and corrosion",
        "method": "Visual",
        "spec": "Secure mounting, no corrosion"
    },
    {
        "pdc": "SD-S1-IBC-PDI-EES-010-003",
        "adc": "010-Electrical & Electronics System-EES",
        "sadc": "Battery System",
        "pldc": "Battery Hold Down Clamp",
        "picp": "Check clamp tightness",
        "method": "Manual",
        "spec": "Battery firmly secured"
    },
    {
        "pdc": "SD-S1-IBC-PDI-EES-010-004",
        "adc": "010-Electrical & Electronics System-EES",
        "sadc": "Battery System",
        "pldc": "Battery Terminals",
        "picp": "Inspect terminal tightness and corrosion",
        "method": "Visual",
        "spec": "Clean and tight terminals"
    },
    {
        "pdc": "SD-S1-IBC-PDI-EES-010-005",
        "adc": "010-Electrical & Electronics System-EES",
        "sadc": "Charging System",
        "pldc": "Alternator",
        "picp": "Check alternator mounting bolts",
        "method": "Visual",
        "spec": "Secure mounting"
    },
    {
        "pdc": "SD-S1-IBC-PDI-EES-010-006",
        "adc": "010-Electrical & Electronics System-EES",
        "sadc": "Charging System",
        "pldc": "Alternator Belt",
        "picp": "Check belt tension and wear",
        "method": "Visual",
        "spec": "Within OEM specification"
    },
    {
        "pdc": "SD-S1-IBC-PDI-EES-010-007",
        "adc": "010-Electrical & Electronics System-EES",
        "sadc": "Charging System",
        "pldc": "Alternator Electrical Connector",
        "picp": "Inspect connector security",
        "method": "Visual",
        "spec": "Properly seated"
    },
    {
        "pdc": "SD-S1-IBC-PDI-EES-010-008",
        "adc": "010-Electrical & Electronics System-EES",
        "sadc": "Starting System",
        "pldc": "Starter Motor",
        "picp": "Inspect mounting bolts",
        "method": "Visual",
        "spec": "Secure mounting"
    },
    {
        "pdc": "SD-S1-IBC-PDI-EES-010-009",
        "adc": "010-Electrical & Electronics System-EES",
        "sadc": "Starting System",
        "pldc": "Starter Electrical Cable",
        "picp": "Check cable insulation and routing",
        "method": "Visual",
        "spec": "No insulation damage"
    },
    {
        "pdc": "SD-S1-IBC-PDI-EES-010-010",
        "adc": "010-Electrical & Electronics System-EES",
        "sadc": "Wiring Harness",
        "pldc": "Main Wiring Harness",
        "picp": "Check harness routing and clips",
        "method": "Visual",
        "spec": "Proper routing"
    },
    {
        "pdc": "SD-S1-IBC-PDI-EES-010-011",
        "adc": "010-Electrical & Electronics System-EES",
        "sadc": "Wiring Harness",
        "pldc": "Harness Protective Sleeves",
        "picp": "Inspect sleeve condition",
        "method": "Visual",
        "spec": "No cuts or damage"
    },
    {
        "pdc": "SD-S1-IBC-PDI-EES-010-012",
        "adc": "010-Electrical & Electronics System-EES",
        "sadc": "Wiring Harness",
        "pldc": "Harness Connectors",
        "picp": "Check connector locking",
        "method": "Visual",
        "spec": "Connectors locked"
    },
    {
        "pdc": "SD-S1-IBC-PDI-EES-010-013",
        "adc": "010-Electrical & Electronics System-EES",
        "sadc": "ECU System",
        "pldc": "Engine ECU",
        "picp": "Check ECU mounting",
        "method": "Visual",
        "spec": "Secure mounting"
    },
    {
        "pdc": "SD-S1-IBC-PDI-EES-010-014",
        "adc": "010-Electrical & Electronics System-EES",
        "sadc": "ECU System",
        "pldc": "ECU Wiring Connectors",
        "picp": "Inspect connector locking tabs",
        "method": "Visual",
        "spec": "Proper engagement"
    },
    {
        "pdc": "SD-S1-IBC-PDI-EES-010-015",
        "adc": "010-Electrical & Electronics System-EES",
        "sadc": "Sensors",
        "pldc": "Temperature Sensor",
        "picp": "Check sensor wiring",
        "method": "Visual",
        "spec": "Connector secure"
    },
    {
        "pdc": "SD-S1-IBC-PDI-EES-010-016",
        "adc": "010-Electrical & Electronics System-EES",
        "sadc": "Sensors",
        "pldc": "Oil Pressure Sensor",
        "picp": "Inspect wiring insulation",
        "method": "Visual",
        "spec": "No damage"
    },
    {
        "pdc": "SD-S1-IBC-PDI-EES-010-017",
        "adc": "010-Electrical & Electronics System-EES",
        "sadc": "Sensors",
        "pldc": "Crank Position Sensor",
        "picp": "Check mounting and wiring",
        "method": "Visual",
        "spec": "Secure mounting"
    },
    {
        "pdc": "SD-S1-IBC-PDI-EES-010-018",
        "adc": "010-Electrical & Electronics System-EES",
        "sadc": "Lighting Circuits",
        "pldc": "Headlamp Wiring",
        "picp": "Check harness routing",
        "method": "Visual",
        "spec": "No loose wires"
    },
    {
        "pdc": "SD-S1-IBC-PDI-EES-010-019",
        "adc": "010-Electrical & Electronics System-EES",
        "sadc": "Lighting Circuits",
        "pldc": "Indicator Lamp Wiring",
        "picp": "Inspect connector integrity",
        "method": "Visual",
        "spec": "Connector secure"
    },
    {
        "pdc": "SD-S1-IBC-PDI-EES-010-020",
        "adc": "010-Electrical & Electronics System-EES",
        "sadc": "Lighting Circuits",
        "pldc": "Brake Lamp Circuit",
        "picp": "Check wiring continuity",
        "method": "Electrical test",
        "spec": "Circuit continuity OK"
    },
    {
        "pdc": "SD-S1-IBC-PDI-EES-010-021",
        "adc": "010-Electrical & Electronics System-EES",
        "sadc": "Fuse & Relay System",
        "pldc": "Fuse Box",
        "picp": "Inspect fuse box mounting",
        "method": "Visual",
        "spec": "Secure mounting"
    },
    {
        "pdc": "SD-S1-IBC-PDI-EES-010-022",
        "adc": "010-Electrical & Electronics System-EES",
        "sadc": "Fuse & Relay System",
        "pldc": "Fuses",
        "picp": "Check correct fuse rating",
        "method": "Visual",
        "spec": "Correct rating installed"
    },
    {
        "pdc": "SD-S1-IBC-PDI-EES-010-023",
        "adc": "010-Electrical & Electronics System-EES",
        "sadc": "Fuse & Relay System",
        "pldc": "Relays",
        "picp": "Check relay seating",
        "method": "Visual",
        "spec": "Properly seated"
    },
    {
        "pdc": "SD-S1-IBC-PDI-EES-010-024",
        "adc": "010-Electrical & Electronics System-EES",
        "sadc": "Grounding System",
        "pldc": "Chassis Ground Cable",
        "picp": "Check grounding cable tightness",
        "method": "Visual",
        "spec": "Secure connection"
    },
    {
        "pdc": "SD-S1-IBC-PDI-EES-010-025",
        "adc": "010-Electrical & Electronics System-EES",
        "sadc": "Grounding System",
        "pldc": "Grounding Points",
        "picp": "Inspect corrosion",
        "method": "Visual",
        "spec": "No corrosion"
    },
    {
        "pdc": "SD-S1-IBC-PDI-EES-010-026",
        "adc": "010-Electrical & Electronics System-EES",
        "sadc": "Safety Checks",
        "pldc": "Harness Clearance",
        "picp": "Check harness clearance from heat sources",
        "method": "Visual",
        "spec": "Adequate clearance"
    },
    {
        "pdc": "SD-S1-IBC-PDI-EES-010-027",
        "adc": "010-Electrical & Electronics System-EES",
        "sadc": "Safety Checks",
        "pldc": "Electrical Fasteners",
        "picp": "Verify locking devices",
        "method": "Visual",
        "spec": "Lock nuts present"
    },
    {
        "pdc": "SD-S1-IBC-PDI-EES-010-028",
        "adc": "010-Electrical & Electronics System-EES",
        "sadc": "Operational Checks",
        "pldc": "Battery Voltage",
        "picp": "Measure battery voltage",
        "method": "Multimeter",
        "spec": "Within OEM spec"
    },
    {
        "pdc": "SD-S1-IBC-PDI-EES-010-029",
        "adc": "010-Electrical & Electronics System-EES",
        "sadc": "Operational Checks",
        "pldc": "Charging Voltage",
        "picp": "Check alternator output",
        "method": "Multimeter",
        "spec": "Charging voltage within spec"
    },
    {
        "pdc": "SD-S1-IBC-PDI-EES-010-030",
        "adc": "010-Electrical & Electronics System-EES",
        "sadc": "Final Inspection",
        "pldc": "Overall Electrical Integrity",
        "picp": "General visual inspection",
        "method": "Visual",
        "spec": "No visible defects"
    },
    {
        "pdc": "SD-S1-IBC-PDI-EMS-011-001",
        "adc": "011-Exhaust & Muffler System-EMS",
        "sadc": "Exhaust Manifold",
        "pldc": "Manifold Housing",
        "picp": "Inspect manifold for cracks or leakage",
        "method": "Visual",
        "spec": "No cracks or exhaust leakage"
    },
    {
        "pdc": "SD-S1-IBC-PDI-EMS-011-002",
        "adc": "011-Exhaust & Muffler System-EMS",
        "sadc": "Exhaust Manifold",
        "pldc": "Manifold Mounting Bolts",
        "picp": "Verify bolt tightness",
        "method": "Torque check",
        "spec": "Bolts tightened to OEM spec"
    },
    {
        "pdc": "SD-S1-IBC-PDI-EMS-011-003",
        "adc": "011-Exhaust & Muffler System-EMS",
        "sadc": "Turbocharger Interface",
        "pldc": "Turbocharger Outlet",
        "picp": "Inspect connection to exhaust pipe",
        "method": "Visual",
        "spec": "Secure joint, no leakage"
    },
    {
        "pdc": "SD-S1-IBC-PDI-EMS-011-004",
        "adc": "011-Exhaust & Muffler System-EMS",
        "sadc": "Exhaust Piping",
        "pldc": "Front Exhaust Pipe",
        "picp": "Check pipe dents or deformation",
        "method": "Visual",
        "spec": "No dents restricting flow"
    },
    {
        "pdc": "SD-S1-IBC-PDI-EMS-011-005",
        "adc": "011-Exhaust & Muffler System-EMS",
        "sadc": "Exhaust Piping",
        "pldc": "Intermediate Exhaust Pipe",
        "picp": "Inspect pipe alignment",
        "method": "Visual",
        "spec": "Proper routing and alignment"
    },
    {
        "pdc": "SD-S1-IBC-PDI-EMS-011-006",
        "adc": "011-Exhaust & Muffler System-EMS",
        "sadc": "Exhaust Piping",
        "pldc": "Pipe Clamps",
        "picp": "Check clamp tightness",
        "method": "Visual",
        "spec": "Clamps secure"
    },
    {
        "pdc": "SD-S1-IBC-PDI-EMS-011-007",
        "adc": "011-Exhaust & Muffler System-EMS",
        "sadc": "Flexible Joint",
        "pldc": "Flex Pipe",
        "picp": "Inspect flex joint for cracks",
        "method": "Visual",
        "spec": "No cracks or leakage"
    },
    {
        "pdc": "SD-S1-IBC-PDI-EMS-011-008",
        "adc": "011-Exhaust & Muffler System-EMS",
        "sadc": "Flexible Joint",
        "pldc": "Flex Joint Clamps",
        "picp": "Verify clamp condition",
        "method": "Visual",
        "spec": "Clamps tight and secure"
    },
    {
        "pdc": "SD-S1-IBC-PDI-EMS-011-009",
        "adc": "011-Exhaust & Muffler System-EMS",
        "sadc": "After-Treatment",
        "pldc": "DOC Unit",
        "picp": "Check Diesel Oxidation Catalyst mounting",
        "method": "Visual",
        "spec": "Secure mounting"
    },
    {
        "pdc": "SD-S1-IBC-PDI-EMS-011-010",
        "adc": "011-Exhaust & Muffler System-EMS",
        "sadc": "After-Treatment",
        "pldc": "DPF Housing",
        "picp": "Inspect Diesel Particulate Filter housing",
        "method": "Visual",
        "spec": "No cracks or leakage"
    },
    {
        "pdc": "SD-S1-IBC-PDI-EMS-011-011",
        "adc": "011-Exhaust & Muffler System-EMS",
        "sadc": "After-Treatment",
        "pldc": "SCR Unit",
        "picp": "Inspect SCR mounting brackets",
        "method": "Visual",
        "spec": "Secure mounting"
    },
    {
        "pdc": "SD-S1-IBC-PDI-EMS-011-012",
        "adc": "011-Exhaust & Muffler System-EMS",
        "sadc": "Muffler Assembly",
        "pldc": "Muffler Body",
        "picp": "Inspect muffler casing for damage",
        "method": "Visual",
        "spec": "No dents or corrosion"
    },
    {
        "pdc": "SD-S1-IBC-PDI-EMS-011-013",
        "adc": "011-Exhaust & Muffler System-EMS",
        "sadc": "Muffler Assembly",
        "pldc": "Muffler Mounting Brackets",
        "picp": "Check bracket weld integrity",
        "method": "Visual",
        "spec": "No cracks"
    },
    {
        "pdc": "SD-S1-IBC-PDI-EMS-011-014",
        "adc": "011-Exhaust & Muffler System-EMS",
        "sadc": "Muffler Assembly",
        "pldc": "Muffler Mounting Bolts",
        "picp": "Verify bolt torque",
        "method": "Torque wrench",
        "spec": "OEM torque specification"
    },
    {
        "pdc": "SD-S1-IBC-PDI-EMS-011-015",
        "adc": "011-Exhaust & Muffler System-EMS",
        "sadc": "Tail Pipe",
        "pldc": "Tail Pipe",
        "picp": "Inspect pipe damage or blockage",
        "method": "Visual",
        "spec": "Clear outlet, no deformation"
    },
    {
        "pdc": "SD-S1-IBC-PDI-EMS-011-016",
        "adc": "011-Exhaust & Muffler System-EMS",
        "sadc": "Tail Pipe",
        "pldc": "Tail Pipe Clamp",
        "picp": "Check clamp tightness",
        "method": "Visual",
        "spec": "Clamp secure"
    },
    {
        "pdc": "SD-S1-IBC-PDI-EMS-011-017",
        "adc": "011-Exhaust & Muffler System-EMS",
        "sadc": "Heat Shield System",
        "pldc": "Heat Shield Panels",
        "picp": "Inspect shield condition",
        "method": "Visual",
        "spec": "No loose panels"
    },
    {
        "pdc": "SD-S1-IBC-PDI-EMS-011-018",
        "adc": "011-Exhaust & Muffler System-EMS",
        "sadc": "Heat Shield System",
        "pldc": "Heat Shield Mounting Bolts",
        "picp": "Check bolt security",
        "method": "Visual",
        "spec": "Bolts tight"
    },
    {
        "pdc": "SD-S1-IBC-PDI-EMS-011-019",
        "adc": "011-Exhaust & Muffler System-EMS",
        "sadc": "Sensors",
        "pldc": "Exhaust Temperature Sensor",
        "picp": "Inspect sensor wiring",
        "method": "Visual",
        "spec": "Connector secure"
    },
    {
        "pdc": "SD-S1-IBC-PDI-EMS-011-020",
        "adc": "011-Exhaust & Muffler System-EMS",
        "sadc": "Sensors",
        "pldc": "NOx Sensor",
        "picp": "Check sensor mounting",
        "method": "Visual",
        "spec": "Secure mounting"
    },
    {
        "pdc": "SD-S1-IBC-PDI-EMS-011-021",
        "adc": "011-Exhaust & Muffler System-EMS",
        "sadc": "Safety Checks",
        "pldc": "Exhaust Clearance",
        "picp": "Check clearance from chassis parts",
        "method": "Visual",
        "spec": "Adequate clearance"
    },
    {
        "pdc": "SD-S1-IBC-PDI-EMS-011-022",
        "adc": "011-Exhaust & Muffler System-EMS",
        "sadc": "Safety Checks",
        "pldc": "Exhaust Fasteners",
        "picp": "Verify locking devices",
        "method": "Visual",
        "spec": "Lock nuts / clamps installed"
    },
    {
        "pdc": "SD-S1-IBC-PDI-EMS-011-023",
        "adc": "011-Exhaust & Muffler System-EMS",
        "sadc": "Operational Check",
        "pldc": "Exhaust Leakage Test",
        "picp": "Check for exhaust leaks during idle",
        "method": "Operational",
        "spec": "No leakage detected"
    },
    {
        "pdc": "SD-S1-IBC-PDI-EMS-011-024",
        "adc": "011-Exhaust & Muffler System-EMS",
        "sadc": "Operational Check",
        "pldc": "Exhaust Noise Level",
        "picp": "Inspect abnormal noise",
        "method": "Operational",
        "spec": "Within normal limits"
    },
    {
        "pdc": "SD-S1-IBC-PDI-EMS-011-025",
        "adc": "011-Exhaust & Muffler System-EMS",
        "sadc": "Final Inspection",
        "pldc": "Overall Exhaust System Integrity",
        "picp": "General inspection",
        "method": "Visual",
        "spec": "No visible defects"
    },
    {
        "pdc": "SD-S1-IBC-PDI-APS-012-001",
        "adc": "012-Auxiliary & Pneumatic Systems-APS",
        "sadc": "Air Compressor Auxiliary",
        "pldc": "Compressor Mounting",
        "picp": "Inspect compressor mounting brackets",
        "method": "Visual",
        "spec": "Secure mounting, no cracks"
    },
    {
        "pdc": "SD-S1-IBC-PDI-APS-012-002",
        "adc": "012-Auxiliary & Pneumatic Systems-APS",
        "sadc": "Air Compressor Auxiliary",
        "pldc": "Compressor Air Outlet",
        "picp": "Check air outlet connection",
        "method": "Visual",
        "spec": "No leakage"
    },
    {
        "pdc": "SD-S1-IBC-PDI-APS-012-003",
        "adc": "012-Auxiliary & Pneumatic Systems-APS",
        "sadc": "Air Dryer System",
        "pldc": "Air Dryer Unit",
        "picp": "Inspect dryer mounting and orientation",
        "method": "Visual",
        "spec": "Secure mounting"
    },
    {
        "pdc": "SD-S1-IBC-PDI-APS-012-004",
        "adc": "012-Auxiliary & Pneumatic Systems-APS",
        "sadc": "Air Dryer System",
        "pldc": "Air Dryer Electrical Connector",
        "picp": "Check connector integrity",
        "method": "Visual",
        "spec": "Connector properly seated"
    },
    {
        "pdc": "SD-S1-IBC-PDI-APS-012-005",
        "adc": "012-Auxiliary & Pneumatic Systems-APS",
        "sadc": "Air Dryer System",
        "pldc": "Air Dryer Purge Valve",
        "picp": "Check purge valve operation",
        "method": "Manual",
        "spec": "Valve operates normally"
    },
    {
        "pdc": "SD-S1-IBC-PDI-APS-012-006",
        "adc": "012-Auxiliary & Pneumatic Systems-APS",
        "sadc": "Auxiliary Air Tank",
        "pldc": "Auxiliary Air Reservoir",
        "picp": "Inspect tank corrosion or dents",
        "method": "Visual",
        "spec": "No leakage or severe corrosion"
    },
    {
        "pdc": "SD-S1-IBC-PDI-APS-012-007",
        "adc": "012-Auxiliary & Pneumatic Systems-APS",
        "sadc": "Auxiliary Air Tank",
        "pldc": "Tank Mounting Brackets",
        "picp": "Inspect bracket welds",
        "method": "Visual",
        "spec": "No cracks, secure mounting"
    },
    {
        "pdc": "SD-S1-IBC-PDI-APS-012-008",
        "adc": "012-Auxiliary & Pneumatic Systems-APS",
        "sadc": "Auxiliary Air Tank",
        "pldc": "Drain Valve",
        "picp": "Check valve operation",
        "method": "Manual",
        "spec": "Smooth operation"
    },
    {
        "pdc": "SD-S1-IBC-PDI-APS-012-009",
        "adc": "012-Auxiliary & Pneumatic Systems-APS",
        "sadc": "Air Distribution",
        "pldc": "Air Distribution Manifold",
        "picp": "Check manifold mounting",
        "method": "Visual",
        "spec": "Secure mounting"
    },
    {
        "pdc": "SD-S1-IBC-PDI-APS-012-010",
        "adc": "012-Auxiliary & Pneumatic Systems-APS",
        "sadc": "Air Distribution",
        "pldc": "Distribution Hoses",
        "picp": "Inspect hose routing and damage",
        "method": "Visual",
        "spec": "No cracks or leakage"
    },
    {
        "pdc": "SD-S1-IBC-PDI-APS-012-011",
        "adc": "012-Auxiliary & Pneumatic Systems-APS",
        "sadc": "Air Distribution",
        "pldc": "Hose Clamps",
        "picp": "Check clamp tightness",
        "method": "Visual",
        "spec": "All clamps secure"
    },
    {
        "pdc": "SD-S1-IBC-PDI-APS-012-012",
        "adc": "012-Auxiliary & Pneumatic Systems-APS",
        "sadc": "Door Pneumatic System",
        "pldc": "Door Control Valve",
        "picp": "Inspect valve mounting",
        "method": "Visual",
        "spec": "Secure mounting"
    },
    {
        "pdc": "SD-S1-IBC-PDI-APS-012-013",
        "adc": "012-Auxiliary & Pneumatic Systems-APS",
        "sadc": "Door Pneumatic System",
        "pldc": "Door Air Lines",
        "picp": "Check air line leakage",
        "method": "Visual",
        "spec": "No leakage"
    },
    {
        "pdc": "SD-S1-IBC-PDI-APS-012-014",
        "adc": "012-Auxiliary & Pneumatic Systems-APS",
        "sadc": "Door Pneumatic System",
        "pldc": "Door Actuator Cylinder",
        "picp": "Inspect actuator condition",
        "method": "Visual",
        "spec": "No leakage or damage"
    },
    {
        "pdc": "SD-S1-IBC-PDI-APS-012-015",
        "adc": "012-Auxiliary & Pneumatic Systems-APS",
        "sadc": "Horn System",
        "pldc": "Air Horn",
        "picp": "Inspect horn mounting",
        "method": "Visual",
        "spec": "Secure mounting"
    },
    {
        "pdc": "SD-S1-IBC-PDI-APS-012-016",
        "adc": "012-Auxiliary & Pneumatic Systems-APS",
        "sadc": "Horn System",
        "pldc": "Horn Air Line",
        "picp": "Check air line connection",
        "method": "Visual",
        "spec": "No leakage"
    },
    {
        "pdc": "SD-S1-IBC-PDI-APS-012-017",
        "adc": "012-Auxiliary & Pneumatic Systems-APS",
        "sadc": "Horn System",
        "pldc": "Horn Control Valve",
        "picp": "Check valve operation",
        "method": "Manual",
        "spec": "Normal operation"
    },
    {
        "pdc": "SD-S1-IBC-PDI-APS-012-018",
        "adc": "012-Auxiliary & Pneumatic Systems-APS",
        "sadc": "Seat Pneumatic System",
        "pldc": "Driver Seat Air Suspension",
        "picp": "Inspect air suspension unit",
        "method": "Visual",
        "spec": "No leakage"
    },
    {
        "pdc": "SD-S1-IBC-PDI-APS-012-019",
        "adc": "012-Auxiliary & Pneumatic Systems-APS",
        "sadc": "Seat Pneumatic System",
        "pldc": "Seat Air Lines",
        "picp": "Check air line routing",
        "method": "Visual",
        "spec": "No damage"
    },
    {
        "pdc": "SD-S1-IBC-PDI-APS-012-020",
        "adc": "012-Auxiliary & Pneumatic Systems-APS",
        "sadc": "Pneumatic Controls",
        "pldc": "Pressure Regulator",
        "picp": "Inspect regulator mounting",
        "method": "Visual",
        "spec": "Secure mounting"
    },
    {
        "pdc": "SD-S1-IBC-PDI-APS-012-021",
        "adc": "012-Auxiliary & Pneumatic Systems-APS",
        "sadc": "Pneumatic Controls",
        "pldc": "Pressure Gauge",
        "picp": "Check gauge readability",
        "method": "Visual",
        "spec": "Gauge legible"
    },
    {
        "pdc": "SD-S1-IBC-PDI-APS-012-022",
        "adc": "012-Auxiliary & Pneumatic Systems-APS",
        "sadc": "Pneumatic Controls",
        "pldc": "Control Valves",
        "picp": "Inspect valve operation",
        "method": "Manual",
        "spec": "Smooth operation"
    },
    {
        "pdc": "SD-S1-IBC-PDI-APS-012-023",
        "adc": "012-Auxiliary & Pneumatic Systems-APS",
        "sadc": "Safety Checks",
        "pldc": "Air Line Clearance",
        "picp": "Check clearance from moving parts",
        "method": "Visual",
        "spec": "Adequate clearance"
    },
    {
        "pdc": "SD-S1-IBC-PDI-APS-012-024",
        "adc": "012-Auxiliary & Pneumatic Systems-APS",
        "sadc": "Safety Checks",
        "pldc": "Fastener Locking",
        "picp": "Verify lock nuts or clips",
        "method": "Visual",
        "spec": "All locking devices installed"
    },
    {
        "pdc": "SD-S1-IBC-PDI-APS-012-025",
        "adc": "012-Auxiliary & Pneumatic Systems-APS",
        "sadc": "Operational Check",
        "pldc": "Air Pressure Stability",
        "picp": "Check system pressure stability",
        "method": "Measurement",
        "spec": "Pressure stable within spec"
    },
    {
        "pdc": "SD-S1-IBC-PDI-APS-012-026",
        "adc": "012-Auxiliary & Pneumatic Systems-APS",
        "sadc": "Operational Check",
        "pldc": "Air Leakage Test",
        "picp": "Check pneumatic system leakage",
        "method": "Measurement",
        "spec": "Leakage within limit"
    },
    {
        "pdc": "SD-S1-IBC-PDI-APS-012-027",
        "adc": "012-Auxiliary & Pneumatic Systems-APS",
        "sadc": "Final Inspection",
        "pldc": "Overall Pneumatic System Integrity",
        "picp": "General inspection",
        "method": "Visual",
        "spec": "No visible defects"
    },
    {
        "pdc": "SD-S1-IBC-PDI-WTH-013-001",
        "adc": "013-Wheels  Tires & Hubs-WTH",
        "sadc": "Wheel Rim Assembly",
        "pldc": "Front Wheel Rim",
        "picp": "Inspect rim cracks, dents or deformation",
        "method": "Visual",
        "spec": "No cracks or major dents"
    },
    {
        "pdc": "SD-S1-IBC-PDI-WTH-013-002",
        "adc": "013-Wheels  Tires & Hubs-WTH",
        "sadc": "Wheel Rim Assembly",
        "pldc": "Rear Wheel Rim",
        "picp": "Check rim flange damage",
        "method": "Visual",
        "spec": "Flange intact"
    },
    {
        "pdc": "SD-S1-IBC-PDI-WTH-013-003",
        "adc": "013-Wheels  Tires & Hubs-WTH",
        "sadc": "Wheel Rim Assembly",
        "pldc": "Wheel Rim Paint/Coating",
        "picp": "Inspect corrosion protection coating",
        "method": "Visual",
        "spec": "Uniform coating"
    },
    {
        "pdc": "SD-S1-IBC-PDI-WTH-013-004",
        "adc": "013-Wheels  Tires & Hubs-WTH",
        "sadc": "Wheel Fastening System",
        "pldc": "Wheel Nuts",
        "picp": "Verify wheel nut presence and torque",
        "method": "Torque wrench",
        "spec": "OEM torque specification"
    },
    {
        "pdc": "SD-S1-IBC-PDI-WTH-013-005",
        "adc": "013-Wheels  Tires & Hubs-WTH",
        "sadc": "Wheel Fastening System",
        "pldc": "Wheel Studs",
        "picp": "Inspect studs for damage or thread wear",
        "method": "Visual",
        "spec": "No damaged threads"
    },
    {
        "pdc": "SD-S1-IBC-PDI-WTH-013-006",
        "adc": "013-Wheels  Tires & Hubs-WTH",
        "sadc": "Wheel Fastening System",
        "pldc": "Locking Devices",
        "picp": "Check locking plates / indicators",
        "method": "Visual",
        "spec": "Installed correctly"
    },
    {
        "pdc": "SD-S1-IBC-PDI-WTH-013-007",
        "adc": "013-Wheels  Tires & Hubs-WTH",
        "sadc": "Front Tire Assembly",
        "pldc": "Front Tire",
        "picp": "Check tire cuts, bulges or cracks",
        "method": "Visual",
        "spec": "No sidewall damage"
    },
    {
        "pdc": "SD-S1-IBC-PDI-WTH-013-008",
        "adc": "013-Wheels  Tires & Hubs-WTH",
        "sadc": "Front Tire Assembly",
        "pldc": "Front Tire Pressure",
        "picp": "Verify tire inflation pressure",
        "method": "Pressure gauge",
        "spec": "Within OEM spec"
    },
    {
        "pdc": "SD-S1-IBC-PDI-WTH-013-009",
        "adc": "013-Wheels  Tires & Hubs-WTH",
        "sadc": "Front Tire Assembly",
        "pldc": "Tire Tread Depth",
        "picp": "Measure tread depth",
        "method": "Tread gauge",
        "spec": "Above minimum limit"
    },
    {
        "pdc": "SD-S1-IBC-PDI-WTH-013-010",
        "adc": "013-Wheels  Tires & Hubs-WTH",
        "sadc": "Rear Tire Assembly",
        "pldc": "Rear Tire",
        "picp": "Inspect tire sidewall damage",
        "method": "Visual",
        "spec": "No cracks or cuts"
    },
    {
        "pdc": "SD-S1-IBC-PDI-WTH-013-011",
        "adc": "013-Wheels  Tires & Hubs-WTH",
        "sadc": "Rear Tire Assembly",
        "pldc": "Rear Tire Pressure",
        "picp": "Check inflation pressure",
        "method": "Pressure gauge",
        "spec": "Within OEM spec"
    },
    {
        "pdc": "SD-S1-IBC-PDI-WTH-013-012",
        "adc": "013-Wheels  Tires & Hubs-WTH",
        "sadc": "Rear Tire Assembly",
        "pldc": "Dual Tire Clearance",
        "picp": "Inspect gap between dual tires",
        "method": "Visual",
        "spec": "Adequate clearance"
    },
    {
        "pdc": "SD-S1-IBC-PDI-WTH-013-013",
        "adc": "013-Wheels  Tires & Hubs-WTH",
        "sadc": "Wheel Hub Assembly",
        "pldc": "Front Wheel Hub",
        "picp": "Inspect hub housing cracks",
        "method": "Visual",
        "spec": "No cracks"
    },
    {
        "pdc": "SD-S1-IBC-PDI-WTH-013-014",
        "adc": "013-Wheels  Tires & Hubs-WTH",
        "sadc": "Wheel Hub Assembly",
        "pldc": "Rear Wheel Hub",
        "picp": "Check hub mounting bolts",
        "method": "Visual",
        "spec": "Secure mounting"
    },
    {
        "pdc": "SD-S1-IBC-PDI-WTH-013-015",
        "adc": "013-Wheels  Tires & Hubs-WTH",
        "sadc": "Wheel Hub Assembly",
        "pldc": "Hub Oil Seal",
        "picp": "Inspect oil seal leakage",
        "method": "Visual",
        "spec": "No oil leakage"
    },
    {
        "pdc": "SD-S1-IBC-PDI-WTH-013-016",
        "adc": "013-Wheels  Tires & Hubs-WTH",
        "sadc": "Wheel Bearings",
        "pldc": "Front Wheel Bearings",
        "picp": "Check bearing play",
        "method": "Manual",
        "spec": "No excessive play"
    },
    {
        "pdc": "SD-S1-IBC-PDI-WTH-013-017",
        "adc": "013-Wheels  Tires & Hubs-WTH",
        "sadc": "Wheel Bearings",
        "pldc": "Rear Wheel Bearings",
        "picp": "Inspect bearing lubrication",
        "method": "Visual",
        "spec": "Adequate lubrication"
    },
    {
        "pdc": "SD-S1-IBC-PDI-WTH-013-018",
        "adc": "013-Wheels  Tires & Hubs-WTH",
        "sadc": "Valve System",
        "pldc": "Tire Valve Stem",
        "picp": "Inspect valve stem condition",
        "method": "Visual",
        "spec": "No leakage or damage"
    },
    {
        "pdc": "SD-S1-IBC-PDI-WTH-013-019",
        "adc": "013-Wheels  Tires & Hubs-WTH",
        "sadc": "Valve System",
        "pldc": "Valve Cap",
        "picp": "Check cap presence",
        "method": "Visual",
        "spec": "Cap installed"
    },
    {
        "pdc": "SD-S1-IBC-PDI-WTH-013-020",
        "adc": "013-Wheels  Tires & Hubs-WTH",
        "sadc": "Wheel Alignment Interface",
        "pldc": "Front Wheel Alignment",
        "picp": "Verify wheel alignment setup",
        "method": "Measurement",
        "spec": "Within OEM tolerance"
    },
    {
        "pdc": "SD-S1-IBC-PDI-WTH-013-021",
        "adc": "013-Wheels  Tires & Hubs-WTH",
        "sadc": "Wheel Alignment Interface",
        "pldc": "Rear Axle Wheel Alignment",
        "picp": "Check rear wheel alignment",
        "method": "Measurement",
        "spec": "Within spec"
    },
    {
        "pdc": "SD-S1-IBC-PDI-WTH-013-022",
        "adc": "013-Wheels  Tires & Hubs-WTH",
        "sadc": "Safety Checks",
        "pldc": "Wheel Clearance",
        "picp": "Check wheel clearance to suspension",
        "method": "Visual",
        "spec": "Adequate clearance"
    },
    {
        "pdc": "SD-S1-IBC-PDI-WTH-013-023",
        "adc": "013-Wheels  Tires & Hubs-WTH",
        "sadc": "Safety Checks",
        "pldc": "Mudguard Clearance",
        "picp": "Verify mudguard clearance",
        "method": "Visual",
        "spec": "No interference"
    },
    {
        "pdc": "SD-S1-IBC-PDI-WTH-013-024",
        "adc": "013-Wheels  Tires & Hubs-WTH",
        "sadc": "Operational Check",
        "pldc": "Wheel Rotation",
        "picp": "Rotate wheel manually",
        "method": "Manual",
        "spec": "Smooth rotation"
    },
    {
        "pdc": "SD-S1-IBC-PDI-WTH-013-025",
        "adc": "013-Wheels  Tires & Hubs-WTH",
        "sadc": "Operational Check",
        "pldc": "Wheel Noise",
        "picp": "Check abnormal noise during rotation",
        "method": "Manual",
        "spec": "No abnormal noise"
    },
    {
        "pdc": "SD-S1-IBC-PDI-WTH-013-026",
        "adc": "013-Wheels  Tires & Hubs-WTH",
        "sadc": "Final Inspection",
        "pldc": "Overall Wheel Assembly",
        "picp": "General inspection of wheel system",
        "method": "Visual",
        "spec": "No visible defects"
    },
    {
        "pdc": "SD-S1-IBC-PDI-SCS-014-001",
        "adc": "014-Safety & Control Systems-SCS",
        "sadc": "Parking Brake Safety",
        "pldc": "Parking Brake Lever",
        "picp": "Check lever movement and locking",
        "method": "Manual",
        "spec": "Smooth operation and positive lock"
    },
    {
        "pdc": "SD-S1-IBC-PDI-SCS-014-002",
        "adc": "014-Safety & Control Systems-SCS",
        "sadc": "Parking Brake Safety",
        "pldc": "Parking Brake Indicator Switch",
        "picp": "Verify indicator switch wiring",
        "method": "Visual",
        "spec": "Connector secure"
    },
    {
        "pdc": "SD-S1-IBC-PDI-SCS-014-003",
        "adc": "014-Safety & Control Systems-SCS",
        "sadc": "Emergency Systems",
        "pldc": "Emergency Stop Switch",
        "picp": "Inspect switch mounting and accessibility",
        "method": "Visual",
        "spec": "Secure and reachable"
    },
    {
        "pdc": "SD-S1-IBC-PDI-SCS-014-004",
        "adc": "014-Safety & Control Systems-SCS",
        "sadc": "Emergency Systems",
        "pldc": "Emergency Warning Buzzer",
        "picp": "Check buzzer mounting",
        "method": "Visual",
        "spec": "Secure mounting"
    },
    {
        "pdc": "SD-S1-IBC-PDI-SCS-014-005",
        "adc": "014-Safety & Control Systems-SCS",
        "sadc": "Emergency Systems",
        "pldc": "Emergency Electrical Circuit",
        "picp": "Check wiring integrity",
        "method": "Visual",
        "spec": "No damaged wires"
    },
    {
        "pdc": "SD-S1-IBC-PDI-SCS-014-006",
        "adc": "014-Safety & Control Systems-SCS",
        "sadc": "Driver Control Interface",
        "pldc": "Accelerator Pedal",
        "picp": "Inspect pedal free movement",
        "method": "Manual",
        "spec": "Smooth movement"
    },
    {
        "pdc": "SD-S1-IBC-PDI-SCS-014-007",
        "adc": "014-Safety & Control Systems-SCS",
        "sadc": "Driver Control Interface",
        "pldc": "Brake Pedal",
        "picp": "Check pedal play and mounting",
        "method": "Manual",
        "spec": "Within OEM tolerance"
    },
    {
        "pdc": "SD-S1-IBC-PDI-SCS-014-008",
        "adc": "014-Safety & Control Systems-SCS",
        "sadc": "Driver Control Interface",
        "pldc": "Clutch Pedal",
        "picp": "Inspect pedal return spring",
        "method": "Manual",
        "spec": "Proper return action"
    },
    {
        "pdc": "SD-S1-IBC-PDI-SCS-014-009",
        "adc": "014-Safety & Control Systems-SCS",
        "sadc": "Dashboard Indicators",
        "pldc": "Warning Indicator Lamps",
        "picp": "Check warning lamp wiring",
        "method": "Visual",
        "spec": "Connectors secure"
    },
    {
        "pdc": "SD-S1-IBC-PDI-SCS-014-010",
        "adc": "014-Safety & Control Systems-SCS",
        "sadc": "Dashboard Indicators",
        "pldc": "Instrument Cluster",
        "picp": "Verify cluster mounting",
        "method": "Visual",
        "spec": "Secure mounting"
    },
    {
        "pdc": "SD-S1-IBC-PDI-SCS-014-011",
        "adc": "014-Safety & Control Systems-SCS",
        "sadc": "ABS Safety System",
        "pldc": "ABS Control Unit",
        "picp": "Inspect ECU mounting",
        "method": "Visual",
        "spec": "Secure mounting"
    },
    {
        "pdc": "SD-S1-IBC-PDI-SCS-014-012",
        "adc": "014-Safety & Control Systems-SCS",
        "sadc": "ABS Safety System",
        "pldc": "ABS Sensor Wiring",
        "picp": "Check sensor harness routing",
        "method": "Visual",
        "spec": "No insulation damage"
    },
    {
        "pdc": "SD-S1-IBC-PDI-SCS-014-013",
        "adc": "014-Safety & Control Systems-SCS",
        "sadc": "Traction Control",
        "pldc": "Traction Control ECU",
        "picp": "Verify ECU mounting",
        "method": "Visual",
        "spec": "Secure mounting"
    },
    {
        "pdc": "SD-S1-IBC-PDI-SCS-014-014",
        "adc": "014-Safety & Control Systems-SCS",
        "sadc": "Traction Control",
        "pldc": "Wheel Speed Signal Wiring",
        "picp": "Inspect wiring condition",
        "method": "Visual",
        "spec": "No damage"
    },
    {
        "pdc": "SD-S1-IBC-PDI-SCS-014-015",
        "adc": "014-Safety & Control Systems-SCS",
        "sadc": "Seat Belt System",
        "pldc": "Driver Seat Belt",
        "picp": "Inspect belt condition",
        "method": "Visual",
        "spec": "No fraying"
    },
    {
        "pdc": "SD-S1-IBC-PDI-SCS-014-016",
        "adc": "014-Safety & Control Systems-SCS",
        "sadc": "Seat Belt System",
        "pldc": "Seat Belt Anchor Points",
        "picp": "Check anchor bolt torque",
        "method": "Torque wrench",
        "spec": "OEM torque specification"
    },
    {
        "pdc": "SD-S1-IBC-PDI-SCS-014-017",
        "adc": "014-Safety & Control Systems-SCS",
        "sadc": "Safety Labels",
        "pldc": "Warning Labels",
        "picp": "Verify safety labels present",
        "method": "Visual",
        "spec": "Labels readable"
    },
    {
        "pdc": "SD-S1-IBC-PDI-SCS-014-018",
        "adc": "014-Safety & Control Systems-SCS",
        "sadc": "Safety Labels",
        "pldc": "Operational Labels",
        "picp": "Check control labels clarity",
        "method": "Visual",
        "spec": "Legible labels"
    },
    {
        "pdc": "SD-S1-IBC-PDI-SCS-014-019",
        "adc": "014-Safety & Control Systems-SCS",
        "sadc": "Horn & Alert System",
        "pldc": "Electric Horn",
        "picp": "Inspect horn mounting",
        "method": "Visual",
        "spec": "Secure mounting"
    },
    {
        "pdc": "SD-S1-IBC-PDI-SCS-014-020",
        "adc": "014-Safety & Control Systems-SCS",
        "sadc": "Horn & Alert System",
        "pldc": "Horn Electrical Wiring",
        "picp": "Check wiring insulation",
        "method": "Visual",
        "spec": "No exposed wires"
    },
    {
        "pdc": "SD-S1-IBC-PDI-SCS-014-021",
        "adc": "014-Safety & Control Systems-SCS",
        "sadc": "Safety Monitoring",
        "pldc": "Brake Warning Switch",
        "picp": "Verify switch operation",
        "method": "Operational",
        "spec": "Switch activates correctly"
    },
    {
        "pdc": "SD-S1-IBC-PDI-SCS-014-022",
        "adc": "014-Safety & Control Systems-SCS",
        "sadc": "Safety Monitoring",
        "pldc": "Low Air Pressure Warning",
        "picp": "Check warning system",
        "method": "Operational",
        "spec": "Alarm activates within spec"
    },
    {
        "pdc": "SD-S1-IBC-PDI-SCS-014-023",
        "adc": "014-Safety & Control Systems-SCS",
        "sadc": "Safety Fasteners",
        "pldc": "Control System Fasteners",
        "picp": "Verify locking devices",
        "method": "Visual",
        "spec": "Lock nuts or clips installed"
    },
    {
        "pdc": "SD-S1-IBC-PDI-SCS-014-024",
        "adc": "014-Safety & Control Systems-SCS",
        "sadc": "Operational Check",
        "pldc": "Control System Functional Test",
        "picp": "Check overall control operation",
        "method": "Operational",
        "spec": "All controls function correctly"
    },
    {
        "pdc": "SD-S1-IBC-PDI-SCS-014-025",
        "adc": "014-Safety & Control Systems-SCS",
        "sadc": "Final Inspection",
        "pldc": "Overall Safety System Integrity",
        "picp": "General visual inspection",
        "method": "Visual",
        "spec": "No visible defects"
    },
    {
        "pdc": "SD-S1-IBC-PDI-TCE-015-001",
        "adc": "015-Telematics & Comfort Electronics-TCE",
        "sadc": "Telematics Control Unit",
        "pldc": "TCU Module",
        "picp": "Verify module mounting on chassis bracket",
        "method": "Visual",
        "spec": "Secure mounting, no looseness"
    },
    {
        "pdc": "SD-S1-IBC-PDI-TCE-015-002",
        "adc": "015-Telematics & Comfort Electronics-TCE",
        "sadc": "Telematics Control Unit",
        "pldc": "TCU Wiring Harness",
        "picp": "Inspect harness routing and insulation",
        "method": "Visual",
        "spec": "No damage, proper routing"
    },
    {
        "pdc": "SD-S1-IBC-PDI-TCE-015-003",
        "adc": "015-Telematics & Comfort Electronics-TCE",
        "sadc": "Telematics Control Unit",
        "pldc": "TCU Connector",
        "picp": "Check connector locking",
        "method": "Visual",
        "spec": "Connector fully engaged"
    },
    {
        "pdc": "SD-S1-IBC-PDI-TCE-015-004",
        "adc": "015-Telematics & Comfort Electronics-TCE",
        "sadc": "GPS System",
        "pldc": "GPS Antenna",
        "picp": "Check antenna mounting location",
        "method": "Visual",
        "spec": "Secure and unobstructed"
    },
    {
        "pdc": "SD-S1-IBC-PDI-TCE-015-005",
        "adc": "015-Telematics & Comfort Electronics-TCE",
        "sadc": "GPS System",
        "pldc": "GPS Antenna Cable",
        "picp": "Inspect cable routing",
        "method": "Visual",
        "spec": "No sharp bends or damage"
    },
    {
        "pdc": "SD-S1-IBC-PDI-TCE-015-006",
        "adc": "015-Telematics & Comfort Electronics-TCE",
        "sadc": "Communication Module",
        "pldc": "4G/LTE Communication Unit",
        "picp": "Verify unit mounting",
        "method": "Visual",
        "spec": "Secure mounting"
    },
    {
        "pdc": "SD-S1-IBC-PDI-TCE-015-007",
        "adc": "015-Telematics & Comfort Electronics-TCE",
        "sadc": "Communication Module",
        "pldc": "SIM Slot / Module",
        "picp": "Check SIM module installation",
        "method": "Visual",
        "spec": "Installed correctly"
    },
    {
        "pdc": "SD-S1-IBC-PDI-TCE-015-008",
        "adc": "015-Telematics & Comfort Electronics-TCE",
        "sadc": "Communication Module",
        "pldc": "Communication Wiring",
        "picp": "Inspect wiring harness",
        "method": "Visual",
        "spec": "No insulation damage"
    },
    {
        "pdc": "SD-S1-IBC-PDI-TCE-015-009",
        "adc": "015-Telematics & Comfort Electronics-TCE",
        "sadc": "CAN Bus Network",
        "pldc": "CAN Bus Connector",
        "picp": "Inspect connector integrity",
        "method": "Visual",
        "spec": "Connector secure"
    },
    {
        "pdc": "SD-S1-IBC-PDI-TCE-015-010",
        "adc": "015-Telematics & Comfort Electronics-TCE",
        "sadc": "CAN Bus Network",
        "pldc": "CAN Bus Wiring",
        "picp": "Check wiring routing",
        "method": "Visual",
        "spec": "No interference with moving parts"
    },
    {
        "pdc": "SD-S1-IBC-PDI-TCE-015-011",
        "adc": "015-Telematics & Comfort Electronics-TCE",
        "sadc": "Driver Information System",
        "pldc": "Driver Display Interface",
        "picp": "Check display mounting",
        "method": "Visual",
        "spec": "Secure mounting"
    },
    {
        "pdc": "SD-S1-IBC-PDI-TCE-015-012",
        "adc": "015-Telematics & Comfort Electronics-TCE",
        "sadc": "Driver Information System",
        "pldc": "Display Wiring Harness",
        "picp": "Inspect harness condition",
        "method": "Visual",
        "spec": "No damaged insulation"
    },
    {
        "pdc": "SD-S1-IBC-PDI-TCE-015-013",
        "adc": "015-Telematics & Comfort Electronics-TCE",
        "sadc": "Interior Comfort Electronics",
        "pldc": "Cabin Lighting Control Module",
        "picp": "Inspect module mounting",
        "method": "Visual",
        "spec": "Secure mounting"
    },
    {
        "pdc": "SD-S1-IBC-PDI-TCE-015-014",
        "adc": "015-Telematics & Comfort Electronics-TCE",
        "sadc": "Interior Comfort Electronics",
        "pldc": "Interior Lighting Harness",
        "picp": "Check wiring routing",
        "method": "Visual",
        "spec": "Proper routing"
    },
    {
        "pdc": "SD-S1-IBC-PDI-TCE-015-015",
        "adc": "015-Telematics & Comfort Electronics-TCE",
        "sadc": "Passenger Information System",
        "pldc": "PIS Controller",
        "picp": "Verify controller mounting",
        "method": "Visual",
        "spec": "Secure mounting"
    },
    {
        "pdc": "SD-S1-IBC-PDI-TCE-015-016",
        "adc": "015-Telematics & Comfort Electronics-TCE",
        "sadc": "Passenger Information System",
        "pldc": "PIS Communication Cable",
        "picp": "Inspect cable condition",
        "method": "Visual",
        "spec": "No damage"
    },
    {
        "pdc": "SD-S1-IBC-PDI-TCE-015-017",
        "adc": "015-Telematics & Comfort Electronics-TCE",
        "sadc": "Audio System",
        "pldc": "Audio Amplifier Unit",
        "picp": "Inspect amplifier mounting",
        "method": "Visual",
        "spec": "Secure mounting"
    },
    {
        "pdc": "SD-S1-IBC-PDI-TCE-015-018",
        "adc": "015-Telematics & Comfort Electronics-TCE",
        "sadc": "Audio System",
        "pldc": "Speaker Wiring",
        "picp": "Check speaker wiring harness",
        "method": "Visual",
        "spec": "No insulation damage"
    },
    {
        "pdc": "SD-S1-IBC-PDI-TCE-015-019",
        "adc": "015-Telematics & Comfort Electronics-TCE",
        "sadc": "USB Charging System",
        "pldc": "USB Charging Module",
        "picp": "Inspect module installation",
        "method": "Visual",
        "spec": "Secure mounting"
    },
    {
        "pdc": "SD-S1-IBC-PDI-TCE-015-020",
        "adc": "015-Telematics & Comfort Electronics-TCE",
        "sadc": "USB Charging System",
        "pldc": "USB Wiring Harness",
        "picp": "Check harness routing",
        "method": "Visual",
        "spec": "Proper routing"
    },
    {
        "pdc": "SD-S1-IBC-PDI-TCE-015-021",
        "adc": "015-Telematics & Comfort Electronics-TCE",
        "sadc": "WiFi Router System",
        "pldc": "WiFi Router Unit",
        "picp": "Inspect router mounting",
        "method": "Visual",
        "spec": "Secure mounting"
    },
    {
        "pdc": "SD-S1-IBC-PDI-TCE-015-022",
        "adc": "015-Telematics & Comfort Electronics-TCE",
        "sadc": "WiFi Router System",
        "pldc": "Router Antenna",
        "picp": "Check antenna installation",
        "method": "Visual",
        "spec": "Installed properly"
    },
    {
        "pdc": "SD-S1-IBC-PDI-TCE-015-023",
        "adc": "015-Telematics & Comfort Electronics-TCE",
        "sadc": "Safety Communication",
        "pldc": "Emergency Call Module",
        "picp": "Inspect module mounting",
        "method": "Visual",
        "spec": "Secure mounting"
    },
    {
        "pdc": "SD-S1-IBC-PDI-TCE-015-024",
        "adc": "015-Telematics & Comfort Electronics-TCE",
        "sadc": "Safety Communication",
        "pldc": "Emergency Communication Wiring",
        "picp": "Inspect wiring harness",
        "method": "Visual",
        "spec": "No insulation damage"
    },
    {
        "pdc": "SD-S1-IBC-PDI-TCE-015-025",
        "adc": "015-Telematics & Comfort Electronics-TCE",
        "sadc": "Operational Check",
        "pldc": "Telematics Power Supply",
        "picp": "Verify power supply connection",
        "method": "Multimeter",
        "spec": "Voltage within OEM spec"
    },
    {
        "pdc": "SD-S1-IBC-PDI-TCE-015-026",
        "adc": "015-Telematics & Comfort Electronics-TCE",
        "sadc": "Operational Check",
        "pldc": "CAN Network Communication",
        "picp": "Check CAN communication signal",
        "method": "Diagnostic tool",
        "spec": "Signal present"
    },
    {
        "pdc": "SD-S1-IBC-PDI-TCE-015-027",
        "adc": "015-Telematics & Comfort Electronics-TCE",
        "sadc": "Final Inspection",
        "pldc": "Overall Telematics System Integrity",
        "picp": "General inspection",
        "method": "Visual",
        "spec": "No visible defects"
    }
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

function openInspectionInfoIfNeeded() {
    if (!inspectionInfoOpen) {
        toggleInspectionInfo();
    }
    const sec = document.getElementById('inspectionInfoSection');
    if (sec) sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
    const rawChecklist = (typeof staticChecklist !== 'undefined') ? staticChecklist : (typeof STATIC_INSPECTION_DATA !== 'undefined' ? STATIC_INSPECTION_DATA : []);
    inspectionItems = rawChecklist.map((item, index) => ({
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
                <div class="item-row ${item.status === 'FAIL' ? 'item-failed' : (item.status === 'PASS' ? 'item-passed' : '')}" id="item-row-${item.id}">
                    <div class="item-info">
                        <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:2px;">
                            <div class="item-id">${escapeHtml(item.pdc)} · <span style="color:var(--text-secondary)">${escapeHtml(item.sadc)}</span></div>
                            <span class="item-status-pill ${item.status === 'PASS' ? 'pass' : (item.status === 'FAIL' ? 'fail' : 'pending')}">
                                ${item.status === 'PASS' ? '✓ Passed' : (item.status === 'FAIL' ? '✗ Failed' : 'Pending')}
                            </span>
                        </div>
                        <div class="item-title">${escapeHtml(item.picp)}</div>
                        <div class="item-spec"><i class="fas fa-bullseye" style="font-size:0.75rem;opacity:0.7;"></i> ${escapeHtml(item.spec)}</div>
                        <div class="item-evidence ${showEvidence ? 'visible' : ''}">
                            <div class="defect-tags-container" style="margin:2px 0 6px 0;">
                                ${InspectionEngine.COMMON_DEFECT_TAGS.slice(0, 5).map(tag =>
                `<button type="button" class="defect-tag-pill" onclick="appendInlineDefectTag(${item.id}, '${escapeHtml(tag)}')">${escapeHtml(tag)}</button>`
            ).join('')}
                            </div>
                            <div class="photo-fail-area">
                                <label for="photo-${item.id}" title="Capture or upload photo">
                                    <i class="fas fa-camera"></i>
                                    <span>${item.photo ? 'Retake Photo' : 'Add Photo'}</span>
                                </label>
                                <input type="file" id="photo-${item.id}" accept="image/*" capture="environment" onchange="handlePhoto(${item.id}, this)" />
                                ${item.photo ? `
                                    <div class="photo-preview-wrap">
                                        <img class="photo-preview-fail visible" id="preview-${item.id}" src="${item.photo}" alt="Evidence photo" />
                                        <button type="button" class="btn-remove-photo" title="Remove photo" onclick="removePhoto(${item.id})">&times;</button>
                                    </div>
                                ` : ''}
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

    if (targetStatus === 'FAIL') {
        openFailModal(item);
        return;
    }

    let nextStatus = targetStatus;
    if (item.status === targetStatus) nextStatus = ''; // Toggle off PASS

    applyStatus(item, nextStatus);
}

function clearDefectStatus(id) {
    const item = inspectionItems.find(i => i.id === id);
    if (!item) return;

    // Clear out failure data
    item.remarks = '';
    item.photo = null;

    closeModal();
    applyStatus(item, '');
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
    let pendingPhoto = item.photo || null;
    const defectTagsHtml = InspectionEngine.COMMON_DEFECT_TAGS.map(tag =>
        `<button type="button" class="defect-tag-pill" onclick="appendDefectTag('${escapeHtml(tag)}')">${escapeHtml(tag)}</button>`
    ).join('');

    const isAlreadyFailed = item.status === 'FAIL';

    const modalContent = `
        <div style="font-size:0.95rem;margin-bottom:12px;background:var(--surface-alt);padding:10px;border-radius:var(--radius-sm);border:1px solid var(--border);">
            <div style="font-size:0.75rem;color:var(--text-secondary);text-transform:uppercase;font-weight:700;margin-bottom:2px;">Checkpoint</div>
            <strong style="color:var(--primary);">${escapeHtml(item.picp)}</strong> 
            <span style="font-family:monospace;color:var(--text-tertiary);font-size:0.8rem;">(${escapeHtml(item.pdc)})</span>
            <div style="font-size:0.8rem;color:var(--text-secondary);margin-top:4px;padding-top:4px;border-top:1px dashed var(--border);">
                <strong>Spec:</strong> ${escapeHtml(item.spec)}
            </div>
        </div>

        <label style="font-size:0.82rem;font-weight:700;color:var(--text-secondary);text-transform:uppercase;">Quick Defect Category:</label>
        <div class="defect-tags-container" id="modalDefectTags">
            ${defectTagsHtml}
        </div>

        <div style="margin-top:14px;position:relative;">
            <label for="modalFailRemarks" style="font-size:0.82rem;font-weight:700;color:var(--text-secondary);text-transform:uppercase;">Defect Details &amp; Observations:</label>
            <div style="position:relative;margin-top:6px;">
                <textarea id="modalFailRemarks" class="evidence-remarks" style="min-height:85px;font-size:0.9rem;" placeholder="Describe the defect or reason for failure...">${escapeHtml(item.remarks || '')}</textarea>
                <button type="button" class="btn-mic-inline" id="modalMicBtn" title="Voice dictation" onclick="dictateForModal()">
                    <i class="fas fa-microphone"></i>
                </button>
            </div>
        </div>

        <div style="margin-top:16px;display:flex;align-items:flex-start;gap:12px;">
            <label class="photo-fail-area" style="flex:1;text-align:center;padding:16px;background:var(--surface-alt);border:1px dashed var(--border-strong);border-radius:var(--radius-sm);transition:all 0.2s;">
                <label for="modalPhotoInput" style="cursor:pointer;display:block;color:var(--primary);font-weight:600;">
                    <i class="fas fa-camera" style="font-size:1.2rem;margin-bottom:6px;display:block;"></i> 
                    ${pendingPhoto ? 'Change Evidence Photo' : 'Capture Evidence Photo'}
                </label>
                <input type="file" id="modalPhotoInput" accept="image/*" capture="environment" style="display:none;" />
            </label>
            <img id="modalPhotoPreview" class="photo-preview-fail" style="display:${pendingPhoto ? 'block' : 'none'};width:80px;height:80px;object-fit:cover;border-radius:var(--radius-sm);border:1px solid var(--border-strong);box-shadow:var(--shadow-sm);" src="${pendingPhoto || ''}" alt="Defect preview" />
        </div>
        
        ${isAlreadyFailed ? `
        <div style="margin-top:16px;text-align:right;">
            <button type="button" class="btn-outline" style="color:var(--text-secondary);border-color:var(--border-strong);" onclick="clearDefectStatus(${item.id})">
                <i class="fas fa-trash-alt"></i> Clear Defect Status
            </button>
        </div>
        ` : ''}
    `;

    openModal('Record Inspection Defect', modalContent, () => {
        const remarksEl = document.getElementById('modalFailRemarks');
        if (remarksEl) item.remarks = remarksEl.value;
        if (pendingPhoto) item.photo = pendingPhoto;
        applyStatus(item, 'FAIL');
    }, {
        confirmText: isAlreadyFailed ? 'Update Defect' : 'Confirm Defect (FAIL)',
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
        if (!item.status) {
            item.status = 'FAIL'; // Default to FAIL when photo evidence is attached
        }
        saveToLocalStorage();
        renderGroups();
        updateStats();
        showToast(`📸 Photo attached · Status: ${item.status}`, 'success');
    });
}

function removePhoto(id) {
    const item = inspectionItems.find(i => i.id === id);
    if (!item) return;
    item.photo = null;
    saveToLocalStorage();
    renderGroups();
    updateStats();
    showToast('🗑️ Photo removed', 'info');
}

function updateRemarks(id, val) {
    const item = inspectionItems.find(i => i.id === id);
    if (!item) return;
    item.remarks = val;
    saveToLocalStorage();
}

function appendInlineDefectTag(id, tag) {
    const item = inspectionItems.find(i => i.id === id);
    if (!item) return;
    if (item.remarks && item.remarks.trim().length > 0) {
        if (!item.remarks.includes(tag)) {
            item.remarks = item.remarks.trim() + '; ' + tag;
        }
    } else {
        item.remarks = tag;
    }
    if (!item.status) {
        item.status = 'FAIL';
    }
    saveToLocalStorage();
    renderGroups();
    updateStats();
    const textarea = document.getElementById(`remarks-${id}`);
    if (textarea) textarea.value = item.remarks;
    showToast(`📝 Defect added: ${tag}`, 'info');
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
    if (reportContainer) {
        reportContainer.innerHTML = generatePrintReport();
    }

    // Wait for all base64 and external images to be decoded before triggering print
    const images = reportContainer ? Array.from(reportContainer.querySelectorAll('img')) : [];
    const decodePromises = images.map(img => {
        if (img.complete && img.naturalHeight !== 0) return Promise.resolve();
        return img.decode ? img.decode().catch(() => { }) : new Promise(res => { img.onload = img.onerror = res; });
    });

    Promise.all(decodePromises).then(() => {
        setTimeout(() => {
            window.print();
            showToast('📄 PDF print dialog launched', 'info');
        }, 150);
    });
}

function generatePrintReport() {
    const allGroups = buildGroups();
    const counters = InspectionEngine.computeCounters(inspectionItems);
    const failedItems = inspectionItems.filter(i => i.status === 'FAIL' || (i.photo && i.status !== 'PASS'));

    let finalResult = 'PASS';
    let finalResultClass = 'pass';
    let finalColor = '#10B981';
    if (counters.failed > 0 || failedItems.length > 0) {
        finalResult = 'DEFECTS DETECTED (FAIL)';
        finalResultClass = 'fail';
        finalColor = '#EF4444';
    } else if (counters.pending > 0) {
        finalResult = 'INCOMPLETE INSPECTION';
        finalResultClass = 'pending';
        finalColor = '#D97706';
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

    // Accurate Active Duration
    const totalActiveMs = timer.elapsedMs ? timer.elapsedMs() : 0;
    const formattedDuration = InspectionEngine.formatDuration(totalActiveMs);
    metaItemsHtml += `<div class="report-meta-item"><span>Total Active Time:</span><strong>${formattedDuration}</strong></div>`;

    let html = `
        <div class="report-page">
            <!-- Header Block -->
            <div class="report-header-block">
                <div class="report-header-text">
                    <h1>BUSTECH ENGINEERING · PDI INSPECTION REPORT</h1>
                    <p>Static Chassis &amp; Systems Pre-Delivery Quality Verification</p>
                </div>
                <img src="../bustech-logo.png" alt="BusTech Logo" class="report-logo" />
            </div>

            <!-- Vehicle & Meta Information -->
            <div class="report-meta-grid">
                ${metaItemsHtml}
            </div>

            <!-- Summary Scorecard -->
            <div class="report-summary-bar">
                <div class="report-summary-card">Total Checkpoints: <strong>${counters.total}</strong></div>
                <div class="report-summary-card pass">PASSED: <strong>${counters.passed}</strong></div>
                <div class="report-summary-card fail">FAILED: <strong>${Math.max(counters.failed, failedItems.length)}</strong></div>
                <div class="report-summary-card ${finalResultClass}">OVERALL: <strong style="color:${finalColor}">${finalResult}</strong></div>
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
                            <th style="width:16%;">Item Code</th>
                            <th style="width:20%;">Assembly</th>
                            <th style="width:24%;">Checkpoint Description</th>
                            <th style="width:26%;">Observations / Remarks</th>
                            <th style="width:14%;">Evidence</th>
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
                    <td style="color:#B91C1C;font-weight:600;">${escapeHtml(f.remarks || 'Defect recorded')}</td>
                    <td>${f.photo ? `<img src="${f.photo}" alt="Defect" style="width:44px;height:44px;object-fit:cover;border-radius:3px;border:1px solid #CBD5E1;" />` : '<span style="color:#94A3B8;font-size:7pt;">No Photo</span>'}</td>
                </tr>
            `;
        });
        html += `</tbody></table></div>`;
    }

    // Full Inspection Checklist Breakdown
    html += `<div class="report-section-title">Comprehensive Inspection Checklist</div>`;
    for (const group of allGroups) {
        html += `
            <div class="report-group-container">
                <div class="report-group-header">
                    ${escapeHtml(group.adc)} (${group.passCount} Pass / ${group.failCount} Fail / ${group.pendCount} Pending)
                </div>
                <table class="report-table">
                    <thead>
                        <tr>
                            <th style="width:16%;">Code</th>
                            <th style="width:36%;">Checkpoint &amp; Spec</th>
                            <th style="width:12%;">Method</th>
                            <th style="width:10%;">Status</th>
                            <th style="width:26%;">Remarks &amp; Photo</th>
                        </tr>
                    </thead>
                    <tbody>
        `;
        for (const item of group.items) {
            const st = item.status || (item.photo ? 'FAIL' : 'PENDING');
            const badgeClass = st === 'PASS' ? 'pass' : (st === 'FAIL' ? 'fail' : 'pending');
            html += `
                <tr>
                    <td style="font-family:monospace;">${escapeHtml(item.pdc)}</td>
                    <td><strong>${escapeHtml(item.picp)}</strong><br/><span style="color:#64748B;">Spec: ${escapeHtml(item.spec)}</span></td>
                    <td>${escapeHtml(item.method)}</td>
                    <td><span class="report-badge ${badgeClass}">${st}</span></td>
                    <td>
                        ${escapeHtml(item.remarks || '-')}
                        ${item.photo ? `<div style="margin-top:3px;"><img src="${item.photo}" alt="Photo" style="width:36px;height:36px;object-fit:cover;border-radius:3px;border:1px solid #CBD5E1;display:inline-block;" /></div>` : ''}
                    </td>
                </tr>
            `;
        }
        html += `</tbody></table></div>`;
    }

    // Photo Evidence Gallery
    const itemsWithPhotos = inspectionItems.filter(i => i.photo);
    if (itemsWithPhotos.length > 0) {
        html += `
            <div class="report-section-title" style="page-break-before:always;break-before:page;">Photographic Evidence Gallery</div>
            <div class="report-evidence-grid">
        `;
        for (const item of itemsWithPhotos) {
            const itemStatus = item.status || 'FAIL';
            const badgeClass = itemStatus === 'PASS' ? 'pass' : (itemStatus === 'FAIL' ? 'fail' : 'pending');
            html += `
                <div class="report-evidence-card">
                    <img src="${item.photo}" alt="Evidence for ${escapeHtml(item.picp)}" />
                    <div style="font-size:7.5pt;">
                        <strong>${escapeHtml(item.pdc)}</strong>: ${escapeHtml(item.picp)}
                        <br/>
                        <span class="report-badge ${badgeClass}">${itemStatus}</span>
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
            html += `<tr><td>${escapeHtml(log.timestamp)}</td><td>${escapeHtml(log.action)}</td></tr>`;
        });
        html += `</tbody></table>`;
    }

    // Electronic Signatures Block
    html += `
        <div class="report-signatures">
            <div class="report-signatures-group">
                <div class="report-signature-block">
                    ${signatures.inspector ? `<img src="${signatures.inspector}" alt="Inspector Signature" />` : '<div style="height:44px;"></div>'}
                    <div><strong>Inspector Sign-Off:</strong> ${escapeHtml(inspectionMeta.inspector || 'Certified Inspector')}</div>
                    <div style="font-size:7pt;color:#64748B;">I hereby certify that all static checkpoints have been individually evaluated.</div>
                </div>
                <div class="report-signature-block">
                    ${signatures.supervisor ? `<img src="${signatures.supervisor}" alt="Supervisor Signature" />` : '<div style="height:44px;"></div>'}
                    <div><strong>Quality Assurance / Supervisor:</strong> Authorized Signatory</div>
                    <div style="font-size:7pt;color:#64748B;">Inspection report verified and archived in quality audit records.</div>
                </div>
            </div>
            <div class="report-signature-brand">
                <img src="../bustech-logo.png" alt="BusTech Engineering" class="report-logo" />
            </div>
        </div>
    `;

    html += `</div>`;
    return html;
}

// Seamless native print hooks (Ctrl+P / Cmd+P)
window.addEventListener('beforeprint', () => {
    saveInspectionMeta();
    const reportContainer = document.getElementById('printReport');
    if (reportContainer) {
        reportContainer.innerHTML = generatePrintReport();
    }
});

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
        const cb = modalCallback;
        if (cb) cb();
        closeModal();
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

window.addEventListener('load', () => {
    if (window.requestIdleCallback) {
        requestIdleCallback(init);
    } else {
        setTimeout(init, 1);
    }
});