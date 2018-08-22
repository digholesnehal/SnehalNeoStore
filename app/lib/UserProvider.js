export let userObj = {
};

export const userProvider = {
    setUserObj: (obj) => {
        userObj = obj;
        console.log('Provider Updated');
        console.log(userObj);
    }
} 