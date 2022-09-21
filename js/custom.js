$(document).ready(function (){
    var endpoint = "./js/data.js";
   let groupName = [];
   //let dropdown = document.getElementById("groupsOpti");
   let dropdown = document.getElementById("groupsList");
   
   async function main(){         
        const response = await fetch(endpoint, 
        {
            method : "GET", 
            mod: 'cors', 
            headers:  { 'Content-type': 'application/json',  }
        });
        const data = await response.json();
        //const optimiArray = [];
        const optimiArray = data.data;
        const arrlength = optimiArray.length;
        //groupsOptimi  = optimiArray.groups;
        //projectGroups = data.projectGroups;
        let option;
        let group;
        let image;

        if(arrlength > 0 ){
            for(let a = 0; a < arrlength; a ++ )
            {
                const groupLength = optimiArray[a].groups.length;

                // Group Image 
                image = document.createElement("IMG");
                const imgLink = optimiArray[a].image.link;
                image.src = imgLink;
                image.setAttribute("src", imgLink);
                image.setAttribute("width", "40");
                image.setAttribute("height", "40");
                //document.getElementsByClassName("imageG").src = imgLink;
                
                let imageGr = document.getElementById("imageG");
                imageGr.appendChild(image);
                console.log("image link: " + imgLink);

                // Group Name
                console.log(" " + optimiArray[a].name  + " ");
                group = document.createElement("li");
                group.setAttribute("class", "groupHeader");
                const groupName = optimiArray[a].name;
                const groupNameValue = document.createTextNode(groupName);
                group.appendChild(groupNameValue);
                dropdown.appendChild(group);
                let hr = document.createElement("hr");
                hr.classList.add("dropdown-divider");
                dropdown.appendChild(hr);

                for(let b = 0; b < 5; b++)
                {   
                    const groupName = optimiArray[a].name;
                    const groupNameValue = document.createTextNode(groupName);
                    if( b == 5){ break; }
                    option = document.createElement("li");
                    option.classList.add("groupName");
                    const optionValue = optimiArray[a].groups[b].name;
                    const optionValue2 = document.createTextNode(optionValue);
                    option.appendChild(optionValue2);
                    dropdown.appendChild(option);
                    console.log("group name: " + optimiArray[a].groups[b].name);                        
                }
                var textp = document.createElement("span");
                textp.innerHTML = "+ add group";
                textp.setAttribute("class", "addGroup");
                dropdown.appendChild(textp);
                //console.log("End of group one" + optimiArray[a].name );
            }
        }

        console.log(data);
        return(optimiArray);            

    }   
    
    main(); 

    //document.getElementById('searchGroup').addEventListener("keyup", searchGroup);
    document.getElementById('searchGroup').addEventListener("keyup", () => {
      searchGroup();
      highlight();
    });

    function searchGroup(){
      let input = document.getElementById('searchGroup').value;
      input = input.toLowerCase();
      let x = document.getElementsByClassName('groupName');

      for(i = 0; i < x.length; i++){
        if(!x[i].innerHTML.toLowerCase().includes(input)){
          x[i].style.display = "none";
        } else 
        {
          console.log("results:" + input);
          console.log(x[i].innerHTML);

          let newList = x[i].innerHTML;
          let srchString = document.createElement("mark");
          let txtNode = document.createTextNode(input);
          srchString.appendChild(txtNode);

          let resultWord = newList.replace( input , srchString);
          console.log(" new words" + resultWord);
          //resultWord.style.display = "list-item";
          x[i].style.display = "list-item";

        }
      }
    }

    function highlight()
    {
      console.log("mark the text");
      /*var opar = document.getElementsByClassName('groupName').innerHTML;

      var paragraph = document.getElementsByClassName('groupName');
      var search = document.getElementById('searchGroup').value;
      search = search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

      var re = new RegExp(search, 'g');

      if( search.length > 0 )
        paragraph.innerHTML = opar.replace(re, '<mark>$&</mark>');
      else paragraph.innerHTML = opar;  */          
    }

  });      
