import React from "react";
import * as Detail from "../styled";
import { useRouter } from "../hooks/useRouter";

function IndexList() {
  const { todoLists, ButtonList, navigate } = useRouter();

  return (
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
            onClick={() => navigate(`/${id}`)}
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
  );
}

export default IndexList;
