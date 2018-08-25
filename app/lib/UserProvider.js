export let userObj = {
};

export const userProvider = {
    setUserObj: (obj) => {
        userObj = obj;
    },
    // setUserObj: (key, value) => {
    //     userObj[key] = value;
    // }
} 