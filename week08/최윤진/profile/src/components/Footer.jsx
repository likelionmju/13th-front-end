const Footer = () => {
  return (
    <footer>
      <section
        id="section3"
        className="h-screen bg-white font-[myfont] flex flex-col justify-center items-center"
      >
        <h2 className="text-[50px] mb-5">Connecting Means</h2>
        <a
          href="https://github.com/nacho-0"
          target="_blank"
          className="text-lg my-1"
        >
          GitHub
        </a>
        <a
          href="https://www.instagram.com/dbswls4/"
          target="_blank"
          className="text-lg my-1"
        >
          Instagram
        </a>
        <a
          href="mailto:iridium2827@gmail.com"
          target="_blank"
          className="text-lg my-1"
        >
          iridium2827@gmail.com
        </a>
      </section>
    </footer>
  );
};

export default Footer;
