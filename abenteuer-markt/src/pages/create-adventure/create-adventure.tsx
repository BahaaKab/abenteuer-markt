import { Button, Typography } from '@mui/material';
import { Pflicht } from '../../components/topbar';
import MainLayout from '../../layouts/main/main-layout';
import React, { useState } from 'react';

const CreateAdventure = () => {

    const [buttonClicked, setButtonClicked] = useState(false);

    //-----

    const [inputValue2, setInputValue2] = useState('');
    const [isFocused2, setIsFocused2] = useState(false);

    const defaultStyle4 = {
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

    const focusedStyle4 = {
        border: '1px solid black',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    };

    //_-----------------------------

    const [isFocused1, setIsFocused1] = useState(false);

    const [inputValue1, setInputValue1] = useState('');

    const defaultStyle3 = {
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

    const focusedStyle3 = {
        border: '1px solid black',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    };

    //------------------------

    const [hovered1, setHovered1] = useState(false);

    const defaultStyle2 = {
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

    const focusedStyle2 = {
        border: 'dashed',
        borderWidth: '2px',
    }
    //---------------------
    const [inputValue, setInputValue] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    const defaultStyle1 = {
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

    const focusedStyle1 = {
        border: '1px solid black',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    };

    //------------

    const [hovered, setHovered] = useState(false);

    const defaultStyle = {
        color: '#f1c31f',
        textDecoration: 'underline',
        fontSize: '25px',
    };

    const hoverStyle = {
        ...defaultStyle,
        color: 'black',
    };

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
                    style={isFocused ? { ...defaultStyle1, ...focusedStyle1 } : defaultStyle1}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                />

                <div style={{ fontWeight: 'bolder', marginBottom: '20px' }}>
                    FOTO DES ABENTEUERS
                </div>

                <Button
                    style={hovered1 ? { ...defaultStyle2, ...focusedStyle2 } : defaultStyle2}
                    onMouseEnter={() => setHovered1(true)}
                    onMouseLeave={() => setHovered1(false)}>
                    LADE EIN FOTO FÜR DAS ABENTEUER HOCH
                </Button>

                <div style={{ fontWeight: 'bolder', marginBottom: '20px' }}>
                    LINK ZU EINEM ABENTEUER AUF EINER EXTERNEN WEBSEITE
                </div>
                <input

                    type="text"
                    placeholder='ex https://www.youtube.com/watch?v=bc123'
                    style={isFocused1 ? { ...defaultStyle3, ...focusedStyle3 } : defaultStyle3}
                    onFocus={() => setIsFocused1(true)}
                    onBlur={() => setIsFocused1(false)}
                    value={inputValue1}
                    onChange={e => setInputValue1(e.target.value)}
                />

                <div style={{ fontWeight: 'bolder', marginBottom: '20px' }}>
                    LINK ZU EINEM ABENTEUER AUF EINER EXTERNEN WEBSEITE
                </div>

                <textarea
                    rows={1}
                    style={isFocused2 ? { ...defaultStyle4, ...focusedStyle4 } : defaultStyle4}
                    onFocus={() => setIsFocused2(true)}
                    onBlur={() => setIsFocused2(false)}
                    value={inputValue2}
                    onChange={e => setInputValue2(e.target.value)}
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

                    <div style={{
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
                    </div>

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
                    <button
                        onClick={() => setButtonClicked(prevState => !prevState)}

                        style={{
                            fontSize: '13px', width: '10px',
                            height: '18px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginRight: '10px'
                        }}>
                        {buttonClicked ? '✓' : ' '}
                    </button>
                    <div>
                        HIERMIT BESTÄTIGE ICH, DASS ICH MIT DEM HINZUFÜGEN DES ABENTEUERS (INKL. HOCHLADEN VON FOTOS) KEINE RECHTE (WIE ZUM BEISPIEL DAS URHEBERRECHT ODER DAS MARKENRECHT) DRITTER VERLETZE UND DIE UNEINGESCHRÄNKTEN NUTZUNGSRECHTE VON TEXT UND BILD ZUR WEITERVERARBEITUNG AN DIE OESTREICHER GMBH (BETREIBER DER PLATTFORM ABENTEUERMARKT.DE) ÜBERTRAGE. <Pflicht />
                    </div>
                </div>

            </>


        </MainLayout>
    )
}

export default CreateAdventure