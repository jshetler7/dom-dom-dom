const btn = document.createElement('button');
btn.textContent = 'Add Square';
document.body.appendChild(btn);

const container = document.createElement('div');
container.className = 'container';
document.body.appendChild(container);

const row = document.createElement('div');
row.className += 'row';
container.appendChild(row);

click = 1;

btn.addEventListener('click', function() {
    const div = document.createElement('div');
    div.className += 'col-3 d-flex align-items-center justify-content-center';
    div.id = click;
    div.textContent = 'id ='+ `"` + div.id + `"`;
    row.appendChild(div);

    click++;
    div.addEventListener('click', function() {
        const divColor = giveRandomColor();
        div.style.backgroundColor = divColor;
    })

    div.addEventListener('dblclick', function() {
        if(this.nextElementSibling != null && this.previousElementSibling != null) {
            if(this.id % 2 === 0) {
                this.nextElementSibling.remove();
                // console.log(this.id);
            }
            else{
                this.previousElementSibling.remove();
                // console.log(this.previousElementSibling);
            }}
        else {
            if(this.nextElementSibling === null){
                console.log("There are no more squares to the right...");
                alert("There are no more squares to the right...")
            }
            if(this.previousElementSibling === null){
                console.log("There are no more squares to the left...");
                alert("There are no more squares to the left...");
            }
        }
        
    });

});

// console.log(document.querySelectorAll(".col-3"));


function giveRandomColor () {
    const RED = Math.floor(Math.random() * 256);
    const GREEN = Math.floor(Math.random() * 256);
    const BLUE = Math.floor(Math.random() * 256);

    const rgbString = `rgb(${RED}, ${GREEN}, ${BLUE})`
    return rgbString;
}