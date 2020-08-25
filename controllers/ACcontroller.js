const csv=require('csvtojson');

const getAccesscode = async(req,res) =>{
       console.log('get request');
       var inputISBN=req.body.ISBN;
       var Assigncodes=[];
      
       const converter=csv()
       .fromFile('./Accesscode.csv')
       .then((json)=>{


           
        for (let i = 0; i < inputISBN.length; i++) {
           
            json.forEach((row) =>{
                if(inputISBN[i] == row.isbn && row.status == 'available'){
                    Assigncodes.push({ISBN :row.isbn,Accesscode : row.subscription_token_id});
                   }
            })
          }
           console.log("Access code list is",Assigncodes);
           return res.json(Assigncodes);

       })
    
}

module.exports={
    getAccesscode : getAccesscode
};