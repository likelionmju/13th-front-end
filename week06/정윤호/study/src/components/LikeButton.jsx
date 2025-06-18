const LikeButton = ({ counter, value, title }) => {
  const handleClick = () => {
    if (value >= 20) {
      alert("더 이상 누를 수 없어요")
      return
    }
    counter(value + 1)
  }

  return (
    <div>
        <h1>제목 : {title}</h1>
      <h1 style={{ color: value >= 10 ? 'red' : 'black' }}>
        좋아요 수 : {value}
      </h1>
      <button onClick={handleClick} disabled={value >= 20}>
        +
      </button>
    </div>
  )
}

export default LikeButton