
const A_Components = ({ value, onChange }) => {
  return (
    <div className="A_Components">
      <input 
        type="text"
        value={value}
        onChange={onChange}
        placeholder="입력해주세요."
      />
    </div>
  );
};

export default A_Components;