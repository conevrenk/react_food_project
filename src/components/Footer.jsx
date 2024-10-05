const Footer = () => {
  const now = new Date().getHours();
  const openHour = 10;
  const closeHour = 8;

  const isOpen = now >= openHour && now <= closeHour;
  console.log(isOpen);
    return (
        <footer>
            {
                isOpen ? (
                    <p>Akşam {closeHour} e kadar sipariş verebilirsiniz.</p>) : (
                        <p>Şuan kapalıyız</p>
                    )
                
      }
        </footer> 
    )

};

export default Footer;
