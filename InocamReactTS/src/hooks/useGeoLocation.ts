import { MutableRefObject, useEffect, useState } from "react";

interface GeolocationType {
  lat:number
  long:number
}

export const useGeoLocation = (mapRef:MutableRefObject<null | HTMLDivElement>) => {
  // useRef를 매개변수로 받을 때의 기본 타입은 MutableRefObject 이며, 해당 내용은 초기값이 null 이기에 유니온 타입으로 이를 지정해주면 된다. 
  const [geolocation, setGeolocation] = useState<Partial<GeolocationType>>({});
  useEffect(() => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          setGeolocation({
                lat: position.coords.latitude,
                long: position.coords.longitude,
            });
        });
    } else {
        // 사용자의 위치정보를 가져오기 못하면, 초기값은 서울시청이다. 
        setGeolocation({
          lat: 37.5665,
          long: 126.9780
      });
    }
}, []);
  // 01 사용자의 위치정보 가져오기
  // 01-1 navigator.geolocation.getCurrentPosition 은 비공기 작업이지만, 컴포넌트 렌더링과 직접적인 관련이 없다. 이러한 경우 useEffect를 사용하여 컴포넌트의 라이프사이글과 분리된 방식으로 처리하면 코드가 간결해 진다. 
  // 01-2 비동기지만, try-catch 문이 없는 이유는 해당 API가 비동기 콜백 함수가 내부에서 동작하기 때문이며, 이것이 외부로 전달되지 않기 때문이다. 
  // 01-3 만약 실패시에는 else 구문 내부에서 작성하는 것이 일반적이다. 브라우저에서 위치 정보에 접근할 수 있는 권한을 허용하지 않았거나, 기기의 위치정보를 사용할 수 없을 때 실패할 수 있다. 
  // 01-4 해당 경우에는 서울시청을 기준으로 로직을 작성하는 것도 좋을 것 같은데... ㅎㅎ 

  return geolocation
}