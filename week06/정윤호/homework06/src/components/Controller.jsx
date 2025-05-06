const Controller = ({ counter, value }) => {
    return (
      <div style={{ backgroundColor : "#f9f9f9", padding : 15, width:500}}>
        <button onClick={() => counter(value - 1)}>-1</button>
        <button onClick={() => counter(value - 10)}>-10</button>
        <button onClick={() => counter(value - 100)}>-100</button>
        <button onClick={() => counter(value + 100)}>+100</button>
        <button onClick={() => counter(value + 10)}>+10</button>
        <button onClick={() => counter(value + 1)}>+1</button>
      </div>
    );
  };
  
  export default Controller;