import styles from './ContactPage.module.css';
import AnimatedMain from "../AnimatedMain/AnimatedMain.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBuildingColumns, faEnvelope, faLocationDot, faPhone, faUser} from "@fortawesome/free-solid-svg-icons";

function ContactPage() {
  return <AnimatedMain>
    <h2>Kontakt</h2>
    <div className={styles.contact}>
      <div className={styles.info}>
        <p>
          <FontAwesomeIcon icon={faUser}/>
          Proboszcz:<br/>
          Ks. kan. Bernard Kasprzycki
        </p>
        <a href="mailto:parafiamilosierdziaradom@gmail.com">
          <p>
            <FontAwesomeIcon icon={faEnvelope}/>
            parafiamilosierdziaradom@gmail.com
          </p></a>
        <a href="mailto:milosierdzieradom@op.pl">
          <p>
            <FontAwesomeIcon icon={faEnvelope}/>
            milosierdzieradom@op.pl
          </p>
        </a>
        <a href="tel:+48 729 853 670">
          <p>
            <FontAwesomeIcon icon={faPhone}/>
            729 853 670
          </p>
        </a>
        <p
          onClick={() => navigator.clipboard.writeText('60 1240 5703 1111 0010 3938 2792')}
          className={styles.copy}
        >
          <FontAwesomeIcon icon={faBuildingColumns}/>
          DIECEZJA RADOMSKA<br/>
          PARAFIA PW. MIŁOSIERDZIA BOŻEGO RADOM<br/>
          NIP: 948 17 42 701<br/>
          REGON: 040083621<br/>
          Konto: 60 1240 5703 1111 0010 3938 2792
        </p>
      </div>
      <div className={styles.map}>
        <a
          href="
                    https://www.google.com/maps/dir//51.3623437,21.0882837/@51.3624421,21.0182524,12z/data=!3m1!4b1!4m4!4m3!1m1!4e2!1m0"
          target="_blank" rel="noopener noreferrer"
        >
          <p>
            <FontAwesomeIcon icon={faLocationDot}/>
            Starokrakowska 144<br/>
            26-616 Radom
          </p>
        </a>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4982.424894708981!2d21.084033776442165!3d51.36239101259897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47185beb56e321dd%3A0x7e969c2238bce7c5!2sParafia%20Mi%C5%82osierdzia%20Bo%C5%BCego%20w%20Radomiu!5e0!3m2!1spl!2spl!4v1677250016624!5m2!1spl!2spl"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </AnimatedMain>;
}

export default ContactPage;