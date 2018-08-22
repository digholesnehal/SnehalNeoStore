export let userObj = {
};

export const userProvider = {
    setUserObj: (obj) => {
        userObj = obj;
        return true;
    }
} 