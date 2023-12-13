const { default: axios } = require("axios");
const { useState } = require("react");

import SectionHeading from "@/components/ui/section-heading/section-heading";
import styles from "./gallery_admin.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import CustomButton from "@/components/ui/custom_button/custom_button";
import { Image, Spinner } from "react-bootstrap";

const GalleryAdminScreen = ({ images }) => {
  const cloud = "dgohiob1t";
  const upload_preset = "gallery";

  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const uploadImage = async () => {
    setLoading(true);
    setError(null);
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", upload_preset);

      const uploadRes = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloud}/image/upload`,
        formData
      );

      if (uploadRes.data) {
        const { url } = uploadRes.data;
        const res = await axios.post("/api/gallery", {
          category: "new",
          url,
        });
        // console.log(res);
        // // console.log(url);
      }
      const input = document?.getElementById("fileSelect");
      input.value = "";
      setFile(null);
    } catch (err) {
      console.log(err);
      setError("something went wrong");
    }
    setLoading(false);
  };

  return (
    <>
      <SectionHeading center>Update Gallery</SectionHeading>
      <br />
      {error}
      <CustomContainer>
        <div className={styles.gAdmin}>
          <div className={styles.upload}>
            <input
              id="fileSelect"
              type="file"
              max={1}
              onChange={(e) => {
                setError(null);

                const newFile = e.target.files[0];
                if (newFile) {
                  if (newFile.size > 2048000) {
                    setError("size");
                    return;
                  }
                  if (!newFile.type.includes("image")) {
                    setError("invalid image");
                    return;
                  }
                  setFile(newFile);
                  return;
                }
                setError("something went wrong");
              }}
            />
            <CustomButton
              isLoading={loading}
              type={3}
              disabled={!file}
              clickHandler={uploadImage}
            >
              Upload
            </CustomButton>
          </div>
          {file && <Image src={URL.createObjectURL(file)} alt="xx" fluid />}
        </div>
        <div>
          {images.map((img) => (
            <Image key={img._id} src={img.url} alt="xx" fluid />
          ))}
        </div>
      </CustomContainer>
      <br />
    </>
  );
};

export default GalleryAdminScreen;
