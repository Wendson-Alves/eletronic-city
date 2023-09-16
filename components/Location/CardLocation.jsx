import styles from "@/components/Location/CardLocation.module.scss";

const Text = ({location, address, phone, email, work, img }) => {
  return (
    <ul>
      <li>
        <span>{location}</span>
      </li>
      <li><h4>Location:</h4>{address}</li>
      <li><h4>Phone:</h4>{phone}</li>
      <li><h4>Email:</h4>{email}</li>
      <li><h4>Work:</h4>{work}</li>
      <li>
        <img src={img} alt="" />
      </li>{" "}
    </ul>
  );
};

export default Text;
