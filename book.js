let setter = [       
    {},
    {},
    ] 

 
    let setterlist = document.getElementById("carrd") 

    setter.forEach(element => {
    
      setterlist.innerHTML += `<div class="con">
      <div class="card"> 
          <h2>cloud name: ####</h2>
          <h3>prices for hours: <br> ###</h3>
          <h3>prices for days: <br> ###</h3>
          <h3>the setter offer for the pet:<Br>
              ### , ### , ###
          </h3>
          <h3>BOOK NOW</h3>
        <input type="date" id="myDate" value="2022-09-6">
      <p>click here to book </p>
      <button onclick="myFunction()">BOOK</button>
       <p id="book">your book date:</p>  
          </div>
      </div>`
    });

    let setterrlist = document.getElementById("carrrd") 
    setter.forEach(element => {
    
      setterrlist.innerHTML += `<div class="con">
      <div class="card"> 
          <h2>cloud name: ####</h2>
          <h3>prices for hours: <br> ###</h3>
          <h3>prices for days: <br> ###</h3>
          <h3>the setter offer for the pet:<Br>
              ### , ### , ###
          </h3>
          <h3>BOOK NOW</h3>
          <input type="date" id="myDate" value="2022-09-6">
      <p>click here to book </p>
      <button onclick="myFunction()">BOOK</button>
       <p id="book">your book date:</p>  
          </div>
      </div>`
    });

    let ssetterrlist = document.getElementById("caarrrd") 
    setter.forEach(element => {
    
      ssetterrlist.innerHTML += `<div class="con">
      <div class="card"> 
          <h2>cloud name: ####</h2>
          <h3>prices for hours: <br> ###</h3>
          <h3>prices for days: <br> ###</h3>
          <h3>the setter offer for the pet:<Br>
              ### , ### , ###
          </h3>
          <h3>BOOK NOW</h3>
          <input type="date" id="myDate" value="2022-09-6">
      <p>click here to book </p>
      <button onclick="myFunction()">BOOK</button>
       <p id="book">your book date:</p>  
          </div>
      </div>`
    });


    let sseetterrlist = document.getElementById("ccaarrrd") 
    setter.forEach(element => {
    
      sseetterrlist.innerHTML += `<div class="con">
      <div class="card"> 
          <h2>cloud name: ####</h2>
          <h3>prices for hours: <br> ###</h3>
          <h3>prices for days: <br> ###</h3>
          <h3>the setter offer for the pet:<Br>
              ### , ### , ###
          </h3>
          <h3>BOOK NOW</h3>
          <input type="date" id="myDate" value="2022-09-6">
      <p>click here to book </p>
      <button onclick="myFunction()">BOOK</button>
       <p id="book">your book date:</p>  
          </div>
      </div>`
    });

    function myFunction() {
        var x = document.getElementById("myDate").value;
        document.getElementById("book").innerHTML += x;
}
