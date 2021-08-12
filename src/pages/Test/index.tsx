import React, {useEffect, useState} from 'react';

import Input from '../../components/Input';
import Button from '../../components/Button';

import api from '../../services/api';

import './styles.css';

const Test: React.FC = () => {

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');

	const [test, setTest] = useState('');

	useEffect(() => {
	 // Listando as perguntas
	 async function loadData() {
	 	try{
	 		const response = await api.get('/test');
	 		setTest(response.data);
	 	}catch(err){
	 	  console.log(err);
	 	}
	 }
	 loadData()
	}, []);

	if (cell.hasOwnProperty('Relationships')) {
	console.log("Key Found!!");
}
else {
	console.log("Not Found.");
}
	return(
		<div className="container">
			<header>
				<div className="block first-block">
					<h1>Prova de Conhecimentos Gerais</h1>
					<span>*Obrigatório</span>
				</div>
			</header>

			<form>
				<section>
					<div className="block">
						<h4>
							Nome
							<span>*</span>
						</h4>
					    <Input placeholder="Sua resposta" 
					    onChange={(e) => setName(e.target.value)}/>
					</div>
				</section>

				<section>
					<div className="block">
						<h4>
							E-mail
							<span>*</span>
						</h4>
						<Input placeholder="Sua resposta" 
					    onChange={(e) => setEmail(e.target.value)}/>
					</div>
				</section>

				<section>
				</section>

			<Button>Enviar</Button>

			</form>
		</div>
	);
}

export default Test;