import React from "react"
import styled from "styled-components"

import { Divider, PassiveText } from "../styles/offer"
import PerilDetails from "./PerilDetails"

const Container = styled.div`
  width: 100%;
  background-color: white;
  margin-bottom: 32px;
  &:last-of-type {
    margin-bottom: 0px;
  }
`

const Peril = ({ isSelected, data }) => {
  return (
    <div
      style={{
        width: 96,
        marginBottom: 20,
        wordBreak: "break-all",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        opacity: isSelected !== null ? (isSelected ? 1 : 0.5) : 1
      }}
    >
      <img
        src={data.imageUrl}
        style={{
          height: 72,
          width: 72,
          marginBottom: 10
        }}
        alt={data.title}
      />
      <PassiveText>{data.title}</PassiveText>
    </div>
  )
}

const CategoryTitleContainer = styled.div`
  padding: 16px;
  display: flex;
  align-items: center;
`

const CategoryTitle = styled.span`
  font-family: "Merriweather";
  font-size: 20px;
  margin-left: 20px;
`

const Header = ({ data }) => {
  return (
    <CategoryTitleContainer>
      <img src={data.iconUrl} alt={data.title} />
      <CategoryTitle>{data.title}</CategoryTitle>
    </CategoryTitleContainer>
  )
}

const PerilsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border-bottom: solid 1px ${props => props.theme.colors.lightGray};
  padding: 32px;
  justify-content: space-between;
  align-items: stretch;
`

const Category = ({
  data,
  perilSelected = (p, d) => console.log("Peril", p, "clicked in category", d),
  category,
  initialPerilIndex
}) => {
  let maybePerilDetails
  if (category && data.title === category.title) {
    maybePerilDetails = (
      <PerilDetails
        category={category}
        initialPerilIndex={initialPerilIndex}
        close={() => perilSelected(null, null)}
      />
    )
  }
  let selectedPeril
  if (category && category.title === data.title) {
    selectedPeril = category.perils[initialPerilIndex]
  }

  return (
    <Container>
      <Header data={data} />
      <Divider />
      <PerilsContainer>
        {data.perils.map(p => (
          <div
            style={{ cursor: "pointer" }}
            onClick={() => perilSelected(p, data)}
            key={p.id}
          >
            <Peril
              isSelected={selectedPeril ? selectedPeril.id === p.id : null}
              data={p}
            />
          </div>
        ))}
      </PerilsContainer>
      {maybePerilDetails}
    </Container>
  )
}

export default Category
