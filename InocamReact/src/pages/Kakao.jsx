import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
const { kakao } = window;

function Kakao() {
  const [latitue, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [kakaomps, setKakaomps] = useState(null);
  const markerRef = useRef(null);

  const mapRef = useRef(null);

  useLayoutEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser");
    }
  }, []);

  useEffect(() => {
    if (latitue && longitude) {
      let options = {
        center: new kakao.maps.LatLng(latitue, longitude),
        level: 3,
      };
      let map = new kakao.maps.Map(mapRef.current, options);
      // 지도추가하기
      map.addControl(new kakao.maps.MapTypeControl(),kakao.maps.ControlPosition.TOPRIGHT);
      //   지도 컨트롤 바 만들기
      map.addControl(new kakao.maps.ZoomControl(),kakao.maps.ControlPosition.RIGHT);
      // 지도 중심좌표에 마커를 생성합니다
      // let marker = new kakao.maps.Marker({position: map.getCenter()});
      // // 지도에 마커를 표시합니다
      // marker.setMap(map);
      // services.Geocoder() 인스턴스 생성,  <script>에 kakao 라이브러리를 추가
      const geocoder = new kakao.maps.services.Geocoder();
       // 중심 좌표로 주소 검색 및 표시
      searchAddrFromCoords(map.getCenter(), displayCenterInfo);

      kakao.maps.event.addListener(map, "idle", ()=>{
        searchAddrFromCoords(map.getCenter(), displayCenterInfo);
      });

      function searchAddrFromCoords(coords, callback) {
        // 좌표로 행정동 주소 정보를 요청합니다
        geocoder.coord2RegionCode(coords.getLng(), coords.getLat(), callback);
      }

      // 화면에 마커및, 행정지도를 표시하는 함수
      function displayCenterInfo(result, status) {
        if (status === kakao.maps.services.Status.OK) {
          createMarker(map.getCenter())
          const infoDiv = document.getElementById("centerAddr");
          for (let i = 0; i < result.length; i++) {
            // 행정동의 region_type 값은 'H' 이므로
            if (result[i].region_type === "H") {
              infoDiv.innerHTML = result[i].address_name;
              break;
            }
          }
        }
      }

      // 기존 마커 제거 함수
      function removeMarker() {
        if (markerRef.current) {
          markerRef.current.setMap(null);
        }
      }

      // 새로운 마커 생성 및 표시
      function createMarker(position) {
        removeMarker(); // 기존 마커 제거
        markerRef.current = new kakao.maps.Marker({ position });
        markerRef.current.setMap(map);
      }

      // 지도 확대 추가를 위한 상태저장
      setKakaomps(map);

      // // 클릭한 위치에 대한 주소를 표시할 인포윈도우입니다
      // const infowindow = new kakao.maps.InfoWindow({ zindex: 1 });

      // kakao.maps.event.addListener(map, "click", function (mouseEvent) {
      //   searchDetailAddrFromCoords(
      //     mouseEvent.latLng,
      //     function (result, status) {
      //       if (status === kakao.maps.services.Status.OK) {
      //         var detailAddr = !!result[0].road_address
      //           ? "<div>도로명주소 : " +
      //             result[0].road_address.address_name +
      //             "</div>"
      //           : "";
      //         detailAddr +=
      //           "<div>지번 주소 : " + result[0].address.address_name + "</div>";

      //         var content =
      //           '<div class="bAddr">' +
      //           '<span class="title">법정동 주소정보</span>' +
      //           detailAddr +
      //           "</div>";

      //         // 마커를 클릭한 위치에 표시합니다
      //         marker.setPosition(mouseEvent.latLng);
      //         marker.setMap(map);

      //         // 인포윈도우에 클릭한 위치에 대한 법정동 상세 주소정보를 표시합니다
      //         infowindow.setContent(content);
      //         infowindow.open(map, marker);
      //       }
      //     }
      //   );
      // });

      // function searchDetailAddrFromCoords(coords, callback) {
      //   // 좌표로 법정동 상세 주소 정보를 요청합니다
      //   geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
      // }
    }
  }, [latitue, longitude]);

  const zoomIn = () => {
    kakaomps.setLevel(kakaomps.getLevel() - 1);
  };
  const zoomout = () => {
    kakaomps.setLevel(kakaomps.getLevel() + 1);
  };

  return (
    <>
      <div
        ref={mapRef}
        style={{
          height: "500px",
          backgroundImage: `url(${process.env.PUBLIC_URL}/cartoon.gif)`,
          backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          borderRadius: "20px",
          position:"relative"
        }}
      >
        <div className="hAddr" style={{position:"absolute", left:"10px", top:"10px", background:"rgba(255,255,255,0.8)", zIndex:"2", padding:"5px"}}>
          <span id="centerAddr"></span>
        </div>
      </div>
     
      <button onClick={zoomIn}>지도축소하기</button>
      <button onClick={zoomout}>지도확대하기</button>
    </>
  );
}

export default Kakao;


      // console.log(`현재 중심좌표 : ${map.getCenter()}`)
      // console.log(`현재 지도레벨 : ${map.getLevel()}`)
      // console.log(`현재 지도영역 : ${map.getBounds()}`)
      // console.log(`현재 남서쪽 : ${map.getBounds().getSouthWest()}`)
      // console.log(`현재 북동쪽 : ${map.getBounds().getNorthEast()}`)
      // console.log(`현재 영역을 문자열로 : ${map.getBounds().toString()}`)