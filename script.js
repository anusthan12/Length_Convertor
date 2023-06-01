// Length conversion


let result;
let note = document.getElementById("note")
let convertBtn = document.getElementById("convertBtn")


let convert = function () {

    // Get from Unit
    let fromSelect = document.getElementById("fromSelect")
    let fromUnit = fromSelect.options[fromSelect.selectedIndex].text;
    // Get to unit
    let toSelect = document.getElementById("toSelect")
    let toUnit = toSelect.options[toSelect.selectedIndex].text;
    // Get from value
    let fromValue = document.getElementById("fromValue").value
    // Get to value
    let toValue = document.getElementById("toValue")



    // CHECK FOR THE RIGHT CONVERSION TO BE DONE 
    if (fromUnit == "Meter") { //Meter conversion

        result = parseFloat(meter_to_(fromValue))

    } else if (fromUnit == "Kilometer") { //Kilometer conversion

        result = parseFloat(kilometer_to_(fromValue))

    } else if (fromUnit == "Mile") { //Mile conversion

        result = parseFloat(mile_to_(fromValue))

    } else if (fromUnit == "Inch") { //Inch conversion

        result = parseFloat(inch_to_(fromValue))

    } else if (fromUnit == "Foot") { //Foot conversion

        result = parseFloat(foot_to_(fromValue))

    } else if (fromUnit == "Yard") { //Yard conversion

        result = parseFloat(yard_to_(fromValue))

    } else if (fromUnit == "Rod") { //Rod conversion

        result = parseFloat(rod_to_(fromValue))

    } else if (fromUnit == "Chain") { //Chain conversion

        result = parseFloat(chain_to_(fromValue))

    } else if (fromUnit == "Furlong") { //Furlong conversion

        result = parseFloat(furlong_to_(fromValue))

    } else if (fromUnit == "Nautical Mile") { //Nautical mile conversion

        result = parseFloat(nauticalMile_to_(fromValue))

    }





    
    note.innerHTML = "1" + fromUnit + " = " + result / fromValue + toUnit 
    toValue.value = result
    console.log(result + toUnit)
}


// CONVERSION CALCULATIONS
// meter conversion to other units 
let meter_to_ = function (m) {
    let toSelect = document.getElementById("toSelect")
    let toUnit = toSelect.options[toSelect.selectedIndex].text;

    if (toUnit == "Meter") { //Meter

        result = m

    } else if (toUnit == "Kilometer") { //Kilometer

        result = m / 1000

    } else if (toUnit == "Mile") { //Mile

        result = m * 0.000621

    } else if (toUnit == "Inch") { //Inch

        result = m * 39.370079

    } else if (toUnit == "Foot") { //Foot

        result = m * 3.28084

    } else if (toUnit == "Yard") { //Yard

        result = m * 1.093613

    } else if (toUnit == "Rod") { //Rod

        result = m * 0.1988387815

    } else if (toUnit == "Chain") { //Chain

        result = m * 0.0497096954

    } else if (toUnit == "Furlong") { //Furlong

        result = m * 0.0049709695

    } else if (toUnit == "Nautical Mile") { //Nautical Mile

        result = m * 0.0005399568
    }

    return result
}


// kilometer conversions to other unit
let kilometer_to_ = function (km) {
    let toSelect = document.getElementById("toSelect")
    let toUnit = toSelect.options[toSelect.selectedIndex].text;

    if (toUnit == "Meter") { //Meter

        result = km * 1000

    } else if (toUnit == "Kilometer") { //Kilometer

        result = km

    } else if (toUnit == "Mile") { //Mile

        result = km * 0.62137119224

    } else if (toUnit == "Inch") { //Inch

        result = km * 39370.1

    } else if (toUnit == "Foot") { //Foot

        result = km * 3280.84

    } else if (toUnit == "Yard") { //Yard

        result = km * 1093.6132983

    } else if (toUnit == "Rod") { //Rod

        result = km * 198.83878152

    } else if (toUnit == "Chain") { //Chain

        result = km * 49.709695379

    } else if (toUnit == "Furlong") { //Furlong

        result = km * 4.9709695379

    } else if (toUnit == "Nautical Mile") { //Nautical Mile

        result = km * 0.5399568035
    }

    return result
}


// Calculation for mile conversions
let mile_to_ = function (mi) {
    let toSelect = document.getElementById("toSelect")
    let toUnit = toSelect.options[toSelect.selectedIndex].text;

    if (toUnit == "Meter") { //Meter

        result = mi * 1609.344

    } else if (toUnit == "Kilometer") { //Kilometer

        result = mi * 1.609344

    } else if (toUnit == "Mile") { //Mile

        result = mi

    } else if (toUnit == "Inch") { //Inch

        result = mi * 63360

    } else if (toUnit == "Foot") { //Foot

        result = mi * 5280

    } else if (toUnit == "Yard") { //Yard

        result = mi * 1760

    } else if (toUnit == "Rod") { //Rod

        result = mi * 320

    } else if (toUnit == "Chain") { //Chain

        result = mi * 80

    } else if (toUnit == "Furlong") { //Furlong

        result = mi * 8

    } else if (toUnit == "Nautical Mile") { //Nautical Mile

        result = mi * 0.8689762419
    }

    return result
}


// Calculation for inch conversions
let inch_to_ = function (inch) {
    let toSelect = document.getElementById("toSelect")
    let toUnit = toSelect.options[toSelect.selectedIndex].text;

    if (toUnit == "Meter") { //Meter

        result = inch * 0.0254

    } else if (toUnit == "Kilometer") { //Kilometer

        result = inch * 0.000025399986284

    } else if (toUnit == "Mile") { //Mile

        result = inch * 0.000015782828283

    } else if (toUnit == "Inch") { //Inch

        result = inch

    } else if (toUnit == "Foot") { //Foot

        result = inch * 0.083333333333

    } else if (toUnit == "Yard") { //Yard

        result = inch * 0.027777777778

    } else if (toUnit == "Rod") { //Rod

        result = inch * 0.0050505051

    } else if (toUnit == "Chain") { //Chain

        result = inch * 0.0012626263

    } else if (toUnit == "Furlong") { //Furlong

        result = inch * 0.0001262626

    } else if (toUnit == "Nautical Mile") { //Nautical Mile

        result = inch * 0.0000137149
    }

    return result
}


// Calculation for foot conversions
let foot_to_ = function (ft) {
    let toSelect = document.getElementById("toSelect")
    let toUnit = toSelect.options[toSelect.selectedIndex].text;

    if (toUnit == "Meter") { //Meter

        result = ft * 0.3048

    } else if (toUnit == "Kilometer") { //Kilometer

        result = ft * 0.00030479999025

    } else if (toUnit == "Mile") { //Mile

        result = ft * 0.00018939393939

    } else if (toUnit == "Inch") { //Inch

        result = ft * 12

    } else if (toUnit == "Foot") { //Foot

        result = ft

    } else if (toUnit == "Yard") { //Yard

        result = ft * 0.33333333333

    } else if (toUnit == "Rod") { //Rod

        result = ft * 0.0606060606

    } else if (toUnit == "Chain") { //Chain

        result = ft * 0.0151515152

    } else if (toUnit == "Furlong") { //Furlong

        result = ft * 0.0015151515

    } else if (toUnit == "Nautical Mile") { //Nautical Mile

        result = ft * 0.0001645788
    }

    return result
}


// Calculation for yard conversions
let yard_to_ = function (yd) {
    let toSelect = document.getElementById("toSelect")
    let toUnit = toSelect.options[toSelect.selectedIndex].text;

    if (toUnit == "Meter") { //Meter

        result = yd * 0.9144

    } else if (toUnit == "Kilometer") { //Kilometer

        result = yd * 0.0009144

    } else if (toUnit == "Mile") { //Mile

        result = yd * 0.00056818181818

    } else if (toUnit == "Inch") { //Inch

        result = yd * 36

    } else if (toUnit == "Foot") { //Foot

        result = yd * 3

    } else if (toUnit == "Yard") { //Yard

        result = yd

    } else if (toUnit == "Rod") { //Rod

        result = yd * 0.1818181818

    } else if (toUnit == "Chain") { //Chain

        result = yd * 0.0454545455

    } else if (toUnit == "Furlong") { //Furlong

        result = yd * 0.0045454545

    } else if (toUnit == "Nautical Mile") { //Nautical Mile

        result = yd * 0.0004937365
    }

    return result
}


// Calculation for rod conversions
let rod_to_ = function (rod) {
    let toSelect = document.getElementById("toSelect")
    let toUnit = toSelect.options[toSelect.selectedIndex].text;

    if (toUnit == "Meter") { //Meter

        result = rod * 5.0292

    } else if (toUnit == "Kilometer") { //Kilometer

        result = rod * 0.0050292

    } else if (toUnit == "Mile") { //Mile

        result = rod * 0.003125

    } else if (toUnit == "Inch") { //Inch

        result = rod * 198

    } else if (toUnit == "Foot") { //Foot

        result = rod * 16.5

    } else if (toUnit == "Yard") { //Yard

        result = rod * 5.5

    } else if (toUnit == "Rod") { //Rod

        result = rod

    } else if (toUnit == "Chain") { //Chain

        result = rod * 0.25

    } else if (toUnit == "Furlong") { //Furlong

        result = rod * 0.025

    } else if (toUnit == "Nautical Mile") { //Nautical Mile

        result = rod * 0.0027155508
    }

    return result
}


// Calculation for chain conversions
let chain_to_ = function (ch) {
    let toSelect = document.getElementById("toSelect")
    let toUnit = toSelect.options[toSelect.selectedIndex].text;

    if (toUnit == "Meter") { //Meter

        result = ch * 20.1168

    } else if (toUnit == "Kilometer") { //Kilometer

        result = ch * 0.0201168

    } else if (toUnit == "Mile") { //Mile

        result = ch * 0.0125

    } else if (toUnit == "Inch") { //Inch

        result = ch * 792

    } else if (toUnit == "Foot") { //Foot

        result = ch * 66

    } else if (toUnit == "Yard") { //Yard

        result = ch * 22

    } else if (toUnit == "Rod") { //Rod

        result = ch * 4

    } else if (toUnit == "Chain") { //Chain

        result = ch

    } else if (toUnit == "Furlong") { //Furlong

        result = ch * 0.1

    } else if (toUnit == "Nautical Mile") { //Nautical Mile

        result = ch * 0.010862203
    }

    return result
}


// Calculation for furlong conversions
let furlong_to_ = function (fur) {
    let toSelect = document.getElementById("toSelect")
    let toUnit = toSelect.options[toSelect.selectedIndex].text;

    if (toUnit == "Meter") { //Meter

        result = fur * 201.168

    } else if (toUnit == "Kilometer") { //Kilometer

        result = fur * 0.201168

    } else if (toUnit == "Mile") { //Mile

        result = fur * 0.125

    } else if (toUnit == "Inch") { //Inch

        result = fur * 7920

    } else if (toUnit == "Foot") { //Foot

        result = fur * 660

    } else if (toUnit == "Yard") { //Yard

        result = fur * 220

    } else if (toUnit == "Rod") { //Rod

        result = fur * 40

    } else if (toUnit == "Chain") { //Chain

        result = fur * 10

    } else if (toUnit == "Furlong") { //Furlong

        result = fur

    } else if (toUnit == "Nautical Mile") { //Nautical Mile

        result = fur * 0.1086220302
    }

    return result
}


// Calculation for nautical mile conversions
let nauticalMile_to_ = function (nmi) {
    let toSelect = document.getElementById("toSelect")
    let toUnit = toSelect.options[toSelect.selectedIndex].text;

    if (toUnit == "Meter") { //Meter

        result = nmi * 1852

    } else if (toUnit == "Kilometer") { //Kilometer

        result = nmi * 1.852

    } else if (toUnit == "Mile") { //Mile

        result = nmi * 1.150779448

    } else if (toUnit == "Inch") { //Inch

        result = nmi * 72913.385827

    } else if (toUnit == "Foot") { //Foot

        result = nmi * 6076.1154856

    } else if (toUnit == "Yard") { //Yard

        result = nmi * 2025.3718285

    } else if (toUnit == "Rod") { //Rod

        result = nmi * 368.24942336753

    } else if (toUnit == "Chain") { //Chain

        result = nmi * 92.062355842

    } else if (toUnit == "Furlong") { //Furlong

        result = nmi * 9.2062355842

    } else if (toUnit == "Nautical Mile") { //Nautical Mile

        result = nmi
    }

    return result
}



convertBtn.addEventListener("click", convert)