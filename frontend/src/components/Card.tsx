import React from "react";
import { Card } from "flowbite-react";
import { useNavigate } from 'react-router-dom';

export default function CardComponent({ url, name }) {
	const navigate = useNavigate();
    const handleClick = () => {
        navigate('/courses/1')
    }
	return (
		<Card
			style={{ backgroundColor: "#F8F0FF" ,width: "384px"}}
			className="max-w-sm"
			imgAlt="Princess Cut Deep Neck Blouse Workshop"
			imgSrc={url}
			>
			<a href="#">
				<h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
					{name}
				</h5>
			</a>
			<div className="flex items-center">
				<svg
					className="h-5 w-5 text-yellow-300"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg">
					<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
				</svg>
				<svg
					className="h-5 w-5 text-yellow-300"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg">
					<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
				</svg>
				<svg
					className="h-5 w-5 text-yellow-300"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg">
					<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
				</svg>
				<svg
					className="h-5 w-5 text-yellow-300"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg">
					<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
				</svg>
				<svg
					className="h-5 w-5 text-yellow-300"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg">
					<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
				</svg>
				<span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
					5.0
				</span>
			</div>
			<div style={{ color: "#F37B83" }}>
				<img
					alt="discountLabelIcon"
					src="https://courses-assets-v2.classplus.co/_next/image?url=/api/proxyimage?url=https%3A%2F%2Fali-cdn-cp-assets-public.classplus.co%2Fcp-store-ui-revamp%2FhomeCouponDis.png&amp;w=48&amp;q=75"
					decoding="async"
					data-nimg="intrinsic"
					srcSet="https://courses-assets-v2.classplus.co/_next/image?url=/api/proxyimage?url=https%3A%2F%2Fali-cdn-cp-assets-public.classplus.co%2Fcp-store-ui-revamp%2FhomeCouponDis.png&amp;w=32&amp;q=75 1x, https://courses-assets-v2.classplus.co/_next/image?url=/api/proxyimage?url=https%3A%2F%2Fali-cdn-cp-assets-public.classplus.co%2Fcp-store-ui-revamp%2FhomeCouponDis.png&amp;w=48&amp;q=75 2x"
					style={{
						width: "1.5rem",
						height: "1.5rem",
						objectFit: "contain",
					}}
				/>
				Extra 20% coupon discount
			</div>
			<div className="flex items-center justify-between">
				<span className="text-3xl font-bold text-gray-900 dark:text-white">
					₹399
				</span>
				
				<a
					style={{ backgroundColor: "#F37B83" }}
					href="#"
					className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
					onClick={handleClick}>
					Get this Course
				</a>
			</div>
		</Card>
	);
}
