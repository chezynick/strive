import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBiking, faRunning, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faCommentAlt } from '@fortawesome/free-regular-svg-icons';
import DetailBox from './DetailBox';
import firebase from '../firebase';

const Activity = ({ activity, activities, things, currentUser }) => {
	//add state on this level for displaying detail and comment boxes
	const [detailDisplay, setDetailDisplay] = useState(false);
	const [detailActivity, setDetailActivity] = useState();
	const [commentDisplay, setCommentDisplay] = useState(false);
	const [comment, setComment] = useState('');

	//handler for likes
	const likesHandler = (activity) => {
		if (currentUser.name === activity.user) {
			return;
		} else {
			firebase
				.firestore()
				.collection('activities')
				.doc(activity.id)
				.set(
					{
						likes: activity.likes + 1,
					},
					{ merge: true }
				)
				.catch(function (error) {
					console.error('Error writing document: ', error);
				});
		}
	};

	//handler for adding comments
	const displayComment = () => {
		setCommentDisplay(!commentDisplay);
	};
	const makeComment = (e) => {
		setComment(e.target.value);
	};
	//handler for adding comments
	const addComment = (activity) => {
		const thisComment = currentUser.name + ' - ' + comment;
		firebase
			.firestore()
			.collection('activities')
			.doc(activity.id)
			.set(
				{
					comments: [...activity.comments, thisComment],
				},
				{ merge: true }
			)
			.then(function () {
				setComment('');
				setCommentDisplay(!commentDisplay);
			})
			.catch(function (error) {
				console.error('Error writing document: ', error);
			});
	};
	//handler to display details box
	const clickHandler = (title) => {
		const detail = activities.filter((a) => a.title === title);
		setDetailActivity(detail);

		setDetailDisplay(!detailDisplay);
	};
	if (activity) {
		return (
			<ActiveStyle key={activity.id}>
				<TitleStyle>
					<IconStyle>
						<img src={activity.userImage} alt="nick pic" />

						{activity.type === true ? (
							<FontAwesomeIcon size="1x" icon={faBiking} />
						) : (
							<FontAwesomeIcon size="2x" icon={faRunning} />
						)}
					</IconStyle>
					<HeadBoxStyle onClick={() => clickHandler(activity.title)}>
						<h3> {activity.user} </h3>
						<p>{activity.date}</p>
						<h3>{activity.title}</h3>
						<StatStyleHolder>
							<StatStyle>
								<p>Distance</p>
								<h4>{activity.distance}Km</h4>
							</StatStyle>
							<StatStyle>
								<p>Duration</p>
								<h4>{activity.time}</h4>
							</StatStyle>
							<StatStyle>
								<p>Pace</p>
								<h4>{(activity.time / activity.distance).toFixed(2)} /Km</h4>
							</StatStyle>
						</StatStyleHolder>
					</HeadBoxStyle>
				</TitleStyle>

				<img src={activity.images} alt="userpic" />
				<CommentStyle>
					<IconHolder>
						<p>{activity.likes} Kudos</p>
						<p>{activity.comments.length} Comments</p>
						<p></p>
						<IconSquare>
							<FontAwesomeIcon
								icon={faThumbsUp}
								color="#555555"
								onClick={() => {
									likesHandler(activity);
								}}
							/>
						</IconSquare>
						<IconSquare>
							<FontAwesomeIcon icon={faCommentAlt} onClick={() => displayComment(activity)} />
						</IconSquare>
					</IconHolder>
					{commentDisplay ? (
						<FormStyle>
							<textarea value={comment} onChange={makeComment}></textarea>
							<button
								onClick={() => {
									addComment(activity);
								}}
							>
								Add
							</button>
						</FormStyle>
					) : (
						''
					)}
					{activity.comments.map((comm) => (
						<p key={comm}>{comm}</p>
					))}
				</CommentStyle>
				{detailDisplay ? (
					<DetailBox
						detailActivity={detailActivity}
						things={things}
						setDetailDisplay={setDetailDisplay}
						detailDisplay={detailDisplay}
						currentUser={currentUser}
					/>
				) : (
					''
				)}
			</ActiveStyle>
		);
	} else {
		return '';
	}
};

export default Activity;

const ActiveStyle = styled.div`
	width: 90%;
	margin: 4% 5% 5% 5%;
	background: white;
	padding: 5% 2% 5% 2%;
	text-align: left;
	border-radius: 0.5rem;
	img {
		width: 90%;
		height: auto;
		margin: 0% 5% 0% 5%;
	}
	p {
		color: #888888;
		font-weight: 300;
	}
	@media (max-width: 1000px) {
		margin: auto;
		margin-bottom: 5%;
	}
`;
const TitleStyle = styled.div`
	width: 100%;
	height: auto;
	display: flex;
`;
const IconStyle = styled.div`
	width: 15%;
	height: 100px;
	display: flex;

	padding-right: 1%;
	align-items: center;
	flex-direction: column;
	img {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		margin-bottom: 20px;
	}
`;
const HeadBoxStyle = styled.div`
	display: flex;
	flex-direction: column;
	padding-right: 5%;
	h3 {
		font-weight: 600;
		margin: 0px;
		@media (max-width: 800px) {
			font-size: smaller;
		}
	}
`;
const StatStyleHolder = styled.div`
	display: flex;
`;
const StatStyle = styled.div`
	width: 150px;
	display: flex;
	flex-direction: column;
	p {
		padding-top: 20px;
		margin-bottom: 0;
	}
	@media (max-width: 800px) {
		width: 80px;
	}
`;
const CommentStyle = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	padding: 0% 5% 2% 5%;
`;
const IconHolder = styled.div`
	display: grid;
	width: 90%;

	align-items: center;
	grid-template-columns: 100px 100px auto 50px 50px;
	p {
		margin-top: 5px;
	}
`;
const IconSquare = styled.div`
	width: 25px;
	height: 25px;
	display: flex;
	align-items: center;
	justify-content: center;
	background: #dddddd;

	margin-left: 10px;
`;
const FormStyle = styled.div`
	width: 100%;
	display: flex;
	textarea {
		width: 60%;
	}
	button {
		background-color: #fc5200;
		color: white;
		border: none;
		padding: 5px 10px 5px 10px;
		border-radius: 0.3rem;
	}
`;
