import CustomContainer from "@/components/ui/custom_container/custom_container";
import styles from "./header.module.scss";
import { Image } from "react-bootstrap";
import { useEffect, useState } from "react";
import Link from "next/link";
import CustomButton from "@/components/ui/custom_button/custom_button";
import { useRouter } from "next/router";
import { List } from "react-bootstrap-icons";
import HeaderDrawer from "./header-drawer/header-drawer";

const Header = ({ pages }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window) {
        setIsScrolled(window.scrollY > 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  const router = useRouter();
  return (
    <header className={`${styles.header} ${isScrolled && styles.scrolled}`}>
      <HeaderDrawer show={showDrawer} setShow={setShowDrawer} pages={pages} />
      <CustomContainer>
        <div className={styles.hWrap}>
          <Image fluid src="/images/logo/logo.png" alt="logo" width={50} />
          <nav>
            {pages.map((page) => (
              <Link key={page.name} href={page.href}>
                <span
                  className={
                    router.pathname === page.href ? styles.active : "inactive"
                  }
                >
                  {page.name.toUpperCase()}
                </span>
              </Link>
            ))}

            <CustomButton>FREE QUOTE</CustomButton>
          </nav>
          <List
            className={styles.menuIcon}
            onClick={() => {
              setShowDrawer(true);
            }}
          />
        </div>
      </CustomContainer>
    </header>
  );
};

export default Header;
