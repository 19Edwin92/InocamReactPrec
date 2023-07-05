import React from "react";
import * as Detail from "../styled";
import { useRouter } from "../hooks/useRouter";
import { Outlet } from "react-router-dom";

function IndexList() {
  const { todoLists, ButtonList, navigate } = useRouter();
  console.log("IndexList 리렌더링 됩니다.")

  return (
<>
<Detail.IndexLayout>
      {ButtonList.map(({ onClick, children }) => (
        <Detail.Button
          as="button"
          onClick={onClick}
          children={children}
          key={children}
        />
      ))}
      <Detail.ContentLayout
        children={todoLists.map(({ id, title }, index) => (
          <div
            key={id}
            onClick={() => navigate(`/detail/${id}`)}
            style={{ cursor: "pointer" }}
            children={
              <Detail.TodoTitle
                $titlecss="index"
                children={`${index + 1}. ${title}`}
              />
            }
          />
        ))}
      />
    </Detail.IndexLayout>
     <Outlet />
</>
  );
}

export default IndexList;
