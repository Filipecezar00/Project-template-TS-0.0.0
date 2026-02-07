 import {faker} from "@faker-js/faker/locale/pt_BR" 

faker.locale = "pt_BR"; 
const clients = []; 

for(let index = 0; index<10;index++){
    const name = faker.person. firstName();  
    const email = faker.internet.email(name);  
    
    const phoneNumber = faker.phone.number();  
    const birth = faker.date.past({years:30,refDate:"2000-01-01"});  

   const client={
        name, 
        email, 
        phoneNumber,
        birth 
        
    }
    clients.push(client) 
}
console.log(clients); 