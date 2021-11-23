import Link from 'next/link';
import cn from 'classnames';
import { useRouter } from 'next/router';
import { NAVIGATION } from '../lib/constants';
import styles from './layout.module.css';
import Footer, { HostedByVercel } from './footer';

export default function Layout({ children, className, hideNav, layoutStyles }) {
  const router = useRouter();
  const activeRoute = router.asPath;

  return (
    <>
      <div className={styles.background}>
        <header className={cn(styles.header)}>
          {NAVIGATION.map(({ name, route }) => (
            <Link key={name} href={route}>
              <a
                className={cn(styles.tab, {
                  [styles['tab-active']]: activeRoute.startsWith(route),
                })}
              >
                {name}
              </a>
            </Link>
          ))}
        </header>

        <div className="flex-1 px-20 lg:pr-60 md:pr-5 bg-gray-50">
          <main className={styles.main}>
            <div className={cn(styles.full, className)}>{children}</div>
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
}
