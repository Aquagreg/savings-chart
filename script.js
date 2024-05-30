const data = {
    "Hospital": { water: 27, energy: 9.7, co2: 3200, opex: 1.5 },
    "Hospitality": { water: 25, energy: 9.0, co2: 3100, opex: 1.5 },
    "Medical Office": { water: 23, energy: 8.5, co2: 3000, opex: 1.5 },
    "Business Office": { water: 22, energy: 8.0, co2: 2900, opex: 1.5 },
    "Educational": { water: 20, energy: 7.5, co2: 2800, opex: 1.5 },
    "Laboratory": { water: 30, energy: 10.0, co2: 3500, opex: 1.5 }
};

function updateTable() {
    const businessType = document.getElementById("businessType").value;
    const squareFootage = parseFloat(document.getElementById("squareFootage").value) / 1000000;
    
    const currentData = data[businessType];
    
    const currentWater = currentData.water * squareFootage;
    const currentEnergy = currentData.energy * squareFootage;
    const currentCO2 = currentData.co2 * squareFootage;
    const currentOPEX = currentData.opex * squareFootage;
    
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
    document.getElementById('benefitEnergy').textContent = `${(benefitEnergy * 1000).toFixed(2)} K Kw/H`;
    document.getElementById('benefitCO2').textContent = `${benefitCO2.toFixed(2)} tons`;
    document.getElementById('benefitOPEX').textContent = `$${benefitOPEX.toFixed(2)} MM`;
}

// Initialize the table with default values
updateTable();
