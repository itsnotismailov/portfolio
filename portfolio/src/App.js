function App() {
  const likes = 5;

  function inc() {
    likes += 1;
    console.log(likes);
  }
  
  return (
    <div className="App">

      <h1>{likes}</h1>

      <button onClick={inc}>+</button>
      <button onClick={() => likes -= 1}>-</button>
    </div>
  );
}

export default App;
