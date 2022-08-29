import styles from "../styles/Toggle.module.css"
import { useGlobalContext } from "../hooks/DevjobContext"

const SwitchBtn = () => {
  const { switchChecked, setSwitchChecked } = useGlobalContext();

  return (
    <div className="w-16">
        <input type="checkbox" onChange={() => setSwitchChecked(!switchChecked)} checked={switchChecked} id="check1" className={styles.toggle} />
        <label className="w-16" for="check1"></label>
    </div>
  )
}

export default SwitchBtn