"use client";
import { Card, Grid, Row, Text } from "@nextui-org/react";
import Image from 'next/image';
const Cards = () => {
  const list = [
    {
      title: "Axis Bank",
      img: "axis",
      price: "1",
    },
    {
      title: "HDFC Bank",
      img: "hdfc",
      price: "2",
    },
    {
      title: "Dena Bank",
      img: "dena",
      price: "3",
    },
    {
      title: "IDFC Bank",
      img: "idfc",
      price: "4",
    },
    {
      title: "ICICI Bank",
      img: "icici",
      price: "5",
    },
    {
      title: "YES Bank",
      img: "yes",
      price: "6",
    },
    {
      title: "SBI",
      img: "sbi",
      price: "7",
    },
    {
      title: "Kotak Bank",
      img: "kotak",
      price: "8",
    },
    {
      title: "Induslund",
      img: "induslnd",
      price: "9",
    },
    {
      title: "HSBC",
      img: "hsbc",
      price: "10",
    },
    {
      title: "UNION Bank",
      img: "union",
      price: "11",
    }
  ];

  return (
    <div className="justify-self-start mt-10 w-3/3 ml-40 mr-20">
      <Grid.Container gap={2}>
      {list.map((item, index) => (
        <Grid xs={2} lg={2} key={index}>
          <Card isPressable isHoverable css={{ mw: "400px" }}>
            <Card.Body css={{ pt: 10 }}>
              <Card.Image
                src={`/images/${item.img}.png`}
                objectFit="cover"
                width="100%"
                height={100}
                css={{ pt: 20 }}
                alt={item.title}
              />
            </Card.Body>
            <Card.Footer css={{ justifyItems: "flex-start" }}>
              <Row wrap="wrap" justify="space-between" align="center">
                <Text b>{item.title}</Text>
                <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
                  {item.price}
                </Text>
              </Row>
            </Card.Footer>
          </Card>
        </Grid>
      ))}
    </Grid.Container>
    </div>
    
  );
}

export default Cards