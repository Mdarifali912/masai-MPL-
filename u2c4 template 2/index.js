// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit", Matchsubmit);
    var mpl = JSON.parse(localStorage.getItem("schedule")) || [];

    function Matchsubmit() {
      event.preventDefault();

     var matchobj = {
        matchcount:masaiForm.matchNum.value,
        team1: masaiForm.teamA.value,
        team2: masaiForm.teamB.value,
        dates: masaiForm.date.value,
        venues: masaiForm.venue.value,
      };
      mpl.push(matchobj);
      console.log(mpl);
      localStorage.setItem("schedule", JSON.stringify(mpl));
      
      window.location.href = "matches.html";
    }