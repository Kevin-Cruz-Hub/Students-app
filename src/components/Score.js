function Score(props) {
    // console.log(props)
    const {date, score} = props.info;
  return (
    <div>
      <p>Date:{date} || Score: {score}</p>
    </div>
  )
}
export default Score;