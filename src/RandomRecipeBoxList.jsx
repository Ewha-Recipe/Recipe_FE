import React from "react";
import styled from "styled-components";
import RecipeBox from "./RecipeBox";

const RandomRecipeBoxContainer = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  margin-left: 100px;
  //justify-content: space-around;
`;

const Title = styled.h2`
  font-size: 28px;
  margin-top: 80px;
  margin-left: 100px;
`;

function RandomRecipeBoxList() {
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
  ];

  return (
    <div>
      <Title>오늘의 추천</Title>
      <RandomRecipeBoxContainer>
        {recipes.map((recipe, index) => (
          <RecipeBox
            key={index}
            profileImage={recipe.profileImage}
            nickname={recipe.nickname}
            foodImage={recipe.foodImage}
            foodName={recipe.foodName}
            difficulty={recipe.difficulty}
            width="400px"
            height="400px"
          />
        ))}
      </RandomRecipeBoxContainer>
    </div>
  );
}

export default RandomRecipeBoxList;
