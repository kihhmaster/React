import { TOGGEL_SHOW_PROFILE } from "./action";

const inishialValue = {
	isShow: false,
}

export const profileReducer = ( state = inishialValue, action ) => {

	switch (action.type) {
		case TOGGEL_SHOW_PROFILE: {
			return {
				isShow: !state.isShow,
			}
		}
		default: {
			return state;
		}

	}
}