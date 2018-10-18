self.addEventListener('message', function(e){

   const width = e.data.width;
   
       for (var w = 0; w < width; w++) {
           console.log("worker works");
           var cell = '<td class="col"></td>';
        postMessage({'cell': cell, 'count': w});
          
       };


}, false);