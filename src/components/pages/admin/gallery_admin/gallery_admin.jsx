const { default: axios } = require("axios");
const { useState } = require("react");

import SectionHeading from "@/components/ui/section-heading/section-heading";
import styles from "./gallery_admin.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import CustomButton from "@/components/ui/custom_button/custom_button";
import { Col, Image, Row, Spinner } from "react-bootstrap";
import CustomSelect from "@/components/ui/custom_select/custom_select";
import imageCategories from "@/constants/categories";
import { Trash } from "react-bootstrap-icons";

const GalleryAdminScreen = ({ images }) => {
  const cloud = "dgohiob1t";
  const upload_preset = "gallery";

  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("All");

  const [imagesData, setImagesData] = useState(images);

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
          category,
          url,
        });
        setImagesData((prev) => [res.data, ...prev]);
      }
      setFile(null);
    } catch (err) {
      console.log(err);
      setError("something went wrong");
    }
    setLoading(false);
  };

  const deleteImage = async (img) => {
    try {
      const res = await axios.delete(`/api/gallery?url=${img.url}`);
      if (res) {
        setImagesData((prev) => prev.filter((i) => i.url !== img.url));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <SectionHeading center>Update Gallery</SectionHeading>
      <br />
      {/* {error} */}

      <CustomContainer>
        <div className={styles.gAdmin}>
          {!file && (
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
                      setError("Image size exceeds 2 MB");
                      const input = document?.getElementById("fileSelect");
                      input.value = "";
                      return;
                    }
                    if (!newFile.type.includes("image")) {
                      setError("invalid image format");
                      const input = document?.getElementById("fileSelect");
                      input.value = "";
                      return;
                    }
                    setFile(newFile);
                    return;
                  }
                  setError("something went wrong");
                  const input = document?.getElementById("fileSelect");
                  input.value = "";
                }}
              />
              <p className={styles.err}>{error}</p>
            </div>
          )}
          {file && (
            <div className={styles.imgPreview}>
              <Image
                src={URL.createObjectURL(file)}
                alt="xx"
                fluid
                width={300}
              />
              <div>
                <CustomSelect
                  options={[
                    { value: "All", text: "All" },
                    ...imageCategories.map((c) => ({ value: c, text: c })),
                  ]}
                  value={category}
                  onChange={(v) => {
                    setCategory(v);
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
                <CustomButton
                  isLoading={loading}
                  type={3}
                  disabled={!file}
                  clickHandler={() => {
                    setError(null);
                    setFile(null);
                  }}
                >
                  Cancel
                </CustomButton>
              </div>
            </div>
          )}
        </div>

        <br />
        <Row>
          {imagesData.map((img) => {
            return (
              <Col key={img._id} xs={6} md={3}>
                <div className={styles.imgWrap}>
                  <Trash
                    className={styles.trash}
                    onClick={() => {
                      deleteImage(img);
                    }}
                  />
                  <Image src={img.url} alt="xx" fluid className={styles.img} />
                  <p>{img.category}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </CustomContainer>
      <br />
    </>
  );
};

export default GalleryAdminScreen;
