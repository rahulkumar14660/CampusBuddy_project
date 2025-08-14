import axios from "axios";

// Create an axios instance (optional, but cleaner)
const api = axios.create({
  baseURL: "/api/notifications",
  withCredentials: true, // so cookies/auth tokens are sent
});

// Fetch notifications for logged-in user
export const fetchMyNotifications = async () => {
  try {
    const { data } = await api.get("/my");
    return data;
  } catch (error) {
    console.error("Error fetching notifications:", error);
    throw error;
  }
};

// Fetch all notifications (admin/global usage)
export const fetchAllNotifications = async () => {
  try {
    const { data } = await api.get("/");
    return data;
  } catch (error) {
    console.error("Error fetching all notifications:", error);
    throw error;
  }
};
