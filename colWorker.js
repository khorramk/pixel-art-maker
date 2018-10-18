self.addEventListener('message', function(e){

   const width = e.data.width;
   const length = e.data.rowsLength;
    var cell;
   
    for (let w = 0; w < width; w++) {
           console.log("worker works");
            cell  = `<td class="col"></td>`;
           
           for(let l =0; l < length; l++){
               postMessage({ 'cell': cell, 'count': l });
           }
          
       };
    

}, false);