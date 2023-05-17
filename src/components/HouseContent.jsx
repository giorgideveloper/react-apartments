import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchHousesById } from '../store/housesSlice';
import { Gi3DStairs } from 'react-icons/gi';
import {
	MdOutlineBedroomParent,
	MdOutlineSpaceDashboard,
} from 'react-icons/md';

function HouseContent() {
	let { id } = useParams();
	const dispatch = useDispatch();
	const [categoryType, setCategoryType] = useState('');

	useEffect(() => {
		dispatch(fetchHousesById(id));
	}, []);

	const houses = useSelector(state => state.house.housesById);

	const typeSettings = () => {
		switch (houses.main_category_type) {
			case houses.main_category_type === '1':
				setCategoryType('იყიდება');
				break;
			case houses.main_category_type === '2':
				setCategoryType('გირავდება');
				break;
			case houses.main_category_type === '3':
				setCategoryType('ქირავდება');
				break;
			case houses.main_category_type === '4':
				setCategoryType('ქირავდება დღიურად');
				break;
			default:
				setCategoryType('იყიდება');
		}
	};

	useEffect(() => {
		typeSettings();
	});

	console.log(houses);
	return (
		<>
			<div className='container'>
				<div className='row pt-4'>
					<div className='col-md-8 col-12' key={houses.id}>
						<div className='card' style={{ width: '100%' }}>
							<img
								src={houses.image1}
								style={{ height: '300px', objectFit: 'cover' }}
								className='card-img-top'
								alt='...'
							/>
							<div className='card-body'>
								<h6 className='card-title fs-4'>{categoryType} ბინა ბათუმში</h6>

								<p className='card-text fs-6 pt-2'>
									<b>ქალაქი:</b> {houses.city}{' '}
								</p>
								<p className='card-text fs-6'>
									<b>ქუჩის მისამართი:</b> {houses.address}
								</p>
							</div>
						</div>
					</div>
					<div className='col-md-4'>
						<p className=' fs-3 text-success fw-bold'>
							ფასი: {houses.price}
							{houses.Currency_type === 1 ? '$' : '₾'}
						</p>
						<p className=' fs-5 fw-bold '>ფართი {houses.area} მ²</p>
						<p>სახელი: {houses.owner_name}</p>
						<p>მობილური: {houses.mobile === null ? '0' : houses.mobile}</p>
					</div>
				</div>
				<div className='row pt-4'>
					<div className='col-md-8'>
						<div className='detail'>
							<ul>
								<li>
									<MdOutlineSpaceDashboard /> {houses.area} მ²
									<p className='fs-6'>
										ოთახი {houses.room === null ? '0' : houses.room}
									</p>
								</li>
								<li>
									<MdOutlineBedroomParent />{' '}
									{houses.bedroom === null ? '0' : houses.bedroom}{' '}
									<p className='fs-6'>საძინებელი</p>
								</li>
								<li>
									<Gi3DStairs />{' '}
									{houses.apartment_floor === null
										? '0'
										: houses.apartment_floor}{' '}
									<p className='fs-6'>სართული</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className='row pt-4'>
					<div className='col-md-8'>
						<div className='description'>
							<h3>მოკლე აღწერა</h3>
							<p className='card-text'>{houses.description}</p>
						</div>
					</div>
				</div>
				<div className='row pt-4'>
					<div className='col-md-8'>
						<h3> პარამეტრები</h3>
						<ul>
							<li>
								{houses.internet ? (
									'ინტერნეტი'
								) : (
									<span className='text-decoration-line-through'>
										ინტერნეტი
									</span>
								)}
							</li>
							<li>
								{houses.gas ? (
									'ბუნებრივი აირი'
								) : (
									<span className='text-decoration-line-through'>
										ბუნებრივი აირი
									</span>
								)}
							</li>
							<li>
								{houses.air_conditioner ? (
									'კონდიციონერი'
								) : (
									<span className='text-decoration-line-through'>
										კონდიციონერი
									</span>
								)}
							</li>
							<li>
								{houses.tv ? (
									'ტელევიზორი'
								) : (
									<span className='text-decoration-line-through'>
										ტელევიზორი
									</span>
								)}
							</li>
							<li>
								{houses.fireplace ? (
									'ბუხარი'
								) : (
									<span className='text-decoration-line-through'>ბუხარი</span>
								)}
							</li>
							<li>
								{houses.refrigerator ? (
									'მაცივარი'
								) : (
									<span className='text-decoration-line-through'>მაცივარი</span>
								)}
							</li>
							<li>
								{houses.washing_machine ? (
									'სარეცხი მანქანა'
								) : (
									<span className='text-decoration-line-through'>
										სარეცხი მანქანა
									</span>
								)}
							</li>
							<li>
								{houses.dishwasher ? (
									'ჭურჭლის სარეცხი მანქანა'
								) : (
									<span className='text-decoration-line-through'>
										ჭურჭლის სარეცხი მანქანა
									</span>
								)}
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}

export default HouseContent;
