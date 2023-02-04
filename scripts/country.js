import { PrismaClient } from '@prisma/client'
import csv from 'csv-parser'
import fs from 'fs'




export async function countToCode(name) {
    let countryCode;
    await new Promise((resolve, reject) => {
        fs.createReadStream('./countries.csv')
            .pipe(csv())
            .on('data', async (row) => {
                if (row.name === name) {
                    countryCode = row["country-code"];
                    resolve();
                }
            }).on("close",()=>{
                reject()
                
            })
    }).catch((error) => {
        console.log(error);
    });
    return countryCode;
}

