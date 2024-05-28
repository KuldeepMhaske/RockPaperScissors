const GameContainer = document.querySelector(".container");
 UserResult = document.querySelector(".user_result img");
 CpuResult = document.querySelector(".cpu_result img");
 Result = document.querySelector(".result");
 OptionImages = document.querySelectorAll(".option_image");
 console.log("Script.js loaded successfully");


 OptionImages.forEach((image,index)=>{
    image.addEventListener("click",(e)=>{
        image.classList.add("active");
        
    
        //UserResult.src = CpuResult = "Images/STONE.jpg"
        Result.textContent = "Wait..."
        
        OptionImages.forEach((image2,index2)=>{
        // console.log(index,index2);
        index !== index2 &&  image2.classList.remove("active");
        })

        GameContainer.classList.add("start");

        let TimeOut = setTimeout(()=>{
            GameContainer.classList.remove("start");
            let ImageSrc = e.target.querySelector("img").src;
            UserResult.src = ImageSrc;
            // console.log(ImageSrc);
    
            let RInt = Math.floor(Math.random() * 3);
            // console.log("Random : ",RInt);
            let CpuImgs = ["Images/STONE.jpg","Images/PAPER.jpg","Images/SISOR.jpg"] 
            CpuResult.src = CpuImgs[RInt];
    
            let CpuValue = ["R","P","S"][RInt] 
            let UserValue = ["R","P","S"][index]
    
            let Outcomes = {
                RR:"DRAW",
                RP:"CPU",
                RS:"USER",
                PP:"DRAW",

                PR:"USER",
                
                PS:"CPU",
                SS:"DRAW",
                SR:"CPU",
                SP:"USER",
 
            };
    
            let OutcomesValue = Outcomes[UserValue + CpuValue];
            console.log("User =",UserValue,"And CPU =",CpuValue);
            console.log("Winner is : ",OutcomesValue);
            if (OutcomesValue=="USER"){
                y = "Congratulations 👍 !!! You are"
            }
            else{
                y = "Better luck Next Time 👎 !!! CPU is"
            }
            Result.textContent = UserValue === CpuValue ? "MATCH DWAR":`${y} the WINNER !!!`
    
            // console.log(CpuValue,UserValue);
        },2500)
    }) 
 })

// function myFunction(element) {
//     OptionImages.forEach(function(el) {
//         el.classList.remove("active");
//     });
//     element.classList.add("active");
// }



