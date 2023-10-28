import LayoutType1 from "@/layouts/LayoutType1";
import styles from './about.module.scss'
import SearchResults from "@/components/SearchResults/SearchResults";
import { useEffect, useState } from "react";
import axios from "axios";

const About = () => {

  const [peoples, setPeoples] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/products')
      .then(res => {
        setPeoples(res.data)
      })
      }, [])

  return (
    <LayoutType1 title={"About"}>
      <h1 className="container" style={{ marginTop: 50, marginBottom: 50 }}>
        About Company 
      </h1>
      <div><SearchResults
        data={peoples.filter((e) => e.name)}
      /></div>
    </LayoutType1>
  );
}

export default About;