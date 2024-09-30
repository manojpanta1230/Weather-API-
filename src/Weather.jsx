import React, { useEffect, useState } from 'react';

function Weather() {
	const [ name, setName ] = useState('nepal');
	const [ day, setDay ] = useState('Cloudy');
	const [ temp, setTemp ] = useState('50°C');
	const [ inputValue, setInputValue ] = useState('');

	const [ weather, setWeather ] = useState(null);

	function handleInputChange(event) {
		setInputValue(event.target.value);
	}
	const fetchWeather = () => {
		fetch(`http://api.weatherapi.com/v1/current.json?key=b5355d989caf41a08a755733243009&q=${name}&aqi=no`)
			.then((response) => {
				if (!response.ok) {
					throw new Error('Cannot fetch');
				}
				return response.json();
			})
			.then((data) => {
				setWeather(data);

				setTemp(`${data.current.temp_c}°C`);
				setDay(data.current.condition.text);
			})
			.catch((error) => {
				console.error('Error calling the API:', error);
			});
	};

	useEffect(
		() => {
			fetchWeather();
		},
		[ name ]
	);

	const handleLocationSearch = () => {
		setName(inputValue);
	};

	return (
		<div className="container">
			<div className="search-bar">
				<input
					type="search"
					name="search"
					id="search"
					placeholder="Enter City Name"
					className="input-field"
					onChange={handleInputChange}
				/>
				<button onClick={handleLocationSearch}>Search</button>
			</div>
			<h1>{name}</h1>
			<div className="line">
				<p> {day}</p>
				<img src="public/Cloudy.png" alt="" />
				<section>{temp}</section>
			</div>
		</div>
	);
}

export default Weather;
