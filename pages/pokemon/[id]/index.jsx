import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// const [poke, setPoke] = useState();
// const router = useRouter();
// const data = router.query.id;

// useEffect(() => {
//   if (router.query.id) {
//     axios.get(`https://pokeapi.co/api/v2/pokemon/${router.query.id}`).then((res) => {
//     setPoke(res.data);
//   });
//   }
// }, [router.query.id]);

const Id = ({ pokemon }) => {

  return <img src={pokemon?.sprites.front_default} alt="" />
};

export default Id;

export async function getStaticProps({ params }) {
  const { data: pokemon } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${params.id}`,
  );

  return {
    props: {
     pokemon
    },
  }
}

export async function getStaticPaths() {
 const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=1302`)
 const paths = data.results.map((item) => {
  return {
    params: {
      id: item.url.split('/')[6]
    }
  }
 })

  return {
    paths: paths, // O paths precisa receber um array
    fallback: false,
  }
}

 