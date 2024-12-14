document.getElementById("runButton").addEventListener("click", function () {
    const code = document.getElementById("codeInput").value;
    const consoleOutput = document.getElementById("consoleOutput");
    consoleOutput.textContent = "";

    const variables = {};

    function ptf(output) {
        consoleOutput.textContent += output + "\n";
    }

    function evaluateCode(code) {
        const lines = code.split("\n");
        
        for (let line of lines) {
            line = line.trim();
            
            if (line.startsWith("ptf(") && line.endsWith(")")) {
                const content = line.slice(4, -1).trim();
                
                const parts = content.split("+").map(part => part.trim());
                let result = "";

                for (let part of parts) {
                    if (part.startsWith('"') && part.endsWith('"')) {
                        result += part.slice(1, -1); 
                    } else if (variables.hasOwnProperty(part)) {
                        result += variables[part];
                    } else if (!isNaN(part) && part >= 0 && part <= 9) {
                        result += part;
                    } else {
                        result += `Error: Variable '${part}' no definida.`;
                        break;
                    }
                }
                
                ptf(result);
            }

            else if (line.startsWith("int ")) {
                const parts = line.split("=");
                if (parts.length === 2) {
                    const varName = parts[0].replace("int", "").trim();
                    const value = parseInt(parts[1].trim());
                    if (/^[a-z]$/.test(varName) && value >= 0 && value <= 9) {
                        variables[varName] = value;
                    } else {
                        ptf(`Error: Variable '${varName}' inválida o valor fuera de rango`);
                    }
                }
            }

            else if (line.startsWith("if ") && line.includes("(") && line.includes(")")) {
                const condition = line.slice(line.indexOf('(') + 1, line.lastIndexOf(')')).trim();
                
                if (condition.includes(">") || condition.includes("<") || condition.includes(">=") || condition.includes("<=") || condition.includes("==")) {
                    const [left, operator, right] = condition.split(/(>=|<=|>|<|==)/).map(part => part.trim());
                    
                    const leftValue = isNaN(left) ? variables[left] : parseInt(left);
                    const rightValue = isNaN(right) ? variables[right] : parseInt(right);

                    if (leftValue !== undefined && rightValue !== undefined) {
                        let result = false;
                        switch (operator) {
                            case ">": result = leftValue > rightValue; break;
                            case "<": result = leftValue < rightValue; break;
                            case ">=": result = leftValue >= rightValue; break;
                            case "<=": result = leftValue <= rightValue; break;
                        }
                        if (result) {
                            ptf(`Condición '${condition}' es verdadera.`);
                        } else {
                            ptf(`Condición '${condition}' es falsa.`);
                        }
                    } else {
                        ptf(`Error: Variable no definida en la condición '${condition}'.`);
                    }
                }
            }
        }
    }

    // Ejecutar el código
    evaluateCode(code);
});
