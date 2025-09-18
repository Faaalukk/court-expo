import axios from "axios";

export const ActionTypes = {
  FETCH_USERS: "FETCH_USERS",
  FETCH_USERS_ERROR: "FETCH_USERS_ERROR",
  FETCH_USER: "FETCH_USER",
  CREATE_USER: "CREATE_USER",
  EDIT_USER: "EDIT_USER",
  DELETE_USER: "DELETE_USER",
};

const apiUrl = "https://68cae9a6430c4476c34b6f7c.mockapi.io/api/v1";

// export const fetchUsers = () => async (dispatch) => {
//   dispatch({
//     type: ActionTypes.FETCH_USERS,
//     payload: [
//       { id: 1, name: "kuy", email: "sadsad", phone: "123123" },
//       { id: 2, name: "kuy2", email: "sadsad2", phone: "123123" },
//       {},
//     ],
//   });
// };

export function fetchUsers() {
  return async function (dispatch) {
    try {
      const response = await axios.get(`${apiUrl}/user`);
      dispatch({
        type: ActionTypes.FETCH_USERS,
        payload: response.data,
      });
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  };
}

export function fetchUser(userId) {
  return async function (dispatch) {
    try {
      const response = await axios.get(`${apiUrl}/user/${userId}`);
      dispatch({
        type: ActionTypes.FETCH_USER,
        payload: response.data,
      });
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  };
}

export function createUser(user) {
  return async function (dispatch) {
    try {
      const response = await axios.post(`${apiUrl}/user`, user);
      dispatch({
        type: ActionTypes.CREATE_USER,
        payload: response.data,
      });
      return {
        success: true,
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  };
}

export function editUser(user) {
  return async function (dispatch) {
    try {
      const response = await axios.put(`${apiUrl}/user`, user);
      dispatch({
        type: ActionTypes.EDIT_USER,
        payload: response.data,
      });
      return {
        success: true,
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  };
}

export function deleteUser(userId) {
  return async function (dispatch) {
    try {
      const response = await axios.delete(`${apiUrl}/user/${userId}`);
      dispatch({
        type: ActionTypes.DELETE_USER,
        payload: response.data,
      });
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  };
}
