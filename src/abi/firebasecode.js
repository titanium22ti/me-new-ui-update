import firebases from "../firebdd";
import firebase from 'firebase/app';
import 'firebase/storage';

export const createTxn = async(tokenname,txnhash,type,to,from) =>{
    let ref2 = await firebases.database().ref(`MeCollateral/TxnHistory`);
        const db = ref2.push().key;   
        let currenttime = (new Date().getTime())/1000;                                                                   
        ref2.child(db).set({
          key:db,tokenNmae:tokenname,entryTime:currenttime,txnHash:txnhash,From:from,To:to,Type:type
        })
        .then(()=>{
          console.log(" updateTxn log done")
        }).catch((error) => {
            console.error("Error:", error);
          });

}

export const recordUserVisits = async (address, pageName) => {
  const locationDetails = await fetch('https://geolocation-db.com/json/')
  let location = await locationDetails.json();
  let ipAddress = location.IPv4;
  let region = location.country_name;

  let addressSet = address ? address : "Not Connected";

  let ref2 = firebases.database().ref(`MeCollateral/UserVisits`);
      const db = ref2.push().key;   
      let currentTime = (new Date().getTime())/1000;                                                                   
      ref2.child(db).set({
        address: addressSet,
        ipAddress: ipAddress,
        pageName: pageName,
        region: region,
        createdAt: currentTime,
      })
      .then(()=>{
        console.log(" update UserVisit done")
      }).catch((error) => {
          console.error("Error:", error);
        });
}

export const recordDashBoardDetails = async(price,circulatingSupply,floorprice,type) =>{
  let ref2 = await firebases.database().ref(`MeCollateral/PriceHistory`);
      const db = ref2.push().key;   
      let currenttime = (new Date().getTime())/1000;                                                                   
      ref2.child(db).set({
        key:db,price:price,circulatingSupply:circulatingSupply,floorPrice:floorprice,currentTime:currenttime,Type:type
      })
      .then(()=>{
        console.log(" updatePrice done")
      }).catch((error) => {
          console.error("Error:", error);
        });

}


const processData = (data) => {
  if (!data) return [];

  const dailyData = {};
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

  // Process data and calculate daily averages
  data.forEach(entry => {
    const date = new Date(entry.currentTime * 1000);

    // Skip entries older than 7 days
    if (date < sevenDaysAgo) {
      return;
    }

    const month = date.toLocaleString('default', { month: 'short' }); // Get short month name
    const day = date.getDate(); // Get day of the month

    const formattedDate = `${month} ${day}`;

    if (!dailyData[formattedDate]) {
      dailyData[formattedDate] = {
        circulatingSupply: 0,
        floorPrice: 0,
        price: 0,
        count: 0
      };
    }

    dailyData[formattedDate].circulatingSupply += entry.circulatingSupply;
    // Convert floorPrice to floating-point format
    dailyData[formattedDate].floorPrice += parseFloat(entry.floorPrice); // Adjust the precision as needed
    dailyData[formattedDate].price += parseFloat(parseFloat(entry.price) * parseFloat(entry.circulatingSupply));
    dailyData[formattedDate].count++;
  });

  // Calculate averages
  const averages = Object.keys(dailyData).map(date => ({
    date,
    circulatingSupply: dailyData[date].circulatingSupply / dailyData[date].count,
    floorPrice: parseFloat(dailyData[date].floorPrice / dailyData[date].count).toFixed(18),
    price: parseFloat(dailyData[date].price / dailyData[date].count).toFixed(18)
  }));

  return averages;
};




export const getDashBoardDetails = async () => {
  try {
      let ref2 = firebases.database().ref(`MeCollateral/PriceHistory`);

      // Retrieve data using Promise-based once method
      const snapshot = await ref2.once("value");
      const data1 = snapshot.val();
      console.log("Retrieved data:", data1);

      // Convert the response object to an array of objects
      const data = Object.values(data1).map(item => ({
          key: item.key,
          Type: item.Type,
          circulatingSupply: item.circulatingSupply,
          currentTime: item.currentTime,
          floorPrice: parseFloat(item.floorPrice).toFixed(18),
          price: parseFloat(item.price).toFixed(18)
      }));

      if (!data) return [];
      console.log("Retrieved data:", data[0].floorPrice);

      const processedData = processData(data);

      // Verify that processedData contains valid data
      console.log("Processed Data:", data);

      const formattedData = processedData.map(entry => ({
        date: entry.date,
        price: parseFloat(entry.price).toFixed(18), // Convert to fixed notation with 18 decimals
        circulatingSupply: parseFloat(entry.circulatingSupply), // Convert to fixed notation with 18 decimals
        floorPrice: parseFloat(entry.floorPrice).toFixed(18) // Convert to fixed notation with 18 decimals
      }));
      
      // Verify that formattedData contains valid data
      console.log("Formatted Data:", formattedData);
      
      // Verify that labels and data arrays are correctly formatted
      const x = formattedData.map(entry => entry.date);
      const y = formattedData.map(entry => parseFloat(entry.price)*parseFloat(entry.circulatingSupply));
      const z = formattedData.map(entry => entry.circulatingSupply);
      const a = formattedData.map(entry => entry.floorPrice);
      
      console.log("Labels:", x);
      console.log("Data:", y);
      console.log("Data1:", z);
      console.log("Data2:", a);
      
      return { labels: x, data: y, data1: z, data2: a };
  } catch (error) {
      console.error("Error:", error);
      throw error; // Re-throw the error to propagate it to the caller
  }
}

// export const updateProfile = async(walletAddress, username, image) => {
//   const ref = firebases.database().ref(`MeCollateral/Profile`);
  
//   ref.orderByChild('walletAddress').equalTo(walletAddress).once('value', snapshot => {
//       if (snapshot.exists()) {
//           snapshot.forEach(childSnapshot => {
//               const key = childSnapshot.key;
//               const updateData = {
//                   username: username,
//                   image: image,
//                   timestamp: (new Date().getTime()) / 1000
//               };
//               ref.child(key).update(updateData)
//                   .then(() => {
//                       console.log("Profile updated successfully");
//                   })
//                   .catch((error) => {
//                       console.error("Error updating profile:", error);
//                   });
//           });
//       } else {
//           const newProfileRef = ref.push();
//           const db = newProfileRef.key;
//           const currenttime = (new Date().getTime()) / 1000;
//           newProfileRef.set({
//               key: db,
//               walletAddress: walletAddress,
//               username: username,
//               image: image,
//               timestamp: currenttime
//           })
//           .then(() => {
//               console.log("New profile created successfully");
//           })
//           .catch((error) => {
//               console.error("Error creating profile:", error);
//           });
//       }
//   }).catch((error) => {
//       console.error("Error checking profile existence:", error);
//   });
// }

// export const getProfile = async (walletAddress) => {
//   const ref = firebases.database().ref(`MeCollateral/Profile`);
  
//   try {
//       const snapshot = await ref.orderByChild('walletAddress').equalTo(walletAddress).once('value');
      
//       if (snapshot.exists()) {
//           let profile = null;
//           snapshot.forEach(childSnapshot => {
//               profile = childSnapshot.val();
//           });

//           if (profile && profile.image) {
//               const storageRef = firebase.storage().ref(profile.image);
//               const downloadURL = await storageRef.getDownloadURL();
//               profile.image = downloadURL;
//           }

//           return profile;
//       } else {
//           console.log("Profile not found");
//           return null;
//       }
//   } catch (error) {
//       console.error("Error retrieving profile:", error);
//       return null;
//   }
// };

export const getProfile = async (walletAddress) => {
  const ref = firebase.database().ref(`MeCollateral/Profile`);
  
  try {
      const snapshot = await ref.orderByChild('walletAddress').equalTo(walletAddress).once('value');
      
      if (snapshot.exists()) {
          let profile = null;
          snapshot.forEach(childSnapshot => {
              profile = childSnapshot.val();
          });

          return profile;
      } else {
          console.log("Profile not found");
          return null;
      }
  } catch (error) {
      console.error("Error retrieving profile:", error);
      return null;
  }
};

export const updateProfile = async (walletAddress, username, imagePath) => {
  const ref = firebase.database().ref(`MeCollateral/Profile`);
  const snapshot = await ref.orderByChild('walletAddress').equalTo(walletAddress).once('value');
  
  if (snapshot.exists()) {
      const key = Object.keys(snapshot.val())[0];
      return ref.child(key).update({
          username,
          image: imagePath,
          timestamp: (new Date()).getTime()
      });
  } else {
      const newProfileRef = ref.push();
      return newProfileRef.set({
          walletAddress,
          username,
          image: imagePath,
          timestamp: (new Date()).getTime()
      });
  }
};

export const tokenMint = async(tokenname,tokensymbol,totalSupply,treasury,contAddr,from,imagepath,name) =>{
  let ref2 = await firebases.database().ref(`MeCollateral/TokenMint`);
      const db = ref2.push().key;   
      let currenttime = (new Date().getTime())/1000;                                                                   
      ref2.child(db).set({
        key:db,tokenName:tokenname,entryTime:currenttime,tokenSymbol:tokensymbol,totalSupply:totalSupply,From:from,treasuryAddr:treasury,profileImage:imagepath,username:name,ContractAddress:contAddr
      })
      .then(()=>{
        console.log(" updateTxn log done")
      }).catch((error) => {
          console.error("Error:", error);
        });

}

export const getTokenMintData = async (page, pageSize) => {
  try {
    let ref = firebases.database().ref(`MeCollateral/TokenMint`);
    let startAtKey = (page - 1) * pageSize;
    let limitnum = pageSize;
    
    let snapshot;
    if (startAtKey === 0) {
      snapshot = await ref.orderByKey().limitToFirst(limitnum).once('value');
    } else {
      const startAtSnapshot = await ref.orderByKey().limitToFirst(startAtKey).once('value');
      const lastKey = Object.keys(startAtSnapshot.val()).pop();
      snapshot = await ref.orderByKey().startAt(lastKey).limitToFirst(limitnum).once('value');
    }

    let tokenMintData = [];
    snapshot.forEach((childSnapshot) => {
      let data = childSnapshot.val();
      tokenMintData.push(data);
    });
    console.error("tokenMintData:", tokenMintData);
    return tokenMintData;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};

export const getTokenMintDataFromaddress  = async (page, pageSize, fromAddress) => {
  try {
    let ref = firebases.database().ref(`MeCollateral/TokenMint`);
    let startAt = (page - 1) * pageSize;
    
    let query = ref.orderByChild("From").equalTo(fromAddress);
    let snapshot = await query.once('value');
    let allData = [];
    
    snapshot.forEach((childSnapshot) => {
      let data = childSnapshot.val();
      allData.push(data);
    });

    // Paginate the data manually
    let paginatedData = allData.slice(startAt, startAt + pageSize);

    console.error("paginatedData:", paginatedData);
    return paginatedData;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};

export const getTokenMintDataLength = async () => {
  try {
    let ref = firebase.database().ref(`MeCollateral/TokenMint`);
    let snapshot = await ref.once('value');
    let length = snapshot.numChildren();
    console.log("Total length of token mint data:", length);
    return length;
  } catch (error) {
    console.error("Error:", error);
    return 0;
  }
};
export const getTokenMintDataFromAddressLength = async (fromAddress) => {
  try {
    let ref = firebase.database().ref(`MeCollateral/TokenMint`);
    let query = ref.orderByChild("From").equalTo(fromAddress);
    let snapshot = await query.once('value');
    let length = snapshot.numChildren();
    console.log("Total length of token mint data from address:", length);
    return length;
  } catch (error) {
    console.error("Error:", error);
    return 0;
  }
};