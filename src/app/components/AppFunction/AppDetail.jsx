import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AppDetail() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      let url = window.location.href;
      let split = url.split("/");
      let id = split[split.length - 1]
      const result = await axios.get(`https://reqres.in/api/users/${id}`);
      setData(result.data.data);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div class="flex items-center w-full justify-center">
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
      <div class="max-w-xs">
        <div class="bg-white shadow-xl rounded-lg py-10">
          <div class="photo-wrapper p-2">
            <img
              class="w-32 h-32 rounded-full mx-auto"
              src={`${data.avatar}`}
              alt="John Doe"
            />
          </div>
          <div class="p-2">
            <h3 class="text-center text-xl text-gray-900 font-medium leading-8">
              {data.first_name} {data.last_name}
            </h3>
            <div class="text-center text-gray-400 text-xs font-semibold">
              <p>User</p>
            </div>
            <table class="text-xs my-3">
              <tbody>
                <tr>
                  <td class="px-2 py-2 text-gray-500 font-semibold">Email</td>
                  <td class="px-2 py-2">{data.email}</td>
                </tr>
              </tbody>
            </table>

            <div class="text-center my-3">
              <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                {" "}
                Active{" "}
              </span>
              <br />
              <br />
              <Link
                to="/form"
                class="p-2 pl-5 pr-5 bg-yellow-500 text-gray-100 text-lg rounded-lg focus:border-4 border-yellow-300"
              >
                Back
              </Link>
            </div>
          </div>
        </div>
      </div>
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

export default AppDetail;
