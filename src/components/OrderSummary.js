import { useNavigate } from "react-router-dom"

export const OrderSummary = () => {
	const navigate = useNavigate();
	return (
		<>
			<div>Order Confirm</div>
			<button onClick={() => navigate(-1)}>Go Back</button>
		</>
	)
}
