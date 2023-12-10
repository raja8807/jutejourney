import CustomButton from "@/components/ui/custom_button/custom_button";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./header-drawer.module.scss";
import SocialLinks from "@/components/ui/social_links/social_links";

const { Offcanvas, Image } = require("react-bootstrap");

const HeaderDrawer = ({ show, setShow, pages }) => {
  const router = useRouter();
  return (
    <Offcanvas show={show} onHide={() => setShow(false)} placement="end">
      <Offcanvas.Header closeButton>
        <Image fluid src="/images/logo/logo-full.png" alt="logo" width={150} />
      </Offcanvas.Header>
      <Offcanvas.Body className={styles.drawBody}>
        {
          <nav>
            {pages.map((page) => (
              <Link
                key={page.name}
                href={page.href}
                className={
                  router.pathname === page.href ? styles.active : "inactive"
                }
                onClick={()=> setShow(false)}
              >
                <span>{page.name.toUpperCase()}</span>
              </Link>
            ))}
          </nav>
        }
        <br />
        <br />
        <div className={styles.btn}>
          <CustomButton type={2}>FREE QUOTE</CustomButton>
          <SocialLinks header/>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default HeaderDrawer;
