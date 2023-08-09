import React, { useRef } from 'react'
import { useGeoLocation } from '../hooks/useGeoLocation';
import { useKakaoMap } from '../hooks/useKakaoMap';



function Kakao() {
  const mapRef = useRef(null);
  const geolocation = useGeoLocation(mapRef)
  useKakaoMap({geolocation, mapRef})
  geolocation.lat && console.log(geolocation);

  return (
    <div>Kakao
      <div
        ref={mapRef}
        style={{
          height: "500px",
          backgroundColor:'orange', // 로딩되기 전의 이미지를 넣어주면 굳굳굳 !! 아아 !! 애당 초 로딩 중이겠네... 조건부 GET 요청을 날리면 되니까 
          borderRadius: "20px",
          position: "relative"
        }}
      ></div>
    </div>
  )
}

export default Kakao