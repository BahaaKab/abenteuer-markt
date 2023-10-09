import { Button ,Box} from '@mui/material';
import Pflicht from '../../components/required/Pflicht';
import MainLayout from '../../layouts/main/main-layout';
import  { useState } from 'react';




const descriptionDefault = {
    marginBottom: '40px',
    background: 'transparent',
    border: '1px solid lightgray',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
    outline: 'none',
    width: '95%',
    height: '150px',
    padding: '5px 10px',
    fontSize: '30px',
    transition: 'all 1s ease',
    borderRadius: '5px'
};

const descriptionFocused = {
    border: '1px solid black',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
};



const linkDefault = {
    marginBottom: '40px',
    background: 'transparent',
    border: '1px solid lightgray',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
    outline: 'none',
    width: '95%',
    padding: '10px',
    transition: 'all 1s ease',
    borderRadius: '5px'
};

const linkFocused = {
    border: '1px solid black',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
};


const photoDefault = {
    marginBottom: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '20vh',
    fontSize: '20px',
    fontWeight: 'bolder',
    lineHeight: 1,
    background: 'transparent',
    border: '1px solid lightgray',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
    outline: 'none',
    width: '95%',
    padding: '10px',
};

const photoFocused = {
    border: 'dashed',
    borderWidth: '2px',
}

const titleDefault = {
    marginBottom: '40px',
    background: 'transparent',
    border: '1px solid lightgray',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
    outline: 'none',
    width: '95%',
    padding: '10px',
    transition: 'all 1s ease',
    borderRadius: '5px'
};

const titleFocused = {
    border: '1px solid black',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
};



const defaultStyle = {
    color: '#f1c31f',
    textDecoration: 'underline',
    fontSize: '25px',
};

const hoverStyle = {
    ...defaultStyle,
    color: 'black',
};

const CreateAdventure = () => {

    const [hovered, setHovered] = useState(false);
    const [inputTitle, setInputTitle] = useState('');
    const [isFocusedTitle, setisFocusedTitle] = useState(false);
    const [photoClicked, setPhotoClicked] = useState(false);
    const [isFocusedLink, setisFocusedLink] = useState(false);
    const [inputLink, setInputLink] = useState('');
    const [inputDescription, setInputDescription] = useState('');
    const [isFocusedDescription, setisFocusedDescription] = useState(false);
    const [CheckmarkClicked, setCheckmarkClicked] = useState(false);

    
    
    


  

    return (
        <MainLayout>
            <>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '30vh',
                    fontSize: '50px',
                    color: '#283479',
                    fontWeight: 'bold',
                    lineHeight: 1,
                }}>
                    Die Seite für Erfinder von Bastel- & DIY-Abenteuer
                </div>
                <p>
                    Wenn Ihr Euch anmeldet und ein Profil anlegt, könnt Ihr neue Bastel- und DIY-Abenteuer hinzufügen.
                    Ihr könnte dann auch Abenteuer durch einen Klick auf das Herz zu Euren Favoriten hinzufügen und einfach
                    zu einem späteren Zeitpunkt mit Euren Kindern basteln, spielen und experimentieren.
                </p>
                <div style={{
                    fontSize: '25px',
                }}>
                    Möchtet ihr euch auf der Webseite für die Online-Kinderbetreuung anmelden, dann
                    klickt bitte hier:
                    <Button
                        href="https://shop.akademie-kinderbildung.de"
                        style={hovered ? hoverStyle : defaultStyle}
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                    >
                        Online-Kinderbetreuung
                    </Button>
                </div>

                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '20vh',
                    fontSize: '50px',
                    color: '#283479',
                    fontWeight: 'bolder',
                    lineHeight: 1,
                }}>
                    Ein Abenteuer hinzufügen
                </div>

                <div style={{ marginBottom: '20px', fontSize: '20px' }} >
                    <Pflicht />
                    Pflichtfeld
                </div>
                <div style={{ fontWeight: 'bolder', marginBottom: '20px' }}>
                    TITEL DES ABENTEUERS <Pflicht />
                </div>

                <input
                    type="text"
                    style={isFocusedTitle ? { ...titleDefault, ...titleFocused } : titleDefault}
                    onFocus={() => setisFocusedTitle(true)}
                    onBlur={() => setisFocusedTitle(false)}
                    value={inputTitle}
                    onChange={e => setInputTitle(e.target.value)}
                />

                <div style={{ fontWeight: 'bolder', marginBottom: '20px' }}>
                    FOTO DES ABENTEUERS
                </div>

                <Button
                    style={photoClicked ? { ...photoDefault, ...photoFocused } : photoDefault}
                    onMouseEnter={() => setPhotoClicked(true)}
                    onMouseLeave={() => setPhotoClicked(false)}>
                    LADE EIN FOTO FÜR DAS ABENTEUER HOCH
                </Button>

                <div style={{ fontWeight: 'bolder', marginBottom: '20px' }}>
                    LINK ZU EINEM ABENTEUER AUF EINER EXTERNEN WEBSEITE
                </div>
                <input

                    type="text"
                    placeholder='ex https://www.youtube.com/watch?v=bc123'
                    style={isFocusedLink ? { ...linkDefault, ...linkFocused } : linkDefault}
                    onFocus={() => setisFocusedLink(true)}
                    onBlur={() => setisFocusedLink(false)}
                    value={inputLink}
                    onChange={e => setInputLink(e.target.value)}
                />

                <div style={{ fontWeight: 'bolder', marginBottom: '20px' }}>
                    LINK ZU EINEM ABENTEUER AUF EINER EXTERNEN WEBSEITE
                </div>

                <textarea
                    rows={1}
                    style={isFocusedDescription ? { ...descriptionDefault, ...descriptionFocused } : descriptionDefault}
                    onFocus={() => setisFocusedDescription(true)}
                    onBlur={() => setisFocusedDescription(false)}
                    value={inputDescription}
                    onChange={e => setInputDescription(e.target.value)}
                />




                <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '20px' }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginRight: 'auto'
                    }} >
                        <label style={{ display: 'block', fontWeight: 'bolder', marginBottom: '5px' }}>
                            KATEGORIE
                        </label>


                        <select defaultValue={"nothing"} style={{
                            width: '100%',
                            height: '40px',
                            fontSize: '20px',
                        }}>

                            <option value="nothing">--</option>

                            <option value="Bewegung">Bewegung & Sport</option>

                            <option value="Lesen">Entspannen & Lesen</option>

                        </select>

                    </div>

                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginRight: 'auto',
                        marginBottom: '20px'
                    }}>
                        <label style={{ display: 'block', fontWeight: 'bolder', marginBottom: '5px' }}>
                            BEREICH
                        </label>

                        <select defaultValue={"nothing"} style={{
                            width: '80%',
                            height: '40px',
                            fontSize: '20px',
                        }}>

                            <option value="nothing">--</option>

                            <option value="Angebote">Aufwendige Angebote</option>

                            <option value="Muss">Wenn es schnell gehen muss</option>

                        </select>
                    </Box>

                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginRight: 'auto'
                    }}>
                        <label style={{ display: 'block', fontWeight: 'bolder', marginBottom: '5px' }}>
                            SCHWIERIGKEIT <Pflicht />
                        </label>

                        <select defaultValue={"nothing"} style={{
                            width: '150%',
                            height: '40px',
                            fontSize: '20px',
                        }}>

                            <option value="nothing">--</option>

                            <option value="Einfach">Einfach</option>

                            <option value="Mittel">Mittel</option>

                        </select>
                    </div>

                </div>

                <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>
                    MATERIALIEN <Pflicht />
                </div>
                <div style={{ display: 'flex', marginBottom: '30px' }}>
                    <Button variant="contained" color='primary' style={{ marginRight: '10px' }}>Material hinzufügen</Button>
                    <Button variant="contained" color='primary' >Abschnitt hinzufügen</Button>
                </div>

                <div style={{ display: 'flex', marginBottom: '100px' }}>
                    <Button
                        onClick={() => setCheckmarkClicked(prevState => !prevState)}

                        style={{
                            fontSize: '13px', width: '10px',
                            height: '18px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginRight: '10px'
                        }}>
                        {CheckmarkClicked ? '✓' : ' '}
                    </Button>
                    <div>
                        HIERMIT BESTÄTIGE ICH, DASS ICH MIT DEM HINZUFÜGEN DES ABENTEUERS (INKL. HOCHLADEN VON FOTOS) KEINE RECHTE (WIE ZUM BEISPIEL DAS URHEBERRECHT ODER DAS MARKENRECHT) DRITTER VERLETZE UND DIE UNEINGESCHRÄNKTEN NUTZUNGSRECHTE VON TEXT UND BILD ZUR WEITERVERARBEITUNG AN DIE OESTREICHER GMBH (BETREIBER DER PLATTFORM ABENTEUERMARKT.DE) ÜBERTRAGE. <Pflicht />
                    </div>
                </div>

            </>


        </MainLayout>
    )
}

export default CreateAdventure