document.addEventListener("DOMContentLoaded", function () {
    var div = document.createElement('div');
    div.classList.add('header-container');
    document.body.appendChild(div);

    let h1 = document.createElement("h1");
    let h1Text = document.createTextNode("This is an h1.");
    h1.appendChild(h1Text);
    div.appendChild(h1);
    h1.className = "h1";

    let h2 = document.createElement("h2");
    let h2Text = document.createTextNode("This is an h2.");
    // the line bellow assigns the h2Text as a child of the h2 element
    h2.appendChild(h2Text);
    //the line bellow assigns the h2 as a child of the div element
    div.appendChild(h2);
    h2.className = "h2";

    let h3 = document.createElement("h3");
    let h3Text = document.createTextNode("This is an h3.");
    h3.appendChild(h3Text);
    div.appendChild(h3);
    h3.className = "h3";

    let h4 = document.createElement("h4");
    let h4Text = document.createTextNode("This is an h4.");
    h4.appendChild(h4Text);
    div.appendChild(h4);
    h4.className = "h4";

    let h5 = document.createElement("h5");
    let h5Text = document.createTextNode("This is an h5.");
    h5.appendChild(h5Text);
    div.appendChild(h5);
    h5.className = "h5";

    let h6 = document.createElement("h6");
    let h6Text = document.createTextNode("This is an h6.");
    h6.appendChild(h6Text);
    div.appendChild(h6);
    h6.className = "h6";

    // ----------------------------------------------------------------------------------------

    var colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Violet", "Pink", "Gold"];
    div.addEventListener("dblclick", function (e) {
        e.target.style.color = colors[Math.floor(Math.random() * colors.length)];
    })

    //------------------------------------------------------------------------------------------
    let num = 1;

    document.getElementsByClassName("of-your-choosing")[0].addEventListener("click", function () {
        let ul = document.createElement("ul");
        let ulText = document.createTextNode("This is list item " + num);
        ul.appendChild(ulText);
        document.body.appendChild(ul);
        num++;

        ul.addEventListener("click", function (e) {
            e.target.style.color = colors[Math.floor(Math.random() * colors.length)];
        })
        
        ul.addEventListener("dblclick", function (e) {
            ul.remove();
        })

    })

    //------------------------------------------------------------------------------------------




})

