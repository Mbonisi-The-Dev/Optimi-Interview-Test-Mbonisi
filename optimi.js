       // const endpoint = 'https://ffcc-app.herokuapp.com/get/courses';
       console.log("oops");
       //const endpoint = "/Optimi/data.js";

       //var xhttp = new XMLHttpRequest();
       /*xhttp.onreadystatechange = function(){
           console.log(xhttp.responseText);
           if(this.readyState == 4 && this.status == 200){
               console.log("doc is working");
           }else{
               console.log("error MB")
           }
       };
       xhttp.open('GET', endpoint);
       xhttp.send();

       let projectGroups = [];

       async function main(){           

           const response = await fetch(endpoint, 
               {
                   method : "GET", 
                   mod: 'cors', 
                   headers:  { 'Content-type': 'application/json',  }
               });

           const data = await response.json();
           projectGroups = data.projectGroups;

           console.log(data);

           //console.log(findProjectGroups(" hjbjdkbk"));
       }

      /* function findProjectGroups(search){
           const proj_search = search.toLowerCase();
           return projectGroups.filter(project => {
               return project.title.toLowerCase().includes(proj_search) ||
                   project.code.toLowerCase().includes(proj_search);
           })
       }
       
       $.ajax({
           url: '/Users/User/Desktop/Optimi/data.js',
           method: 'GET', 
           headers: { 'Access-Control-Allow-Origin' : 'http:localhost' },
           //dataType: jsonp, 
           type: 'json', 
           success: function(jsondata){}
       })

       function main(){
           fetch(endpoint)
               .then(res => res.json())
               .then(data => { 
                   console.log(data);
               })
       }

       main();*/
