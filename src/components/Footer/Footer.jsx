import styles from './Footer.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF} from "@fortawesome/free-brands-svg-icons";
import {useDispatch} from "react-redux";
import {uiActions} from "../../store/uiSlice.js";
import emailJS from '@emailjs/browser';
import {useRef} from "react";

function Footer() {
    const dispatch = useDispatch();

    const form = useRef();

    function openPrivacyPolicy() {
        dispatch(uiActions.setModalContent({
            text: ' Strona wykorzystuje pliki cookies, co oznacza że będą one zapisane w pamięci Twojej przeglądarki.\n' +
                '             W każdym momencie możesz dokonać zmiany ustawień dotyczących cookies.'
        }));
        dispatch(uiActions.setModalState(true));
    }

    function openSuccessModal() {
        dispatch(uiActions.setModalContent({
            text: 'Wiadomość została wysłana pomyślnie!'
        }));
        dispatch(uiActions.setModalState(true));
    }

    function openErrorModal() {
        dispatch(uiActions.setModalContent({
            text: 'Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie.'
        }));
        dispatch(uiActions.setModalState(true));
    }

    function sendEmail(e) {
        e.preventDefault();

        emailJS.sendForm('service_milosierdzie', 'template_main', form.current).then(() => {
            openSuccessModal();
        }).catch(() => {
            openErrorModal();
        });

        e.target.reset();
    }

    return (
        <>
            <footer className={styles.footer}>
                <section className={styles.socjalSection}>
                    <a href="https://www.facebook.com/ParafiaMilosierdziaBozegowRadomiu" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebookF}/>
                    </a>
                </section>
                <section className={styles.contactFormSection}>
                    <h2>Napisz do nas!</h2>
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" name="imie" placeholder="Imię" required/>
                        <input type="email" name="email" placeholder="Email" required/>
                        <input type="text" name="tytul" placeholder="Tytuł" autoComplete="off" required/>
                        <textarea name="wiadomosc" placeholder="Treść" autoComplete="off" required></textarea>
                        <input type="submit" value="Wyślij"/>
                        <input type="reset" value="Wyczyść"/>
                    </form>
                </section>
                <button className={styles.privacyPolicyButton}
                        onClick={openPrivacyPolicy}>Polityka prywatności
                </button>
            </footer>
        </>
    );
}

export default Footer;