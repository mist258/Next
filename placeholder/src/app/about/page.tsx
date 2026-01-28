import css from "./About.module.css";
const AboutPage = () => {
  return (
    <div className={css.About}>
      <h1 className={css.Title}>About This Project</h1>
      <p className={css.Text}>
        Welcome to the about page. This project is created to demonstrate
        working with users, posts, and navigation.
      </p>
    </div>
  );
};

export default AboutPage;
