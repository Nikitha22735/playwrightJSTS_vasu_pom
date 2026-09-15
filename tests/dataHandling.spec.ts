import { test, expect } from '@playwright/test';
import fs from 'fs'
import { jsonData } from '../utils/jsonHandling';
import {parse} from 'csv-parse/sync'

test('handling json file', async()=>{
    // let data = fs.readFileSync('testData\\creds.json', 'utf-8')
    // let parsedData = JSON.parse(data)
    let parsedData = jsonData('testData\\creds.json')
    console.log(parsedData.positiveCreds.password)
})


test('handling csv file', async()=>{
    let data = fs.readFileSync('testData\\credentails.csv', 'utf-8')
    let parsedData: Array<object> = parse(data,{columns:true,skip_empty_lines:true})
    console.log(parsedData[1].username)

})

import XLSX from 'xlsx'
test('handling excel file @dh', async()=>{
    let workBook = XLSX.readFile('testData\\sample_creds.xlsx')
   let sheetInfo = workBook.Sheets['Sheet2']
   let data = XLSX.utils.sheet_to_json(sheetInfo)
   console.log(data)

})

