const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  makeServerRequest.then(result => {});
  let responseFromServer = true;
    
  if(responseFromServer) {
    resolve("We got the data");
    myPromise.then(result => {
      console.log(result);
    });
  } else {  
    reject("Data not received");
  }
});