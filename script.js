//COUNTRY API  -- XMLHTTP
/*
var xhr = new XMLHttpRequest();

xhr.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
xhr.send();

xhr.onload = function(){
    if(xhr.status>=200 && xhr.status<300){
        let data = JSON.parse(this.response);
        //console.log(data);
        for(let x of data){
            console.log(`
                Country name : ${x.name}
                Country sub-region: ${x.subregion}
                Country population :${x.population}
            `)
        }
    }else{
        console.log("Data not found");
    }
};
*/

//CHECKING IF TWO json objects are same even if in different order
//USING LODASH -includes lodash.js in index.html also








//////////////////








//


/*


    //combine 2 array and sort them
    var friends1 = [
        "Mari",
        "MaryJane",
        "CaptianAmerica",
        "Munnabai",
        "Jeff",
        "AAK chandran"
        ];
        var friends2 = [
        "Gabbar",
        "Rajinikanth",
        "Mass",
        "Spiderman",
        "Jeff",
        "ET"
        ];
        function dataHandling3(input1,input2){
            input1= input1.concat(input2);
            input1 = input1.sort()
            return input1;
        }
       var friends =  dataHandling3(friends1,friends2);
       console.log(friends);

       console.log(`
       
       first item: ${friends[0]} 
       Middle item: ${friends[Math.floor(friends.length/2)]}
       last item: ${friends[friends.length-1]}
       `)

       //adding elements to end and beginning of array
       friends.push("Sivani");
       friends.unshift("Ash");
       console.log(friends)

       // adding Mr. to all names 
       for(let x in friends){
           friends[x] = "Mr."+friends[x];
       }
       console.log(friends)

       //comcat all name with comma(,)
       console.log(friends.join(","));

       //retrurn list of names which ha 'a'
       let arr=[];
        for(let x of friends){
            if(x.indexOf('a')!=-1 || x.indexOf('A')!=-1){
                arr.push(x);
            }
        }
        console.log(arr)

        //Average length of friends name:
        let len=0;
        friends.forEach(x => len+=x.length);
        let avg =parseInt( len/friends.length);
        console.log(avg)


*///

//


let loadnumbers = () => {
    let n1 = Math.floor(Math.random()*10);
    let n2 = Math.floor(Math.random()*10);
    
    console.log(n1,n2);
    

    document.querySelector("#number1").textContent=n1;
    document.querySelector("#number2").textContent=n2;

   
}


let checkanswer = () => {
    let n1 = Number(document.querySelector("#number1").textContent);
    let n2 = Number(document.querySelector("#number2").textContent);

    let sum= n1+n2;

    let answer = document.querySelector("#answer").value;
    console.log(answer);

    if(answer==sum){
        alert("answer is correct")
    }else{
        alert("check your answer again. correct answer is "+ sum)
    }

    document.querySelector("#answer").value="";
    loadnumbers();
}