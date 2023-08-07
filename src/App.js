import StudentData from './StudentData';
import Student from './components/Student';
import styles from './Styles.module.css'
import './App.css';

function App() {
  // console.log(StudentData)
  return (
    <div className={styles.Main}>
      {
        StudentData? StudentData.map((info, index) => <Student info={info} key={index} />):<h3>No Data...</h3>
      }

    </div>
  );
}

export default App;
