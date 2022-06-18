
function App() {

  const data = [
    {
      nume: 'Alex',
      prenume: 'Mircea',
      age: 21,
    },
    {
      nume: 'Sonia',
      prenume: 'Sanja',
      age: 33,
    },
    {
      nume: 'Manson',
      prenume: 'George',
      age: 12,
    },
    {
      nume: 'Dorin',
      prenume: 'Zinga',
      age: 41,
    }
  ];

  const handleFilter = (e) => {

    const filtered = data.filter((item) => item.nume === e.target.value)
    console.log(filtered)
  }

  return (
    <div>
      <input type= 'text' placeholder='pula' onChange={handleFilter}/>
    </div>
  );
}

export default App;
