var tour = "X";
var winner = "";

var nodes = document.querySelectorAll("div.tile");
nodes.forEach((node, key) =>
{
    node.addEventListener('click', (function(n) { return function() {
        if (winner !== "") return;

        n.innerHTML = tour;
        n.className = tour + " tile";
        
        setTimeout(() => {
            checkWin();

            if (tour == "X") tour = "O";
            else if (tour == "O") tour = "X";

            var lbl = document.getElementById("tour");
            lbl.innerHTML = tour;
            lbl.className = tour;
        }, 100);
    }; })(node));
})

function n(name)
{
    return document.getElementById(name);
}

function a(n)
{
    return n.innerHTML;
}

function win()
{
    winner = tour;
    alert("Le joueur avec les " + tour + " a gagné !");
}

function checkWin()
{
    var N1x1 = n("1x1");
    var N1x2 = n("1x2");
    var N1x3 = n("1x3");

    var N2x1 = n("2x1");
    var N2x2 = n("2x2");
    var N2x3 = n("2x3");

    var N3x1 = n("3x1");
    var N3x2 = n("3x2");
    var N3x3 = n("3x3");

    var t = tour;

    if (
           (a(N1x1) === t && a(N1x2) === t && a(N1x3) === t)
        || (a(N2x1) === t && a(N2x2) === t && a(N2x3) === t)
        || (a(N3x1) === t && a(N3x2) === t && a(N3x3) === t)

        || (a(N1x1) === t && a(N2x1) === t && a(N3x1) === t)
        || (a(N1x2) === t && a(N2x2) === t && a(N2x3) === t)
        || (a(N1x3) === t && a(N2x3) === t && a(N3x3) === t)

        || (a(N1x1) === t && a(N2x2) === t && a(N3x3) === t)
        || (a(N1x3) === t && a(N2x2) === t && a(N3x1) === t)
    )
    {
        win();
    }
}
