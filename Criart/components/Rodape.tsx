export function Rodape() {
  return (
    <footer className="footer-principal hidden-scroll">
      
      {/* Container Principal com CSS Grid para alinhar perfeitamente as 3 colunas */}
      <div 
        className="footer-container"
        style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '30px', 
          maxWidth: '1200px', 
          margin: '0 auto', 
          alignItems: 'start' 
        }}
      >
        
        {/* Coluna 1: Redes Sociais */}
        <div className="footer-col" style={{ textAlign: 'left' }}>
          <h3 style={{ color: '#2980b9', marginBottom: '15px', fontSize: '1.2rem' }}>Siga a mágica</h3>
          <div className="social-login-icons">
            {/* Twitter */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link-wrapper"
            >
              <div className="socialcontainer">
                <div className="icon social-icon-1-1">
                  <svg viewBox="0 0 512 512" height="1.7em" xmlns="http://www.w3.org/2000/svg" fill="white">
                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                  </svg>
                </div>
                <div className="social-icon-1">
                  <svg viewBox="0 0 512 512" height="1.7em" xmlns="http://www.w3.org/2000/svg" fill="white">
                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                  </svg>
                </div>
              </div>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/mund.ocriart/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link-wrapper"
            >
              <div className="socialcontainer">
                <div className="icon social-icon-2-2">
                  <svg fill="white" viewBox="0 0 448 512" height="1.5em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                  </svg>
                </div>
                <div className="social-icon-2">
                  <svg fill="white" viewBox="0 0 448 512" height="1.5em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                  </svg>
                </div>
              </div>
            </a>

            {/* Outro */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link-wrapper"
            >
              <div className="socialcontainer">
                <div className="icon social-icon-3-3">
                  <svg viewBox="0 0 384 512" fill="white" height="1.6em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"></path>
                  </svg>
                </div>
                <div className="social-icon-3">
                  <svg viewBox="0 0 384 512" fill="white" height="1.6em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"></path>
                  </svg>
                </div>
              </div>
            </a>
          </div>
          <p style={{ marginTop: "15px" }}>Acompanhe nosso dia a dia!</p>
        </div>

        {/* Coluna Central: Destaque Próximo Evento (Corrigida) */}
        <div 
          className="footer-col" 
          style={{ 
            maxWidth: '350px', 
            width: '100%', 
            margin: '0 auto', 
            textAlign: 'left' 
          }}
        >
          <h3 style={{ color: '#2980b9', marginBottom: '15px', fontSize: '1.2rem' }}>
            O que vem por aí
          </h3>

          {/* Card flutuante com efeito Hover */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#ffffff",
              padding: "5px", 
              borderRadius: "12px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "pointer",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.1)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.05)";
            }}
          >
            <div
              style={{
                backgroundColor: "#e3f2fd",
                color: "#2980b9",
                padding: "12px 16px",
                borderRadius: "8px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                marginRight: "15px",
                minWidth: "80px",
              }}
            >
              <span
                style={{
                  fontSize: "10px",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  letterSpacing: "1.5px",
                  marginBottom: "2px",
                }}
              >
                Em
              </span>
              <span
                style={{
                  fontSize: "18px",
                  fontWeight: "900",
                  textTransform: "uppercase",
                }}
              >
                Breve
              </span>
            </div>

            {/* Textos do Card */}
            <div>
              <strong
                style={{
                  display: "block",
                  color: "#333",
                  fontSize: "15px",
                  marginBottom: "4px",
                }}
              >
                Visita MASP
              </strong>
              <span
                style={{
                  color: "#666",
                  fontSize: "12px",
                  lineHeight: "1.2",
                  display: "block",
                }}
              >
                Fique de olho nos nossos próximos eventos.
              </span>
            </div>
          </div>
        </div>

        <div className="footer-col" style={{ textAlign: 'left' }}>
          <h3 style={{ color: '#2980b9', marginBottom: '15px', fontSize: '1.2rem' }}>Onde Estamos</h3>
          <p style={{ marginBottom: '5px' }}>Av. Brigadeiro Luis Antônio, 2482</p>
          <p style={{ marginBottom: '15px' }}>Jardim Paulista, São Paulo - SP</p>
          <div className="mapa-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.9835338478697!2d-46.653015025132405!3d-23.56903486187333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59006224f461%3A0x68c1bd3ca8e39b76!2sESPRO%20-%20Unidade%20Paulista!5e0!3m2!1spt-PT!2sus!4v1770732954784!5m2!1spt-PT!2sus"
              width="100%"
              height="150"
              style={{ border: 0, borderRadius: '8px' }} 
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>

      </div>

      {/* Assinatura */}
      <div className="footer-bottom" style={{ marginTop: '40px', paddingTop: '20px', borderTop: '1px solid #99cce8', textAlign: 'center', fontSize: '14px', color: '#333' }}>
        <p>
          © 2026 Criart - Espaço de arte e lazer. Desenvolvido por{" "}
          <a
            href="https://github.com/YanHCruz"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "inherit",
              textDecoration: "none",
              fontWeight: "600",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.textDecoration = "underline")
            }
            onMouseOut={(e) => (e.currentTarget.style.textDecoration = "none")}
          >
            Yan Cruz
          </a>
        </p>
      </div>
    </footer>
  );
}