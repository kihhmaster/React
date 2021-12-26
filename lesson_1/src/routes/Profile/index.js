import { useSelector, useDispatch } from "react-redux"
import { TOGGEL_SHOW_PROFILE } from "../../store/profile/action"
export const Profile = () => {
	const dispatch = useDispatch();
	const isShow = useSelector((state) => state.isShow);
	return (
		<div>
			<h1>Profile</h1>
			<input
				type="checkbox"
				checked={isShow}
				onChange={() => {
					dispatch({
						type: TOGGEL_SHOW_PROFILE
					})
				}}
			></input>
		</div>
	)
}