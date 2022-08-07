const onMyBirthday = (isKayoSick) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
                if (isKayoSick) {
                    resolve(2);
                }else {
                    reject(new Error("I'm sad"));
                }
            }, 2000);
    });
};

onMyBirthday(true)
    .then((result) => {
        console.log(`Tôi có ${result} cái bánh`);
    })
    .catch((error)=>{
        console.log(error);
    })
    .finally(()=>{
        console.log("Party")
    })

onMyBirthday(false)
    .then((result) => {
        console.log(`Tôi có ${result} cái bánh`);
    })
    .catch((error)=>{
        console.log(error.message);
    })
    .finally(()=>{
        console.log("Party")
    })

