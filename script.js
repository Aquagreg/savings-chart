const data = {
    "Hospital": { water: 17.8, energy: 27.5, co2: 3200, opex: 1.5 },
    "Hospitality": { water: 20.8, energy: 25, co2: 3100, opex: 1.5 },
    "Medical Office": { water: 9.7, energy: 18, co2: 3000, opex: 1.5 },
    "Business Office": { water: 11.8, energy: 15.9, co2: 2900, opex: 1.5 },
    "Educational": { water: 9.9, energy: 13, co2: 2800, opex: 1.5 },
    "Laboratory": { water: 22.1, energy: 35, co2: 3500, opex: 1.5 },
    "Industrial": { water: 20, energy: 95, co2: 3500, opex: 1.5 }
};

function updateTable() {
    const businessType = document.getElementById("businessType").value;
    const squareFootage = parseFloat(document.getElementById("squareFootage").value) / 1000000;
    const numBuildings = parseFloat(document.getElementById("numBuildings").value);
    
    const currentData = data[businessType];
    
    const currentWater = currentData.water * squareFootage * numBuildings;
    const currentEnergy = currentData.energy * squareFootage * numBuildings;
    const currentCO2 = currentData.co2/2000 * squareFootage * numBuildings;
    const currentOPEX = currentData.opex * squareFootage * numBuildings;
    
    const aquanomixWater = currentWater * 0.89; // Assuming an 11% reduction
    const aquanomixEnergy = currentEnergy * 0.97; // Assuming a 3% reduction
    const aquanomixCO2 = currentCO2 * 0.97; // Assuming a 3% reduction
    const aquanomixOPEX = currentOPEX * 0.93; // Assuming a 7% reduction
    
    const benefitWater = currentWater - aquanomixWater;
    const benefitEnergy = currentEnergy - aquanomixEnergy;
    const benefitCO2 = currentCO2 - aquanomixCO2;
    const benefitOPEX = currentOPEX - aquanomixOPEX;
    
    document.getElementById('currentWater').textContent = `${currentWater.toFixed(2)} MM`;
    document.getElementById('currentEnergy').textContent = `${currentEnergy.toFixed(2)} MM`;
    document.getElementById('currentCO2').textContent = `${currentCO2.toFixed(2)} tons`;
    document.getElementById('currentOPEX').textContent = `${currentOPEX.toFixed(2)} MM`;
    
    document.getElementById('aquanomixWater').textContent = `${aquanomixWater.toFixed(2)} MM`;
    document.getElementById('aquanomixEnergy').textContent = `${aquanomixEnergy.toFixed(2)} MM`;
    document.getElementById('aquanomixCO2').textContent = `${aquanomixCO2.toFixed(2)} tons`;
    document.getElementById('aquanomixOPEX').textContent = `$${aquanomixOPEX.toFixed(2)} MM`;
    
    document.getElementById('benefitWater').textContent = `${benefitWater.toFixed(2)} MM`;
    document.getElementById('benefitEnergy').textContent = `${(benefitEnergy * 1000).toFixed(2)} K KwH`;
    document.getElementById('benefitCO2').textContent = `${benefitCO2.toFixed(2)} tons`;
    document.getElementById('benefitOPEX').textContent = `$${benefitOPEX.toFixed(2)} MM`;
}

// Initialize the table with default values
updateTable();
