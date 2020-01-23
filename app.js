document.addEventListener("DOMContentLoaded", function () {
    let paragraph = document.createElement('p');
    let text = document.createTextNode('this guy covers material way too fast.')

    paragraph.style.color = "red";
    paragraph.style.textTransform = "uppercase";
    paragraph.className = "some-paragraph";


    paragraph.appendChild(text);
    document.body.appendChild(paragraph);

    let button = document.createElement('button');
    let btnText = document.createTextNode('Click Me!');
    button.appendChild(btnText);
    document.body.appendChild(button);

    button.addEventListener("click", function() {
        let h1 = document.createElement("h1");
        let h1Text = document.createTextNode ("Boy if you don't");
        h1.appendChild(h1Text);
        document.body.appendChild(h1);
    })
})