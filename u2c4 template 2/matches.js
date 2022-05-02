// write js code here corresponding to matches.html



var mn=JSON.parse(localStorage.getItem('schedule'));
displayData(mn)
var arr1=[]
console.log(mn);



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
        colm6.innerText="Favourites";
        colm6.style.color="green";
        colm6.addEventListener("click",function(){
            favourites(elem)
        })
        rows1.append(colm1,colm2,colm3,colm4,colm5,colm6)
        document.querySelector("tbody").append(rows1)

        function favourites(elem)
        {
            arr1.push(elem)
            localStorage.setItem("favourites",JSON.stringify(mn))
            window.location.href="favourites.html"
        }
        
    });
}