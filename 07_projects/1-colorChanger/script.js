const btn = document.querySelectorAll(".button");
const body = document.querySelector("body");


btn.forEach(function (button) {
    console.log(button);
    button.addEventListener('click', function(etn){
        console.log(etn);
        console.log(etn.target);
        const cHc = body.style.backgroundColor = etn.target.id;
        switch (cHc) {
            case 'gray':
                //console.log("background color now gray");
               // break;
            case 'white':
                //console.log("background color now white");
               // break;
            case 'blue':
                //console.log("background color now blue");
               // break;
            case 'yellow':
                //console.log("background color now yellow");
               // break;
        
            default:
                break;

            //if (e.target.id === 'grey') {
                body.style.backgroundColor = e.target.id;
            //}
            //if (e.target.id === 'white') {
            //    body.style.backgroundColor = e.target.id;
            //}
            //if (e.target.id === 'blue') {
            //    body.style.backgroundColor = e.target.id;
            //}
            //if (e.target.id === 'yellow') {
            //    body.style.backgroundColor = e.target.id;
            //}
        }
    });    
});