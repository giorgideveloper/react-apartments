import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ApiService from '../service/ApiService';

function PostPage() {
	let { id } = useParams();
	const [post, setPosts] = useState('');

	const getPost = async () => {
		await ApiService.getApartment(id)
			.then(function (res) {
				setPosts(res.data);
			})
			.catch(function (error) {
				console.log(error);
			});
	};
	useEffect(() => {
		getPost();
	}, []);

	console.log(post);
	return (
		<>
			<div className='container'>
				<div className='row pt-4'>
					<div className='col-md-8 col-12' key={post.id}>
						<div className='card' style={{ width: '100%' }}>
							<img
								src={post.image1}
								style={{ height: '300px', objectFit: 'cover' }}
								className='card-img-top'
								alt='...'
							/>
							<div className='card-body'>
								<h6 className='card-title'>{post.title}</h6>
								<p className='card-text'>{post.short_description}</p>
								<p className='card-text fs-6'>{post.address}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default PostPage;
