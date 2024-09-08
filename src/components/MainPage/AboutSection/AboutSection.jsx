import styles from './AboutSection.module.css';

function AboutSection() {
    return <section id={"about"} className={styles.aboutSection}>
        <h2>Nasza parafia</h2>
        <div className={styles.firstInfoCon}>
            <q>
                Wiele osób zmaga się z pojęciem miłosierdzia. Miłosierdzie to Bóg, który nie
                daje nam tego, na co zasługujemy. Miłosierdzie przynosi bogatsze owoce niż
                surowa sprawiedliwość.
            </q>
            <p>
                50 lat po namalowaniu pierwszego obrazu Pana Jezusa Miłosiernego według
                wizji, jaką otrzymała Siostra Faustyna w Wilnie w 1934 roku Parafię
                Miłosierdzia Bożego w Radomiu erygował Ks. Bp Edward Materski 01 maja
                1984 roku. Kult Bożego Miłosierdzia w Polsce i na świecie zaczął się na
                większą skalę rozwijać w latach 80-tych XX wieku, kiedy na Stolicy Piotrowej
                zasiadł rodak świętej Faustyny – święty Jan Paweł II. W 1975 roku został
                złożony Akt oddania Polski Miłosierdziu Bożemu napisany przez bł. Michała
                Sopoćkę. I dziś także potrzebujemy wyobraźni miłosierdzia. Teraz dziękujemy
                Bogu śpiewając Te Deum laudamus – Ciebie Boga wysławiamy za 40 lat
                istnienia naszej Parafii i celebrowania miłosierdzia, którym nas Bóg obdarza.
            </p>
            <p style="display: none;">
                Miłosierdzia Bożego dodatkowe słowa żeby SEO się zgadzało, mam nadzieję, że nie
                będzie tego widać na stronie końcowej, pls
            </p>
        </div>
    </section>
}

export default AboutSection;