import styles from './TimetableSection.module.css';

function TimetableSection() {
    return <section className={styles.timetableSection}>
        <h2>Nabożeństwa i spotkania</h2>
        <div className={styles.timetableCon}>
            <article>
                <h3>Msze święte</h3>
                <dl>
                    <dt>Dzień powszedni</dt>
                    <dd>17.30, 18.00</dd>
                    <dt>Niedziela, uroczystości</dt>
                    <dd>8.30, 10.00, 11.30, 15.00</dd>
                    <dt>Godzinki NMP Niepokalanej</dt>
                    <dd>08.00</dd>
                    <dt>Koronka do Miłosierdzia Bożego</dt>
                    <dd>14.45</dd>
                </dl>
            </article>
            <article>
                <h3>Nabożeństwa</h3>
                <dl>
                    <dt>Adoracja Najświętszego Sakramentu</dt>
                    <dd>Czwartek: 18.30 - 21.00 - prowadzenie Grupy Parafialne</dd>
                    <dt>I Piątek miesiąca</dt>
                    <dd>17.00 i Msza św. o 18.00</dd>
                    <dt>I Sobota miesiąca</dt>
                    <dd>17.30 i Msza św. o 18.00</dd>
                    <dt>Msza Św. wotywna do Ducha Świętego w intencji Ojczyzny o Polskę zgodną z Wolą Bożą i katecheza
                    </dt>
                    <dd>I Poniedziałek miesiąca: 18.00</dd>
                    <dt>Nabożeństwo i Msza Św. wotywna do Miłosierdzia Bożego</dt>
                    <dd>III Piątek miesiąca: 17.30</dd>
                    <dt>Majowe i październikowe</dt>
                    <dd>17.30, w niedzielę 14.30</dd>
                </dl>
            </article>
            <article>
                <h3>Spotkania</h3>
                <dl>
                    <dt>Msza św. z konferencją formacyjną dla wszystkich Grup Parafialnych</dt>
                    <dd>Czwartek godz. 18.00</dd>
                    <dt>Koła Żywego Różańca</dt>
                    <dd>I Niedziela miesiąca: 08.30</dd>
                    <dt>Ruch Rodzin Nazaretańskich</dt>
                    <dd>III Piątek miesiąca: 18.30</dd>
                    <dt>Bractwo Przenajświętszej Krwi</dt>
                    <dd>Czwartek: 16.30</dd>
                    <dt>Wojownicy Maryi</dt>
                    <dd>I Czwartek: 18.00</dd>
                    <dt>Wspólnota Św. Jakuba - dla osób uzależnionych</dt>
                    <dd>Piątek: 16.00</dd>
                    <dt>Wreszcie żyć - dla osób uzależnionych i współuzależnionych</dt>
                    <dd>Niedziela: 16.00</dd>
                    <dt>Ministranci</dt>
                    <dd>Sobota: 9.15</dd>
                    <dt>Schola</dt>
                    <dd>Niedziela: 11.00</dd>
                </dl>
            </article>
            <article>
                <h3>Kancelaria</h3>
                <dl>
                    <dt>Dni powszednie</dt>
                    <dd>18.30</dd>
                </dl>
            </article>
        </div>
    </section>
}

export default TimetableSection;