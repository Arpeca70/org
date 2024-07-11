import "./Footer.css"

const Footer = () => {
    return <footer className="footer" style={{backgroundImage:"url(/img/footer.png)"}}>
        <div className="redes">
            <a href='https://www.arpecasoft.com/'>
                <img src="./img/facebook.png" alt="facebook" />
            </a>
            <a href='https://www.arpecasoft.com/'>
                <img src="./img/twitter.png" alt="Twitter" />
            </a>
            <a href='https://www.arpecasoft.com/'>
                <img src="./img/instagram.png" alt="Instagram"/>
            </a>
            <img src='./img/logo.png' alt='Org' />
            <strong>Desarrollado por ArpecaSoft</strong>
        </div>

    </footer>

}

export default Footer