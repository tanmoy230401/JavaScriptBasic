// function api()
// {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Weather Data Received");
//             resolve("Success");
//         }, 2000);
//     });
// }

// async function getWeather()
// {
//     console.log("Getting Weather Data...");
//     await api();
//     await api();

// }



// function getData(dataId)
// {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(`Data ${dataId} Received`);
//             resolve("Success");
//         }, 2000);
//     }); 

// }
// Async function to get all data

// async function getAllData()
// {
//     console.log("Getting All Data...");
//     await getData(1);
//     await getData(2);
//     await getData(3);
// }



// Using async/await to avoid callback hell

// console.log("Getting All Data...");
// getData(1).then(() => {
//     getData(2).then(() => {
//         getData(3).then(() => {
//             console.log("All Data Received");
//         });
//     });
// }   
// );



//callback hell example
// function getData(dataId, getNextData)
// {
//     setTimeout(() => {
//         console.log(`Data ${dataId} Received`);
//         if(getNextData)
//         {
//             getNextData();
//         }
//     }, 2000);
// }


// getData(1, () => {
//     console.log("Getting data2...");
//     getData(2, () => {
//         console.log("Getting data3...");
//         getData(3, () => {  
//             console.log("All Data Received");
//         });
//     });
// });
