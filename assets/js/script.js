var APIKey = "4f41b177e2166f4f59272d5f03d0f64a"
var formEL = document.getElementById("weather-form")
var inputEl = document.getElementById("city-name")
var citySearched = document.getElementById("city")
var pCBtn = document.getElementById(".past-seach-button")
var pastContainer = document.getElementById("container")
var buttonArr = []
var currentt = document.getElementById("current-temperature")
var currentws = document.getElementById("current-windspeed")
var currenth = document.getElementById("current-humidity")
var ft1 = document.getElementById("future-1")
var ft2 = document.getElementById("future-2")
var ft3 = document.getElementById("future-3")
var ft4 = document.getElementById("future-4")
var ft5 = document.getElementById("future-5")
var d1t = document.getElementById("day-1-t")
var d2t = document.getElementById("day-2-t")
var d3t = document.getElementById("day-3-t")
var d4t = document.getElementById("day-4-t")
var d5t = document.getElementById("day-5-t")
var d1ws = document.getElementById("day-1-ws")
var d2ws = document.getElementById("day-2-ws")
var d3ws = document.getElementById("day-3-ws")
var d4ws = document.getElementById("day-4-ws")
var d5ws = document.getElementById("day-5-ws")
var d1h = document.getElementById("day-1-h")
var d2h = document.getElementById("day-2-h")
var d3h = document.getElementById("day-3-h")
var d4h = document.getElementById("day-4-h")
var d5h = document.getElementById("day-5-h")
var d1r = document.getElementById("day-1-r")
var d1r = document.getElementById("day-2-r")
var d1r = document.getElementById("day-3-r")
var d1r = document.getElementById("day-4-r")
var d1r = document.getElementById("day-5-r")
// -----------------------------------------------------------------------------------------

function formSubmission(event) {
    event.preventDefault()
    if (event.attr.links(".btn-original")) {
        console.log(event.attr.texts)
        var newCitySelectButton = event.attr.texts.split(",")[0]
        getCitiesCurrentWeather(newCitySelectButton)
        
        returm
    }
    var cityArr=[]
    cityArr.push(inputEl.val.split(","))
    var cityName =cityArr[0][0]
    console.log(cityArr)
    console.log(cityName)

    var buttonArr =JSON.parse(localStorage.getItem("buttonARR"))
    if(!buttonArr){
        buttonArr=[]
    }
    buttonArr.push(cityName)
    localStorage.setItem("buttonArr",JSON.stringify(buttonArr))
}






