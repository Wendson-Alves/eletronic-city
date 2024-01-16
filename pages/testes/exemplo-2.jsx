import params from "@/helpers/params";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3005/api/products")
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <span>{JSON.stringify(params(product))}</span>;
};

export default Home;
