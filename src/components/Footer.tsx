function Footer() {
  return (
    <footer className="footer footer-center text-base-content p-4 z-50">
      {/* bg-base-300  */}
      <aside>
        <p>
          کلیه حقوق محفوظ است © {new Date().getFullYear()} - طراحی و توسعه توسط
          تیم <span className="text-primary">کتابان</span>
        </p>
      </aside>
    </footer>
  );
}

export default Footer;
