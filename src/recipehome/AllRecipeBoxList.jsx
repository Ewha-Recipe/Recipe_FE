import React from "react";
import styled from "styled-components";
import RecipeBox from "./RecipeBox";

const AllRecipeBoxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 100px;
  justify-content: space-around;
`;

const Title = styled.h2`
  font-size: 32px;
  text-align: center;
  margin-top: 80px;
`;

function AllRecipeBoxList() {
  const recipes = [
    {
      profileImage: "./id.png",
      nickname: "사용자1",
      foodImage:
        "https://blog.kakaocdn.net/dn/xIOGb/btsDJE4VOhh/694Bq8FxKGkxYdC1ApE5k0/img.png",
      foodName: "라볶이",
      difficulty: "/assets/star2.png",
    },
    {
      profileImage: "./id.png",
      nickname: "사용자2",
      foodImage:
        "https://blog.kakaocdn.net/dn/zkddd/btsDIwNk8xP/JKoKs2LNOIFz5lZnudUrEk/img.png",
      foodName: "된장찌개",
      difficulty: "/assets/star3.png",
    },
    {
      profileImage: "./id.png",
      nickname: "사용자3",
      foodImage:
        "https://blog.kakaocdn.net/dn/ctMU8E/btsDESp7S1A/GLbwbQPvuR6Hm3fg5IXVo1/img.png",
      foodName: "비빔국수",
      difficulty: "/assets/star1.png",
    },
    {
      profileImage: "./id.png",
      nickname: "사용자4",
      foodImage:
        "https://blog.kakaocdn.net/dn/xDCIG/btsDDYR3yoL/QlzmRDsKVxJQqcrgiubLy0/img.png",
      foodName: "순두부라면",
      difficulty: "/assets/star1.png",
    },
    {
      profileImage: "./id.png",
      nickname: "사용자5",
      foodImage:
        "https://img.freepik.com/free-photo/korean-food-kim-bap-steamed-rice-with-vegetables-in-seaweed_1150-42969.jpg?w=900&t=st=1707624310~exp=1707624910~hmac=c2a7764df7efe5b0e792961de23137f99c1d9e9cdde5ec408bd00b251e124a57",
      foodName: "김밥",
      difficulty: "/assets/star1.png",
    },
  ];

  return (
    <div>
      <Title>전체 레시피</Title>
      <AllRecipeBoxContainer>
        {recipes.map((recipe, index) => (
          <RecipeBox
            key={index}
            profileImage={recipe.profileImage}
            nickname={recipe.nickname}
            foodImage={recipe.foodImage}
            foodName={recipe.foodName}
            difficulty={recipe.difficulty}
            width="315px"
            height="315px"
          />
        ))}
      </AllRecipeBoxContainer>
    </div>
  );
}

export default AllRecipeBoxList;
