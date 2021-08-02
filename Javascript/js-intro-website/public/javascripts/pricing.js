
//reference : https://www.javascripttutorial.net/javascript-fetch-api/
async function fetchPricingPlan() {
    let response = await fetch('/api/pricing');

    console.log(response.status); // 200
    console.log(response.statusText); // OK

    if (response.status === 200) {
        let data = await response.json();
        // handle data
        const hobbyPriceId = document.getElementById("hobby-price");
        const freelancerPriceId = document.getElementById("freelancer-price");
        const startupPriceId = document.getElementById("startup-price");
        const enterprisePriceId = document.getElementById("enterprise-price");

        const priceUnitsList = document.getElementsByClassName('price-unit');

        const hobbyIndex = data.findIndex(el => el.tier === "hobby");
        const freelancerIndex = data.findIndex(el => el.tier === "freelancer");
        const startupIndex = data.findIndex(el => el.tier === "startup");
        const enterpriseIndex = data.findIndex(el => el.tier === "enterprise");


        const monthlyPlanButton = document.getElementById("monthly-plans-btn")
        const annualPlanButton = document.getElementById("annual-plans-btn");

        monthlyPlanButton.addEventListener('click', () =>{
            hobbyPriceId.innerHTML = data[hobbyIndex].monthlyPrice
            freelancerPriceId.innerHTML = data[freelancerIndex].monthlyPrice
            startupPriceId.innerHTML = data[startupIndex].monthlyPrice
            enterprisePriceId.innerHTML = data[enterpriseIndex].monthlyPrice
            for (let item of priceUnitsList) {
                item.innerHTML="/mo"
              }
        });

        annualPlanButton.addEventListener('click', () => {
        
            hobbyPriceId.innerHTML = data[hobbyIndex].annualPrice
            freelancerPriceId.innerHTML = data[freelancerIndex].annualPrice
            startupPriceId.innerHTML = data[startupIndex].annualPrice
            enterprisePriceId.innerHTML = data[enterpriseIndex].annualPrice

            for (let item of priceUnitsList) {
                item.innerHTML="/yr"
              }  
      
        });
    }
}

fetchPricingPlan();
