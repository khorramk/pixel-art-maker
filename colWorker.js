self.onmessage = function(e){
   const cells = e.data.cell;
   const width = e.data.width;
   try{
       for (let w = 0; w < width; w++) {
           
        postMessage(w);
          
       };


   } catch(er){
      function RowException(message){
        this.name = "RowException";
        this.message = message;
      };
      throw new RowException("is not working");
      postMessage(undefined);
   };
    
};