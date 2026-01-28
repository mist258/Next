import css from "./General.module.css";

const NotFound = () => {
  return (
    <div className={css.NotFound}>
      <h1 className={css.Code}>404</h1>
      <h2 className={css.Title}>Page Not Found</h2>
      <p className={css.Text}>
        The page you are looking for doesn’t exist or has been moved.
      </p>
    </div>
  );
};

export default NotFound;
