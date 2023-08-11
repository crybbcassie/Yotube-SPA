import axios from "axios";

// login&register
export async function login(userLoginData, navigate, updateToken) {
  const loginUrl = "https://todo-redev.herokuapp.com/api/auth/login";
  // const loginUrl = process.env.REACT_APP_URL_LOGIN;
  try {
    const result = await axios.post(loginUrl, userLoginData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    localStorage.setItem("token", result.data.token);
    updateToken(result.data.token);
    navigate("/youtube-spa/main");
  } catch (e) {
    if (e && e.response && e.response.data) {
      alert(e.response.data.message);
    } else {
      alert("An error occurred while logging in.");
    }
  }
}

export async function register(userRegisterData, changePage) {
  const registerUrl = "https://todo-redev.herokuapp.com/api/users/register";
  // const registerUrl = process.env.REACT_APP_URL_REGISTER;
  try {
    const result = await axios.post(registerUrl, userRegisterData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
      changePage();
      console.log(result)
  } catch (e) {
    if (e && e.response && e.response.data) {
      alert(e.response.data.message);
    } else {
      alert("An error occurred while register.");
    }
  }
}

// // get video
// export const getVideo = async (currentId) => {
//   try {
//     const response = await axios.get(
//       "https://www.googleapis.com/youtube/v3/videos",
//       {
//         params: {
//           key: "AIzaSyCsNXupWYNLK2vB5E1zhdS9TdtsrOwDkAM",
//           part: "snippet",
//           id: currentId,
//         },
//       }
//     );
//       console.log('get video', response.data.items[0].snippet)
//     return response.data.items[0].snippet;
//   } catch (e) {
//      if (e && e.response && e.response.data) {
//        alert(e.response.data.message);
//      } else {
//        alert("An error occurred while get video.");
//      }
//   }
// };