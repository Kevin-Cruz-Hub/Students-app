import styles from '../Styles.module.css'
import Score from "./Score";

function Student(props) {
    // console.log(props)
    const {name, bio} = props.info;
    const Scores = props.info.scores
    // console.log(Scores)
  return (
    <div className={styles.Items} >
      <h2>{name}</h2>
      <p>{bio}</p>
      {
        Scores? Scores.map((score, index) => <Score key={index} info={score}/>):<h3>No Data...</h3>
      }
    </div>
  )
}
export default Student