import { useEffect, useState } from 'react';
import styles from './home.module.scss'

const Home = () => {
	const [sizeLg, setSizeLg] = useState(20)
	const [count, setCount] = useState(0)
	const [showDiv, setShowDiv] = useState(false)

	useEffect(() => {
		//alert('aaaaaaaaaaasadgg')
	},[sizeLg])

	return (
		<section>
			{JSON.stringify(sizeLg)}
			<h1 className={styles.title} style={{ fontSize: `${sizeLg}px` }}>Wendson</h1>
			<h1 className={`${styles.title} borda`} >Wendson</h1>
			<button onClick={() => {setSizeLg(sizeLg === 20 ? 100 : 20)}}>
				{/*o sizeLg é igual a 20. Se ele for igual a 20, quando eu clicar e sera igual a 100.
				toda vez que clicar ele vai verificar, e se nao for igual a 20, vai mudar.
				*/}
				Mudar Tamanho
			</button>
			<h1>
				Contador {count}
			</h1>
			<button onClick={() => {setCount(count + 1)}}>
				Increment 
			</button>
			{showDiv && (
				<div>
					<p>nhjkv.lhjkvgh</p>
					<p>asfdgfrhgghyj</p>
				</div>
			)} 
			<br />
			<br />
			{/* <button onClick={() => {setShowDiv( !showDiv )}}>
				Meu Botão
			</button> */}
			<button onClick={() => {setShowDiv(showDiv === true ? false : true)}}>
				Meu Botão
			</button>
		</section>
	);
}


export default Home;