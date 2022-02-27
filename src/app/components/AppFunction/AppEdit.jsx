import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AppEdit() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [edit, setEdit] = useState({
    first_name: "",
    last_name: "",
    email: "",
    avatar: "",
  });

  const fetchData = async () => {
    try {
      setLoading(true);
      let url = window.location.href;
      let split = url.split("/");
      let id = split[split.length - 1];
      const result = await axios.get(`https://reqres.in/api/users/${id}`);
      setData(result.data.data);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    } catch (error) {
      throw error;
    }
  };

  const editData = async () => {
    try {
      let data = { ...edit };
      //   setLoading(true);
      let url = window.location.href;
      let split = url.split("/");
      let id = split[split.length - 1];
      let result = await axios.put(`https://reqres.in/api/users/${id}`, data);
      console.log(result);
      // setTimeout(() => {
      //   setLoading(false);
      // //   setAlert(true);
      // }, 2000);
    } catch (error) {
      throw error;
    }
  };

  function handleChange(event) {
    let data = { ...edit };
    data[event.target.name] = event.target.value;
    setEdit(data);
  }

  useEffect(() => {
    fetchData();
  }, [setEdit]);

  return (
    <div className="md:container md:mx-auto mt-10">
      {/* Loading */}
      {loading && (
        <div class="text-center" style={styles.loader}>
          <svg
            role="status"
            class="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </div>
      )}
      {/* Close Loading */}

      <div className="mb-10 text-center">
        <h1 className="font-semibold text-xl">Form Edit Karyawan</h1>
      </div>

      <form>
        <div class="relative z-0 mb-6 w-full group">
          <img
            class="w-32 h-32 rounded-full mx-auto"
            src={`${data.avatar}`}
            alt="John Doe"
          />
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="file"
            name="avatar"
            // value={data.avatar}
            onChange={handleChange}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          />
          <label
            for="floating_email"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Image
          </label>
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="email"
            value={data.email}
            onChange={handleChange}
            name="email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            for="floating_email"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
        </div>
        <div className="grid xl:grid-cols-2 xl:gap-6">
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              name="first_name"
              id="floating_first_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
                onChange={handleChange}
              value={data.first_name}
            />
            <label
              for="floating_first_name"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              First name
            </label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              name="last_name"
              id="floating_last_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={data.last_name}
                onChange={handleChange}
              required=""
            />
            <label
              for="floating_last_name"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Last name
            </label>
          </div>
        </div>
        <button
          type="button"
          onChange={editData}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>{" "}
        <Link
          to="/form"
          type="submit"
          className="text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
        >
          Back
        </Link>
      </form>
    </div>
  );
}

const styles = {
  loader: {
    display: "flex",
    background: "rgb(0, 0, 0, 0.6)",
    position: "absolute",
    inset: "0px",
    transition: "50 deg",
    textAlign: "center",
    alignItems: "center",
    zIndex: "9999",
    justifyContent: "center",
  },
};

export default AppEdit;
