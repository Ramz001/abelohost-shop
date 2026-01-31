import Link from 'next/link'
import styles from './contacts.module.scss'
import { contactLinks } from '@widgets/header/consts/contact-links'

const Contacts = () => {
  return (
    <section className={styles.wrapper}>
      {contactLinks.map(({ href, icon: Icon, text }) => (
        <Link key={href} href={href} className={styles.link}>
          <Icon className={styles.icon} />
          <span className={styles.title}>{text}</span>
        </Link>
      ))}
    </section>
  )
}

export default Contacts
