const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <a href="https://jonyjas.com/" target="_blank">
          Version (v2)
        </a>
        <p>|</p>
        <a href="https://jony-jas.web.app/" target="_blank">
          Version (v1)
        </a>
      </div>

      <div className="flex gap-3">
        <div className="social-icon-footer">
          <a
            href="https://www.linkedin.com/in/jony-jas/"
            target="_blank"
            className="w-2/5 h-2/5"
          >
            <img src="/assets/linkedin.png" alt="linkedin" />
          </a>
        </div>
        <div className="social-icon-footer">
          <a
            href="https://github.com/Jony-Jas/"
            target="_blank"
            className="w-2/5 h-2/5"
          >
            <img src="/assets/github.svg" alt="github" />
          </a>
        </div>
        <div className="social-icon-footer">
          <a
            href="https://instagram.com/_jony.j/"
            target="_blank"
            className="w-2/5 h-2/5"
          >
            <img src="/assets/instagram.svg" alt="instagram" />
          </a>
        </div>
        <div className="social-icon-footer">
          <a
            href="https://x.com/_jonyj/"
            target="_blank"
            className="w-2/6 h-2/6"
          >
            <img src="/assets/twitter.png" alt="twitter" />
          </a>
        </div>
        <div className="social-icon-footer">
          <a
            href="https://www.behance.net/jonyjas/"
            target="_blank"
            className="w-2/5 h-2/5"
          >
            <img src="/assets/behance.png" alt="behance" />
          </a>
        </div>
      </div>

      <p className="text-white-500">Made with ❣️ Jony Jas</p>
    </footer>
  );
};

export default Footer;
