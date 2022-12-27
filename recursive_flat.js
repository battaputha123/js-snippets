const x  = [
  { name: '1', id: 1, nestedObject: [{ name: '2', id: 3 }] },
  { name: '3', id: 3 },
  {
    name: '4',
    id: 4,
    nestedObject: [
      { name: '5', id: 5, nestedObject: [{ name: '7', id: 7 }] },
      { name: '6', id: 6 },
    ],
  },
];


const g = (arr) => {
	return arr.reduce((acc,{name,id,nestedObject = []}) => {
    return [...acc,{name,id},...g(nestedObject)]
  }, [])
}
console.log(g(x))
