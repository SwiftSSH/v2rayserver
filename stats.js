const { spawnSync } = require('child_process');

function getTrafic(type, tag, reset = false) {
    let output = {downlink: 0, uplink: 0 };
    ["downlink", "uplink"].forEach((bound) => {
        let command = spawnSync(`./bin/v2ctl`, [
            "api", "--server=127.0.0.1:10085", 
            "StatsService.QueryStats", 
            `pattern: "${type}>>>${tag}>>>traffic>>>${bound}"`, `reset: ${reset}`
        ]);
        try { 
            let result = command.stdout.toString()
            .split("\n");
            console.log(result)
            output[bound] = Number(result[2].replace(/\s/g, '')
            .split(":")[1] || 0);
        } catch(e) {}
    });

    return output;
}
