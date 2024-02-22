import axios from "axios";
import toast from "react-hot-toast";

const getOffenceList = async () => {
  try {
    // toast.loading("درحال دریافت لیست تخلفات ...", { id: "getAllOfenceList" });

    const response = await axios.get(
      "https://64f8733e824680fd217f97c2.mockapi.io/takhallofat"
    );
    // toast.success("لیست تخلفات با موفقیت دریافت شد", {
    //   id: "getAllOfenceList",
    // });

    return response.data;
  } catch (error) {
    // toast.error("دریافت لیست تخلف با مشکل مواجه شد", {
    //   id: "getAllOfenceList",
    // });

    return { status: "error", massage: "دریافت لیست تخلف با مشکل مواجه شد" };
  }
};

export { getOffenceList };
