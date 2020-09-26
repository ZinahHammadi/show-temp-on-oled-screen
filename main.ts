function Call_Variabels () {
    High_Temp = 20
    High_Temp = 72
}
function ShowDatao_Screen () {
    basic.showString("\"Temperature\"")
    basic.showNumber(Math.round(airtemp))
    basic.showString("\"Humidity\"")
    basic.showNumber(Math.round(Humidity))
    basic.pause(500)
    OLED.clear()
}
function GetTempHumidity () {
    dht11_dht22.queryData(
    DHTtype.DHT22,
    DigitalPin.P0,
    true,
    true,
    true
    )
    basic.pause(1000)
    airtemp = dht11_dht22.readData(dataType.temperature)
    TempF = airtemp * (9 / 5)
    airtemp = TempF + 32
    basic.showString("\"My Garden Temperature is:\"" + Math.round(TempF))
    basic.pause(2000)
    Get_Temp_Humidity_Data = dht11_dht22.readData(dataType.humidity)
    basic.showString("\"My Garden Humidity is:\"" + Math.round(Humidity))
    basic.pause(2000)
}
function Control_LED () {
    if (airtemp > High_Temp) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    }
}
let Get_Temp_Humidity_Data = 0
let TempF = 0
let Humidity = 0
let airtemp = 0
let High_Temp = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P1, 30, NeoPixelMode.RGB)
OLED.init(128, 64)
OLED.writeStringNewLine("starting program")
basic.pause(500)
OLED.clear()
basic.forever(function () {
    Call_Variabels()
    GetTempHumidity()
    ShowDatao_Screen()
    Control_LED()
})
