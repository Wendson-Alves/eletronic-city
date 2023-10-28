import styles from "@/components/Location/CardLocation.module.scss";

const Text = ({ data }) => {
  return data?.map((location, index) => {
    return (
      <>
        <ul className={styles.location}>
          <li key={index}>
            <span>{location.title}</span>
          </li>
          <li>
            <h4>Location:</h4>
            {location.location}
          </li>
          <li>
            <h4>Phone:</h4>
            {location.phone}
          </li>
          <li>
            <h4>Email:</h4>
            {location.email}
          </li>
          <li>
            <h4>Work:</h4>
            {location.work}
          </li>
          <li>
            <img src={location.image} alt="" />
          </li>{" "}
        </ul>
      </>
    );
  });
};

export default Text;
