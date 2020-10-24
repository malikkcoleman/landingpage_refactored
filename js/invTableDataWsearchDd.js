setUpTable();

function setUpTable(){

        var searchOption = 
            "searchOption[searchBar]=" + document.getElementById('searchBar').value + "&";
            //"searchOption[freightliner]=" + ((document.getElementById('freightlinerCheck').checked) ? document.getElementById('freightlinerCheck').value : "");
    
    
    
    //create a query part for checked makes
    (document.querySelectorAll("[data-buffer-check='buffer_makes']")).forEach(createSearchOptions);
    
    (document.querySelectorAll("[data-buffer-check='buffer_condition']")).forEach(createSearchOptionsCondition);
    
    (document.querySelectorAll("[data-buffer-check='buffer_city']")).forEach(createSearchOptionsCity);
    
    (document.querySelectorAll("[data-buffer-check='buffer_year']")).forEach(createSearchOptionsYear);
   
     function createSearchOptions(item, index){
    console.log(item.value);
         if (item.checked){
         searchOption += "searchOption[freightliner][]="+item.value+"&";
             }
    }
    
    function createSearchOptionsCondition(item, index){
    console.log(item.value);
         if (item.checked){
         searchOption += "searchOption[truckcondition][]="+item.value+"&";
             }
    }    
    
    function createSearchOptionsCity(item, index){
    console.log(item.value);
         if (item.checked){
         searchOption += "searchOption[city][]="+item.value+"&";
             }
    }   
    
    function createSearchOptionsYear(item, index){
    console.log(item.value);
         if (item.checked){
         searchOption += "searchOption[year][]="+item.value+"&";
             }
    }    
    console.log("buffer_access_3.php?" + searchOption);
     
//    console.log(searchOption);

//    console.log((document.querySelectorAll("[data-buffer-check='buffer_makes']")[0].checked) ? document.getElementById('freightlinerCheck').value : "" );
    
var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

             
        clearTable();
//        console.log(this.responseText);
    populateTable(JSON.parse(this.responseText));
//        alert(this.responseText);

    }
      
      

  };
    
    console.log("buffer_access_3.php?" + searchOption);
  xhttp.open("GET", "buffer_access_3.php?" + searchOption , true);
  xhttp.send();

}
function clearTable(){
    document.getElementById("invTable").innerHTML = "";
}

function populateTable(myObj){
    
    myObj.forEach(myFunction);
    
    function myFunction(item, index){
        
        var tableHeads = ["buffer_id", "user_name", "email", "consent", "province",   "MoreEdit", "DeleteLink"];
    
    var invRow = document.createElement('tr');
    
        
                
        var invCell = {};
        
        tableHeads.forEach(function(item, index){
            invCell[item] = document.createElement('td');
        });
        
        
    invCell.buffer_id.appendChild(document.createTextNode(item.buffer_id));
        
        
//        var arr = item.Photos.split('; ')
       
//        invCellThumb = document.createElement('img');
//        invCellThumb.classList.add('img-thumbnail');
//        invCellThumb.setAttribute('width', 200);
//
//        invCellThumb.setAttribute('src', '../' + arr[0]);
//        invCell.thumbnail.appendChild(invCellThumb);
        
        invCell.user_name.appendChild(document.createTextNode(item.user_name));
        invCell.email.appendChild(document.createTextNode(item.email));
        invCell.consent.appendChild(document.createTextNode(item.consent));
        invCell.reff.appendChild(document.createTextNode(item.province));
        
       editLink = document.createElement('a');
        editLink.setAttribute("href", "buffer_edit.php?edit_id=" + item.buffer_id);
        editLink.appendChild(document.createTextNode("Edit"));
        
           invCell.MoreEdit.appendChild(editLink);       
        
        deleteLink = document.createElement('a');
        deleteLink.setAttribute("href", "buffer_delete.php?delete_id=" + item.buffer_id + "&stocknumber="+item.StockNumber);
        deleteLink.appendChild(document.createTextNode("Trash"));
        
           invCell.DeleteLink.appendChild(deleteLink);
        
        for (let key in invCell) { 
        if (invCell.hasOwnProperty(key)) { 
        value = invCell[key]; 
        //        console.log(key, value); 
        invRow.appendChild(value);
        } 
        } 
//        
 
    var invTable = document.getElementById('invTable');
    
    invTable.appendChild(invRow);
        
    }
}
  
    function searchNow(callback){
   
        
       console.log("searchNowCalled"); document.getElementById('searchItem').setAttribute('data-buffer-search-value', document.getElementById('searchBar').value);
        
    callback();
        
    }
/*
----------------------------------------------
  Setup Drop Downs
----------------------------------------------
*/

//For future reference
//Auto populate dropdowns

function setUpDropDown(){

}