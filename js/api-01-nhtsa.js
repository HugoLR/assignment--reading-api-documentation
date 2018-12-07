/*
  API #1 - NHTSA Product Information Catalog Vehicle Listing
          https://vpic.nhtsa.dot.gov/api/
*/

//========================================================================
//  (1) How many *total car makes* are registered with the NHTSA?
//     - https://vpic.nhtsa.dot.gov/api/[path/to/data]

const answerElement_nhtsa_1 = document.getElementById('nhtsa-1')

request.get('https://vpic.nhtsa.dot.gov/api/vehicles/GetAllMakes?format=json')
  .then(function(serverRes){
    const apiData = serverRes.body
    // note, put your answer on the dom element for this porblem
    answerElement_nhtsa_1.innerHTML = serverRes.body.Count
  })

//========================================================================
//  (2) How many *Chevrolet models* are registered with the NHTSA?
//
//     - https://vpic.nhtsa.dot.gov/api/[path/to/data]
//     - Hint: models for make

const answerElement_nhtsa_2 = document.getElementById('nhtsa-2')
request.get('https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/chevrolet?format=json')
  .then(function(serverRes){
    const apiData = serverRes.body
    answerElement_nhtsa_2.innerHTML = serverRes.body.Count
  })


//========================================================================
//  (3) What are the *vehicle types* that Nissan has?
//      - Hint: vehicle types for make by name

const answerElement_nhtsa_3 = document.getElementById('nhtsa-3')
request.get('https://vpic.nhtsa.dot.gov/api/vehicles/GetVehicleTypesForMake/Nissan?format=json')
  .then(function(serverRes){
    const apiData = serverRes.body
    var arrayVehicles = apiData.Results
    var nissanVehicle = [];

    arrayVehicles.forEach(function(vehicle){
      var vehicleType = vehicle.VehicleTypeName
      nissanVehicle.push(vehicleType)
      answerElement_nhtsa_3.innerHTML = nissanVehicle
    })
  })


//========================================================================
//  (4) Which are the *models* that exist for Toyota trucks in 2017?
//      - Hint: models for make, year and vehicle type

const answerElement_nhtsa_4 = document.getElementById('nhtsa-4')
request.get('https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeyear/make/toyota/modelyear/2017/vehicleType/truck?format=json')
  .then(function(serverRes){
    const apiDat = serverRes.body
    arrayToyota = serverRes.body.Results
    var str = " ";
    arrayToyota.forEach(function(vehicle){
      var vehicleType = vehicle.Model_Name
       str += vehicleType + ","
       answerElement_nhtsa_4.innerHTML = str
    })
  })
