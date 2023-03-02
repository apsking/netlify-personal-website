import styles from './Footer.module.css'

const routes = [
  {
    route: '/',
    title: 'Home'
  },
  {
    route: '/projects',
    title: 'Projects'
  }
]

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <ul>
        {routes.map(({ route, title }) => (
          <li>
            <a href={route}>{title}</a>
          </li>
        ))}
        </ul>
      </footer>
    </>
  )
}
