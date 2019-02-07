import React, { Component } from 'react';
import './Carousel.less';
import imagePaths from '../../../imagedata.json';

export class Carousel extends Component {
	constructor(props){
		super(props);
		this.state = {
			activeIndex: 0
		};
	}
	goToPrevSlide(e) {
		e.preventDefault();

		let index = this.state.activeIndex;
		let { slides } = this.props;
		console.log(slides);
		let slidesLength = slides.length;
		console.log(slidesLength);

		if (index < 1) {
			index = slidesLength;
		}

		--index;

		this.setState({
			activeIndex: index
		});
	}
	goToNextSlide(e) {
		e.preventDefault();

		let index = this.state.activeIndex;
		let { slides } = this.props;
		let slidesLength = slides.length - 1;
		console.log(slidesLength);

		if (index === slidesLength) {
			index = -1;
		}

		++index;

		this.setState({
			activeIndex: index
		});
	}
	render() {
		const imgList = "../../../images"
		return(
			<div>
			<h3 className="title">Simple carousel using React</h3>
			<div  className="carousel">
			<a href="#" className="control_prev" onClick={e => this.goToPrevSlide(e)}><img src={`${imgList}/left.jpg`} /></a>
			<a href="#" className="control_next" onClick={e => this.goToNextSlide(e)}><img src={`${imgList}/right.png`} /></a>
			<ul className="carousel__slides">
			{
				imagePaths.images.map((val,index) => {
					return (<li key={index} className={ index == this.state.activeIndex 
						? "carousel__slide carousel__slide--active"
						: "carousel__slide"
					}><img src={val.path} width="100%" /></li>)
				})
			} 
			</ul>
			</div>
			</div>
			);
	}
}
