import Gutter from '@shared/ui/gutter'
import Contacts from '../contacts'
import styles from './top-bar.module.scss'
import AuthSection from '../auth-section'

const TopBar = () => {
  return (
    <section className={styles.container}>
      <Gutter>
        <div className={styles.wrapper}>
          <Contacts />
          <AuthSection />
        </div>
      </Gutter>
    </section>
  )
}

export default TopBar
