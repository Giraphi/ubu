/* eslint-disable tailwindcss/no-custom-classname */

import { NextPage } from "next"
import styled from "styled-components"

const StyledRoot = styled.div`
  padding: 50px;
  color: black !important;
  font-family: serif;

  a {
    color: black !important;
  }
`

const Datenschutz: NextPage = () => {
  return (
    <StyledRoot>
      <h2 id="dsg-general-controller">Verantwortlicher</h2>
      <p className={"pb-8"}>
        <span className="tsmcontroller">
          Raphael Höps
          <br />
          <ul className={"list-disc"}>
            <li className={"ml-8"}>hoeps[dot-symbol]raphael[at-symbol]gmail[dot-symbol]com</li>
            <li className={"ml-8"}>ubuimperator[dot-symbol]band[at-symbol]gmail[dot-symbol]com</li>
          </ul>
          (To make it more difficult for bots to read the e-mail address, we used [...] instead of real symbols Simply replace [at-symbol]
          with &quot;@&quot; and [dot-symbol] with &quot;.&quot;)
        </span>
      </p>
      <h2>Datenschutzerklärung</h2>
      <h3 id="dsg-general-intro"></h3>
      <p>
        Diese Datenschutzerklärung klärt Sie über die Art, den Umfang und Zweck der Verarbeitung von personenbezogenen Daten (nachfolgend
        kurz &ldquo;Daten&rdquo;) im Rahmen der Erbringung unserer Leistungen sowie innerhalb unseres Onlineangebotes und der mit ihm
        verbundenen Webseiten, Funktionen und Inhalte sowie externen Onlinepräsenzen, wie z.B. unser Social Media Profile auf (nachfolgend
        gemeinsam bezeichnet als &ldquo;Onlineangebot&ldquo;). Im Hinblick auf die verwendeten Begrifflichkeiten, wie z.B.
        &ldquo;Verarbeitung&rdquo; oder &ldquo;Verantwortlicher&rdquo; verweisen wir auf die Definitionen im Art. 4 der
        Datenschutzgrundverordnung (DSGVO). <br />
        <br />
      </p>
      <h3 id="dsg-general-datatype">Arten der verarbeiteten Daten</h3>
      <p>
        - Bestandsdaten (z.B., Personen-Stammdaten, Namen oder Adressen).
        <br />
        - Kontaktdaten (z.B., E-Mail, Telefonnummern).
        <br />
        - Inhaltsdaten (z.B., Texteingaben, Fotografien, Videos).
        <br />
        - Nutzungsdaten (z.B., besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten).
        <br />- Meta-/Kommunikationsdaten (z.B., Geräte-Informationen, IP-Adressen).
      </p>
      <h3 id="dsg-general-datasubjects">Kategorien betroffener Personen</h3>
      <p>
        Besucher und Nutzer des Onlineangebotes (Nachfolgend bezeichnen wir die betroffenen Personen zusammenfassend auch als
        &ldquo;Nutzer&rdquo;).
        <br />
      </p>
      <h3 id="dsg-general-purpose">Zweck der Verarbeitung</h3>
      <p>
        - Zurverfügungstellung des Onlineangebotes, seiner Funktionen und Inhalte.
        <br />
        - Beantwortung von Kontaktanfragen und Kommunikation mit Nutzern.
        <br />
        - Sicherheitsmaßnahmen.
        <br />
        - Reichweitenmessung/Marketing
        <br />
        <span className="tsmcom"></span>
      </p>
      <h3 id="dsg-general-terms">Verwendete Begrifflichkeiten </h3>
      <p>
        &ldquo;Personenbezogene Daten&rdquo; sind alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche
        Person (im Folgenden &ldquo;betroffene Person&rdquo;) beziehen; als identifizierbar wird eine natürliche Person angesehen, die
        direkt oder indirekt, insbesondere mittels Zuordnung zu einer Kennung wie einem Namen, zu einer Kennnummer, zu Standortdaten, zu
        einer Online-Kennung (z.B. Cookie) oder zu einem oder mehreren besonderen Merkmalen identifiziert werden kann, die Ausdruck der
        physischen, physiologischen, genetischen, psychischen, wirtschaftlichen, kulturellen oder sozialen Identität dieser natürlichen
        Person sind.
        <br />
        <br />
        &ldquo;Verarbeitung&rdquo; ist jeder mit oder ohne Hilfe automatisierter Verfahren ausgeführte Vorgang oder jede solche
        Vorgangsreihe im Zusammenhang mit personenbezogenen Daten. Der Begriff reicht weit und umfasst praktisch jeden Umgang mit Daten.
        <br />
        <br />
        &ldquo;Pseudonymisierung&rdquo; die Verarbeitung personenbezogener Daten in einer Weise, dass die personenbezogenen Daten ohne
        Hinzuziehung zusätzlicher Informationen nicht mehr einer spezifischen betroffenen Person zugeordnet werden können, sofern diese
        zusätzlichen Informationen gesondert aufbewahrt werden und technischen und organisatorischen Maßnahmen unterliegen, die
        gewährleisten, dass die personenbezogenen Daten nicht einer identifizierten oder identifizierbaren natürlichen Person zugewiesen
        werden.
        <br />
        <br />
        &ldquo;Profiling&rdquo; jede Art der automatisierten Verarbeitung personenbezogener Daten, die darin besteht, dass diese
        personenbezogenen Daten verwendet werden, um bestimmte persönliche Aspekte, die sich auf eine natürliche Person beziehen, zu
        bewerten, insbesondere um Aspekte bezüglich Arbeitsleistung, wirtschaftliche Lage, Gesundheit, persönliche Vorlieben, Interessen,
        Zuverlässigkeit, Verhalten, Aufenthaltsort oder Ortswechsel dieser natürlichen Person zu analysieren oder vorherzusagen.
        <br />
        <br />
        Als &ldquo;Verantwortlicher&rdquo; wird die natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, die allein
        oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet, bezeichnet.
        <br />
        <br />
        &ldquo;Auftragsverarbeiter&rdquo; eine natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, die
        personenbezogene Daten im Auftrag des Verantwortlichen verarbeitet.
        <br />
      </p>
      <h3 id="dsg-general-legalbasis">Maßgebliche Rechtsgrundlagen</h3>
      <p>
        Nach Maßgabe des Art. 13 DSGVO teilen wir Ihnen die Rechtsgrundlagen unserer Datenverarbeitungen mit. Für Nutzer aus dem
        Geltungsbereich der Datenschutzgrundverordnung (DSGVO), d.h. der EU und des EWG gilt, sofern die Rechtsgrundlage in der
        Datenschutzerklärung nicht genannt wird, Folgendes: <br />
        Die Rechtsgrundlage für die Einholung von Einwilligungen ist Art. 6 Abs. 1 lit. a und Art. 7 DSGVO;
        <br />
        Die Rechtsgrundlage für die Verarbeitung zur Erfüllung unserer Leistungen und Durchführung vertraglicher Maßnahmen sowie
        Beantwortung von Anfragen ist Art. 6 Abs. 1 lit. b DSGVO;
        <br />
        Die Rechtsgrundlage für die Verarbeitung zur Erfüllung unserer rechtlichen Verpflichtungen ist Art. 6 Abs. 1 lit. c DSGVO;
        <br />
        Für den Fall, dass lebenswichtige Interessen der betroffenen Person oder einer anderen natürlichen Person eine Verarbeitung
        personenbezogener Daten erforderlich machen, dient Art. 6 Abs. 1 lit. d DSGVO als Rechtsgrundlage.
        <br />
        Die Rechtsgrundlage für die erforderliche Verarbeitung zur Wahrnehmung einer Aufgabe, die im öffentlichen Interesse liegt oder in
        Ausübung öffentlicher Gewalt erfolgt, die dem Verantwortlichen übertragen wurde ist Art. 6 Abs. 1 lit. e DSGVO. <br />
        Die Rechtsgrundlage für die Verarbeitung zur Wahrung unserer berechtigten Interessen ist Art. 6 Abs. 1 lit. f DSGVO. <br />
        Die Verarbeitung von Daten zu anderen Zwecken als denen, zu denen sie ehoben wurden, bestimmt sich nach den Vorgaben des Art 6 Abs.
        4 DSGVO. <br />
        Die Verarbeitung von besonderen Kategorien von Daten (entsprechend Art. 9 Abs. 1 DSGVO) bestimmt sich nach den Vorgaben des Art. 9
        Abs. 2 DSGVO. <br />
      </p>
      <h3 id="dsg-general-securitymeasures">Sicherheitsmaßnahmen</h3>
      <p>
        Wir treffen nach Maßgabe der gesetzlichen Vorgabenunter Berücksichtigung des Stands der Technik, der Implementierungskosten und der
        Art, des Umfangs, der Umstände und der Zwecke der Verarbeitung sowie der unterschiedlichen Eintrittswahrscheinlichkeit und Schwere
        des Risikos für die Rechte und Freiheiten natürlicher Personen, geeignete technische und organisatorische Maßnahmen, um ein dem
        Risiko angemessenes Schutzniveau zu gewährleisten.
        <br />
        <br />
        Zu den Maßnahmen gehören insbesondere die Sicherung der Vertraulichkeit, Integrität und Verfügbarkeit von Daten durch Kontrolle des
        physischen Zugangs zu den Daten, als auch des sie betreffenden Zugriffs, der Eingabe, Weitergabe, der Sicherung der Verfügbarkeit
        und ihrer Trennung. Des Weiteren haben wir Verfahren eingerichtet, die eine Wahrnehmung von Betroffenenrechten, Löschung von Daten
        und Reaktion auf Gefährdung der Daten gewährleisten. Ferner berücksichtigen wir den Schutz personenbezogener Daten bereits bei der
        Entwicklung, bzw. Auswahl von Hardware, Software sowie Verfahren, entsprechend dem Prinzip des Datenschutzes durch Technikgestaltung
        und durch datenschutzfreundliche Voreinstellungen.
        <br />
      </p>
      <h3 id="dsg-general-coprocessing">Zusammenarbeit mit Auftragsverarbeitern, gemeinsam Verantwortlichen und Dritten</h3>
      <p>
        Sofern wir im Rahmen unserer Verarbeitung Daten gegenüber anderen Personen und Unternehmen (Auftragsverarbeitern, gemeinsam
        Verantwortlichen oder Dritten) offenbaren, sie an diese übermitteln oder ihnen sonst Zugriff auf die Daten gewähren, erfolgt dies
        nur auf Grundlage einer gesetzlichen Erlaubnis (z.B. wenn eine Übermittlung der Daten an Dritte, wie an Zahlungsdienstleister, zur
        Vertragserfüllung erforderlich ist), Nutzer eingewilligt haben, eine rechtliche Verpflichtung dies vorsieht oder auf Grundlage
        unserer berechtigten Interessen (z.B. beim Einsatz von Beauftragten, Webhostern, etc.). <br />
        <br />
        Sofern wir Daten anderen Unternehmen unserer Unternehmensgruppe offenbaren, übermitteln oder ihnen sonst den Zugriff gewähren,
        erfolgt dies insbesondere zu administrativen Zwecken als berechtigtes Interesse und darüberhinausgehend auf einer den gesetzlichen
        Vorgaben entsprechenden Grundlage. <br />
      </p>
      <h3 id="dsg-general-thirdparty">Übermittlungen in Drittländer</h3>
      <p>
        Sofern wir Daten in einem Drittland (d.h. außerhalb der Europäischen Union (EU), des Europäischen Wirtschaftsraums (EWR) oder der
        Schweizer Eidgenossenschaft) verarbeiten oder dies im Rahmen der Inanspruchnahme von Diensten Dritter oder Offenlegung, bzw.
        Übermittlung von Daten an andere Personen oder Unternehmen geschieht, erfolgt dies nur, wenn es zur Erfüllung unserer
        (vor)vertraglichen Pflichten, auf Grundlage Ihrer Einwilligung, aufgrund einer rechtlichen Verpflichtung oder auf Grundlage unserer
        berechtigten Interessen geschieht. Vorbehaltlich gesetzlicher oder vertraglicher Erlaubnisse, verarbeiten oder lassen wir die Daten
        in einem Drittland nur beim Vorliegen der gesetzlichen Voraussetzungen. D.h. die Verarbeitung erfolgt z.B. auf Grundlage besonderer
        Garantien, wie der offiziell anerkannten Feststellung eines der EU entsprechenden Datenschutzniveaus (z.B. für die USA durch das
        &ldquo;Privacy Shield&rdquo;) oder Beachtung offiziell anerkannter spezieller vertraglicher Verpflichtungen.
      </p>
      <h3 id="dsg-general-rightssubject">Rechte der betroffenen Personen</h3>
      <p>
        Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob betreffende Daten verarbeitet werden und auf Auskunft über diese
        Daten sowie auf weitere Informationen und Kopie der Daten entsprechend den gesetzlichen Vorgaben.
        <br />
        <br />
        Sie haben entsprechend. den gesetzlichen Vorgaben das Recht, die Vervollständigung der Sie betreffenden Daten oder die Berichtigung
        der Sie betreffenden unrichtigen Daten zu verlangen.
        <br />
        <br />
        Sie haben nach Maßgabe der gesetzlichen Vorgaben das Recht zu verlangen, dass betreffende Daten unverzüglich gelöscht werden, bzw.
        alternativ nach Maßgabe der gesetzlichen Vorgaben eine Einschränkung der Verarbeitung der Daten zu verlangen.
        <br />
        <br />
        Sie haben das Recht zu verlangen, dass die Sie betreffenden Daten, die Sie uns bereitgestellt haben nach Maßgabe der gesetzlichen
        Vorgaben zu erhalten und deren Übermittlung an andere Verantwortliche zu fordern. <br />
        <br />
        Sie haben ferner nach Maßgabe der gesetzlichen Vorgaben das Recht, eine Beschwerde bei der zuständigen Aufsichtsbehörde
        einzureichen.
        <br />
      </p>
      <h3 id="dsg-general-revokeconsent">Widerrufsrecht</h3>
      <p>Sie haben das Recht, erteilte Einwilligungen mit Wirkung für die Zukunft zu widerrufen.</p>
      <h3 id="dsg-general-object">Widerspruchsrecht</h3>
      <p>
        <strong>
          Sie können der künftigen Verarbeitung der Sie betreffenden Daten nach Maßgabe der gesetzlichen Vorgaben jederzeit widersprechen.
          Der Widerspruch kann insbesondere gegen die Verarbeitung für Zwecke der Direktwerbung erfolgen.
        </strong>
      </p>
      <h3 id="dsg-general-cookies">Cookies und Widerspruchsrecht bei Direktwerbung</h3>
      <p>
        Als &ldquo;Cookies&rdquo; werden kleine Dateien bezeichnet, die auf Rechnern der Nutzer gespeichert werden. Innerhalb der Cookies
        können unterschiedliche Angaben gespeichert werden. Ein Cookie dient primär dazu, die Angaben zu einem Nutzer (bzw. dem Gerät auf
        dem das Cookie gespeichert ist) während oder auch nach seinem Besuch innerhalb eines Onlineangebotes zu speichern. Als temporäre
        Cookies, bzw. &ldquo;Session-Cookies&rdquo; oder &ldquo;transiente Cookies&rdquo;, werden Cookies bezeichnet, die gelöscht werden,
        nachdem ein Nutzer ein Onlineangebot verlässt und seinen Browser schließt. In einem solchen Cookie kann z.B. der Inhalt eines
        Warenkorbs in einem Onlineshop oder ein Login-Status gespeichert werden. Als &ldquo;permanent&rdquo; oder &ldquo;persistent&rdquo;
        werden Cookies bezeichnet, die auch nach dem Schließen des Browsers gespeichert bleiben. So kann z.B. der Login-Status gespeichert
        werden, wenn die Nutzer diese nach mehreren Tagen aufsuchen. Ebenso können in einem solchen Cookie die Interessen der Nutzer
        gespeichert werden, die für Reichweitenmessung oder Marketingzwecke verwendet werden. Als &ldquo;Third-Party-Cookie&rdquo; werden
        Cookies bezeichnet, die von anderen Anbietern als dem Verantwortlichen, der das Onlineangebot betreibt, angeboten werden
        (andernfalls, wenn es nur dessen Cookies sind spricht man von &ldquo;First-Party Cookies&rdquo;).
        <br />
        <br />
        Wir können temporäre und permanente Cookies einsetzen und klären hierüber im Rahmen unserer Datenschutzerklärung auf.
        <br />
        <br />
        Falls die Nutzer nicht möchten, dass Cookies auf ihrem Rechner gespeichert werden, werden sie gebeten die entsprechende Option in
        den Systemeinstellungen ihres Browsers zu deaktivieren. Gespeicherte Cookies können in den Systemeinstellungen des Browsers gelöscht
        werden. Der Ausschluss von Cookies kann zu Funktionseinschränkungen dieses Onlineangebotes führen.
        <br />
        <br />
        Ein genereller Widerspruch gegen den Einsatz der zu Zwecken des Onlinemarketing eingesetzten Cookies kann bei einer Vielzahl der
        Dienste, vor allem im Fall des Trackings, über die US-amerikanische Seite{" "}
        <a href="http://www.aboutads.info/choices/">http://www.aboutads.info/choices/</a> oder die EU-Seite{" "}
        <a href="http://www.youronlinechoices.com/">http://www.youronlinechoices.com/</a> erklärt werden. Des Weiteren kann die Speicherung
        von Cookies mittels deren Abschaltung in den Einstellungen des Browsers erreicht werden. Bitte beachten Sie, dass dann
        gegebenenfalls nicht alle Funktionen dieses Onlineangebotes genutzt werden können.
      </p>
      <h3 id="dsg-general-erasure">Löschung von Daten</h3>
      <p>
        Die von uns verarbeiteten Daten werden nach Maßgabe der gesetzlichen Vorgaben gelöscht oder in ihrer Verarbeitung eingeschränkt.
        Sofern nicht im Rahmen dieser Datenschutzerklärung ausdrücklich angegeben, werden die bei uns gespeicherten Daten gelöscht, sobald
        sie für ihre Zweckbestimmung nicht mehr erforderlich sind und der Löschung keine gesetzlichen Aufbewahrungspflichten entgegenstehen.{" "}
        <br />
        <br />
        Sofern die Daten nicht gelöscht werden, weil sie für andere und gesetzlich zulässige Zwecke erforderlich sind, wird deren
        Verarbeitung eingeschränkt. D.h. die Daten werden gesperrt und nicht für andere Zwecke verarbeitet. Das gilt z.B. für Daten, die aus
        handels- oder steuerrechtlichen Gründen aufbewahrt werden müssen.
      </p>
      <h3 id="dsg-general-changes">Änderungen und Aktualisierungen der Datenschutzerklärung</h3>
      <p>
        Wir bitten Sie sich regelmäßig über den Inhalt unserer Datenschutzerklärung zu informieren. Wir passen die Datenschutzerklärung an,
        sobald die Änderungen der von uns durchgeführten Datenverarbeitungen dies erforderlich machen. Wir informieren Sie, sobald durch die
        Änderungen eine Mitwirkungshandlung Ihrerseits (z.B. Einwilligung) oder eine sonstige individuelle Benachrichtigung erforderlich
        wird.
      </p>
      <p></p>
      <h3 id="dsg-musicpodcast-soundcloud">Bandcamp</h3>
      <p></p>
      <p>
        <span className="ts-muster-content">
          Unsere Musik, Podcasts und Medien werden z.T. auf der Plattform &ldquo;Bandcamp&rdquo; gespeichert und werden von dieser Plattform
          aus wiedergegeben.
          <br />
          <br />
          Zu diesem Zweck binden wir sog. Bandcamp-Widgets in unsere Website ein. Dabei handelt es sich um Abspielsoftware, mit der Nutzer
          die Podcasts abspielen können. Hierbei kann Bandcamp messen, welche Podcasts in welchem Umfang gehört werden und diese Information
          pseudonym für statistische und betriebswirtschaftliche Zwecke verarbeiten. Hierzu können Cookies in den Browsern der Nuzer
          gespeichert und zwecks Bildung von Nutzerprofilen, z.B. für Zwecke der Ausgabee von Anzeigen, die den potentiellen Interessen der
          Nutzer entsprechen, verarbeitet werden. Im Fall von Nutzern, die bei Bandcamp registriert sind, kann Bandcamp die Hörinformationen
          deren Profilen zuordnen.
          <br />
          <br />
          Die Nutzung erfolgt auf Grundlage unserer berechtigten Interessen, d.h. Interesse an einer sicheren und effizienten
          Bereitstellung, Analyse sowie Optimierung unseres Audioangebotes gem. Art. 6 Abs. 1 lit. f. DSGVO. <br />
          <br />
          Weitere Informationen und Widerspruchsmöglichkeiten finden sich in der Datenschutzerklärung von Bandcamp:{" "}
          <a target="_blank" href="https://bandcamp.com/privacy" rel="noreferrer">
            https://bandcamp.com/privacy
          </a>
          .
        </span>
      </p>
      <p></p>
      <h3 id="dsg-socialmedia">Onlinepräsenzen in sozialen Medien</h3>
      <p></p>
      <p>
        <span className="ts-muster-content">
          Wir unterhalten Onlinepräsenzen innerhalb sozialer Netzwerke und Plattformen, um mit den dort aktiven Kunden, Interessenten und
          Nutzern kommunizieren und sie dort über unsere Leistungen informieren zu können.
          <br />
          <br />
          Wir weisen darauf hin, dass dabei Daten der Nutzer außerhalb des Raumes der Europäischen Union verarbeitet werden können.
          Hierdurch können sich für die Nutzer Risiken ergeben, weil so z.B. die Durchsetzung der Rechte der Nutzer erschwert werden könnte.
          Im Hinblick auf US-Anbieter die unter dem Privacy-Shield zertifiziert sind, weisen wir darauf hin, dass sie sich damit
          verpflichten, die Datenschutzstandards der EU einzuhalten.
          <br />
          <br />
          Ferner werden die Daten der Nutzer im Regelfall für Marktforschungs- und Werbezwecke verarbeitet. So können z.B. aus dem
          Nutzungsverhalten und sich daraus ergebenden Interessen der Nutzer Nutzungsprofile erstellt werden. Die Nutzungsprofile können
          wiederum verwendet werden, um z.B. Werbeanzeigen innerhalb und außerhalb der Plattformen zu schalten, die mutmaßlich den
          Interessen der Nutzer entsprechen. Zu diesen Zwecken werden im Regelfall Cookies auf den Rechnern der Nutzer gespeichert, in denen
          das Nutzungsverhalten und die Interessen der Nutzer gespeichert werden. Ferner können in den Nutzungsprofilen auch Daten
          unabhängig der von den Nutzern verwendeten Geräte gespeichert werden (insbesondere wenn die Nutzer Mitglieder der jeweiligen
          Plattformen sind und bei diesen eingeloggt sind).
          <br />
          <br />
          Die Verarbeitung der personenbezogenen Daten der Nutzer erfolgt auf Grundlage unserer berechtigten Interessen an einer effektiven
          Information der Nutzer und Kommunikation mit den Nutzern gem. Art. 6 Abs. 1 lit. f. DSGVO. Falls die Nutzer von den jeweiligen
          Anbietern der Plattformen um eine Einwilligung in die vorbeschriebene Datenverarbeitung gebeten werden, ist die Rechtsgrundlage
          der Verarbeitung Art. 6 Abs. 1 lit. a., Art. 7 DSGVO.
          <br />
          <br />
          Für eine detaillierte Darstellung der jeweiligen Verarbeitungen und der Widerspruchsmöglichkeiten (Opt-Out), verweisen wir auf die
          nachfolgend verlinkten Angaben der Anbieter.
          <br />
          <br />
          Auch im Fall von Auskunftsanfragen und der Geltendmachung von Nutzerrechten, weisen wir darauf hin, dass diese am effektivsten bei
          den Anbietern geltend gemacht werden können. Nur die Anbieter haben jeweils Zugriff auf die Daten der Nutzer und können direkt
          entsprechende Maßnahmen ergreifen und Auskünfte geben. Sollten Sie dennoch Hilfe benötigen, dann können Sie sich an uns wenden.
          <br />
          <br />- Facebook, -Seiten, -Gruppen, (Facebook Ireland Ltd., 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland) auf
          Grundlage einer{" "}
          <a target="_blank" href="https://www.facebook.com/legal/terms/page_controller_addendum" rel="noreferrer">
            Vereinbarung über gemeinsame Verarbeitung personenbezogener Daten
          </a>{" "}
          - Datenschutzerklärung:{" "}
          <a target="_blank" href="https://www.facebook.com/about/privacy/" rel="noreferrer">
            https://www.facebook.com/about/privacy/
          </a>
          , speziell für Seiten:{" "}
          <a target="_blank" href="https://www.facebook.com/legal/terms/information_about_page_insights_data" rel="noreferrer">
            https://www.facebook.com/legal/terms/information_about_page_insights_data
          </a>{" "}
          , Opt-Out:{" "}
          <a target="_blank" href="https://www.facebook.com/settings?tab=ads" rel="noreferrer">
            https://www.facebook.com/settings?tab=ads
          </a>{" "}
          und{" "}
          <a target="_blank" href="http://www.youronlinechoices.com" rel="noreferrer">
            http://www.youronlinechoices.com
          </a>
          , Privacy Shield:{" "}
          <a target="_blank" href="https://www.privacyshield.gov/participant?id=a2zt0000000GnywAAC&amp;status=Active" rel="noreferrer">
            https://www.privacyshield.gov/participant?id=a2zt0000000GnywAAC&amp;status=Active
          </a>
          .<br />
          <br />- Google/ YouTube (Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA) – Datenschutzerklärung: &nbsp;
          <a target="_blank" href="https://policies.google.com/privacy" rel="noreferrer">
            https://policies.google.com/privacy
          </a>
          , Opt-Out:{" "}
          <a target="_blank" href="https://adssettings.google.com/authenticated" rel="noreferrer">
            https://adssettings.google.com/authenticated
          </a>
          , Privacy Shield:{" "}
          <a target="_blank" href="https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&amp;status=Active" rel="noreferrer">
            https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&amp;status=Active
          </a>
          .<br />
          <br />- Instagram (Instagram Inc., 1601 Willow Road, Menlo Park, CA, 94025, USA) – Datenschutzerklärung/ Opt-Out:{" "}
          <a target="_blank" href="http://instagram.com/about/legal/privacy/" rel="noreferrer">
            http://instagram.com/about/legal/privacy/
          </a>
          .<br />
          <br />- Twitter (Twitter Inc., 1355 Market Street, Suite 900, San Francisco, CA 94103, USA) - Datenschutzerklärung:{" "}
          <a target="_blank" href="https://twitter.com/de/privacy" rel="noreferrer">
            https://twitter.com/de/privacy
          </a>
          , Opt-Out:{" "}
          <a target="_blank" href="https://twitter.com/personalization" rel="noreferrer">
            https://twitter.com/personalization
          </a>
          , Privacy Shield:{" "}
          <a target="_blank" href="https://www.privacyshield.gov/participant?id=a2zt0000000TORzAAO&amp;status=Active" rel="noreferrer">
            https://www.privacyshield.gov/participant?id=a2zt0000000TORzAAO&amp;status=Active
          </a>
          .<br />
          <br />- Pinterest (Pinterest Inc., 635 High Street, Palo Alto, CA, 94301, USA) – Datenschutzerklärung/ Opt-Out:{" "}
          <a target="_blank" href="https://about.pinterest.com/de/privacy-policy" rel="noreferrer">
            https://about.pinterest.com/de/privacy-policy
          </a>
          .<br />
          <br />- LinkedIn (LinkedIn Ireland Unlimited Company Wilton Place, Dublin 2, Irland) - Datenschutzerklärung{" "}
          <a target="_blank" href="https://www.linkedin.com/legal/privacy-policy" rel="noreferrer">
            https://www.linkedin.com/legal/privacy-policy
          </a>{" "}
          , Opt-Out:{" "}
          <a target="_blank" href="https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out" rel="noreferrer">
            https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out
          </a>
          , Privacy Shield:&nbsp;
          <a target="_blank" href="https://www.privacyshield.gov/participant?id=a2zt0000000L0UZAA0&amp;status=Active" rel="noreferrer">
            https://www.privacyshield.gov/participant?id=a2zt0000000L0UZAA0&amp;status=Active
          </a>
          .<br />
          <br />- Xing (XING AG, Dammtorstraße 29-32, 20354 Hamburg, Deutschland) - Datenschutzerklärung/ Opt-Out:{" "}
          <a target="_blank" href="https://privacy.xing.com/de/datenschutzerklaerung" rel="noreferrer">
            https://privacy.xing.com/de/datenschutzerklaerung
          </a>
          .<br />
          <br />- Wakalet (Wakelet Limited, 76 Quay Street, Manchester, M3 4PR, United Kingdom) - Datenschutzerklärung/ Opt-Out:{" "}
          <a target="_blank" href="https://wakelet.com/privacy.html" rel="noreferrer">
            https://wakelet.com/privacy.html
          </a>
          .<br />
          <br />- Bandcamp - Datenschutzerklärung/ Opt-Out:{" "}
          <a target="_blank" href="https://bandcamp.com/privacy" rel="noreferrer">
            https://bandcamp.com/privacy
          </a>
          .
        </span>
      </p>
      <p></p>
      <h3 id="dsg-thirdparty-einleitung">Einbindung von Diensten und Inhalten Dritter</h3>
      <p></p>
      <p>
        <span className="ts-muster-content">
          Wir setzen innerhalb unseres Onlineangebotes auf Grundlage unserer berechtigten Interessen (d.h. Interesse an der Analyse,
          Optimierung und wirtschaftlichem Betrieb unseres Onlineangebotes im Sinne des Art. 6 Abs. 1 lit. f. DSGVO) Inhalts- oder
          Serviceangebote von Drittanbietern ein, um deren Inhalte und Services, wie z.B. Videos oder Schriftarten einzubinden (nachfolgend
          einheitlich bezeichnet als &rdquo;Inhalte”). <br />
          <br />
          Dies setzt immer voraus, dass die Drittanbieter dieser Inhalte, die IP-Adresse der Nutzer wahrnehmen, da sie ohne die IP-Adresse
          die Inhalte nicht an deren Browser senden könnten. Die IP-Adresse ist damit für die Darstellung dieser Inhalte erforderlich. Wir
          bemühen uns nur solche Inhalte zu verwenden, deren jeweilige Anbieter die IP-Adresse lediglich zur Auslieferung der Inhalte
          verwenden. Drittanbieter können ferner so genannte Pixel-Tags (unsichtbare Grafiken, auch
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          als 'Web Beacons' bezeichnet) für statistische oder Marketingzwecke verwenden. Durch die "Pixel-Tags" können Informationen, wie
          der Besucherverkehr auf den Seiten dieser Website ausgewertet werden. Die pseudonymen Informationen können ferner in Cookies auf
          dem Gerät der Nutzer gespeichert werden und unter anderem technische Informationen zum Browser und Betriebssystem, verweisende
          Webseiten, Besuchszeit sowie weitere Angaben zur Nutzung unseres Onlineangebotes enthalten, als auch mit solchen Informationen aus
          anderen Quellen verbunden werden.
        </span>
      </p>
      <p></p>
      <h3 id="dsg-thirdparty-youtube">Youtube</h3>
      <p></p>
      <p>
        <span className="ts-muster-content">
          Wir binden die Videos der Plattform &rdquo;YouTube” des Anbieters Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043,
          USA, ein. Datenschutzerklärung:{" "}
          <a target="_blank" href="https://www.google.com/policies/privacy/" rel="noreferrer">
            https://www.google.com/policies/privacy/
          </a>
          , Opt-Out:{" "}
          <a target="_blank" href="https://adssettings.google.com/authenticated" rel="noreferrer">
            https://adssettings.google.com/authenticated
          </a>
          .
        </span>
      </p>
      <p></p>
      <h3 id="dsg-thirdparty-googlefonts">Google Fonts</h3>
      <p></p>
      <p>
        <span className="ts-muster-content">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Wir binden die Schriftarten ('Google Fonts') des Anbieters Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA,
          ein. Datenschutzerklärung:{" "}
          <a target="_blank" href="https://www.google.com/policies/privacy/" rel="noreferrer">
            https://www.google.com/policies/privacy/
          </a>
          , Opt-Out:{" "}
          <a target="_blank" href="https://adssettings.google.com/authenticated" rel="noreferrer">
            https://adssettings.google.com/authenticated
          </a>
          .
        </span>
      </p>
      <a href="https://datenschutz-generator.de" className="dsg1-6" rel="nofollow noreferrer" target="_blank">
        Erstellt mit Datenschutz-Generator.de von RA Dr. Thomas Schwenke
      </a>
    </StyledRoot>
  )
}

export default Datenschutz
