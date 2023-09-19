import LayoutType1 from "@/layouts/LayoutType1";
import styles from './about.module.scss'

const About = () => {
  return (
    <LayoutType1 title={"About"}>
      <h1 className="container" style={{ marginTop: 50 }}>
        About Company 
      </h1>
    </LayoutType1>
  );
}

export default About;