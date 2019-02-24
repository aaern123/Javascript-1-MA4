
fetch('https://jsonplaceholder.typicode.com/todos')
    .then(resultFromServer => resultFromServer.json())
    .then((resultInJsonFormat) => {
    //Render the json to the screen
    for (i = 0; i < resultInJsonFormat.length; i++) {
      makeONEcard(resultInJsonFormat[i]);
    }
    //JSON rendering stops here
  })
.catch(err => console.log(err))



function makeONEcard(oneObject){
  document.getElementById('cards').innerHTML += "UserId: " + oneObject.userId + '<br>'
  document.getElementById('cards').innerHTML += "Id: " + oneObject.id + '<br>'
  document.getElementById('cards').innerHTML += "Title: " + oneObject.title + '<br>'
  document.getElementById('cards').innerHTML += "Completed? " + oneObject.completed +'<br>'
  document.getElementById('cards').innerHTML += "<hr>"
}
