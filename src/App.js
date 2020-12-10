import './App.css';
import React, { useState, useEffect } from 'react';
import firebase from './firebase';
import { HashRouter, Switch, Route } from 'react-router-dom';
//import components
import Nav from './components/Nav';
import Dashboard from './Dashboard';
import Upload from './components/Upload';
import Explore from './components/Explore';
import Challenges from './components/Challenges';
import Training from './components/Training';
import Footer from './components/Footer';

function App() {
	//state for users and activities
	const [users, setUsers] = useState([]);
	const [activities, setActivities] = useState([]);
	const [things, setThings] = useState([]);
	const [currentUser, setCurrentUser] = useState([]);

	//import database
	const ref = firebase.firestore().collection('users');
	const data = firebase.firestore().collection('activities');
	const thing = firebase.firestore().collection('things');

	const getUsers = () => {
		ref.onSnapshot((querySnapshot) => {
			const items = [];
			querySnapshot.forEach((doc) => {
				items.push(doc.data());
			});

			setUsers(items);
			setCurrentUser(items[1]);
		});
	};
	const getActivities = () => {
		data.onSnapshot((querySnapshot) => {
			const items = [];
			querySnapshot.forEach((doc) => {
				const actObj = doc.data();
				actObj.id = doc.id;
				items.push(actObj);
			});

			items.sort((a, b) => (a.date < b.date ? 1 : -1));
			setActivities(items);
		});
	};
	const getThings = () => {
		thing.onSnapshot((querySnapshot) => {
			const items = [];
			querySnapshot.forEach((doc) => {
				items.push(doc.data());
			});
			setThings(items);
		});
	};

	useEffect(() => {
		getUsers();
		getActivities();
		getThings();
	}, []);

	return (
		<HashRouter basename="/">
			<div className="App">
				<Nav users={users} currentUser={currentUser} setCurrentUser={setCurrentUser} />

				<Switch>
					<Route
						exact
						path="/"
						render={() => (
							<Dashboard
								users={users}
								activities={activities}
								currentUser={currentUser}
								setCurrentUser={setCurrentUser}
								things={things}
							/>
						)}
					/>
					<Route path="/explore" render={() => <Explore things={things} />} />
					<Route
						path="/challenges"
						render={() => <Challenges currentUser={currentUser} activities={activities} />}
					/>
					<Route path="/training" render={() => <Training />} />
					<Route
						exact
						path="/upload"
						render={() => <Upload currentUser={currentUser} activities={activities} />}
					/>
				</Switch>
				<Footer />
			</div>
		</HashRouter>
	);
}

export default App;
