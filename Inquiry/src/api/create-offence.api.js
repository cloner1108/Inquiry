import axios from "axios";
import toast from "react-hot-toast";

const createOffence = async (offence, pelak) => {
  try {
    toast.loading("درحال ثبت تخلف ...", {
      id: "add",
    });

    const response = await axios.get(
      "https://64f8733e824680fd217f97c2.mockapi.io/khalafi"
    );

    const allOffenceList = response.data;

    const pelakData = allOffenceList.find((item) => item.car.pelak === pelak);
    if (pelakData) {
      pelakData.offences = [...pelakData.offences, ...offence];
      const response = await axios.put(
        `https://64f8733e824680fd217f97c2.mockapi.io/khalafi/${pelakData.key}`,
        pelakData
      );
      toast.success("ثبت تخلف با موفقیت انجام شد", {
        id: "add",
      });
      return true;
    } else {
      toast.error("شماره پلاک مورد نظر یافت نشد", {
        id: "add",
      });
      console.log("user  not found");
    }
  } catch (error) {
    toast.error("ثبت تخلف با مشکل مواجه شد", {
      id: "add",
    });
    return false;
  }
};

export { createOffence };
