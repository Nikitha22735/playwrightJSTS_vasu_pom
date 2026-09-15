import fs from 'fs'
export function jsonData(filePath:String){
      let data = fs.readFileSync(filePath, 'utf-8')
     let parsedData = JSON.parse(data)
     return parsedData
}