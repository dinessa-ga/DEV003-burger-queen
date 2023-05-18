import styles from '@/styles/Home.module.css'



export default function Nav(props){

  return(
    <nav className={styles.NavbarItems}>
      <a className={`${styles.NavbarOptions} ${props.category ? styles.selected : ""}`} onClick={()=> props.setCategory(true)}  > DESAYUNOS </a>
      <a  className={`${styles.NavbarOptions} ${!props.category ? styles.selected : ""}`}onClick={()=> props.setCategory(false)}> ALMUERZOS </a>

    </nav>

  )
}

// onClick={()=> setCategory}