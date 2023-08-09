import { useEffect, MutableRefObject } from "react";

declare global {
  interface Window {
    kakao: any;
  }
}

// declare : 타입 선언을 확장하거나, 확장된 타입을 추가하기 위해 사용되며,
// 기존에 정의되어 있는 타입이나 인터페이스를 확장할 때 사용된다. 
// extends 와의 차이는 주로 JS 라이브러리나 API 타입을 타입스크립트에 선언하거나 확장하기 위해 사용된다. 
// declare 를 사용하여 외부에서 가져온 코드나 라이브러리에 대한 타입을 제공한다. 
// extends 는 클래스타 인터페이스 간의 상속 관계를 정의하고 확장, declare는 바로 윗줄과 같다. 


interface GeolocationType {
  lat: number;
  long: number;
}

interface KakaoMapProps {
  geolocation: Partial<GeolocationType>;
  mapRef: MutableRefObject<null | HTMLDivElement>;
}

export const useKakaoMap = ({geolocation, mapRef}:KakaoMapProps) => {
  const kakao = window.kakao;

  // 02 글로벌에 kakao 선언하기 
  // 02-1 HTML에 script로 카카오에서 발급받은 키와 CDN은 입력해 준다.
  // 02-2 useGeoLocation를 통해서 현재 사용자의 경도위도 좌표 값을 가져온다. 
  // 02-3 고민은 홈페이지 진입 때 받을 것인가, 해당 라우터 진입시 받을 것인가...
  useEffect(() => {
    if (geolocation.lat) {
      const options = {
        center: new kakao.maps.LatLng(geolocation.lat, geolocation.long),
        level: 3,
      };
      new window.kakao.maps.Map(mapRef.current, options);
    }
  
  }, [geolocation, kakao.maps.LatLng, mapRef])
}