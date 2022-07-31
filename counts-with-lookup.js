let data = [{ id: 332, tech: 'bob', Date: '2022-07-25', dateID: 0 }, { id: 342, tech: 'bob', Date: '2022-07-25', dateID: 1 }, { id: 344, tech: 'bob', Date: '2022-07-26', dateID: 2 }, { id: 335, tech: 'bob', Date: '2022-07-26', dateID: 3 }, { id: 334, tech: 'bob', Date: '2022-07-29', dateID: 4 }]

//using reduce
const {counts,result} = data.reduce(({counts,result},{Date,...rest}) => {
  counts[Date]??=0
  const dateID = counts[Date]++
  return {result:[...result, {...rest,Date,dateID}], counts}
},{counts:{},result:[]})

console.log(result)


let data2 = [{ id: 332, tech: 'bob', Date: '2022-07-25', dateID: 0 },{ id: 342, tech: 'bob', Date: '2022-07-25', dateID: 1 },{ id: 344, tech: 'bob', Date: '2022-07-26', dateID: 2 },{ id: 335, tech: 'bob', Date: '2022-07-26', dateID: 3},{ id: 334, tech: 'bob', Date: '2022-07-29', dateID: 4 }]

// solution using map
const counts2 = {}
const result2 = data2.map(({Date,...rest}) => {
  counts2[Date]??=0
  return {...rest,Date,dateID:counts2[Date]++}
})

console.log(result2)
