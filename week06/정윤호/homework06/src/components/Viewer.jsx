const Viewer = ({value}) => {
    return (
      <div style={{ backgroundColor : "#f9f9f9", padding : 15, width: 500, height:100, marginBottom:15}}>
        <p>현재 카운트 :</p>
        <h2>{value}</h2>
      </div>
    );
  };
  
  export default Viewer;