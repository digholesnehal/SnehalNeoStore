export let userObj = {
    user_data: {
        access_token: "",
        first_name: "",
        last_name: "",
        email: "",
        username: "",
        profile_pic: null,
        country_id: null,
        gender: "",
        phone_no: null,
        dob: null,
    },
    product_categories: [],
    total_carts: null,
    total_orders: null,
};

export const userProvider = {
    setUserObj: (obj) => {
        userObj = obj;
    },
    setObjKey: (key, value) => {
        userObj[key] = value;
    }
} 