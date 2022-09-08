const tomb = [];
let macskak;

for(i = 0; i<20; i++)
{
     macskak =
{
    nev :  "Cirmos"+(i+1), eletkor : Math.round((Math.random()*8+2))

};
tomb.push(macskak);
}

for(i = 0; i<tomb.length; i++)
{
   if(tomb[i].eletkor==2)
   {

   
        console.log(tomb[i]);
   }
    
}