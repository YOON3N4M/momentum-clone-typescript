import { useEffect, useState } from "react";
import React from "react";
import "../css/Background.css";

interface BackImgProps {
  setIsimgLoading: (value: boolean) => void;
  setCoverHide: (value: boolean) => void;
  img: object;
  setImg: (value: [object]) => void;
  imgNum: number;
}

function Background({
  setIsimgLoading,
  setCoverHide,
  img,
  setImg,
  imgNum,
}: BackImgProps) {
  const [loading, setLoading] = useState<boolean>(true);
  const API_KEY: string = "BSkq_l1863qp1OeCizkCs1XVT5Kc16gWMD9qK2XquQc";
  const keyword: string = "wallpapers,landscape";

  const url: string = `https://api.unsplash.com/search/photos?page=2&query=${keyword}&client_id=${API_KEY}&per_page=20`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setImg(data.results);
        setLoading(false);
        setTimeout(() => setIsimgLoading(true), 500);
        setTimeout(() => setCoverHide(true), 1500);
      });
  }, []);

  return (
    <div>
      {loading ? null : (
        <div className="background-image-wrapper">
          <img
            id="background-image"
            src={img[imgNum].urls.full}
            className="fadein visible"
            alt=""
          ></img>
        </div>
      )}
    </div>
  );
}

export default React.memo(Background);
