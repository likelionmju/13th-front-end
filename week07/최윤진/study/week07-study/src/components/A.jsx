function A(props) {
  return (
    <div>
      <input value={props.value} onChange={props.onChange} placeholder="입력" />
    </div>
  );
}
export default A;
