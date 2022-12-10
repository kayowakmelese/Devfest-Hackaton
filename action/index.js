axios.interceptors.request.use(async (config) => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      config.headers.Authorization = "Bearer " + token;
    } else {
      console.log("no token");
    }
    return config;
  });

//for endpoint requests
//   export const getPillDate=async()=>{
//     let data=await axios.get(`https://${IP}/api/dose/first-dose-date`).catch((e)=>{
//       console.log("error_54",e)
//     })
//     if(data && data.status){
  
//     }
//     return data
//   }