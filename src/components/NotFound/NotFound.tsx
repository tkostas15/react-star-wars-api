const styles = require("./NotFound.module.css");

const NotFound = (): any => {
  return (
    <section className={styles.notFound}>
      <h1>404</h1>
      <h2>Bad luck!</h2>
      <p>Darth Vader has destroyed the planet you are looking for</p>
      <p>Try another galaxy</p>
      <p className={styles.force}>May the force be with you!</p>
    </section>
  );
};

export default NotFound;
