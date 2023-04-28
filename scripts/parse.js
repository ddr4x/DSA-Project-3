import DamageOccurrence from './DamageOccurrenceTypes.js';
import * as fs from 'fs';
let map; //nic bind this as de_dust2 or de_inferno 

export function parseData(map) {
    const csv = fs.readFileSync(`data/${map}.csv`, 'utf-8');
    const rows = csv.split('\n').slice(1);
    const damageOccurrences = [];
    
    rows.forEach(row => {
        const columns = row.split(',');
        const name = columns[16];
        const hpDamage = parseInt(columns[11]);
        const armorDamage = parseInt(columns[12]);
        const hitbox = columns[15];
        let damageOccurrence = new DamageOccurrence(name, hpDamage, armorDamage, hitbox);
        damageOccurrences.push(damageOccurrence);
    });
    
    return damageOccurrences;
}

//this is here just to test, we can delete this later.
// print size of array



