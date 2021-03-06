var inputHeight = document.querySelector('#input_height'),
    inputWidth = document.querySelector('#input_width'),
    pixel = document.querySelector('#pixel'),
    colorPicker = document.querySelector('#colorPicker'),
    colorBox = document.querySelector('.colourBox'),
    sizePicker = document.getElementById('sizePicker'),
    rowWorker, colWorker;
    



/*function createCol(i, c){
    
    let allTr = document.getElementsByTagName('tr');
console.log(allTr);
    allTr["0"].innerHTML = i;
   return 
}*/

function makeGrid(){
    //this function generate grid
    pixel.innerHTML = "";
    //generating the pixel height
    console.log(inputWidth.value);

    for (let h = 0; h < inputHeight.value; h++){
        let tr = document.createElement('tr');
        pixel.appendChild(tr);
    }
        
     
    let rows = document.querySelectorAll('tr');
   for(let w =0; w < inputWidth.value; w++){
       let td = document.createElement('td');

           rows.forEach((e)=>{
               e.insertCell(td);
           })
       
   };
    
    
    
    clickGrid();
};


//generating random grids
function randomGrid(){

      pixel.innerHTML = "";


    //getting random numbers to put on height and width of pixels
    var randomHeight = 1 + Math.floor(Math.random() * 1);
    var randomWidth = 1 + Math.floor(Math.random() * 1);


    //generating the pixel height
    var h = 0;
    while (h < randomHeight) {
        const tr = document.createElement('tr');
       tr.setAttribute('class', 'row')
        pixel.appendChild(tr);
        h++
    };

    const Listtr = document.querySelectorAll('tr');
    
    
    
    //pixel width
    let w = 0;
    while (w < randomWidth) {
        const td = document.createElement('td');

        td.setAttribute('class', 'col');
        Listtr.forEach(function (e) {
            e.appendChild(td);
        });
        w++
    };

};

///colorPicker
function colorPick(){

    colorPicker.addEventListener('change', function(){
           var cpVal = colorPicker.value;
        var stylecp = {
            'background-color': cpVal,
        };
        colorBox.style.backgroundColor = cpVal;
        colorBox.innerHTML = cpVal;
     clickGrid();
    });

    
};

function clickGrid(){
    //click function on grid
    const col = document.querySelectorAll('td')
    console.log(col);
    const cellColor = colorPicker.value;
    col.forEach(function(column){
        column.addEventListener('click', function (e) {

            column.setAttribute('bgcolor', cellColor);
            e.preventDefault();
        }, false);

        column.addEventListener('dblclick', function (e) {
            column.setAttribute('bgcolor', '');
            e.preventDefault();
        }, false);
    });
    

   
    

 
};

function init(){
    colorPick();
    randomGrid();
    clickGrid();
    sizePicker.onsubmit = function(e){
        makeGrid();
        
        colorPick();
        clickGrid();
        e.preventDefault();
        
    };
   
};




    init();

