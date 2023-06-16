import Head from 'next/head'
import {Inter} from 'next/font/google'
import Banner from '../components/common/Banner';
import CustomerExpectation from '../components/sections/CustomerExpectation';
import OurBenefits from '../components/sections/OurBenefits';
import Testimonials from '../components/sections/Testimonial2';
import Evidence from '../components/sections/Evidence';
import FAQ from '../components/sections/FAQ_wovideo';
import holdingLaptop from '../assets/images/holding-laptop-3.png';
import emptyHall from '../assets/images/empty-hall.png';
import faqSeoSectionData from '../data/faqSeoSectionData';
import FramerMotionAnimation from '../components/common/FramerMotionAnimation';

const inter = Inter({subsets: ['latin']})

export default function AGB() {
    return (
        <>
            <Head>
                <title>AGB | SH Digital</title>
                <meta name="description"
                      content={`AGB | SH Digital`}/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className="terms-and-conditions-page">
                <Banner arrow={true} bg={holdingLaptop}>
                    <h1 className="banner-heading-lg text-white">
                        AGB

                    </h1>

                </Banner>

                <br/><br/>
                <section id="datenschutz" className="section-wrapper keywords pt-50">
                    <div className="container">

                        <div>
                            <h1 className="title">Allgemeine Geschäftsbedingungen von SH Digital / Version
                                01.01.2021</h1>

                            <div className="block">
                                <h2>1. Allgemein</h2>
                                <p>1.1 Geltungsbereich – sh-digital.ch tritt in der Öffentlichkeit unter der Bezeichnung
                                    SH Digital auf. Dabei handelt es sich um ein Angebot von SH Digital, Widenacker 30,
                                    8525 Neunforn. Im Folgenden wird ausschliesslich die Bezeichnung SH Digital
                                    verwendet. Die AGB’s von SH Digital gelten auch für weitere von SH Digital erbrachte
                                    Dienstleistungen und bereitgestellte Produkte.</p>
                                <p>1.2 Sämtliche Korrespondenz ist an SH Digital unter agentur@sh-digital.ch per E-Mail
                                    oder per Telefon an die unter Kontakt angegebene Nummer zu richten.</p>
                                <p>1.3 Allgemeine Bestimmungen – Sollten einzelne Bestimmungen dieser
                                    Geschäftsbedingungen unwirksam sein oder werden, so bleibt die Wirksamkeit aller
                                    übrigen Bestimmungen davon unberührt, und der Vertrag hat weiterhin Bestand. Die
                                    unwirksame Regelung ist durch eine Regelung zu ersetzen, die dem Zweck der
                                    unwirksamen Regelung am nächsten kommt. Gleiches gilt im Falle von Regelungslücken.
                                    Diese Geschäftsbedingungen unterliegen ausschliesslich schweizerischem Recht, unter
                                    Ausschluss des Kollisionsnormen des internationalen Privatrechts. Gerichtsstand ist
                                    am Sitz von SH Digital.</p>
                                <p>1.4 Nimmt der Vertragspartner über SH Digital oder ohne Mitwirkung deren auch
                                    Dienstleistungen von Dritten in Anspruch, ist der Vertragspartner für die Einhaltung
                                    dieser Nutzungsbestimmungen durch die Drittanbieter selber verantwortlich und kann
                                    im Schadensfall sowie der unsachgemässen, zweckentfremdenden Anwendung direkt
                                    haftbar gemacht werden.</p>
                                <p>1.5 Die Gültigkeit dieser AGB bleibt auch für zukünftige Dienstleistungsverträge
                                    bestehen. Es befindet sich jeweils eine gültige Fassung der aktuellen AGB auf der
                                    Firmenwebseite, wie auch den Vertragsunterlagen angefügt.</p>
                            </div>

                            <div className="block">
                                <h2>2. Rechte und Pflichten</h2>
                                <p>2.1 Responsiveness: SH Digital verwendet zum Zeitpunkt der Erstellung einer Webseite
                                    ausschliesslich Versionen, die mit den Marktführenden Browsern kompatibel sind. Das
                                    Anpassungen der Webseite an neue Versionen ist nicht kostenlos und kann in Form
                                    einer
                                    Wartung separat dazugebucht werden. Diese Leistung ist in den monatlichen Kosten
                                    der <a
                                        title="Webseiten Wartung unserer Web Design Agentur"
                                        href="{% url 'web_design' %}">Webseite
                                        Wartung unserer Web Design Agentur</a>, sofern der Aufwand angemessen ist,
                                    inbegriffen. Bei veralteten oder nicht gängigen Technologien und/oder
                                    Browserversionen,
                                    welche wenig Marktanteil in der Schweiz haben, kann kein browserkompatibles Layout
                                    garantiert werden.</p>
                                <p>2.2 Server: Die Informationen bezüglich der Wahl des Serveranbieters finden Sie
                                    unter <a
                                        title="Webdesign FAQ" href="{% url 'web_design' %}#webdesignfaq">Webdesign
                                        FAQ</a>. Die
                                    Server-Administration liegt ausschliesslich in den Händen von SH Digital. Ein Umzug
                                    von
                                    einem bestehenden Hosting muss vom Kunden explizit gewünscht werden, wobei die
                                    Sorgfaltspflicht und Verantwortung für die Weiterführung allfälliger E-Mail Accounts
                                    und
                                    bezüglich Datenübertragung beim Kunden liegen.</p>
                                <p>2.3 Websuche: Im Zuge von Linkbuilding meldet SH Digital die Webseite jedes Kunden
                                    bei
                                    verschiedenen Webkatalogen, Verzeichnissen und sonstigen Blogs an. Das Ranking in
                                    den
                                    Suchmaschinen kann nicht garantiert werden und dem Kunden stehen keinerlei
                                    Platzierungen
                                    in der Suchmaschine zu. Das Ranking ist von zahlreichen Faktoren abhängig, auf die
                                    SH
                                    Digital keinen Einfluss hat. Der Kunde anerkennt, dass SH Digital die Methoden der
                                    Suchmaschinenoptimierung nicht offenlegt, die darin enthaltende Massnahmen und das
                                    Know-how der Mitarbeitenden ist geistiges Eigentum von SH Digital. SH Digital
                                    entscheidet im Einzelfall, wie die Suchmaschinenoptimierung umgesetzt wird. Auf
                                    Kundenwunsch hin zusätzlich getätigte Massnahmen können kostenpflichtig sein.</p>
                                <p>2.4 Eigenwerbung: Insofern nicht ausdrücklich anders vereinbart, erklärt sich der
                                    Kunde
                                    damit einverstanden, dassSH Digital die für den Kunden erstellten Grafiken,
                                    Webseiten
                                    etc. bei Bedarf als Referenz in der eigenen Webseite aufnimmt. Der Kunde gestattet
                                    SH
                                    Digital einen Link auf die eigene Webseite anzubringen.</p>
                                <p>2.5 Urheberrechte: Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos
                                    oder
                                    anderen Dateien auf dieser Website, gehören ausschliesslich SH Digital oder den
                                    speziell
                                    genannten Rechteinhabern. Für die Reproduktion jeglicher Elemente ist die
                                    schriftliche
                                    Zustimmung des Urheberrechtsträgers im Voraus einzuholen. Darunter fallen
                                    insbesondere
                                    alle textlichen, fotografischen,grafischen und sonstigen Erzeugnisse, welche von SH
                                    Digital hervorgebracht wurden. Deren Weiterverwendung bedarf einer ausdrücklichen,
                                    einzelfallbezogenen schriftlichen Genehmigung durch SH Digital.</p>
                                <p>2.6 Schadenersatz: SH Digital wird jedes Kundenprojekt mit üblicher Sorgfalt
                                    ausführen
                                    und verpflichtet sich bei Vorliegen relevanter Mängel zur kostenlosen Nachbesserung.
                                    Bei
                                    Fehlschlagen der Nachbesserung (insbesondere, wenn eine solche nicht oder nur mit
                                    unzumutbar grossem Aufwand möglich wäre) kann der Kunde, ausser im Fall von Vorsatz
                                    oder
                                    grober Fahrlässigkeit keinen Schadensersatzanspruch geltend machen.</p>
                                <p>2.7 Haftungsausschluss: SH Digital übernimmt keinerlei Gewähr hinsichtlich der
                                    inhaltlichen Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und
                                    Vollständigkeit
                                    der Informationen. Haftungsansprüche gegen SH Digital wegen Schäden materieller oder
                                    immaterieller Art, welche aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der
                                    veröffentlichten Informationen, durch Missbrauch derVerbindung oder durch technische
                                    Störungen entstanden sind, werden ausgeschlossen. Alle Angebote sind unverbindlich.
                                    SH
                                    Digital behält es sich ausdrücklich vor, Teile der Seiten oder das gesamte Angebot
                                    ohne
                                    besondere Ankündigung zu verändern, zu ergänzen, zu löschen oder die
                                    Veröffentlichung
                                    zeitweise oder endgültig einzustellen.</p>
                                <p>2.8 Datenschutz: Sofern in einem Projekt oder einem Mandat nicht etwas anderes
                                    vereinbart
                                    wurde, gelten die Datenschutzbestimmungen von SH Digital unter <a
                                        title="Datenschutz SH Digital"
                                        href="{% url 'datenschutz' %}">www.sh-digital.ch/datenschutz</a></p>
                                <p>2.9 Subunternehmer: SH Digital ist berechtigt für die Erstellung des Werkes oder die
                                    Erbringung von Dienstleistungen jederzeit Subunternehmer mit Teilleistungen zu
                                    beauftragen. Vertragliche Beziehungen zwischen dem Subunternehmer und dem
                                    Vertragspartner entstehen nicht. Im Verhältnis zum Vertragspartner sind die von SH
                                    Digital eingeschalteten Subunternehmer Erfüllungsgehilfen. </p>
                            </div>

                            <div className="block">
                                <h2>3. Service und Kunde </h2>
                                <p>3.1 Erstberatung: Die erste Kontaktaufnahme / Offertstellung ist kostenlos und
                                    unverbindlich für beide Parteien, sofern diese per Telefon oder Video-Call
                                    stattfindet.
                                    Vorort Beratungen werden je nach Distanz mit einer kleinen Gebühr von CHF 150.--
                                    verrechnet. Diese Pauschale ist schweizweit bis 200km von unserem Standort. Ab 200km
                                    verrechnen wir einen Aufschlag von CHF 100.--.</p>
                                <p>3.2 Support: Der Kunde hat im branchenüblichen Umfang Anspruch auf einen
                                    telefonischen
                                    und schriftlichen Support. SH Digital behält sich vor, aufwendige Anpassungen zum
                                    üblichen oder reduzierten Stundenansatz in Rechnung zu stellen. SH Digital ist nicht
                                    verpflichtet, Support-Leistungen zu erbringen, wenn solche mit unangemessenem
                                    Aufwand
                                    verbunden sind. </p>
                                <p>3.3 Inhalt: Kunden mit einem Content Management System können Inhalte auf der
                                    Webseite
                                    selbständig bearbeiten. Der Kunde ist selbst für diese Inhaltsveränderungen
                                    zuständig
                                    und allfällige Wiederherstellungskosten aufgrund unsachgemässer Anwendung,
                                    insbesondere
                                    bei Datenverlust, werden von SH Digital in Rechnung gestellt. </p>
                                <p>3.4 Mitwirkungspflicht: Der Kunde ist verpflichtet, sich aktiv an der Fertigstellung
                                    der
                                    Webseite zu beteiligen. Kunden verpflichten sich, alles zur Aufschaltung der
                                    Webseite
                                    benötigte Material in einem Zeitraum von drei Monaten zu liefern, insofern nicht
                                    anders
                                    schriftlich vermerkt ist. Für den Fall, dass der Kunde dieser Obliegenheit nicht
                                    nachkommt, verpflichtet er sich, die vollständigen Erstellungskosten zu begleichen.
                                    Dies
                                    gilt auch für den Fall, dass schriftlich vereinbart wurde, dass eine (Teil-)Zahlung
                                    erst
                                    bei Aufschaltung erfolgt. Dem Kunden ist eine angemessene Frist zur Nachlieferung
                                    des
                                    offenen Materials zu gewähren, wobei während dieser Zeit die Rechnung ausgesetzt
                                    wird.
                                    Die angemessene Frist zur Nachlieferung wird in der Regel auf 30 Tage angesetzt.</p>
                                <p>3.5 Gestaltung: Die Design-Grundlage und damit Aufwandgrundlage bildet das bei
                                    Vertragsunterzeichnung vorgezeigte Layout insofern vorhanden. Sollte es nach
                                    Vertragsunterzeichnung zu kundenseitig gewünschten Anpassungen kommen, liegt es im
                                    Ermessen von SH Digital freiwillige Kulanzanpassungen auszuführen. Allfällige
                                    Anpassungswünsche sind innert 7 Tagen ab Online-Schaltung der Webseite
                                    anzubringen.</p>
                                <p>3.6 Copyright: Der Kunde ist verpflichtet, Texte, das für Grafikdesign zur Verfügung
                                    gestellte Material sowie sonstige Inhalte wie Audio- und Bilddaten auf eventuell
                                    bestehende Urheber- und Copyrightrechte zu überprüfen und eventuell notwendige
                                    Erlaubnisse zur Verwendung hierfür einzuholen. Der Kunde trägt somit jede
                                    Verantwortung
                                    für die von ihm beigebrachten Inhalte jeder Art, und damit auch die Haftung für
                                    Urheberrechts- und Copyright-Verletzungen. Davon ausgenommen sind Inhalte, die SH
                                    Digital beschafft hat. Der Kunde stellt SH Digital von allen Ansprüchen frei, die
                                    Dritte
                                    gegen SH Digital erhebt wegen eines Verhaltens, für das der Kunde nach dem Vertrag
                                    die
                                    Verantwortung bzw. Haftung trägt. Der Kunde trägt auch sämtliche etwaige
                                    Rechtsverfolgungskosten.</p>
                                <p>3.7 Lieferverzug: Liefertermine werden wenn möglich von SH Digital eingehalten.
                                    Sollte es
                                    in Ausnahmefällen nicht möglich sein, ein Projekt innerhalb der vereinbarten Frist
                                    zu
                                    liefern, darf SH Digital eine angemessene Nachlieferzeit verlangen. SH Digital
                                    haftet
                                    nicht für allfällige aus einem Verzug entstehende Schäden und Folgeschäden, dies
                                    gilt
                                    insbesondere auch bei Leistungen, in welche Drittparteien einbezogen sind.</p>
                                <p>3.8 Kein Rückgaberecht: Es besteht in der Regel kein Rückgaberecht oder eine
                                    Geld-Zurück-Garantie.</p>
                                <p>3.9 Login-Daten: Die Zugangsdaten für die von SH Digital bereitgestellten Webseiten,
                                    Tools, etc. sind sorgfältig aufzubewahren und die Herausgabe erfolgt auf Risiko des
                                    Kunden.</p>
                            </div>

                            <div className="block">
                                <h2>4. Preise und Zahlung </h2>
                                <p>4.1 Preise: SH Digital hat das Recht, den Preis jederzeit zu ändern. Es gilt der
                                    Preis,
                                    der zum Zeitpunkt der Bestellung publiziert ist. Preisänderungen, die nach der
                                    Bestellung erfolgt sind, werden nicht berücksichtigt. Alle Preise von SH Digital
                                    verstehen sich inkl. Mehrwertsteuer (MWSt.). Fallen die Leistungen ausserhalb der
                                    Schweiz an,
                                    werden sämtliche Dienstleistungen ohne MWST in Rechnung gestellt. Für die MWST
                                    Verrechnung ausserhalb der Schweiz gilt die MWST Übernahme der Steuerschuldnerschaft
                                    nach der jeweils hiesigen Gesetzgebung des Landes. Technische Änderungen, Irrtümer
                                    und
                                    Druckfehler bleiben vorbehalten.</p>
                                <p>4.2 Vergütung: Für die Vergütung ist der mit dem Vertragspartner jeweils vereinbarte
                                    Preis massgebend. Fehlt eine
                                    solche Vereinbarung, gilt CHF 150.-- als Stundenansatz. Sofern nicht abweichend
                                    vereinbart, erfolgt die Zahlung im Falle von Dienstleistungen in zwei Teilzahlungen.
                                    Die
                                    erste Zahlung in Höhe von 50% der Auftragssumme nach Auftragserteilung, die
                                    restliche
                                    Vergütung nach Übergabe des Werkes, bzw. erfolgter Auftragsabwicklung. SH Digital
                                    ist berechtigt, die Arbeiten an dem Produkt oder der Dienstleistung einzustellen,
                                    solange der Vertragspartner mit einer Teilzahlung in Verzug ist.</p>
                                <p>4.3 Rechnungen: Rechnungsbeträge zugunsten der SH Digital sind innerhalb von 15 Tagen
                                    nach Erhalt der
                                    Rechnung ohne jeglichen Abzug fällig, sofern keine andere Zahlungsvereinbarung
                                    vermerkt
                                    wurde.
                                    Nach Ablauf dieser Frist fällt der Vertragspartner in Zahlungsverzug</p>
                                <p>4.4 Lizenzen: Sind für Erbringung der Dienstleistung Drittsoftware oder Lizenzen
                                    notwendig, sind diese durch den
                                    Vertragspartner zur Verfügung zu stellen. Werden entsprechende Lizenzen nicht zur
                                    Verfügung gestellt, ist SH Digital berechtigt, die entstehenden Lizenzkosten und
                                    Mehraufwand dem Vertragspartner in Rechnung zu stellen</p>
                                <p>4.5 Fristlose Kündigung: SH Digital behält sich das Recht einer fristlosen Kündigung
                                    vor,
                                    wenn der Vertragspartner seine Zahlungen einstellt oder über den Vertragspartner ein
                                    Insolvenzverfahren eröffnet wird oder ein massives Risiko einer Zahlungsunfähigkeit
                                    des
                                    Vertragspartners besteht.</p>
                            </div>

                            <div className="block">
                                <h2>5. Mitarbeiterschutz und Abwerbeverbot</h2>
                                <p>5.1 Mitarbeiter: Der Vertragspartner verpflichtet sich, weder unmittelbar noch
                                    mittelbar
                                    Mitarbeiter von SH Digital oder von ihr eingesetzte Dritte abzuwerben und direkte
                                    Vertragsbeziehungen zu ihnen zu begründen. Vorstehendes Abwerbungsverbot gilt mit
                                    Vertragsschluss und wirkt fort für die Dauer von einem Jahr ab Beendigung der
                                    Vertragsbeziehung.</p>
                                <p>5.2 Vertragsstrafe: Verletzt der Vertragspartner diese Verpflichtung, so zahlt er in
                                    jedem Falle der Verletzung eine Vertragsstrafe in Höhe von CHF 100000.00. Das Recht,
                                    Schadensersatz und/oder Unterlassung zu verlangen bleibt hiervon unberührt. Die
                                    Vertragsstrafe wird auf einen etwaigen Schadensersatzanspruch angerechnet.</p>
                            </div>

                            <div className="block">
                                <h2>6. Anwendbares Recht / Gerichtsstand</h2>
                                <p>6.1 Schweizer Recht: Anwendbar ist ausschliesslich schweizerisches Recht. Die
                                    Bestimmungen des Übereinkommens der
                                    Vereinten Nationen über die CSIG (Convention on Contracts for the International Sale
                                    of
                                    Goods), auch bekannt unter dem Wiener Kaufrecht sind wegbedungen.</p>
                                <p>6.2 Streitfall: Kommt es im Laufe oder nach Beendigung eines Auftrages zu einem
                                    Streitfall bezüglich des beauftragten Projektes, so ist vor der Einleitung eines
                                    gerichtlichen Verfahrens ein aussergerichtliches Mediationsverfahren zu durchlaufen.
                                    Bei
                                    Streitigkeiten in Fragen der Qualitätsbeurteilung oder bei der Höhe der Honorierung
                                    werden externe Gutachten erstellt um möglichst eine außergerichtliche Einigung zu
                                    erzielen. Die Kosten hierfür werden vom Vertragspartner getragen.</p>
                                <p>6.3 Gerichtsstand: Ausschliesslicher Gerichtsstand ist der Sitz der SH Digital, bzw.
                                    ihrer Rechtsnachfolgerin</p>
                            </div>
                        </div>

                    </div>
                </section>


            </main>
        </>
    )
}
