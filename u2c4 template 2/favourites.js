// write js code here corresponding to favourites.html

var favourites =JSON.parse(localStorage.getItem("schedule"))||[]
displayData(favourites);
function displayData(data)
{
    data.forEach(function(elem) {
        var rows1 =document.createElement("tr");
        var colm1=document.createElement("td");
        colm1.innerText=elem.matchcount;

        
        var colm2=document.createElement("td");
        colm2.innerText=elem.team1;

        var colm3=document.createElement("td");
        colm3.innerText=elem.team2;

        var colm4=document.createElement("td");
        colm4.innerText=elem.dates;

        var colm5=document.createElement("td");
        colm5.innerText=elem.venues;

        var colm6=document.createElement("td");
        colm6.innerText="Delete";
        colm6.style.color="red";
        colm6.addEventListener("click",function(){
            event.target.parentNode.remove()
            deleteitem(elem);
            
        })
        rows1.append(colm1,colm2,colm3,colm4,colm5,colm6)
        document.querySelector("tbody").append(rows1)
    })
}