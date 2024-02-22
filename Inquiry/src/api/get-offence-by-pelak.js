import axios from "axios";
import toast from "react-hot-toast";

const getOffenceByPelak = async (pelak) => {
  try {
    toast.loading("درحال دریافت خلافی خودرو ...", { id: "getOfffenceByPelak" });

    const response = await axios.get(
      "https://64f8733e824680fd217f97c2.mockapi.io/khalafi"
    );
    toast.success("لیست تخلفات خودرو با موفقیت دریافت شد", {
      id: "getOfffenceByPelak",
    });

    const allOffenceList = response.data;
    const pelakData = allOffenceList.find((item) => item.car.pelak === pelak);
    return pelakData;
  } catch (error) {
    toast.error("دریافت لیست تخلفات خودرو با مشکل مواجه شد", {
      id: "getOfffenceByPelak",
    });

    return { status: "error", massage: "ثبت تخلف با مشکل مواجه شد" };
  }
};

export { getOffenceByPelak };
