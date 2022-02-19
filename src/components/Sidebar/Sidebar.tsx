import styles from './Sidebar.module.scss'
import samanthaImg from '../../assets/png/samantha.png'


const sidebarNavLinks = ['dashboard', 'expenses', 'wallets', 'summary', 'accounts', 'settings']

export default function Sidebar(){

  
    return <>
    <aside className={styles.sidebar}>
        <div className={styles.sidebarContent}>
            <div className={styles.profileDetails}>
                <div className={styles.profileImageDiv}>
                    <img src={samanthaImg} alt="samantha" />
                    <p className={styles.notifications}>4</p>    
                </div> 
                <p className={styles.userName}>Samantha</p>
                <p className={styles.userEmail}>samantha@mail.com</p>  
            </div>

            <nav className={styles.sidebarNav}>
                <ul>
                    {sidebarNavLinks.map(
                        sidebarNavLink =>(
                    <li className={styles.sidebarNavItem} key={sidebarNavLink}>
                        <a className={styles.sidebarNavLink} 
                        href={ `/${sidebarNavLink} `} > 
                        { sidebarNavLink.charAt(0).toUpperCase() + sidebarNavLink.slice(1)}
                        
                        </a>
                    </li>

                        )
                    ) }
                </ul>
            </nav>
        </div>
    </aside>
    </>
}